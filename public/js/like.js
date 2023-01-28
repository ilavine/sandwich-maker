const likeButtons = $('.btn-like');
let clicked = false;

const clickHandler = function () {
  let count = 0;
  return function () {
    if (!clicked) {
      clicked = true;
      count++;
      this.innerHTML = `<i class='fa-solid fa-heart'> </i> ${count}`;
    } else {
      clicked = false;
      count--;
      this.innerHTML = `<i class='fa-regular fa-heart'> </i> ${count}`;
    }
    // const response = fetch('/api/sandwich/', {
    //   method: 'POST',
    //   body: JSON.stringify({ likeCount: count }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // if (response.ok) {
    //   document.location.reload();
    // } else {
    //   console.log(response);
    // }
  };
};

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', clickHandler());
}
