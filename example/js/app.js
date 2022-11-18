const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

console.log(tabsParent);

const hideTabContent = () => {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 3) => {
  tabContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();



tabsParent.addEventListener("click", (event) => {
  const target = event.target;
  console.log(target);
  if (target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (target === item) {
        console.log(i);
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

modalTrigger.addEventListener("click", openModal);

const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};

closeModalBtn.addEventListener("click", closeModal);







///////////
let slider = 0
const time = () => {
  slider++
  if (slider > 3){
      slider = 0
  }
  hideTabContent();
  showTabContent(slider);
}
setInterval(time, 2000);

////////////



modal.addEventListener("click", (event) => {
  if (
      event.target === modal ||
      event.target.classList.contains("modal__close")
  ) {
      closeModal();
  }
});

const body = document.getElementsByTagName('html')
const modal1 = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
window.addEventListener('scroll', () => {
  if (document.body.clientHeight - body[0].clientHeight === body[0].scrollTop) {
      modal1.style.display = 'block';
      document.body.style.overflow = 'hidden';
      modalClose.addEventListener('click', () => {
          modal1.style.display = 'none';
          document.body.style.overflow = 'visible';
      });
  }
})


function openModalScroll() {
  const page = document.documentElement;

  if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
      openModal();

      window.removeEventListener("scroll", openModalScroll);
  }
}

window.addEventListener("scroll", openModalScroll);


