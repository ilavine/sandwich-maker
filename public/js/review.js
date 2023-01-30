const media = $('.media-body');
$('.btn-submit').click(function () {
  media.append(
    `<h4>Todo: display username</h4> <p> ${$('#user-comment').val()} </p>`
  );
});

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#review-name').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch('/api/review', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/review');
    } else {
      alert('Failed to create review');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/review/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/review');
    } else {
      alert('Failed to delete review');
    }
  }
};

document
  .querySelector('.new-review-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.review-list')
//   .addEventListener('click', delButtonHandler);
