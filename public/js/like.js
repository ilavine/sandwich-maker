const likeButtons = $('.btn-like');
let clicked = false;
let count = 0;

const clickHandler = function () {
  
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

  };
};

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', clickHandler());
}
