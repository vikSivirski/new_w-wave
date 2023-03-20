const modalBtn = document.querySelectorAll('.header__account-btn');
const modalWindow = document.querySelector('.login');
const modalClosed = document.querySelector('.login__closed');
const modalBackground = document.querySelector('.popup');

modalBtn.forEach(function (modalBtn) {

  modalBtn.addEventListener('click', function () {

    modalWindow.classList.toggle('login--active');
    modalBackground.classList.toggle('popup--active');
  })

})

modalClosed.addEventListener('click', function () {

  modalWindow.classList.remove('login--active');
  modalBackground.classList.remove('popup--active');

})

new JustValidate('.login__form', {
  rules: {
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      minLength: 8,
    }
  },
  messages: {
    email: {
      required: 'Это поле обязательно для заполнения',
      email: 'Некорректный email',
    },
    password: {
      required: 'Это поле обязательно для заполнения',
      minLength: 'Пароль должен содержать минимум 8 символов',
    },
  },
  submitHandler: function (form) {
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено");
        }
      }
    }

    xhr.open('POST',  'mail.php', true);
    xhr.send(formData);

    form.reset();
  },
});


const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__nav-wrap');
const menuLinks = document.querySelectorAll('.header__item')

burger.addEventListener('click', function () {

  burger.classList.toggle('is-active');

  if (burger.classList.contains('is-active')) {
    menu.style.transition = 'transform 0.4s ease-in-out'
  }

  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');

});

menu.addEventListener('transitionend', function () {

  if (!menu.classList.contains('header__nav--active')) {
    menu.removeAttribute('style');
  }

})

menuLinks.forEach(function (headerLink) {

  headerLink.addEventListener('click', function () {
    burger.classList.remove('is-active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })

})


const audioBtn = document.querySelectorAll('.subheader__audio-btn');

audioBtn.forEach(function (btnElement) {
  btnElement.addEventListener('click', function () {
    btnElement.classList.toggle('subheader__audio-btn--active');
  })
})

const searchBtn = document.querySelector('.header__search-btn ');
const searchForm = document.querySelector('.search-form');
const searchBtnActive = document.querySelector('.search-form__btn');
searchBtn.addEventListener('click', function () {

  searchForm.classList.toggle('search-form--active')

});
searchBtnActive.addEventListener('click', function () {

  searchForm.classList.remove('search-form--active')

});

//podcasts

let likeBtn = document.querySelectorAll('.like');
let shareBtn = document.querySelectorAll('.share');
let listeningsBtn = document.querySelectorAll('.podcasts__play-btn')
let likeCounter = document.querySelectorAll('.like-counter');
let shareCounter = document.querySelectorAll('.share-counter');
let listeningsCounter = document.querySelectorAll('.listenings-counter');
let reactBtn = document.querySelectorAll('.podcasts__reaction-btn');

function counterLikes() {
  likeCounter.forEach(function (elem) {
    let likes = parseInt(elem.textContent);
    elem.textContent = likes + 1;
  });
};
likeBtn.forEach(function (like) {
  like.addEventListener('click', counterLikes)
});

function counterShare() {
  shareCounter.forEach(function (elem) {
    let likes = parseInt(elem.textContent);
    elem.textContent = likes + 1;
  });
};
shareBtn.forEach(function (share) {
  share.addEventListener('click', counterShare)
});

function counterListenings() {
  listeningsCounter.forEach(function (elem) {
    let likes = parseInt(elem.textContent);
    elem.textContent = likes + 1;
  });
};
listeningsBtn.forEach(function (listenings) {
  listenings.addEventListener('click', counterListenings)
});
listeningsBtn.forEach(function (listenings) {
  listenings.addEventListener('click', counterListenings)
  listenings.addEventListener('click', function () {
    listenings.classList.toggle('podcasts__play-btn--active')
  })
});

reactBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.classList.add('podcasts__reaction-btn--active')
  })
})


const moreBtn = document.querySelector('.podcasts__more');
const podcasts = document.querySelectorAll('.podcasts__item');

moreBtn.addEventListener('click', function () {

  moreBtn.classList.toggle('podcasts__more--hidden')
  podcasts.forEach(function (element) {
    element.classList.toggle('podcasts__item--visible')
  });

});

const element = document.querySelector('.broadcast__select');
const choices = new Choices(element, {

  placeholder: true,
  allowHTML: true,
  searchEnabled: false,
  itemSelectText: '',

});

let btnTabs = document.querySelectorAll('.tab-btn');
let itemTabs = document.querySelectorAll('.guests__tabs-item');

btnTabs.forEach(function (element) {
  element.addEventListener('click', function (e) {

    const path = e.currentTarget.dataset.path;

    btnTabs.forEach(function (btn) { btn.classList.remove('tab-btn--active') });
    e.currentTarget.classList.add('tab-btn--active');

    itemTabs.forEach(function (element) { element.classList.remove('guests__tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__tabs-item--active');
  })
});

const swiper = new Swiper('.swiper', {

  loop: false,
  slidesPerView: 4,
  spaceBetween: 32,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    1025: {
      slidesPerView: 4,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    611: {
      slidesPerView: 2,
    },

    240: {
      slidesPerView: 2.32,

      spaceBetween: 22,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hiddenClass: '.swiper-button-hidden',
      },
    }

  }
});


new JustValidate('.about__form', {
  rules: {
    myField: {
      required: false
    },
    email: {
      required: true,
      email: true
    },
    name: {
      required: true,
      minLength: 3
    },
  },
  messages: {
    name: {
      minLength: 'Ошибка',
      required: 'Это поле обязательно для заполнения',
    },
    email: {
      required: 'Это поле обязательно для заполнения',
      email: 'Ошибка',
    },
  },

  // submitHandler: function (form, values, ajax) {

  //   ajax({
  //     url: 'mail.php',
  //     method: 'POST',
  //     data: values,
  //     async: true,
  //     callback: function(response)  {
  //       console.log(response)
  //     }
  //   });
  // }
});

new Accordion('.subheader__accordion');
new Accordion('.guests__accordion');
