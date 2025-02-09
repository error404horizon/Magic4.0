document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const submitButton = document.getElementById('submitButton');

  form.addEventListener('input', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;

    let isValid = true;

    // Name validation: letters only
    const nameError = document.getElementById('nameError');
    if (!/^[A-Za-z]+$/.test(name)) {
      nameError.textContent = 'Name must contain letters only.';
      isValid = false;
    } else {
      nameError.textContent = '';
    }

    // Email validation: proper email format
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    } else {
      emailError.textContent = '';
    }

    // Password validation: minimum 8 characters, one uppercase, one number
    const passwordError = document.getElementById('passwordError');
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
      passwordError.textContent = 'Password must be at least 8 characters long, contain one uppercase letter and one number.';
      isValid = false;
    } else {
      passwordError.textContent = '';
    }

    // Enable or disable submit button based on form validity
    submitButton.disabled = !isValid;
  });
});