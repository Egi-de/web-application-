// signup.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!username || !email || !password) {
      alert('All fields are required.');
      return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      alert('Email already registered. Please login.');
      return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! You can now log in.');
    window.location.href = 'index.html';
  });
});
