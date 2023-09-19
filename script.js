document.addEventListener("DOMContentLoaded", () => {
  const fullNameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email");
  const commentInput = document.getElementById("comment");
  const submitButton = document.getElementById("submit-button");

  fullNameInput.addEventListener("input", () => {
    validateFullName();
    updateSubmitButtonState();
  });

  emailInput.addEventListener("input", () => {
    validateEmail();
    updateSubmitButtonState();
  });

  commentInput.addEventListener("input", () => {
    validateComment();
    updateSubmitButtonState();
  });

  document.getElementById("registration-form").addEventListener("submit", (e) => {
    if (!isFormValid()) {
      e.preventDefault();
    }
  });

  function validateFullName() {
    const fullNameError = document.getElementById("full-name-error");
    if (fullNameInput.value.length < 3 || !/^[a-zA-Z\s]*$/.test(fullNameInput.value)) {
      fullNameError.textContent =
        "❌ Full name must be at least 3 characters long and contain only letters and spaces.";
      fullNameInput.style.border = "2px solid red";
    } else {
      fullNameError.textContent = "✅";
      fullNameInput.style.border = "2px solid rgb(87, 212, 87)";
    }
  }

  function validateEmail() {
    const emailError = document.getElementById("email-error");
    if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
      emailError.textContent = "❌ Enter a valid email address.";
      emailInput.style.border = "2px solid red";
    } else {
      emailError.textContent = "✅";
      emailInput.style.border = "2px solid rgb(87, 212, 87)";
    }
  }

  function validateComment() {
    const commentError = document.getElementById("comment-error");
    if (commentInput.value.length < 11) {
      commentError.textContent = "❌ Comment must be at least 11 characters long.";
      commentInput.style.border = "2px solid red";
    } else {
      commentError.textContent = "✅";
      commentInput.style.border = "2px solid rgb(87, 212, 87)";
    }
  }

  function isFormValid() {
    return fullNameInput.validity.valid && emailInput.validity.valid && commentInput.validity.valid;
  }

  function updateSubmitButtonState() {
    if (isFormValid()) {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", "disabled");
    }
  }
});

function success() {
  alert("Successfully registered.");
}
