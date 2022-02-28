let loginModalBtns = document.querySelectorAll('.loginmodalBtn');
let registerModalBtns = document.querySelectorAll('.registermodalBtn');

let logInModal = document.getElementById('loginmodal');
let registerModal = document.getElementById('registermodal');

let mobileBtns = document.querySelectorAll('.mobile-menu-button');
let mobileDrpdwn = document.querySelector('.mobile-menu');

for (i = 0; i < loginModalBtns.length; i++) {
  loginModalBtns[i].addEventListener('click', () => {
    logInModal.classList.toggle('hidden');
  });
}
for (o = 0; o < registerModalBtns.length; o++) {
  registerModalBtns[o].addEventListener('click', () => {
    registerModal.classList.toggle('hidden');
  });
}
for (o = 0; o < mobileBtns.length; o++) {
  mobileBtns[o].addEventListener('click', () => {
    mobileDrpdwn.classList.toggle('hidden');
  });
}

$('.slider').owlCarousel({
  dots: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
