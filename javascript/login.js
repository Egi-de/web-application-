
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      alert('Both fields are required.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      localStorage.setItem("session", JSON.stringify(validUser)); 
      alert(`Welcome, ${validUser.username}!`);
      window.location.href = "call.html";
    } else {
      alert("Invalid email or password.");
    }
  });
});
