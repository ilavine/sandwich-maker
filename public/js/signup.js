const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#new_user_name').value.trim();
  const email = document.querySelector('#new_email').value.trim();
  const password = document.querySelector('#new_password').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
