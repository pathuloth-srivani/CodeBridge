
/* ==========================================
   CODE BRIDGE - SHARED QUESTION DATA
   Used by understanding.html and coding.html
========================================== */

window.questionData = {

    /* ======================================
       DSA - ARRAYS
    ====================================== */

    "find largest element": {
        explanation: "Find the greatest number present in the given array.",
        algorithm: [
            "Read the number of elements.",
            "Read all array elements.",
            "Assume the first element is the largest.",
            "Compare each remaining element with largest.",
            "If an element is greater, update largest.",
            "Print the largest value."
        ],
        quiz: [
            {
                question: "What should largest initially store?",
                options: ["The first array element", "Zero always", "The last index"],
                answer: 0,
                explanation: "Using the first element also handles arrays containing only negative numbers."
            },
            {
                question: "When should largest be updated?",
                options: ["When the current element is greater", "When it is smaller", "After every comparison"],
                answer: 0,
                explanation: "A greater element becomes the new largest."
            },
            {
                question: "Why check every element?",
                options: ["The largest can be anywhere", "To sort the array", "To remove duplicates"],
                answer: 0,
                explanation: "We must check all elements to find the largest."
            },
            {
                question: "What is the final result?",
                options: ["The value stored in largest", "The array length", "The first index"],
                answer: 0,
                explanation: "After traversal, largest contains the greatest value."
            }
        ],
        input: "5\n10 25 8 40 15",
        output: "40",
        tests: [
            { input: "5\n10 25 8 40 15", expectedOutput: "40" },
            { input: "4\n-5 -2 -9 -1", expectedOutput: "-1" },
            { input: "5\n3 3 9 1 9", expectedOutput: "9" },
            { input: "1\n75", expectedOutput: "75" }
        ],
        concept: "Array traversal and comparison",
        guidance: "Initialize the largest value using the first element, then compare the remaining elements."
    },

    "find smallest element": {
        explanation: "Find the smallest number present in the given array.",
        algorithm: [
            "Read the number of elements.",
            "Read all array elements.",
            "Assume the first element is the smallest.",
            "Compare every remaining element with smallest.",
            "If an element is smaller, update smallest.",
            "Print the smallest value."
        ],
        quiz: [
            {
                question: "What is the initial value of smallest?",
                options: ["The first array element", "Always zero", "The array length"],
                answer: 0,
                explanation: "The first element provides a valid starting value."
            },
            {
                question: "When do we update smallest?",
                options: ["When the current value is smaller", "When it is larger", "After every loop"],
                answer: 0,
                explanation: "A smaller value replaces the current smallest."
            },
            {
                question: "Why must negative values be considered?",
                options: ["A negative value may be the smallest", "Negative values are ignored", "They are always largest"],
                answer: 0,
                explanation: "Negative numbers are valid array elements."
            },
            {
                question: "What should be printed at the end?",
                options: ["The smallest value", "The largest index", "The array size"],
                answer: 0,
                explanation: "The smallest variable stores the answer after traversal."
            }
        ],
        input: "5\n10 25 8 40 15",
        output: "8",
        tests: [
            { input: "5\n10 25 8 40 15", expectedOutput: "8" },
            { input: "4\n-5 -2 -9 -1", expectedOutput: "-9" },
            { input: "4\n7 7 7 7", expectedOutput: "7" },
            { input: "1\n-25", expectedOutput: "-25" }
        ],
        concept: "Array traversal and comparison",
        guidance: "Initialize smallest with the first element and update it whenever a smaller value is found."
    },

    "reverse an array": {
        explanation: "Reverse the order of the elements in the array.",
        algorithm: [
            "Read the number of elements.",
            "Read all array elements.",
            "Set left to the first index.",
            "Set right to the last index.",
            "Swap the elements at left and right.",
            "Move left forward and right backward.",
            "Continue until the pointers meet or cross.",
            "Print the reversed array."
        ],
        quiz: [
            {
                question: "Where does the left pointer begin?",
                options: ["At the first index", "At the last index", "At the array length"],
                answer: 0,
                explanation: "The left pointer starts at index zero."
            },
            {
                question: "Where does the right pointer begin?",
                options: ["At the last index", "At index zero", "At the middle"],
                answer: 0,
                explanation: "The right pointer starts at the last valid index."
            },
            {
                question: "What operation is performed?",
                options: ["Swap opposite elements", "Delete opposite elements", "Add the elements"],
                answer: 0,
                explanation: "Swapping opposite elements reverses their positions."
            },
            {
                question: "When does swapping stop?",
                options: ["When left meets or crosses right", "After one swap", "When left becomes zero"],
                answer: 0,
                explanation: "At that point, all required swaps are complete."
            }
        ],
        input: "5\n10 20 30 40 50",
        output: "50 40 30 20 10",
        tests: [
            { input: "5\n10 20 30 40 50", expectedOutput: "50 40 30 20 10" },
            { input: "4\n1 2 3 4", expectedOutput: "4 3 2 1" },
            { input: "1\n99", expectedOutput: "99" },
            { input: "6\n2 4 6 8 10 12", expectedOutput: "12 10 8 6 4 2" }
        ],
        concept: "Two pointers and swapping",
        guidance: "Use one pointer at each end and swap the elements while moving towards the centre."
    },

    "find second largest": {
        explanation: "Find the second largest distinct value in the array.",
        algorithm: [
            "Read the number of elements.",
            "Read all array elements.",
            "Maintain largest and secondLargest values.",
            "When a value is greater than largest, move the old largest into secondLargest.",
            "Otherwise, if the value is smaller than largest but greater than secondLargest, update secondLargest.",
            "Ignore duplicate copies of the largest value.",
            "Print secondLargest."
        ],
        quiz: [
            {
                question: "Why do we maintain two variables?",
                options: ["To track the largest and second largest values", "To count elements", "To store array indexes"],
                answer: 0,
                explanation: "Both values must be tracked separately."
            },
            {
                question: "What happens when a new largest value is found?",
                options: ["Old largest becomes second largest", "Old largest is deleted", "Both variables remain unchanged"],
                answer: 0,
                explanation: "The previous largest is now the next greatest distinct value."
            },
            {
                question: "Can the largest value itself be the second largest?",
                options: ["No, the second largest must be distinct", "Yes, always", "Only for negative arrays"],
                answer: 0,
                explanation: "A duplicate of the largest is not a distinct second largest value."
            },
            {
                question: "When should secondLargest be updated?",
                options: ["When a value is below largest but above secondLargest", "Whenever a value is zero", "Whenever a duplicate appears"],
                answer: 0,
                explanation: "This condition identifies the next greatest distinct value."
            }
        ],
        input: "5\n10 25 8 40 15",
        output: "25",
        tests: [
            { input: "5\n10 25 8 40 15", expectedOutput: "25" },
            { input: "4\n7 7 3 1", expectedOutput: "3" },
            { input: "5\n-4 -1 -8 -2 -3", expectedOutput: "-2" },
            { input: "6\n10 20 30 40 50 60", expectedOutput: "50" }
        ],
        concept: "Tracking two maximum distinct values",
        guidance: "Handle negative numbers and duplicate largest values carefully. The second largest must be distinct."
    },

    "move zeros to end": {
        explanation: "Move all zero elements to the end while preserving the order of non-zero elements.",
        algorithm: [
            "Read the number of elements.",
            "Read all array elements.",
            "Create a position variable starting at zero.",
            "Traverse the array.",
            "Whenever a non-zero element is found, place it at the current position.",
            "Increase the position.",
            "Fill all remaining positions with zero.",
            "Print the updated array."
        ],
        quiz: [
            {
                question: "Which elements should be moved to the end?",
                options: ["Zero elements", "All positive elements", "All negative elements"],
                answer: 0,
                explanation: "The task is specifically to move zeros."
            },
            {
                question: "What should happen to non-zero elements?",
                options: ["Keep their original relative order", "Reverse their order", "Delete them"],
                answer: 0,
                explanation: "Their relative order should remain unchanged."
            },
            {
                question: "What does the position variable represent?",
                options: ["The next position for a non-zero element", "The total number of zeros", "The last array index"],
                answer: 0,
                explanation: "It tracks where the next non-zero element should be placed."
            },
            {
                question: "What should fill the remaining positions?",
                options: ["Zeros", "Random values", "Duplicate elements"],
                answer: 0,
                explanation: "All remaining positions are filled with zero."
            }
        ],
        input: "5\n0 1 0 3 12",
        output: "1 3 12 0 0",
        tests: [
            { input: "5\n0 1 0 3 12", expectedOutput: "1 3 12 0 0" },
            { input: "4\n0 0 1 2", expectedOutput: "1 2 0 0" },
            { input: "3\n1 2 3", expectedOutput: "1 2 3" },
            { input: "5\n0 0 0 0 0", expectedOutput: "0 0 0 0 0" }
        ],
        concept: "Array traversal and position tracking",
        guidance: "Place non-zero elements first, then fill the remaining positions with zeros."
    },

    /* ======================================
       DSA - STRINGS
    ====================================== */

    "reverse a string": {
        explanation: "Reverse the order of characters in the given string.",
        algorithm: [
            "Read the string.",
            "Start from the last character.",
            "Visit each character moving backwards.",
            "Append each character to the result.",
            "Print the reversed string."
        ],
        quiz: [
            {
                question: "Where should traversal begin?",
                options: ["At the last character", "At the first character only", "After the string ends"],
                answer: 0,
                explanation: "Reading characters from the end produces the reversed order."
            },
            {
                question: "What happens to each visited character?",
                options: ["It is added to the result", "It is deleted", "It is converted into a number"],
                answer: 0,
                explanation: "Each character is appended to the result."
            },
            {
                question: "What is the reverse of HELLO?",
                options: ["OLLEH", "HELLO", "HLELO"],
                answer: 0,
                explanation: "The characters are read in reverse order."
            },
            {
                question: "When is traversal complete?",
                options: ["After reaching the first character", "Before reading the last character", "After reading only one character"],
                answer: 0,
                explanation: "All characters must be visited."
            }
        ],
        input: "HELLO",
        output: "OLLEH",
        tests: [
            { input: "HELLO", expectedOutput: "OLLEH" },
            { input: "CODE", expectedOutput: "EDOC" },
            { input: "A", expectedOutput: "A" },
            { input: "PROGRAM", expectedOutput: "MARGORP" }
        ],
        concept: "String traversal",
        guidance: "Start from the last character and build the result in reverse order."
    },

    "check palindrome": {
        explanation: "Check whether a string reads the same forward and backward. This question checks characters exactly as provided.",
        algorithm: [
            "Read the string.",
            "Set one pointer at the beginning and another at the end.",
            "Compare the characters at both positions.",
            "If they differ, the string is not a palindrome.",
            "Move both pointers towards the centre.",
            "If all compared characters match, it is a palindrome."
        ],
        quiz: [
            {
                question: "What does palindrome mean?",
                options: ["Reads the same forward and backward", "Contains only numbers", "Contains no repeated characters"],
                answer: 0,
                explanation: "A palindrome has matching forward and backward character order."
            },
            {
                question: "Which characters should be compared first?",
                options: ["First and last characters", "Two middle characters", "Two random characters"],
                answer: 0,
                explanation: "The outermost characters are compared first."
            },
            {
                question: "What if a compared pair does not match?",
                options: ["The string is not a palindrome", "The string is always a palindrome", "The comparison should restart"],
                answer: 0,
                explanation: "One mismatched pair is enough to reject the palindrome."
            },
            {
                question: "What if all pairs match?",
                options: ["The string is a palindrome", "The string is empty", "The string must be sorted"],
                answer: 0,
                explanation: "Matching pairs from both ends confirm the palindrome."
            }
        ],
        input: "MADAM",
        output: "Palindrome",
        tests: [
            { input: "MADAM", expectedOutput: "Palindrome" },
            { input: "HELLO", expectedOutput: "Not Palindrome" },
            { input: "121", expectedOutput: "Palindrome" },
            { input: "ABBA", expectedOutput: "Palindrome" }
        ],
        concept: "Two pointers and character comparison",
        guidance: "Compare characters from opposite ends. This question uses exact character comparison, including letter case."
    },

    "count vowels": {
        explanation: "Count the number of vowels in the given string. Both uppercase and lowercase vowels are counted.",
        algorithm: [
            "Read the string.",
            "Initialize a vowel counter to zero.",
            "Traverse each character.",
            "Convert the character to lowercase for comparison.",
            "Check whether it is a, e, i, o, or u.",
            "If it is a vowel, increase the counter.",
            "Print the counter."
        ],
        quiz: [
            {
                question: "Which characters are vowels?",
                options: ["a, e, i, o, u", "b, c, d, f, g", "1, 2, 3, 4, 5"],
                answer: 0,
                explanation: "The five standard English vowels are a, e, i, o, and u."
            },
            {
                question: "What is the initial counter value?",
                options: ["Zero", "One", "The string length"],
                answer: 0,
                explanation: "No vowels have been counted initially."
            },
            {
                question: "When should the counter increase?",
                options: ["When a character is a vowel", "For every character", "Only for spaces"],
                answer: 0,
                explanation: "Only vowel characters should increase the count."
            },
            {
                question: "Why convert characters to lowercase?",
                options: ["To handle uppercase and lowercase vowels consistently", "To delete vowels", "To reverse the string"],
                answer: 0,
                explanation: "This makes both A and a match the same vowel check."
            }
        ],
        input: "Education",
        output: "5",
        tests: [
            { input: "Education", expectedOutput: "5" },
            { input: "HELLO", expectedOutput: "2" },
            { input: "rhythm", expectedOutput: "0" },
            { input: "AEIOU", expectedOutput: "5" }
        ],
        concept: "String traversal and counting",
        guidance: "Check every character against the five vowels and increment the counter only when a match occurs."
    }

};


