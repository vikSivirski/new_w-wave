new Accordion('.subheader__accordion')

const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__nav-wrap');

burger.addEventListener('click', function() {

  burger.classList.toggle('is-active');
  menu.classList.toggle('header__nav--active');

});

const searchBtn = document.querySelector('.header__search-btn ');
const searchForm = document.querySelector('.search-form');
const searchBtnActive = document.querySelector('.search-form__btn');
searchBtn.addEventListener('click', function() {

  searchForm.classList.toggle('search-form--active')

});
searchBtnActive.addEventListener('click', function() {

  searchForm.classList.remove('search-form--active')

});

//podcasts

let likeBtn = document.querySelectorAll('.like');
let shareBtn = document.querySelectorAll('.share');
let listeningsBtn = document.querySelectorAll('.podcasts__play-btn')
let likeCounter = document.querySelectorAll('.like__counter');
let shareCounter = document.querySelectorAll('.share__counter');
let listeningsCounter = document.querySelectorAll('.listenings__counter');

function counterLikes() {
  likeCounter.forEach(function(elem) {
    let likes = parseInt(elem.textContent);
    elem.textContent = likes + 1;
  });
};
likeBtn.forEach(function(like) {
  like.addEventListener('click', counterLikes)
});
likeBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.classList.add('like--active')
  })
})

function counterShare() {
  shareCounter.forEach(function(elem) {
      let likes = parseInt(elem.textContent);
      elem.textContent = likes + 1;
  });
};
shareBtn.forEach(function(share) {
  share.addEventListener('click', counterShare)
});

function counterListenings() {
  listeningsCounter.forEach(function(elem) {
      let likes = parseInt(elem.textContent);
      elem.textContent = likes + 1;
  });
};
listeningsBtn.forEach(function(listenings) {
  listenings.addEventListener('click', counterListenings)
});



const moreBtn = document.querySelector('.podcasts__more');
const podcasts = document.querySelectorAll('.podcasts__item');

moreBtn.addEventListener('click', function () {

  moreBtn.classList.toggle('podcasts__more--hidden')
  podcasts.forEach(function (element) {
    element.classList.toggle('podcasts__item--visible')
  });

});
