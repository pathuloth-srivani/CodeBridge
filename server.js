
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50kb" }));

const PORT = process.env.PORT || 3000;

// =====================================
// JUDGE0 CONFIGURATION
// =====================================

const JUDGE0_URL = (
    process.env.JUDGE0_URL || "https://ce.judge0.com"
).replace(/\/+$/, "");

const languageIds = {
    c: 50,
    cpp: 54,
    java: 62,
    python: 71
};

// =====================================
// MONGODB USER MODEL
// =====================================

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

// =====================================
// GENERATE JWT TOKEN
// =====================================

function generateToken(user) {
    return jwt.sign(
        {
            userId: user._id,
            email: user.email
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );
}

// =====================================
// REGISTER API
// =====================================

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Please fill in all fields."
            });
        }

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof password !== "string"
        ) {
            return res.status(400).json({
                message: "Invalid registration details."
            });
        }

        const cleanEmail = email.trim().toLowerCase();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
            return res.status(400).json({
                message: "Please enter a valid email address."
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must contain at least 6 characters."
            });
        }

        // Check existing account
        const existingUser = await User.findOne({
            email: cleanEmail
        });

        if (existingUser) {
            return res.status(409).json({
                message: "This email is already registered. Please login."
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            name: name.trim(),
            email: cleanEmail,
            password: hashedPassword
        });

        await newUser.save();

        return res.status(201).json({
            message: "Registration successful! Please login."
        });

    } catch (error) {
        console.error("Registration error:", error);

        if (error.code === 11000) {
            return res.status(409).json({
                message: "This email is already registered."
            });
        }

        return res.status(500).json({
            message: "Registration failed. Please try again."
        });
    }
});

// =====================================
// LOGIN API
// =====================================

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (
            typeof email !== "string" ||
            typeof password !== "string" ||
            !email.trim() ||
            !password
        ) {
            return res.status(400).json({
                message: "Please enter email and password."
            });
        }

        const cleanEmail = email.trim().toLowerCase();

        // Find registered account
        const user = await User.findOne({
            email: cleanEmail
        });

        if (!user) {
            return res.status(404).json({
                message: "Account not found. Please register first."
            });
        }

        // Compare password with saved hash
        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Incorrect password. Please try again."
            });
        }

        const token = generateToken(user);

        return res.json({
            message: "Login successful!",
            token: token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            message: "Login failed. Please try again."
        });
    }
});

// =====================================
// JUDGE0 HEADERS
// =====================================

function judgeHeaders() {
    const headers = {
        "Content-Type": "application/json"
    };

    if (process.env.RAPIDAPI_KEY) {
        headers["X-RapidAPI-Key"] = process.env.RAPIDAPI_KEY;

        headers["X-RapidAPI-Host"] =
            process.env.RAPIDAPI_HOST || "judge0-ce.p.rapidapi.com";
    }

    return headers;
}

// =====================================
// READ JUDGE0 RESPONSE
// =====================================

async function readResponse(response) {
    const body = await response.text();

    try {
        return body ? JSON.parse(body) : {};
    } catch {
        return { message: body };
    }
}

// =====================================
// EXECUTE ONE TEST CASE
// =====================================

async function executeTest(code, languageId, input) {
    console.log("Submitting code to Judge0...");

    const submitResponse = await fetch(
        `${JUDGE0_URL}/submissions?base64_encoded=false&wait=false`,
        {
            method: "POST",
            headers: judgeHeaders(),
            body: JSON.stringify({
                source_code: code,
                language_id: languageId,
                stdin: input
            })
        }
    );

    const submission = await readResponse(submitResponse);

    if (!submitResponse.ok || !submission.token) {
        throw new Error(
            submission.error ||
            submission.message ||
            `Judge0 submission failed. HTTP ${submitResponse.status}`
        );
    }

    let result = null;

    for (let attempt = 0; attempt < 30; attempt++) {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const resultResponse = await fetch(
            `${JUDGE0_URL}/submissions/${submission.token}?base64_encoded=false`,
            {
                method: "GET",
                headers: judgeHeaders()
            }
        );

        result = await readResponse(resultResponse);

        if (!resultResponse.ok) {
            throw new Error(
                result.error ||
                result.message ||
                `Could not retrieve execution result. HTTP ${resultResponse.status}`
            );
        }

        if (result.status && result.status.id > 2) {
            break;
        }
    }

    if (!result || !result.status || result.status.id <= 2) {
        return {
            status: "Processing",
            statusId: 2,
            output: "",
            error: "Execution is taking longer than expected."
        };
    }

    return {
        status: result.status.description,
        statusId: result.status.id,
        output: result.stdout || "",
        error: result.stderr || "",
        compileError: result.compile_output || "",
        message: result.message || "",
        time: result.time,
        memory: result.memory
    };
}

