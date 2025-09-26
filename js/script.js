// welcomeMessege();

// Welcome Message
function welcomeMessage() {
    /// Prompt user for their name
    let username = prompt("Please enter your name:");
    /// If user enters a name, display it in the header, otherwise display "Hello, name"
    if (username) {

        /// Display username in the header
        document.getElementById("username").innerHTML = username;
    } else {

        /// If no name is entered, display "Hello, You"
        document.getElementById("username").innerHTML = "You";
        alert("Hello, You");
    }
}

// Form Validation
function validateForm() {
    /// Get form values
    let name = document.getElementById["name"].value;
    let email = document.getElementById["email"].value;
    let message = document.getElementById["message"].value;

    /// Simple validation
    if (name === "" || email === "" || message === "") {
        /// if any field is empty, show alert
        alert("Please fill all the fields.");
        return false;
    } else {
        /// if all fields are filled, show thank you message
        alert("Thank you for your message, " + name + "!");
        return true;
    }
}