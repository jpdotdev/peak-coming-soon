
document.querySelector('.submit').addEventListener('click', emailValidation);

const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function emailValidation() {
  let emailInput = document.getElementById('emailInput').value;
  if (emailInput.match(regEx)) {
  } else {
    alert("Please submit a valid email address");
  }
}
