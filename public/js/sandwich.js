// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#sandwich-name').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch('/api/sandwich', {
//       method: 'POST',
//       body: JSON.stringify({ name }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/sandwich');
//     } else {
//       alert('Failed to create sandwich');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/sandwich/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/sandwich');
//     } else {
//       alert('Failed to delete sandwich');
//     }
//   }
// };

// document
//   .querySelector('.new-sandwich-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.sandwich-list')
//   .addEventListener('click', delButtonHandler);

// Get the submit button
const submitButton = document.getElementById('submit');

const select = document.getElementById('mySelect');
// Add event listener to the submit button
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  // prevent default submission of the form
  // Get the selected value
  const selectedValue = select.value;

  // Send the selected value to the server
  fetch('/api/sandwich', {
    method: 'POST',
    body: JSON.stringify({ value: selectedValue }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
