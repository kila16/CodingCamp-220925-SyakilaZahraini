// welcomeMessege();


function welcomeMessage() {
  let username = prompt("Please enter your name:");
  if (username && username.trim() !== "") {
    document.getElementById("username").innerHTML = username;
  } else {
    document.getElementById("username").innerHTML = "Guest";
    alert("Hello, Guest!");
  }
}
// langsung dipanggil
welcomeMessage();

// Form Validation
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all the fields.");
    return false;
  } else {
    alert("Thank you for your message, " + name + "!");
    return true;
  }
}
