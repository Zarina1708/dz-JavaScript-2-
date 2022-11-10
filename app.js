

const item2 = document.querySelector(".item2");

let postionX = 0;
let postionY = 0;

const move = () => {
  if (postionX <= 280) {
    postionX += 16;
    item2.style.left = `${postionX}px`;
    setTimeout(move, 250);
  } else if (postionX >= 280 && postionY <= 280) {
    postionY += 16;
    item2.style.top = `${postionY}px`;
    setTimeout(move, 250);
  }
};

move();



let i = 0;

let time = setInterval (
    function () {
        i++;
        console.log('Прошло ' + i + 'сек.');
        if (i == 60) {
            clearInterval (time);
        }
    }, 1000);