/* ==========================================
   QUESTION TITLE ALIASES
========================================== */

window.questionAliases = {
    "largest element": "find largest element",
    "largest in array": "find largest element",
    "find maximum element": "find largest element",
    "maximum element": "find largest element",

    "smallest element": "find smallest element",
    "smallest in array": "find smallest element",
    "find minimum element": "find smallest element",
    "minimum element": "find smallest element",

    "reverse array": "reverse an array",
    "array reversal": "reverse an array",

    "second largest element": "find second largest",
    "second maximum element": "find second largest",

    "move all zeros to end": "move zeros to end",
    "move zeroes to end": "move zeros to end",

    "string reversal": "reverse a string",

    "palindrome": "check palindrome",
    "check string palindrome": "check palindrome",
    "check whether string is palindrome": "check palindrome",

    "vowel count": "count vowels",
    "count vowels in a string": "count vowels"
};


/* ==========================================
   SHARED HELPER FUNCTIONS
========================================== */

// Normalize titles.

window.normalizeQuestionTitle = function(title) {
    return String(title || "")
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
};


// Find question data using its title.

window.getQuestionData = function(title) {

    const normalized = window.normalizeQuestionTitle(title);

    // Direct title match
    if (window.questionData[normalized]) {
        return window.questionData[normalized];
    }

    // Alias match
    const actualTitle = window.questionAliases[normalized];

    if (actualTitle && window.questionData[actualTitle]) {
        return window.questionData[actualTitle];
    }

    return null;
};

/* ==========================================
   ADDITIONAL DSA QUESTIONS - BATCH 1
   LINKED LISTS, STACKS AND QUEUES
========================================== */

// Helper to create question data in the same format
// used by the existing questions.

function createDSAQuestion(explanation, algorithm, quizItems,
    input, output, tests, concept, guidance) {

    return {
        explanation: explanation,
        algorithm: algorithm,

        quiz: quizItems.map(item => ({
            question: item[0],
            options: item[1],
            answer: item[2],
            explanation: item[3]
        })),

        input: input,
        output: output,
        tests: tests,
        concept: concept,
        guidance: guidance
    };
}


/* ==========================================
   LINKED LISTS
========================================== */

// 1. Create a linked list

window.questionData["create a linked list"] = createDSAQuestion(
    "Create a singly linked list using the given values and display its elements in order.",

    [
        "Read the number of nodes.",
        "Create an empty linked list.",
        "Read each value.",
        "Create a new node for every value.",
        "Connect the new node to the end of the list.",
        "Display the linked list."
    ],

    [
        ["What does a node contain?", ["Data and a next pointer", "Only an index", "Only an array"], 0, "A singly linked list node stores data and a pointer to the next node."],
        ["What should the first node be called?", ["Head", "Tail only", "Middle"], 0, "Head points to the first node."],
        ["Where should a new node be connected when inserting at the end?", ["After the current last node", "Before the head always", "At a random position"], 0, "The last node's next pointer connects to the new node."],
        ["What does the last node point to?", ["NULL", "The head always", "Its own data"], 0, "The last node points to NULL in a normal singly linked list."]
    ],

    "5\n10 20 30 40 50",
    "10 20 30 40 50",

    [
        { input: "5\n10 20 30 40 50", expectedOutput: "10 20 30 40 50" },
        { input: "1\n25", expectedOutput: "25" },
        { input: "4\n-5 0 15 8", expectedOutput: "-5 0 15 8" },
        { input: "3\n7 7 7", expectedOutput: "7 7 7" }
    ],

    "Node creation and pointer linking",
    "Create one node for each input value. Connect nodes using next pointers and make sure the final node points to NULL."
);


// 2. Find the middle node

window.questionData["find the middle node"] = createDSAQuestion(
    "Find the middle node of a singly linked list. For an even number of nodes, return the second middle node.",

    [
        "Read the number of nodes and their values.",
        "Create the linked list.",
        "Initialize slow and fast pointers at the head.",
        "Move slow by one node.",
        "Move fast by two nodes.",
        "Continue while fast and fast.next are not NULL.",
        "The slow pointer identifies the middle node.",
        "Display its data."
    ],

    [
        ["Where do slow and fast start?", ["At the head", "At the last node", "At NULL"], 0, "Both pointers initially point to the first node."],
        ["How many nodes does slow move at a time?", ["One", "Two", "Three"], 0, "Slow moves one node at a time."],
        ["How many nodes does fast move at a time?", ["Two", "One", "Four"], 0, "Fast moves twice as quickly as slow."],
        ["What does slow point to when fast reaches the end?", ["The middle node", "Always the last node", "The first node"], 0, "The slow pointer reaches the middle when fast reaches the end."]
    ],

    "5\n10 20 30 40 50",
    "30",

    [
        { input: "5\n10 20 30 40 50", expectedOutput: "30" },
        { input: "4\n10 20 30 40", expectedOutput: "30" },
        { input: "1\n99", expectedOutput: "99" },
        { input: "3\n-5 -2 -9", expectedOutput: "-2" }
    ],

    "Slow and fast pointers",
    "Move slow by one node and fast by two nodes. For an even-length list, this method returns the second middle node."
);


// 3. Reverse a linked list

window.questionData["reverse a linked list"] = createDSAQuestion(
    "Reverse the links of a singly linked list so that the last node becomes the first node.",

    [
        "Read the linked list values.",
        "Create the linked list.",
        "Initialize previous as NULL.",
        "Set current to the head.",
        "Store current.next in a temporary variable.",
        "Change current.next to previous.",
        "Move previous to current.",
        "Move current to the stored next node.",
        "Repeat until current becomes NULL.",
        "Set head to previous and display the list."
    ],

    [
        ["What is the initial value of previous?", ["NULL", "Head", "Last node"], 0, "Previous starts as NULL because the new last node must point to NULL."],
        ["Why store current.next before changing it?", ["To avoid losing the remaining list", "To delete the node", "To count nodes"], 0, "The original next node must be saved before reversing the link."],
        ["In which direction are links changed?", ["Towards the previous node", "Towards the next node", "They are not changed"], 0, "Each node is connected to its previous node."],
        ["What becomes the new head?", ["Previous after the loop", "The original head", "NULL"], 0, "Previous points to the original last node after reversal."]
    ],

    "5\n10 20 30 40 50",
    "50 40 30 20 10",

    [
        { input: "5\n10 20 30 40 50", expectedOutput: "50 40 30 20 10" },
        { input: "4\n1 2 3 4", expectedOutput: "4 3 2 1" },
        { input: "1\n25", expectedOutput: "25" },
        { input: "3\n-1 0 8", expectedOutput: "8 0 -1" }
    ],

    "Pointer manipulation and link reversal",
    "Use previous, current and next pointers. Save the next node before changing current.next, otherwise the remaining list may be lost."
);


// 4. Detect a loop

