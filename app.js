const send_btn = document.querySelector(".send_btn");
const innInput = document.querySelector("#innInput");
const span = document.querySelector("#span");

const InnRegExp = /^\1|0\d{13}$/;


send_btn.addEventListener("click", () => {
    if (InnRegExp.test(innInput.value)) {
        span.innerText = "ok";
        span.style.color = "green";
    } else {
        span.innerText = "error";
        span.style.color = "red"
    }
});



let offset = 0;

function move() {
    offset = offset + 5;
    document.querySelector('.item2').style.left = offset + 'px';
    if (offset > 250) {
        return true;
    }
    setTimeout(move, 400);
}

// document.querySelector('#click').onclick = move;

click.addEventListener("click", move);