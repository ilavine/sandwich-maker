// Get the submit button
const submitButton = document.getElementById('submit');
const sandwichName = document.getElementById('sandwichName');
const selectOne = document.getElementById('select0');
const selectTwo = document.getElementById('select1');
const selectThree = document.getElementById('select2');
const selectFour = document.getElementById('select3');
const selectFive = document.getElementById('select4');
// Add event listener to the submit button
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  // prevent default submission of the form
  // Get the selected value
  const selectedOneValue = selectOne.value;
  const selectedTwoValue = selectTwo.value;
  const selectedThreeValue = selectThree.value;
  const selectedFourValue = selectFour.value;
  const selectedFiveValue = selectFive.value;
  const selectedSandwichName = sandwichName.value;

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
      name: selectedSandwichName,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