window.questionData["detect a loop"] = createDSAQuestion(
    "Determine whether a singly linked list contains a cycle. The input gives a zero-based position where the last node connects, or -1 if there is no loop.",

    [
        "Read the number of nodes and values.",
        "Create the linked list.",
        "Read the loop position.",
        "If the position is -1, keep the last node pointing to NULL.",
        "Otherwise, connect the last node to the node at the given position.",
        "Initialize slow and fast pointers at the head.",
        "Move slow by one node and fast by two nodes.",
        "If they meet, a loop exists.",
        "If fast reaches NULL, no loop exists."
    ],

    [
        ["How does a loop occur?", ["A node points to an earlier node", "The last node points to NULL", "A node contains zero"], 0, "A cycle occurs when a next pointer connects to a node already in the list."],
        ["How fast does slow move?", ["One node", "Two nodes", "Three nodes"], 0, "The slow pointer moves one step."],
        ["How fast does fast move?", ["Two nodes", "One node", "No movement"], 0, "The fast pointer moves two steps."],
        ["What indicates a loop?", ["Slow and fast meet", "Both reach NULL", "The list has an odd length"], 0, "If the pointers meet while traversing, a cycle exists."]
    ],

    "5\n1 2 3 4 5\n2",
    "Loop detected",

    [
        { input: "5\n1 2 3 4 5\n2", expectedOutput: "Loop detected" },
        { input: "4\n10 20 30 40\n-1", expectedOutput: "No loop" },
        { input: "3\n5 8 9\n0", expectedOutput: "Loop detected" },
        { input: "1\n99\n-1", expectedOutput: "No loop" }
    ],

    "Floyd's cycle detection algorithm",
    "Use slow and fast pointers. A loop exists if both pointers meet before fast reaches NULL. The loop position in this problem is zero-based."
);


// 5. Check palindrome linked list

window.questionData["check palindrome linked list"] = createDSAQuestion(
    "Check whether the values in a linked list are the same when read from the beginning and the end.",

    [
        "Read the linked list values.",
        "Create the linked list.",
        "Find the middle using slow and fast pointers.",
        "Reverse the second half of the list.",
        "Compare the first half with the reversed second half.",
        "If all compared values match, the list is a palindrome.",
        "Otherwise, it is not a palindrome."
    ],

    [
        ["What does a palindrome linked list mean?", ["Values read the same forward and backward", "Values are sorted", "All values are unique"], 0, "The sequence must be identical in both directions."],
        ["Why find the middle node?", ["To divide the list into two halves", "To delete the middle", "To sort the list"], 0, "The middle separates the two parts to compare."],
        ["What should be done to the second half?", ["Reverse it", "Delete it", "Sort it"], 0, "Reversing makes corresponding values easy to compare."],
        ["When is the list a palindrome?", ["When all corresponding values match", "When the list has an even length", "When all values are positive"], 0, "Every compared pair must match."]
    ],

    "5\n1 2 3 2 1",
    "Palindrome",

    [
        { input: "5\n1 2 3 2 1", expectedOutput: "Palindrome" },
        { input: "4\n1 2 2 1", expectedOutput: "Palindrome" },
        { input: "4\n1 2 3 4", expectedOutput: "Not Palindrome" },
        { input: "1\n9", expectedOutput: "Palindrome" }
    ],

    "Linked list reversal and comparison",
    "Find the middle, reverse the second half and compare both halves. A single-node list is also a palindrome."
);


/* ==========================================
   STACKS
========================================== */

// 6. Implement a stack

window.questionData["implement a stack"] = createDSAQuestion(
    "Implement a stack using an array. A stack follows the Last In First Out (LIFO) principle.",

    [
        "Create an empty stack.",
        "Initialize top to -1.",
        "For PUSH, increase top and insert the value.",
        "For POP, read the top value and decrease top.",
        "For PEEK, display the top value without removing it.",
        "Continue processing the operations.",
        "Display the results of POP and PEEK operations."
    ],

    [
        ["Which principle does a stack follow?", ["LIFO", "FIFO", "Random order"], 0, "The last inserted element is removed first."],
        ["What is the initial value of top?", ["-1", "0", "1"], 0, "A top value of -1 represents an empty stack."],
        ["What does PUSH do?", ["Inserts an element", "Removes an element", "Sorts the stack"], 0, "PUSH adds a new element to the top."],
        ["What does POP do?", ["Removes the top element", "Adds an element", "Displays the bottom element"], 0, "POP removes the most recently inserted element."]
    ],

    "6\nPUSH 10\nPUSH 20\nPEEK\nPOP\nPEEK\nPOP",
    "20\n20\n10\n10",

    [
        { input: "6\nPUSH 10\nPUSH 20\nPEEK\nPOP\nPEEK\nPOP", expectedOutput: "20\n20\n10\n10" },
        { input: "4\nPUSH 5\nPUSH 8\nPOP\nPOP", expectedOutput: "8\n5" },
        { input: "3\nPUSH -10\nPEEK\nPOP", expectedOutput: "-10\n-10" },
        { input: "4\nPUSH 1\nPUSH 2\nPUSH 3\nPEEK", expectedOutput: "3" }
    ],

    "Stack operations and LIFO",
    "Use an array and a top variable. PUSH increases top, POP decreases top, and PEEK reads the top without removing it. Assume valid operations and sufficient capacity."
);


// 7. Reverse a string using stack

window.questionData["reverse a string using stack"] = createDSAQuestion(
    "Reverse a string using stack operations. Characters are removed in the opposite order in which they were inserted.",

    [
        "Read the input string.",
        "Create an empty stack.",
        "Push every character onto the stack.",
        "Create an empty result string.",
        "Pop characters one by one.",
        "Append each popped character to the result.",
        "Display the reversed string."
    ],

    [
        ["Which principle helps reverse the string?", ["LIFO", "FIFO", "Sorting"], 0, "The last character pushed is the first character popped."],
        ["What should be pushed into the stack?", ["Each character", "Only the first character", "The string length"], 0, "Each character is stored separately."],
        ["Which character is popped first?", ["The last character of the original string", "The first character", "The middle character"], 0, "Stack removal happens in reverse insertion order."],
        ["What is the reverse of CODE?", ["EDOC", "CODE", "OCDE"], 0, "Popping the characters gives E, D, O, C."]
    ],

    "HELLO",
    "OLLEH",

    [
        { input: "HELLO", expectedOutput: "OLLEH" },
        { input: "CODE", expectedOutput: "EDOC" },
        { input: "A", expectedOutput: "A" },
        { input: "STACK", expectedOutput: "KCATS" }
    ],

    "Stack and LIFO character processing",
    "Push all characters and then pop them to construct the reversed string."
);


// 8. Check balanced parentheses

window.questionData["check balanced parentheses"] = createDSAQuestion(
    "Check whether the brackets in an expression are correctly matched and properly nested. Supported brackets are (), {} and [].",

    [
        "Read the expression.",
        "Create an empty stack.",
        "Traverse every character.",
        "Push each opening bracket onto the stack.",
        "For a closing bracket, check whether the stack is empty.",
        "If empty, the expression is not balanced.",
        "Otherwise pop and check whether the bracket types match.",
        "After traversal, the stack must be empty.",
        "Print Balanced or Not Balanced."
    ],

    [
        ["What should happen when an opening bracket is found?", ["Push it onto the stack", "Pop the stack", "Ignore it"], 0, "Opening brackets must be stored for later matching."],
        ["What should happen when a closing bracket is found?", ["Compare it with the top opening bracket", "Always push it", "Clear the stack"], 0, "The most recent opening bracket must match the closing bracket."],
        ["What if a closing bracket is found while the stack is empty?", ["Not balanced", "Balanced", "Sort the expression"], 0, "There is no opening bracket to match it."],
        ["What should the stack contain after processing a balanced expression?", ["Nothing", "One opening bracket", "Only closing brackets"], 0, "Every opening bracket must have a matching closing bracket."]
    ],

    "{[()]}",
    "Balanced",

    [
        { input: "{[()]}", expectedOutput: "Balanced" },
        { input: "([)]", expectedOutput: "Not Balanced" },
        { input: "(((", expectedOutput: "Not Balanced" },
        { input: "()", expectedOutput: "Balanced" }
    ],

    "Stack and bracket matching",
    "Push opening brackets. For each closing bracket, pop and compare the type. At the end, the stack must be empty."
);


// 9. Next greater element

window.questionData["next greater element"] = createDSAQuestion(
    "For every array element, find the first greater element to its right. If no greater element exists, print -1.",

    [
        "Read the number of elements and the array.",
        "Create an empty stack to store indexes.",
        "Traverse the array from right to left.",
        "While the stack is not empty and its top value is less than or equal to the current value, pop it.",
        "If the stack is empty, the answer is -1.",
        "Otherwise, the stack top gives the next greater value.",
        "Push the current index onto the stack.",
        "Print all answers in original array order."
    ],

    [
        ["In which direction is the array traversed?", ["Right to left", "Left to right", "Randomly"], 0, "Right-to-left traversal helps find the next greater element."],
        ["When should an element be removed from the stack?", ["When it is less than or equal to the current element", "When it is greater", "Never"], 0, "Such elements cannot be the next greater element for the current value."],
        ["What is the answer when the stack is empty?", ["-1", "0", "The current value"], 0, "No greater element exists to the right."],
        ["What should be stored in the stack?", ["Indexes of useful elements", "Only the array length", "Random values"], 0, "Indexes help retrieve the corresponding array values."]
    ],

    "4\n4 5 2 25",
    "5 25 25 -1",

    [
        { input: "4\n4 5 2 25", expectedOutput: "5 25 25 -1" },
        { input: "5\n13 7 6 12 10", expectedOutput: "-1 12 12 -1 -1" },
        { input: "4\n1 2 3 4", expectedOutput: "2 3 4 -1" },
        { input: "3\n9 7 5", expectedOutput: "-1 -1 -1" }
    ],

    "Monotonic stack",
    "Traverse from right to left. Remove smaller or equal values from the stack, then use the remaining top as the next greater value."
);


// 10. Implement two stacks

window.questionData["implement two stacks"] = createDSAQuestion(
    "Implement two independent stacks using one shared array. Stack 1 grows from the left and Stack 2 grows from the right.",

    [
        "Create an array of the given capacity.",
        "Initialize top1 to -1.",
        "Initialize top2 to capacity.",
        "For PUSH1, increase top1 and insert the value.",
        "For PUSH2, decrease top2 and insert the value.",
        "For POP1, display the top value of Stack 1 and decrease top1.",
        "For POP2, display the top value of Stack 2 and increase top2.",
        "Ensure top1 remains smaller than top2."
    ],

    [
        ["Where does Stack 1 grow?", ["From left to right", "From right to left", "From the middle only"], 0, "Stack 1 starts at the left side of the array."],
        ["Where does Stack 2 grow?", ["From right to left", "From left to right", "Outside the array"], 0, "Stack 2 starts at the right side."],
        ["What is the initial top1 value?", ["-1", "0", "Capacity"], 0, "Stack 1 is initially empty."],
        ["When is the shared array full?", ["When top1 + 1 equals top2", "When top1 is zero", "When top2 is zero"], 0, "The two stacks cannot occupy the same array position."]
    ],

    "7 6\nPUSH1 10\nPUSH2 90\nPUSH1 20\nPUSH2 80\nPOP1\nPOP2",
    "20\n80",

    [
        { input: "7 6\nPUSH1 10\nPUSH2 90\nPUSH1 20\nPUSH2 80\nPOP1\nPOP2", expectedOutput: "20\n80" },
        { input: "5 4\nPUSH1 5\nPUSH2 9\nPOP1\nPOP2", expectedOutput: "5\n9" },
        { input: "6 4\nPUSH1 -1\nPUSH1 -2\nPUSH2 7\nPOP1", expectedOutput: "-2" },
        { input: "8 6\nPUSH2 100\nPUSH2 200\nPUSH1 10\nPUSH1 20\nPOP2\nPOP1", expectedOutput: "200\n20" }
    ],

    "Two stacks in one array",
    "Use top1 starting at -1 and top2 starting at capacity. Push the first stack forward and the second stack backward. Assume operations do not overflow or underflow."
);


