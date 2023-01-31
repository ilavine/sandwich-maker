const submitComment = async (index) => {
  const media = $('.media-body-' + index);
  console.log(index);
  const text = $('#user-comment-' + index).val();
  const response = await fetch('/api/review', {
          method: 'POST',
          body: JSON.stringify({ text }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  console.log(response);
  media.html(`<p>${text}</p>`);
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to create review');
        }

      
};

// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#review-name').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch('/api/review', {
//       method: 'POST',
//       body: JSON.stringify({ name }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/review');
//     } else {
//       alert('Failed to create review');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/review/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/review');
//     } else {
//       alert('Failed to delete review');
//     }
//   }
// };

// document
//   .querySelector('.new-review-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.review-list')
//   .addEventListener('click', delButtonHandler);
