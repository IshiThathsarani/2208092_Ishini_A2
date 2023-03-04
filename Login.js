const Form = document.getElementById("form");
const loginButton = document.getElementById("btn");


// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = Form.Username.value;
    const password = Form.Password.value;

    if (username === "user" && password === "123") {
        alert("You have successfully logged in.");
        location.href="home.html";
    } else {
        location.reload();
    }
})