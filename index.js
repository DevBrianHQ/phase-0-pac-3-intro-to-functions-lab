// Function that takes a string and returns it in uppercase
function shout(string) {
    return string.toUpperCase();
}

// Function that takes a string and returns it in lowercase
function whisper(string) {
    return string.toLowerCase();
}

// Function that logs a string in uppercase to the console
function logShout(string) {
    console.log(string.toUpperCase());
}

// Function that logs a string in lowercase to the console
function logWhisper(string) {
    console.log(string.toLowerCase());
}

// Function that responds differently based on the input string
function sayHiToHeadphonedRoommate(string) {
    // If the string is all lowercase, return "I can't hear you!"
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    // If the string is all uppercase, return "YES INDEED!"
    else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    // If the string is exactly "Let's have dinner together!", return "I would love to!"
    else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}