/* ==========================================
   QUEUES
========================================== */

// 11. Implement a queue

window.questionData["implement a queue"] = createDSAQuestion(
    "Implement a queue using an array. A queue follows the First In First Out (FIFO) principle.",

    [
        "Create an empty queue.",
        "Initialize front and rear.",
        "For ENQUEUE, insert the value at the rear.",
        "For DEQUEUE, remove the value at the front.",
        "For FRONT, display the front value without removing it.",
        "Continue processing the operations.",
        "Display the results of DEQUEUE and FRONT."
    ],

    [
        ["Which principle does a queue follow?", ["FIFO", "LIFO", "Random order"], 0, "The first inserted element is removed first."],
        ["Where is a new element inserted?", ["At the rear", "At the front", "In the middle"], 0, "ENQUEUE inserts at the rear."],
        ["Where is an element removed?", ["At the front", "At the rear", "At a random position"], 0, "DEQUEUE removes the front element."],
        ["What does FRONT do?", ["Displays the first element", "Removes the last element", "Inserts an element"], 0, "FRONT reads the first element without removing it."]
    ],

    "6\nENQUEUE 10\nENQUEUE 20\nFRONT\nDEQUEUE\nFRONT\nDEQUEUE",
    "10\n10\n20\n20",

    [
        { input: "6\nENQUEUE 10\nENQUEUE 20\nFRONT\nDEQUEUE\nFRONT\nDEQUEUE", expectedOutput: "10\n10\n20\n20" },
        { input: "4\nENQUEUE 5\nENQUEUE 8\nDEQUEUE\nDEQUEUE", expectedOutput: "5\n8" },
        { input: "3\nENQUEUE -5\nFRONT\nDEQUEUE", expectedOutput: "-5\n-5" },
        { input: "5\nENQUEUE 1\nENQUEUE 2\nENQUEUE 3\nFRONT\nDEQUEUE", expectedOutput: "1\n1" }
    ],

    "Queue operations and FIFO",
    "Insert at the rear and remove from the front. FRONT must not remove the element. Assume valid operations and sufficient capacity."
);


// 12. Implement circular queue

window.questionData["implement circular queue"] = createDSAQuestion(
    "Implement a circular queue of fixed capacity. The rear position wraps around to the beginning when space is available.",

    [
        "Read the queue capacity.",
        "Create an array of that capacity.",
        "Initialize front and rear to -1.",
        "For ENQUEUE, check whether the queue is full.",
        "Insert using rear = (rear + 1) % capacity.",
        "For DEQUEUE, remove the front element.",
        "Update front using circular movement.",
        "If the queue becomes empty, reset front and rear to -1.",
        "Display requested results."
    ],

    [
        ["What makes a circular queue different?", ["The last position connects to the first", "It always sorts elements", "It has no front"], 0, "Circular movement reuses available positions."],
        ["How is the next rear position calculated?", ["(rear + 1) % capacity", "rear + 2", "rear - 1"], 0, "Modulo makes the rear wrap around."],
        ["When is a circular queue full?", ["(rear + 1) % capacity equals front", "front equals zero always", "rear equals -1"], 0, "The next rear position cannot overlap the front."],
        ["What happens when the last element is removed?", ["Reset front and rear to -1", "Keep both unchanged", "Increase rear forever"], 0, "Both pointers represent an empty queue."]
    ],

    "3 6\nENQUEUE 10\nENQUEUE 20\nENQUEUE 30\nDEQUEUE\nENQUEUE 40\nFRONT",
    "10\n20",

    [
        { input: "3 6\nENQUEUE 10\nENQUEUE 20\nENQUEUE 30\nDEQUEUE\nENQUEUE 40\nFRONT", expectedOutput: "10\n20" },
        { input: "3 5\nENQUEUE 5\nENQUEUE 6\nDEQUEUE\nENQUEUE 7\nFRONT", expectedOutput: "5\n6" },
        { input: "2 4\nENQUEUE 1\nENQUEUE 2\nDEQUEUE\nFRONT", expectedOutput: "1\n2" },
        { input: "4 5\nENQUEUE 10\nENQUEUE 20\nDEQUEUE\nENQUEUE 30\nFRONT", expectedOutput: "10\n20" }
    ],

    "Circular array and modulo operation",
    "Use modulo to wrap rear and front positions. The sample assumes valid operations and no enqueue into a full queue."
);


// 13. Reverse a queue

window.questionData["reverse a queue"] = createDSAQuestion(
    "Reverse the order of elements in a queue using a stack.",

    [
        "Read the number of elements.",
        "Insert all elements into the queue.",
        "Create an empty stack.",
        "Remove each queue element and push it onto the stack.",
        "Pop each element from the stack.",
        "Insert each popped element back into the queue.",
        "Display the reversed queue."
    ],

    [
        ["Which extra data structure is used?", ["Stack", "Tree", "Graph"], 0, "A stack helps reverse the queue order."],
        ["What happens when queue elements are removed?", ["They are pushed onto the stack", "They are deleted permanently", "They are sorted"], 0, "The stack stores the elements in reverse order."],
        ["What order does the stack return elements?", ["Last pushed first", "First pushed first", "Random order"], 0, "Stack follows LIFO."],
        ["Where are popped elements inserted?", ["Back into the queue", "Into another array only", "At a random position"], 0, "Reinserting popped elements reverses the queue."]
    ],

    "5\n10 20 30 40 50",
    "50 40 30 20 10",

    [
        { input: "5\n10 20 30 40 50", expectedOutput: "50 40 30 20 10" },
        { input: "4\n1 2 3 4", expectedOutput: "4 3 2 1" },
        { input: "1\n99", expectedOutput: "99" },
        { input: "3\n-1 0 5", expectedOutput: "5 0 -1" }
    ],

    "Queue and stack combination",
    "Move all queue elements to a stack and then pop them back into the queue. This reverses their order."
);


// 14. Generate binary numbers

window.questionData["generate binary numbers"] = createDSAQuestion(
    "Generate the binary representations of all integers from 1 to N using a queue.",

    [
        "Read the value N.",
        "Create an empty queue of strings.",
        "Insert the string 1.",
        "Repeat N times.",
        "Remove the front binary string and display it.",
        "Append 0 to the removed string and insert it.",
        "Append 1 to the removed string and insert it.",
        "Continue until N binary numbers are generated."
    ],

    [
        ["What is inserted first into the queue?", ["1", "0", "10"], 0, "The first positive integer in binary is 1."],
        ["Which element is removed first?", ["The front element", "The last element", "A random element"], 0, "A queue follows FIFO."],
        ["Which two strings are generated from a binary string?", ["Append 0 and append 1", "Delete both digits", "Reverse the string twice"], 0, "Appending 0 and 1 generates the next binary numbers."],
        ["What data structure is used?", ["Queue", "Stack only", "Binary search tree"], 0, "The queue generates binary strings in order."]
    ],

    "5",
    "1 10 11 100 101",

    [
        { input: "5", expectedOutput: "1 10 11 100 101" },
        { input: "1", expectedOutput: "1" },
        { input: "3", expectedOutput: "1 10 11" },
        { input: "8", expectedOutput: "1 10 11 100 101 110 111 1000" }
    ],

    "Queue and binary string generation",
    "Start with 1. Remove the front string, display it, and enqueue two new strings formed by appending 0 and 1."
);


// 15. Implement deque

window.questionData["implement deque"] = createDSAQuestion(
    "Implement a double-ended queue (deque), where insertion and deletion are possible at both the front and rear.",

    [
        "Create an empty deque.",
        "For PUSH_FRONT, insert a value at the front.",
        "For PUSH_BACK, insert a value at the rear.",
        "For POP_FRONT, remove and display the front value.",
        "For POP_BACK, remove and display the rear value.",
        "For FRONT, display the front value.",
        "For BACK, display the rear value.",
        "Continue processing operations."
    ],

    [
        ["What does deque mean?", ["Double-ended queue", "Double-ended stack", "Dynamic array only"], 0, "A deque supports operations at both ends."],
        ["Where can insertion happen?", ["At both front and rear", "Only at front", "Only at rear"], 0, "A deque allows insertion at either end."],
        ["Where can deletion happen?", ["At both front and rear", "Only at front", "Only at rear"], 0, "A deque allows deletion at either end."],
        ["What does POP_BACK remove?", ["The rear element", "The front element", "The middle element"], 0, "POP_BACK removes the element at the rear."]
    ],

    "6\nPUSH_BACK 10\nPUSH_FRONT 5\nPUSH_BACK 20\nFRONT\nBACK\nPOP_FRONT",
    "5\n20\n5",

    [
        { input: "6\nPUSH_BACK 10\nPUSH_FRONT 5\nPUSH_BACK 20\nFRONT\nBACK\nPOP_FRONT", expectedOutput: "5\n20\n5" },
        { input: "5\nPUSH_FRONT 8\nPUSH_FRONT 4\nFRONT\nPOP_BACK\nFRONT", expectedOutput: "4\n8\n4" },
        { input: "5\nPUSH_BACK -1\nPUSH_BACK 0\nBACK\nPOP_BACK\nBACK", expectedOutput: "0\n0\n-1" },
        { input: "4\nPUSH_BACK 10\nPUSH_FRONT 20\nPOP_BACK\nFRONT", expectedOutput: "10\n20" }
    ],

    "Double-ended queue operations",
    "Maintain front and rear positions. PUSH_FRONT and POP_FRONT work at the front; PUSH_BACK and POP_BACK work at the rear. Assume valid operations and sufficient capacity."
);


/* ==========================================
   ADDITIONAL QUESTION TITLE ALIASES
========================================== */

