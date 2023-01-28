// Get the submit button
const subButton = document.getElementById('submit');

const selectOne = document.getElementById('mySelect1');
const selectTwo = document.getElementById('mySelect2');
const selectThree = document.getElementById('mySelect3');
const selectFour = document.getElementById('mySelect4');
const selectFive = document.getElementById('mySelect5');
// Add event listener to the submit button
subButton?.addEventListener('click', function (event) {
  event.preventDefault();
  // prevent default submission of the form
  // Get the selected value
  const selectedOneValue = selectOne.value;
  const selectedTwoValue = selectTwo.value;
  const selectedThreeValue = selectThree.value;
  const selectedFourValue = selectFour.value;
  const selectedFiveValue = selectFive.value;

  // Send the selected value to the server
  fetch('/api/sandwich', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      valueOne: selectedOneValue,
      valueTwo: selectedTwoValue,
      valueThree: selectedThreeValue,
      valueFour: selectedFourValue,
      valueFive: selectedFiveValue,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});

const delButtonHandler = async (event) => {
  try {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/sandwich/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        console.log('response', response);
        alert('Failed to delete sandwich');
      }
    }
  } catch (e) {
    console.log('delButtonHandlerError', e);
  }
};

document
  .querySelectorAll('.sandwich-list')
  .forEach((item) => item.addEventListener('click', delButtonHandler));
