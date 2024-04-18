var isFirstClick = true;
var firstLogin = true;

// Function to open a new tab and log in
function login() {
    var newWindow = window.open('https://172.22.2.6/connect/PortalMain');
    newWindow.onload = function() {
        // Fill username and password fields
        newWindow.document.getElementById('LoginUserPassword_auth_username').value = '22ucc041';
        newWindow.document.getElementById('LoginUserPassword_auth_password').value = '1kxwkb9g';

        // Simulate login action
        // You may need to trigger the login form submission here
    };
}

// Countdown timer function
function startTimer(duration, display) {
    var timer = duration, hours, minutes, seconds;
    var intervalId = setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(intervalId);
            // Open a new tab when timer reaches zero
            login();
            // Restart timer
            timer = duration;
            startTimer(duration, display);
        }
    }, 1000);
}

// Start the login process when the Start button is clicked
document.getElementById('startButton').addEventListener('click', function() {
    if (isFirstClick) {
        // Set the duration to 2 hours and 30 minutes (2 * 60 + 30 = 150 minutes)
        var duration = 120 * 60; // 150 minutes converted to seconds
        var display = document.querySelector('#timer');
        startTimer(duration, display);
        isFirstClick = false;
        firstLogin = false;
        login(); // Perform immediate login for the first time
    } else {
        // For subsequent logins, wait for 2 hours and 30 minutes
        if (!firstLogin) {
            var duration = 150 * 60; // 150 minutes converted to seconds
            var display = document.querySelector('#timer');
            startTimer(duration, display);
        }
        firstLogin = false;
    }
});
