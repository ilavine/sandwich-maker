
// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#ingredients-name').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch('/api/ingredients', {
//       method: 'POST',
//       body: JSON.stringify({ name }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/ingredients');
//     } else {
//       alert('Failed to add ingredients');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/ingredients/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/ingredients');
//     } else {
//       alert('Failed to delete ingredient');
//     }
//   }
// };

// document
//   .querySelector('.new-sandwich-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.sandwich-list')
//   .addEventListener('click', delButtonHandler);