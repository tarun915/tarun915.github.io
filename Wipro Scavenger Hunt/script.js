// Room 1: Zscaler Logout Code
function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    if (password === "12345_gtaa") {
        document.getElementById("room-2").classList.remove("hidden");
        document.getElementById("passwordHint").textContent = "Correct! You've unlocked Room 2.";
    } else {
        document.getElementById("passwordHint").textContent = "Incorrect! Try again.";
    }
}

// Room 2: Repository File Path
function checkFilePath() {
    const filePath = document.getElementById("filePathInput").value.toLowerCase();
    if (filePath === "\\\\yyz-fpr03" || filePath === "\\\\yyz-fpr03\\") {
        document.getElementById("room-3").classList.remove("hidden");
        document.getElementById("fileHint").textContent = "Nice! Room 3 is now open.";
    } else {
        document.getElementById("fileHint").textContent = "Nope! Keep looking!";
    }
}

// Room 3: IP Lookup
function chooseIP(ip) {
    if (ip === "10.3.14.1") {
        document.getElementById("room-4").classList.remove("hidden");
        document.getElementById("networkHint").textContent = "Correct! Room 4 is now unlocked!";
    } else {
        document.getElementById("networkHint").textContent = "Incorrect IP! Try the other one.";
    }
}

// Room 4: Server IP for LAPs Password
function checkServerIP() {
    const serverIP = document.getElementById("serverIPInput").value;
    if (serverIP === "10.11.3.14") {
        document.getElementById("final-room").classList.remove("hidden");
        document.getElementById("serverHint").textContent = "Correct! The Server Room is now unlocked!";
    } else {
        document.getElementById("serverHint").textContent = "Incorrect IP! Try again.";
    }
}
