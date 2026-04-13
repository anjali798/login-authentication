function checkLogin() {
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("result").innerText = "Login Successful!";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "Wrong Username or Password";
        document.getElementById("result").style.color = "red";
    }
}