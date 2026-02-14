const registerCard = document.getElementById("register");
const loginCard = document.getElementById("login");
const dashboardCard = document.getElementById("dashboard");

function registerUser() {
    if (rUser.value === "" || rPass.value === "") {
        rMsg.style.color = "red";
        rMsg.innerText = "Please fill all fields!";
        return;
    }

    localStorage.setItem("user", rUser.value);
    localStorage.setItem("pass", rPass.value);

    rMsg.style.color = "green";
    rMsg.innerText = "Account created successfully!";
}

function loginUser() {
    if (lUser.value === localStorage.getItem("user") &&
        lPass.value === localStorage.getItem("pass")) {
        showDashboard();
    } else {
        lMsg.style.color = "red";
        lMsg.innerText = "Invalid credentials!";
    }
}

function logout() {
    showLogin();
}

function showRegister() {
    setActive(registerCard);
}

function showLogin() {
    setActive(loginCard);
}

function showDashboard() {
    setActive(dashboardCard);
}

function setActive(card) {
    [registerCard, loginCard, dashboardCard].forEach(c => c.classList.remove("active"));
    card.classList.add("active");
}