Object.assign(window.questionAliases, {

    "create linked list": "create a linked list",
    "find middle node": "find the middle node",
    "reverse linked list": "reverse a linked list",
    "detect loop": "detect a loop",
    "palindrome linked list": "check palindrome linked list",

    "stack implementation": "implement a stack",
    "reverse string using stack": "reverse a string using stack",
    "balanced parentheses": "check balanced parentheses",
    "check balanced brackets": "check balanced parentheses",
    "implement two stack": "implement two stacks",

    "queue implementation": "implement a queue",
    "circular queue": "implement circular queue",
    "queue reversal": "reverse a queue",
    "generate binary number": "generate binary numbers",
    "double ended queue": "implement deque"

});

/* =========================================
   RECURSION AND HASHING QUESTIONS
========================================= */

(function () {
    window.questionData = window.questionData || {};
    window.questionAliases = window.questionAliases || {};

    function makeQuestion(explanation, algorithm, quiz, input, output, tests, concept, guidance) {
        return {
            explanation,
            algorithm,
            quiz: quiz.map(q => ({
                question: q[0],
                options: q[1],
                answer: q[2],
                explanation: q[3]
            })),
            input,
            output,
            tests,
            concept,
            guidance
        };
    }

    const recursionHashingQuestions = {

        /* ========== RECURSION ========== */

        "factorial": makeQuestion(
            "Factorial is the product of all positive integers from 1 to a given number. Recursion solves it by multiplying n with the factorial of n-1. The factorial of 0 is 1.",
            [
                "Read the number n.",
                "If n is 0 or 1, return 1.",
                "Otherwise, return n multiplied by factorial(n - 1).",
                "Print the returned result."
            ],
            [
                ["What is the base case for factorial?", ["n == 0 or n == 1", "n < 0", "n == 2", "n > 1"], 0, "Factorial of 0 and 1 is 1."],
                ["What happens in the recursive case?", ["Add 1", "Multiply n by factorial(n-1)", "Subtract 1 only", "Stop immediately"], 1, "Each call multiplies n by the factorial of the previous number."],
                ["What is 4 factorial?", ["10", "16", "24", "12"], 2, "4 × 3 × 2 × 1 = 24."],
                ["Why is a base case necessary?", ["To print input", "To stop recursion", "To increase memory", "To sort values"], 1, "The base case prevents infinite recursive calls."]
            ],
            "Input: 5",
            "Output: 120",
            [
                { input: "5", expectedOutput: "120" },
                { input: "0", expectedOutput: "1" },
                { input: "1", expectedOutput: "1" },
                { input: "6", expectedOutput: "720" }
            ],
            "Recursion, base case, recursive call",
            "Check whether your base case handles both 0 and 1. Make sure each recursive call uses n - 1."
        ),

        "fibonacci series": makeQuestion(
            "The Fibonacci series is a sequence in which each term after the first two is the sum of the previous two terms. A recursive function can calculate each term using the two previous terms.",
            [
                "Read the number of terms n.",
                "Define fibonacci(n).",
                "Return n when n is 0 or 1.",
                "Otherwise return fibonacci(n-1) + fibonacci(n-2).",
                "Print the first n terms."
            ],
            [
                ["What are the first two Fibonacci terms?", ["1 and 1", "0 and 1", "1 and 2", "0 and 2"], 1, "The series starts with 0 and 1."],
                ["What is the base case?", ["n == 0 or n == 1", "n == 2 only", "n < 0", "n > 1"], 0, "The first two terms are returned directly."],
                ["How is the next term calculated?", ["Previous + 1", "Previous two terms added", "Previous × 2", "Previous - 1"], 1, "Each term is the sum of the two preceding terms."],
                ["What is the fifth term when counting from the first term?", ["2", "3", "5", "8"], 1, "The first five terms are 0, 1, 1, 2, 3."]
            ],
            "Input: 7",
            "Output: 0 1 1 2 3 5 8",
            [
                { input: "7", expectedOutput: "0 1 1 2 3 5 8" },
                { input: "1", expectedOutput: "0" },
                { input: "2", expectedOutput: "0 1" },
                { input: "5", expectedOutput: "0 1 1 2 3" }
            ],
            "Recursion, Fibonacci sequence, base case",
            "Check the base cases for 0 and 1. Print exactly n terms, starting from 0."
        ),

        "sum of digits": makeQuestion(
            "This problem finds the sum of all digits in a number. Recursion can add the last digit to the sum of the remaining number.",
            [
                "Read the number n.",
                "Use the absolute value if the number is negative.",
                "If n is 0, return 0.",
                "Otherwise, return n % 10 + sumDigits(n / 10).",
                "Print the result."
            ],
            [
                ["How do you get the last digit?", ["n / 10", "n % 10", "n * 10", "n + 10"], 1, "The modulo operator gives the last digit."],
                ["How do you remove the last digit?", ["n % 10", "n + 10", "n / 10", "n * 10"], 2, "Integer division by 10 removes the last digit."],
                ["What is the base case?", ["n == 0", "n == 10", "n < 10 only", "n > 0"], 0, "When the number becomes 0, no digits remain."],
                ["What is the sum of digits of 234?", ["7", "8", "9", "10"], 2, "2 + 3 + 4 = 9."]
            ],
            "Input: 234",
            "Output: 9",
            [
                { input: "234", expectedOutput: "9" },
                { input: "1005", expectedOutput: "6" },
                { input: "0", expectedOutput: "0" },
                { input: "-123", expectedOutput: "6" }
            ],
            "Recursion, modulo, integer division",
            "Check that you extract the last digit using modulo 10 and reduce the number using integer division."
        ),

        "reverse a string using recursion": makeQuestion(
            "This problem reverses a string using recursion. One character is taken from the end of the string, and the remaining part is reversed recursively.",
            [
                "Read the input string.",
                "If the string has zero or one character, return it.",
                "Take the last character.",
                "Reverse the remaining substring recursively.",
                "Join the last character with the recursively reversed substring."
            ],
            [
                ["What is the base case?", ["String length is 0 or 1", "String length is 5", "String contains a vowel", "String is numeric"], 0, "An empty or one-character string is already reversed."],
                ["Which character is placed first in the result?", ["First character", "Last character", "Middle character", "No character"], 1, "The last character becomes the first character."],
                ["What does the recursive call process?", ["The same complete string", "The remaining substring", "Only a number", "The reversed result"], 1, "The function processes a smaller substring each time."],
                ["What is the reverse of 'code'?", ["edoc", "ocde", "cdeo", "code"], 0, "The characters appear in the opposite order."]
            ],
            "Input: code",
            "Output: edoc",
            [
                { input: "code", expectedOutput: "edoc" },
                { input: "a", expectedOutput: "a" },
                { input: "hello", expectedOutput: "olleh" },
                { input: "abcde", expectedOutput: "edcba" }
            ],
            "Recursion, strings, substring",
            "Check that each recursive call works on a smaller substring and that the last character is placed first."
        ),

        "tower of hanoi": makeQuestion(
            "Tower of Hanoi is a puzzle involving three rods and multiple disks. The goal is to move all disks from the source rod to the destination rod using an auxiliary rod. A larger disk cannot be placed on a smaller disk.",
            [
                "Read the number of disks n.",
                "If n is 1, move the disk directly from source to destination.",
                "Move n-1 disks from source to auxiliary.",
                "Move the largest disk from source to destination.",
                "Move n-1 disks from auxiliary to destination."
            ],
            [
                ["How many rods are used?", ["2", "3", "4", "5"], 1, "The puzzle uses source, auxiliary and destination rods."],
                ["What is the base case?", ["n == 0", "n == 1", "n == 2", "n > 1"], 1, "For one disk, move it directly to the destination."],
                ["Where are the top n-1 disks moved first?", ["Destination", "Source", "Auxiliary", "Nowhere"], 2, "They are moved to the auxiliary rod first."],
                ["What is the minimum number of moves for 3 disks?", ["5", "6", "7", "8"], 2, "The minimum number is 2^n - 1, which is 7 for 3 disks."]
            ],
            "Input: 2",
            "Output:\nMove disk 1 from A to B\nMove disk 2 from A to C\nMove disk 1 from B to C",
            [
                { input: "1", expectedOutput: "Move disk 1 from A to C" },
                { input: "2", expectedOutput: "Move disk 1 from A to B\nMove disk 2 from A to C\nMove disk 1 from B to C" },
                { input: "3", expectedOutput: "Move disk 1 from A to C\nMove disk 2 from A to B\nMove disk 1 from C to B\nMove disk 3 from A to C\nMove disk 1 from B to A\nMove disk 2 from B to C\nMove disk 1 from A to C" },
                { input: "0", expectedOutput: "" }
            ],
            "Recursion, divide and conquer",
            "Follow the three recursive steps in order. Check that the auxiliary rod is used correctly and that a larger disk is never placed on a smaller one."
        ),

        /* ========== HASHING ========== */

        "frequency of elements": makeQuestion(
            "Frequency counting finds how many times each distinct element appears in an array. A hash map stores each element and its count.",
            [
                "Read n and the array elements.",
                "Create an empty hash map.",
                "Traverse the array.",
                "Increase the count for each element.",
                "Print each distinct element and its frequency in first-appearance order."
            ],
            [
                ["What does a hash map store in this problem?", ["Only indexes", "Element and its count", "Only sorted values", "Array length"], 1, "Each distinct element is associated with its frequency."],
                ["What happens when an element appears again?", ["Delete it", "Increase its count", "Stop the loop", "Reset its count"], 1, "Its existing count is incremented."],
                ["What is the frequency of 2 in [2, 3, 2, 2]?", ["1", "2", "3", "4"], 2, "The value 2 appears three times."],
                ["What is the average lookup time of a hash map?", ["O(1)", "O(n)", "O(n²)", "O(log n)"], 0, "Hash maps provide average constant-time lookup."]
            ],
            "Input:\n6\n2 3 2 4 3 2",
            "Output:\n2: 3\n3: 2\n4: 1",
            [
                { input: "6\n2 3 2 4 3 2", expectedOutput: "2: 3\n3: 2\n4: 1" },
                { input: "4\n5 5 5 5", expectedOutput: "5: 4" },
                { input: "5\n1 2 3 4 5", expectedOutput: "1: 1\n2: 1\n3: 1\n4: 1\n5: 1" },
                { input: "5\n-1 2 -1 2 -1", expectedOutput: "-1: 3\n2: 2" }
            ],
            "Hash map, frequency counting",
            "Check whether you update an existing count instead of inserting a duplicate key. Preserve first-appearance order when printing."
        ),

        "find duplicates": makeQuestion(
            "This problem finds values that appear more than once in an array. A hash set or hash map can track values that have already been seen.",
            [
                "Read the array.",
                "Create a set for seen values and another set for duplicates.",
                "Traverse the array.",
                "If an element is already seen, add it to duplicates.",
                "Otherwise add it to seen.",
                "Print duplicate values once, in first duplicate-detection order."
            ],
            [
                ["What is the purpose of the seen set?", ["Store repeated values only", "Track values already visited", "Sort the array", "Store array indexes"], 1, "The seen set records elements encountered earlier."],
                ["When is a duplicate detected?", ["When value is new", "When value already exists in seen", "When value is zero", "At the end only"], 1, "An element is repeated if it is already in the seen set."],
                ["How many unique duplicates are in [1, 2, 2, 3, 1]?", ["1", "2", "3", "4"], 1, "The duplicate values are 2 and 1."],
                ["Why use a separate duplicate set?", ["To avoid printing a duplicate multiple times", "To reverse the array", "To remove all values", "To calculate the sum"], 0, "It ensures each duplicate value is reported only once."]
            ],
            "Input:\n5\n1 2 2 3 1",
            "Output: 2 1",
            [
                { input: "5\n1 2 2 3 1", expectedOutput: "2 1" },
                { input: "4\n1 2 3 4", expectedOutput: "No duplicates" },
                { input: "5\n7 7 7 7 7", expectedOutput: "7" },
                { input: "6\n-1 2 -1 3 2 4", expectedOutput: "-1 2" }
            ],
            "Hash set, duplicate detection",
            "Check whether you test membership before inserting. Use a separate collection so the same duplicate is not printed repeatedly."
        ),

        "two sum": makeQuestion(
            "Two Sum finds two different array positions whose values add up to a given target. A hash map stores previously visited values and their indexes.",
            [
                "Read n, the array and target.",
                "Create an empty hash map.",
                "For each element, calculate target minus the current value.",
                "Check whether the required complement is already in the map.",
                "If found, print the stored index and current index.",
                "Otherwise store the current value and its index."
            ],
            [
                ["What is the complement for value 4 and target 9?", ["4", "5", "9", "13"], 1, "The complement is target - value, which is 5."],
                ["What does the hash map store?", ["Only target", "Previously visited values and indexes", "Only duplicates", "Sorted values"], 1, "The map helps find the required earlier value quickly."],
                ["What should be printed when a pair is found?", ["The values only", "The two indexes", "The array length", "The target twice"], 1, "This version returns zero-based indexes."],
                ["What is the time complexity of the hash-map approach?", ["O(n)", "O(n²)", "O(n log n)", "O(1) for the whole algorithm"], 0, "Each element is processed once with average constant-time map lookup."]
            ],
            "Input:\n4\n2 7 11 15\n9",
            "Output: 0 1",
            [
                { input: "4\n2 7 11 15\n9", expectedOutput: "0 1" },
                { input: "3\n3 2 4\n6", expectedOutput: "1 2" },
                { input: "2\n3 3\n6", expectedOutput: "0 1" },
                { input: "5\n1 5 3 7 4\n8", expectedOutput: "2 3" }
            ],
            "Hash map, complement lookup, array indexes",
            "Calculate target - current value. Check the map before inserting the current element so an element is not paired with itself."
        ),

        "first non-repeating character": makeQuestion(
            "The first non-repeating character is the first character that occurs exactly once in a string. A frequency map can count characters before checking their original order.",
            [
                "Read the input string.",
                "Create a frequency map.",
                "Traverse the string and count each character.",
                "Traverse the string again from left to right.",
                "Print the first character whose frequency is 1.",
                "If no such character exists, print None."
            ],
            [
                ["What does non-repeating mean?", ["Appears once", "Appears twice", "Appears many times", "Is a digit"], 0, "A non-repeating character occurs exactly once."],
                ["Why traverse the string a second time?", ["To preserve original order", "To sort characters", "To reverse the string", "To remove spaces"], 0, "The second traversal finds the first unique character in original order."],
                ["What is the first non-repeating character in 'aabbc'?", ["a", "b", "c", "None"], 2, "Only c occurs once."],
                ["What should be printed if every character repeats?", ["0", "Space", "None", "First character"], 2, "The specified output for no unique character is None."]
            ],
            "Input: aabbc",
            "Output: c",
            [
                { input: "aabbc", expectedOutput: "c" },
                { input: "swiss", expectedOutput: "w" },
                { input: "aabb", expectedOutput: "None" },
                { input: "abcdef", expectedOutput: "a" }
            ],
            "Hash map, character frequency, string traversal",
            "Count all characters first. Then scan the original string from left to right and return the first character with count 1."
        ),

        "group anagrams": makeQuestion(
            "Anagrams are words containing the same characters in a different order. This problem groups words that are anagrams. A sorted version of each word can be used as a hash-map key.",
            [
                "Read n words.",
                "Create a hash map where each key stores a list of words.",
                "For each word, sort its characters.",
                "Use the sorted word as the map key.",
                "Add the original word to that key's list.",
                "Print each group in the order its key was first encountered."
            ],
            [
                ["What makes two words anagrams?", ["Same length only", "Same characters with the same frequencies", "Same first character", "Same last character"], 1, "Anagrams contain the same characters with matching frequencies."],
                ["What can be used as the hash-map key?", ["Original word", "Sorted characters", "Word length only", "First character"], 1, "Sorting gives an identical key for anagrams."],
                ["Which word is an anagram of 'listen'?", ["silent", "little", "stone", "lines"], 0, "listen and silent contain the same characters."],
                ["Why keep the original word in the group?", ["To print the original words", "To sort the input array", "To remove duplicates", "To count vowels"], 0, "The sorted form is only the key; the original word is stored in the group."]
            ],
            "Input:\n6\ncat act dog tac god bird",
            "Output:\n[cat, act, tac]\n[dog, god]\n[bird]",
            [
                { input: "6\ncat act dog tac god bird", expectedOutput: "[cat, act, tac]\n[dog, god]\n[bird]" },
                { input: "3\nabc bca cab", expectedOutput: "[abc, bca, cab]" },
                { input: "4\nab ba cd dc", expectedOutput: "[ab, ba]\n[cd, dc]" },
                { input: "3\nhello world code", expectedOutput: "[hello]\n[world]\n[code]" }
            ],
            "Hash map, sorting, anagrams, grouping",
            "Sort each word only to create its key. Store and print the original words. Keep group order based on the first occurrence of each key."
        )
    };

    Object.assign(window.questionData, recursionHashingQuestions);

    Object.assign(window.questionAliases, {
        "fibonacci": "fibonacci series",
        "sum of digits of a number": "sum of digits",
        "reverse string using recursion": "reverse a string using recursion",
        "tower of hanoi problem": "tower of hanoi",
        "element frequency": "frequency of elements",
        "duplicate elements": "find duplicates",
        "find duplicate elements": "find duplicates",
        "two sum problem": "two sum",
        "first non repeating character": "first non-repeating character",
        "group anagram": "group anagrams"
    });

    // Resolve the duplicate "Reverse a string" title using the selected topic.
    const originalGetQuestionData = window.getQuestionData;

    window.getQuestionData = function (title) {
        const normalizedTitle = window.normalizeQuestionTitle
            ? window.normalizeQuestionTitle(title)
            : String(title || "").toLowerCase().trim();

        const selectedTopic = (localStorage.getItem("selectedTopic") || "").toLowerCase();

        if (
            normalizedTitle === "reverse a string" &&
            selectedTopic.includes("recursion")
        ) {
            return window.questionData["reverse a string using recursion"];
        }

        return originalGetQuestionData(title);
    };

})();