// =====================================
// BACKEND HEALTH CHECK
// =====================================

app.get("/", (req, res) => {
    res.send("Code Bridge backend is running!");
});

// =====================================
// JUDGE0 AND MONGODB HEALTH CHECK
// =====================================

app.get("/health", async (req, res) => {
    try {
        const response = await fetch(
            `${JUDGE0_URL}/languages`,
            {
                method: "GET",
                headers: judgeHeaders()
            }
        );

        if (!response.ok) {
            throw new Error(`Judge0 returned HTTP ${response.status}`);
        }

        return res.json({
            backend: "Running",
            mongodb: mongoose.connection.readyState === 1
                ? "Connected"
                : "Disconnected",
            judge0: "Connected",
            judge0Url: JUDGE0_URL
        });

    } catch (error) {
        console.error("Judge0 health check failed:", error.message);

        return res.status(502).json({
            backend: "Running",
            mongodb: mongoose.connection.readyState === 1
                ? "Connected"
                : "Disconnected",
            judge0: "Connection Failed",
            error: error.message
        });
    }
});

// =====================================
// RUN CODE WITH MULTIPLE TEST CASES
// =====================================

app.post("/run", async (req, res) => {
    try {
        const { code, language, testCases, input } = req.body;

        if (typeof code !== "string" || !code.trim()) {
            return res.status(400).json({
                error: "Please enter your code."
            });
        }

        const languageId =
            languageIds[String(language || "").toLowerCase()];

        if (!languageId) {
            return res.status(400).json({
                error: "Unsupported programming language."
            });
        }

        const cases = Array.isArray(testCases)
            ? testCases
            : [{
                input: input || "",
                expectedOutput: ""
            }];

        if (cases.length === 0 || cases.length > 10) {
            return res.status(400).json({
                error: "Please provide between 1 and 10 test cases."
            });
        }

        for (const test of cases) {
            if (
                !test ||
                typeof test.input !== "string" ||
                typeof test.expectedOutput !== "string"
            ) {
                return res.status(400).json({
                    error: "Each test case needs input and expectedOutput strings."
                });
            }
        }

        console.log("--------------------------------");
        console.log("New Code Execution Request");
        console.log("Language:", language);
        console.log("Number of test cases:", cases.length);
        console.log("--------------------------------");

        const results = [];

        for (let i = 0; i < cases.length; i++) {
            console.log(`Executing test case ${i + 1}...`);

            const result = await executeTest(
                code,
                languageId,
                cases[i].input
            );

            results.push({
                testNumber: i + 1,
                status: result.status,
                statusId: result.statusId,
                output: result.output,
                error: result.error,
                compileError: result.compileError,
                message: result.message,
                time: result.time,
                memory: result.memory,
                expectedOutput: cases[i].expectedOutput
            });

            // Stop if compilation or runtime failed
            if (result.statusId !== 3) {
                break;
            }
        }

        console.log("Code execution completed.");

        return res.json({
            totalTests: cases.length,
            completedTests: results.length,
            results: results
        });

    } catch (error) {
        console.error("Execution error:", error);

        return res.status(500).json({
            error: error.message ||
                "Something went wrong while running your code."
        });
    }
});

// =====================================
// START SERVER AFTER MONGODB CONNECTS
// =====================================

async function startServer() {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is missing from your .env file.");
        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is missing from your .env file.");
        }

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected successfully!");

        app.listen(PORT, () => {
            console.log("--------------------------------");
            console.log("Code Bridge backend is running!");
            console.log(`Server: http://localhost:${PORT}`);
            console.log(`Judge0: ${JUDGE0_URL}`);
            console.log("--------------------------------");
        });

    } catch (error) {
        console.error("Backend startup failed:", error.message);
        process.exit(1);
    }
}

startServer();
