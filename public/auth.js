const loginForm = document.getElementById("login-form");
const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");
const errorDOM = document.querySelector(".form-alert");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = loginUsername.value;
  const password = loginPassword.value;

  try {
    const {
      data: { token },
    } = await axios.post("api/v1/user/login", { username, password });
    localStorage.setItem("token", token);
    window.location.replace("./index.html");
  } catch (error) {
    errorDOM.style.display = "block";
    errorDOM.innerHTML = `error, enter correct crendentials`;
  }
  setTimeout(() => {
    errorDOM.style.display = "none";
  }, 3000);
});