/* =========================================
   TREES - QUESTION DATA
========================================= */

(function () {
    function treeQuestion(explanation, algorithm, input, output, tests, concept, guidance) {
        return {
            explanation: explanation,
            algorithm: algorithm,
            quiz: [
                {
                    question: "What is the root of a tree?",
                    options: ["Last node", "Topmost node", "Leftmost leaf", "Any leaf"],
                    answer: 1,
                    explanation: "The root is the topmost node of a tree."
                },
                {
                    question: "What is a leaf node?",
                    options: ["Node with no children", "Root node", "Node with two children", "Parent node"],
                    answer: 0,
                    explanation: "A leaf node does not have any children."
                },
                {
                    question: "What is a binary tree?",
                    options: ["Each node has at most two children", "Each node has three children", "A tree without a root", "A linear list"],
                    answer: 0,
                    explanation: "A binary tree allows at most two children per node."
                },
                {
                    question: "Which data structure is commonly used for level-order traversal?",
                    options: ["Stack", "Queue", "Hash map", "Array only"],
                    answer: 1,
                    explanation: "A queue processes tree nodes level by level."
                }
            ],
            input: input,
            output: output,
            tests: tests,
            concept: concept,
            guidance: guidance
        };
    }

    window.questionData = window.questionData || {};
    window.questionAliases = window.questionAliases || {};

    Object.assign(window.questionData, {

        "create a binary tree": treeQuestion(
            "Create a binary tree from the given level-order values. Each node can have a left child and a right child. Use -1 to represent a missing child.",
            [
                "Read the number of values.",
                "Read the values in level-order.",
                "Create the root using the first value.",
                "Use a queue to process parent nodes.",
                "Attach the next available values as left and right children.",
                "Print the tree in level-order."
            ],
            "Input:\n7\n1 2 3 4 5 6 7",
            "Output: 1 2 3 4 5 6 7",
            [
                { input: "7\n1 2 3 4 5 6 7", expectedOutput: "1 2 3 4 5 6 7" },
                { input: "3\n10 20 30", expectedOutput: "10 20 30" },
                { input: "1\n5", expectedOutput: "5" },
                { input: "5\n1 2 3 -1 4", expectedOutput: "1 2 3 4" }
            ],
            "Binary tree creation, nodes, queue, level-order",
            "Check that the first value becomes the root. Attach children in left-to-right order and treat -1 as a missing child."
        ),

        "inorder traversal": treeQuestion(
            "Inorder traversal visits the left subtree first, then the root node, and finally the right subtree.",
            [
                "Start at the root.",
                "Traverse the left subtree.",
                "Visit and print the current node.",
                "Traverse the right subtree.",
                "Repeat recursively for every node."
            ],
            "Input:\n7\n1 2 3 4 5 6 7",
            "Output: 4 2 5 1 6 3 7",
            [
                { input: "7\n1 2 3 4 5 6 7", expectedOutput: "4 2 5 1 6 3 7" },
                { input: "3\n1 2 3", expectedOutput: "2 1 3" },
                { input: "1\n10", expectedOutput: "10" },
                { input: "5\n1 2 3 4 5", expectedOutput: "4 2 5 1 3" }
            ],
            "Binary tree, DFS, inorder traversal, recursion",
            "Remember the order: Left → Root → Right. Check that you visit the root between its two subtrees."
        ),

        "preorder traversal": treeQuestion(
            "Preorder traversal visits the root node first, then the left subtree, and finally the right subtree.",
            [
                "Start at the root.",
                "Visit and print the current node.",
                "Traverse the left subtree.",
                "Traverse the right subtree.",
                "Repeat recursively."
            ],
            "Input:\n7\n1 2 3 4 5 6 7",
            "Output: 1 2 4 5 3 6 7",
            [
                { input: "7\n1 2 3 4 5 6 7", expectedOutput: "1 2 4 5 3 6 7" },
                { input: "3\n1 2 3", expectedOutput: "1 2 3" },
                { input: "1\n10", expectedOutput: "10" },
                { input: "5\n1 2 3 4 5", expectedOutput: "1 2 4 5 3" }
            ],
            "Binary tree, DFS, preorder traversal, recursion",
            "Remember the order: Root → Left → Right. Print the root before making recursive calls."
        ),

        "find tree height": treeQuestion(
            "The height of a binary tree is the number of nodes on the longest path from the root to a leaf. An empty tree has height 0.",
            [
                "If the current node is null, return 0.",
                "Find the height of the left subtree.",
                "Find the height of the right subtree.",
                "Take the larger height.",
                "Add 1 for the current node.",
                "Return the result."
            ],
            "Input:\n7\n1 2 3 4 5 6 7",
            "Output: 3",
            [
                { input: "7\n1 2 3 4 5 6 7", expectedOutput: "3" },
                { input: "3\n1 2 3", expectedOutput: "2" },
                { input: "1\n10", expectedOutput: "1" },
                { input: "5\n1 2 3 4 5", expectedOutput: "3" }
            ],
            "Binary tree, recursion, height, maximum depth",
            "Calculate both subtree heights. Return 1 + the maximum of the two. This question measures height in nodes, not edges."
        ),

        "count leaf nodes": treeQuestion(
            "A leaf node is a node that has no left child and no right child. Count all such nodes in the binary tree.",
            [
                "If the current node is null, return 0.",
                "Check whether both children are null.",
                "If both are null, return 1.",
                "Otherwise count leaves in the left subtree.",
                "Count leaves in the right subtree.",
                "Return the sum."
            ],
            "Input:\n7\n1 2 3 4 5 6 7",
            "Output: 4",
            [
                { input: "7\n1 2 3 4 5 6 7", expectedOutput: "4" },
                { input: "3\n1 2 3", expectedOutput: "2" },
                { input: "1\n10", expectedOutput: "1" },
                { input: "5\n1 2 3 4 5", expectedOutput: "2" }
            ],
            "Binary tree, leaf nodes, recursion",
            "A node is a leaf only when both its left and right children are null. Do not count nodes that have children."
        )

    });

    Object.assign(window.questionAliases, {
        "binary tree creation": "create a binary tree",
        "create binary tree": "create a binary tree",
        "tree inorder traversal": "inorder traversal",
        "tree preorder traversal": "preorder traversal",
        "height of tree": "find tree height",
        "tree height": "find tree height",
        "number of leaf nodes": "count leaf nodes",
        "count leaves": "count leaf nodes"
    });

})();

