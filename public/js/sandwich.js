const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#sandwich-name').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch('/api/sandwich', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/sandwich');
    } else {
      alert('Failed to create sandwich');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/sandwich/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/sandwich');
    } else {
      alert('Failed to delete sandwich');
    }
  }
};

document
  .querySelector('.new-sandwich-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.sandwich-list')
  .addEventListener('click', delButtonHandler);
