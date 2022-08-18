const registerForm = document.querySelector("#register-form");
const registerName = document.getElementById("register-name");
const registerUsername = document.getElementById("register-username");
const registerPassword = document.getElementById("register-password");
const errorDOM = document.querySelector(".form-alert");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = registerName.value;
  const username = registerUsername.value;
  const password = registerPassword.value;

  try {
    const {
      data: { token },
    } = await axios.post("api/v1/user/register", { name, username, password });
    localStorage.setItem("token", token);
    window.location.replace("./index.html");
  } catch (error) {
    errorDOM.style.display = "block";
    errorDOM.innerHTML = `error, enter acceptable value`;
  }

  setTimeout(() => {
    errorDOM.style.display = "none";
  }, 3000);
});
