const form = document.getElementById("form");
const input = form.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  const alert = document.querySelector(".email__error");
  console.log(alert);

  if (value.trim() === "") {
    input.placeholder = "";
    alert.textContent = "Whoops! It looks like you forgot to add your email";
    input.parentElement.classList.add("wrong");
  } else if (!validateEmail(value.trim())) {
    alert.textContent = "Please provide a valid email address";
    input.parentElement.classList.add("wrong");
  } else {
    input.parentElement.classList.remove("wrong");
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