/* ==========================================
   ADDITIONAL DSA QUESTIONS - SEARCHING
   AND SORTING
========================================== */

(function () {

    const makeSearchSortQuestion = (
        explanation, algorithm, quiz, input, output,
        tests, concept, guidance
    ) => ({
        explanation,
        algorithm,
        quiz: quiz.map(q => ({
            question: q[0],
            options: q[1],
            answer: q[2],
            explanation: q[3]
        })),
        input,
        output,
        tests,
        concept,
        guidance
    });

    const questions = {

        /* ==================================
           SEARCHING
        ================================== */

        "linear search": makeSearchSortQuestion(
            "Linear Search checks each array element one by one until the target element is found. It works on both sorted and unsorted arrays.",

            [
                "Read the number of elements.",
                "Read the array elements.",
                "Read the target value.",
                "Start checking from the first element.",
                "Compare each element with the target.",
                "If a match is found, store its index.",
                "If no match is found, return -1.",
                "Print the result."
            ],

            [
                ["How does Linear Search work?", ["Checks elements one by one", "Divides the array into halves", "Sorts the array first"], 0, "Linear Search checks each element sequentially."],
                ["Can Linear Search work on an unsorted array?", ["Yes", "No", "Only if the array has two elements"], 0, "Linear Search does not require sorted data."],
                ["What should be returned if the target is not found?", ["-1", "0", "The array length"], 0, "This question uses -1 to represent an unsuccessful search."],
                ["What is the worst-case time complexity?", ["O(1)", "O(n)", "O(log n)"], 1, "In the worst case, every array element must be checked."]
            ],

            "5\n10 25 8 40 15\n40",
            "3",

            [
                { input: "5\n10 25 8 40 15\n40", expectedOutput: "3" },
                { input: "5\n10 20 30 40 50\n10", expectedOutput: "0" },
                { input: "4\n5 8 12 16\n7", expectedOutput: "-1" },
                { input: "1\n99\n99", expectedOutput: "0" }
            ],

            "Array traversal and sequential searching",
            "Compare the target with every element. Remember that array indexing starts from zero. Return -1 if no element matches."
        ),

        "binary search": makeSearchSortQuestion(
            "Binary Search finds a target in a sorted array by repeatedly dividing the search range into two halves. The input array must be sorted in ascending order.",

            [
                "Read the number of elements.",
                "Read the sorted array.",
                "Read the target value.",
                "Initialize low to 0 and high to n - 1.",
                "Calculate mid as low + (high - low) / 2.",
                "If the middle element equals the target, return mid.",
                "If the target is smaller, search the left half.",
                "If the target is greater, search the right half.",
                "If low becomes greater than high, return -1."
            ],

            [
                ["What is required before applying Binary Search?", ["The array must be sorted", "The array must contain only positive numbers", "The array must have unique values"], 0, "Binary Search requires sorted data."],
                ["How is the middle index calculated?", ["(low + high) / 2", "low * high", "high - low"], 0, "The middle index divides the current search range."],
                ["What happens when the target is smaller than the middle element?", ["Search the left half", "Search the right half", "Stop immediately"], 0, "Smaller values must be in the left half of an ascending array."],
                ["What is the worst-case time complexity?", ["O(n)", "O(log n)", "O(n²)"], 1, "The search range is approximately halved in each iteration."]
            ],

            "5\n10 20 30 40 50\n40",
            "3",

            [
                { input: "5\n10 20 30 40 50\n40", expectedOutput: "3" },
                { input: "5\n1 3 5 7 9\n1", expectedOutput: "0" },
                { input: "5\n2 4 6 8 10\n7", expectedOutput: "-1" },
                { input: "1\n25\n25", expectedOutput: "0" }
            ],

            "Divide and conquer and sorted array searching",
            "Check that the array is sorted. Update low or high correctly after comparing the middle element with the target."
        ),

        "first occurrence": makeSearchSortQuestion(
            "Find the first index at which a target value appears in a sorted array. If the target occurs more than once, continue searching towards the left after finding a match.",

            [
                "Read the sorted array and target.",
                "Initialize low to 0, high to n - 1 and answer to -1.",
                "Calculate the middle index.",
                "If the middle element equals the target, store mid as the answer.",
                "Continue searching in the left half.",
                "If the middle element is smaller, move low right.",
                "If the middle element is greater, move high left.",
                "Print the stored answer."
            ],

            [
                ["Why continue searching after finding the target?", ["To find an earlier occurrence", "To sort the array", "To find the largest element"], 0, "An earlier matching position may exist."],
                ["What should happen when a match is found?", ["Store the index and search left", "Stop immediately", "Search only right"], 0, "Searching left may reveal an earlier occurrence."],
                ["What is the initial answer value?", ["-1", "0", "1"], 0, "The answer remains -1 if the target is absent."],
                ["Which type of array is expected?", ["Sorted array", "Unsorted array", "Two-dimensional array"], 0, "This question uses Binary Search on sorted data."]
            ],

            "7\n1 2 2 2 3 4 5\n2",
            "1",

            [
                { input: "7\n1 2 2 2 3 4 5\n2", expectedOutput: "1" },
                { input: "5\n1 2 3 4 5\n1", expectedOutput: "0" },
                { input: "5\n1 2 3 4 5\n6", expectedOutput: "-1" },
                { input: "4\n5 5 5 5\n5", expectedOutput: "0" }
            ],

            "Binary Search and duplicate handling",
            "Do not stop at the first match. Store its index and continue searching in the left half."
        ),

        "last occurrence": makeSearchSortQuestion(
            "Find the last index at which a target value appears in a sorted array. When a match is found, continue searching towards the right.",

            [
                "Read the sorted array and target.",
                "Initialize low to 0, high to n - 1 and answer to -1.",
                "Calculate the middle index.",
                "If the middle element equals the target, store mid as the answer.",
                "Continue searching in the right half.",
                "If the middle element is smaller, move low right.",
                "If the middle element is greater, move high left.",
                "Print the stored answer."
            ],

            [
                ["Why continue searching after finding a match?", ["To find a later occurrence", "To find the first array element", "To reverse the array"], 0, "A later matching position may exist."],
                ["What should happen after finding a match?", ["Store the index and search right", "Search only left", "Stop immediately"], 0, "Searching right may reveal a later occurrence."],
                ["What is the initial answer?", ["-1", "0", "The array length"], 0, "The answer is -1 until a match is found."],
                ["Which searching technique is used?", ["Binary Search", "Bubble Sort", "Linear traversal only"], 0, "The sorted array allows Binary Search."]
            ],

            "7\n1 2 2 2 3 4 5\n2",
            "3",

            [
                { input: "7\n1 2 2 2 3 4 5\n2", expectedOutput: "3" },
                { input: "5\n1 2 3 4 5\n5", expectedOutput: "4" },
                { input: "5\n1 2 3 4 5\n6", expectedOutput: "-1" },
                { input: "4\n5 5 5 5\n5", expectedOutput: "3" }
            ],

            "Binary Search and duplicate handling",
            "After finding a match, save its index and continue searching in the right half to find the last occurrence."
        ),

        "search insert position": makeSearchSortQuestion(
            "Find the index where a target should be inserted into a sorted array to maintain ascending order. If the target already exists, return its first position.",

            [
                "Read the sorted array and target.",
                "Initialize low to 0 and high to n.",
                "Calculate the middle index.",
                "If the middle element is smaller than the target, move low to mid + 1.",
                "Otherwise, move high to mid.",
                "Continue until low equals high.",
                "Print low as the insertion position."
            ],

            [
                ["What does the insertion position represent?", ["The position that maintains sorted order", "The largest element", "The number of duplicates"], 0, "The returned position allows the array to remain sorted."],
                ["What should happen when the middle element is smaller than the target?", ["Move low to mid + 1", "Move high to mid - 1", "Stop immediately"], 0, "The insertion position must be after smaller elements."],
                ["What happens if the target already exists?", ["Return its first position", "Return -1", "Return the last index always"], 0, "This version finds the lower-bound position."],
                ["Which technique is suitable?", ["Binary Search", "Bubble Sort", "Stack"], 0, "Binary Search efficiently finds the insertion position."]
            ],

            "4\n1 3 5 6\n5",
            "2",

            [
                { input: "4\n1 3 5 6\n5", expectedOutput: "2" },
                { input: "4\n1 3 5 6\n2", expectedOutput: "1" },
                { input: "4\n1 3 5 6\n7", expectedOutput: "4" },
                { input: "4\n1 3 5 6\n0", expectedOutput: "0" }
            ],

            "Binary Search and lower bound",
            "Find the first position where the array value is greater than or equal to the target. The insertion position can also be n when the target is larger than every element."
        ),

        /* ==================================
           SORTING
        ================================== */

        "bubble sort": makeSearchSortQuestion(
            "Bubble Sort sorts an array by repeatedly comparing adjacent elements and swapping them when they are in the wrong order. This question sorts in ascending order.",

            [
                "Read the number of elements and array values.",
                "Start the first pass through the array.",
                "Compare each pair of adjacent elements.",
                "If the left element is greater, swap the two elements.",
                "Continue until the end of the unsorted part.",
                "Repeat passes until the array is sorted.",
                "Print the sorted array."
            ],

            [
                ["Which elements are compared?", ["Adjacent elements", "First and last only", "Random elements"], 0, "Bubble Sort compares neighboring elements."],
                ["When should two elements be swapped?", ["When the left element is greater", "When the left element is smaller", "Every time"], 0, "Swapping larger values to the right produces ascending order."],
                ["Where does the largest unsorted element move after a pass?", ["Towards the end", "Towards the beginning", "It disappears"], 0, "The largest value bubbles towards the end."],
                ["What is the worst-case time complexity?", ["O(n)", "O(n log n)", "O(n²)"], 2, "Bubble Sort may perform multiple passes with nested comparisons."]
            ],

            "5\n5 1 4 2 8",
            "1 2 4 5 8",

            [
                { input: "5\n5 1 4 2 8", expectedOutput: "1 2 4 5 8" },
                { input: "4\n4 3 2 1", expectedOutput: "1 2 3 4" },
                { input: "5\n1 2 3 4 5", expectedOutput: "1 2 3 4 5" },
                { input: "4\n-3 5 0 -1", expectedOutput: "-3 -1 0 5" }
            ],

            "Adjacent comparison and swapping",
            "Compare neighboring values and swap only when the left value is greater. Print the complete array in ascending order."
        ),

        "selection sort": makeSearchSortQuestion(
            "Selection Sort repeatedly selects the smallest element from the unsorted part of an array and places it at the beginning of that part.",

            [
                "Read the array elements.",
                "Start at the first position.",
                "Assume the current position contains the minimum value.",
                "Search the remaining unsorted part for a smaller value.",
                "Store the index of the smallest value.",
                "Swap the smallest value with the current position.",
                "Move to the next position.",
                "Repeat until the array is sorted.",
                "Print the sorted array."
            ],

            [
                ["What does Selection Sort select in each pass?", ["The smallest unsorted element", "The largest element only", "A random element"], 0, "It selects the minimum value from the unsorted section."],
                ["Where is the selected minimum placed?", ["At the beginning of the unsorted section", "At the last index always", "At a random index"], 0, "The selected minimum is placed at the current position."],
                ["What happens after each pass?", ["The sorted section grows", "The array becomes empty", "All elements are reversed"], 0, "One more element reaches its correct position after each pass."],
                ["What is the time complexity?", ["O(n)", "O(n²)", "O(log n)"], 1, "Selection Sort scans the remaining elements for every position."]
            ],

            "5\n64 25 12 22 11",
            "11 12 22 25 64",

            [
                { input: "5\n64 25 12 22 11", expectedOutput: "11 12 22 25 64" },
                { input: "4\n4 3 2 1", expectedOutput: "1 2 3 4" },
                { input: "5\n1 2 3 4 5", expectedOutput: "1 2 3 4 5" },
                { input: "4\n-5 10 0 -2", expectedOutput: "-5 -2 0 10" }
            ],

            "Minimum selection and swapping",
            "Find the minimum value in the unsorted section and swap it into the current position. Increase the sorted section after each pass."
        ),

        "insertion sort": makeSearchSortQuestion(
            "Insertion Sort builds a sorted portion of the array one element at a time. Each new element is inserted into its correct position among the previously sorted elements.",

            [
                "Read the array.",
                "Assume the first element is already sorted.",
                "Take the next element as the key.",
                "Compare the key with elements in the sorted portion.",
                "Shift larger elements one position to the right.",
                "Insert the key into the empty position.",
                "Repeat for all remaining elements.",
                "Print the sorted array."
            ],

            [
                ["Which part is already sorted at the beginning?", ["The first element", "The entire array", "The last element"], 0, "A single element is considered sorted."],
                ["What is the key?", ["The element being inserted", "The array length", "The smallest index"], 0, "The key is the current value being placed in the sorted portion."],
                ["What happens to elements greater than the key?", ["They shift right", "They are deleted", "They become zero"], 0, "Shifting creates space for the key."],
                ["What is the best-case time complexity for an already sorted array?", ["O(n)", "O(n²)", "O(log n)"], 0, "An already sorted array requires only one comparison per new element."]
            ],

            "5\n12 11 13 5 6",
            "5 6 11 12 13",

            [
                { input: "5\n12 11 13 5 6", expectedOutput: "5 6 11 12 13" },
                { input: "4\n4 3 2 1", expectedOutput: "1 2 3 4" },
                { input: "5\n1 2 3 4 5", expectedOutput: "1 2 3 4 5" },
                { input: "4\n-2 5 0 -1", expectedOutput: "-2 -1 0 5" }
            ],

            "Sorted portion, shifting and insertion",
            "Save the current element as key. Shift larger values to the right before inserting the key into its correct position."
        ),

        "merge sort": makeSearchSortQuestion(
            "Merge Sort uses divide and conquer. It divides an array into smaller parts, sorts those parts recursively and merges them into one sorted array.",

            [
                "Read the array.",
                "If the array has one or zero elements, it is already sorted.",
                "Divide the array into two halves.",
                "Apply Merge Sort to the left half.",
                "Apply Merge Sort to the right half.",
                "Merge the two sorted halves.",
                "During merging, select the smaller available element first.",
                "Print the sorted array."
            ],

            [
                ["Which approach does Merge Sort use?", ["Divide and conquer", "Greedy only", "Linear searching"], 0, "It divides the problem into smaller subproblems."],
                ["When does recursion stop?", ["When the part has one or zero elements", "When the array is full", "When the first value is zero"], 0, "A single element is already sorted."],
                ["What happens during merging?", ["Two sorted parts are combined", "The array is reversed", "Elements are deleted"], 0, "The two sorted halves are combined in order."],
                ["What is the time complexity?", ["O(n²)", "O(n log n)", "O(log n)"], 1, "Merge Sort divides the array into logarithmic levels and processes all elements at each level."]
            ],

            "6\n38 27 43 3 9 82",
            "3 9 27 38 43 82",

            [
                { input: "6\n38 27 43 3 9 82", expectedOutput: "3 9 27 38 43 82" },
                { input: "4\n4 3 2 1", expectedOutput: "1 2 3 4" },
                { input: "5\n1 2 3 4 5", expectedOutput: "1 2 3 4 5" },
                { input: "5\n-5 3 0 -2 1", expectedOutput: "-5 -2 0 1 3" }
            ],

            "Divide and conquer and merging",
            "Divide the array until each part has one element. Merge the smaller sorted parts carefully by choosing the smaller available value."
        ),

        "quick sort": makeSearchSortQuestion(
            "Quick Sort uses a pivot element to divide the array into smaller and larger sections. It then recursively sorts those sections.",

            [
                "Read the array.",
                "Choose a pivot element.",
                "Rearrange values so smaller values are placed before the pivot.",
                "Place larger values after the pivot.",
                "The pivot reaches its correct sorted position.",
                "Apply Quick Sort to the left section.",
                "Apply Quick Sort to the right section.",
                "Print the sorted array."
            ],

            [
                ["What is the main element used by Quick Sort?", ["Pivot", "Queue", "Head pointer"], 0, "The pivot divides the array into sections."],
                ["Where should smaller elements be placed?", ["Before the pivot", "After the pivot", "Outside the array"], 0, "Partitioning places smaller elements before the pivot."],
                ["What happens after partitioning?", ["The left and right sections are sorted recursively", "The array is deleted", "The pivot is removed permanently"], 0, "Quick Sort recursively processes both partitions."],
                ["What is the average time complexity?", ["O(n²)", "O(n log n)", "O(1)"], 1, "Balanced partitions give an average O(n log n) time complexity."]
            ],

            "6\n10 7 8 9 1 5",
            "1 5 7 8 9 10",

            [
                { input: "6\n10 7 8 9 1 5", expectedOutput: "1 5 7 8 9 10" },
                { input: "4\n4 3 2 1", expectedOutput: "1 2 3 4" },
                { input: "5\n1 2 3 4 5", expectedOutput: "1 2 3 4 5" },
                { input: "5\n-3 5 0 -1 2", expectedOutput: "-3 -1 0 2 5" }
            ],

            "Pivot selection, partitioning and recursion",
            "Check your partition logic carefully. Smaller values must go before the pivot and larger values after it. Then recursively sort both sections."
        )

    };

    // Add all Searching and Sorting questions.
    Object.assign(window.questionData, questions);

    // Add alternate question titles.
    Object.assign(window.questionAliases, {

        /* Searching aliases */
        "linear search algorithm": "linear search",
        "sequential search": "linear search",
        "binary search algorithm": "binary search",
        "find first occurrence": "first occurrence",
        "first occurrence of an element": "first occurrence",
        "find last occurrence": "last occurrence",
        "last occurrence of an element": "last occurrence",
        "search insertion position": "search insert position",
        "insert position": "search insert position",

        /* Sorting aliases */
        "bubble sort algorithm": "bubble sort",
        "selection sort algorithm": "selection sort",
        "insertion sort algorithm": "insertion sort",
        "merge sort algorithm": "merge sort",
        "quick sort algorithm": "quick sort"

    });

    console.log("Code Bridge: Searching and Sorting questions loaded.");

})();



