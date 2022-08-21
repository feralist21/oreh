// $('document').ready(function () {
//   //Мобильное меню
//   $('.js-toggle').click(function () {
//     $(this).toggleClass('active');
//     $('.js-menu').toggleClass('header__menu--active');
//   });

//   // Маска для телефона в попапе
//   var phoneMask1 = IMask(document.getElementById('modal-phone'), {
//     mask: '+{7}(000)000-00-00'
//   });

//   //Форма заявки обратного звонка
//   $(document).on('submit', '#callback-form, #callback-froz', function () {
//     var form = $(this);
//     $.post('/forms/callback.php', form.serializeArray(), function (data) {
//       if (data) {
//         $.magnificPopup.close();
//         $.magnificPopup.open({
//           items: {
//             src: '<div class="modal modal__result">' + data + '</div>',
//             type: 'inline'
//           }
//         });
//         form.trigger('reset');
//       }
//     });
//     return false;
//   });

//   //Кнопка наверх
//   $(window).on('scroll load', function () {
//     $(this).scrollTop() > 600
//       ? $('#top').addClass('active')
//       : $('#top').removeClass('active');
//   });

//   $('#top').click(function () {
//     $('body, html').animate({ scrollTop: 0 }, 500);
//   });

//   // Плавный скрол по якорям
//   $(function () {
//     $('.anc').on('click', function (event) {
//       event.preventDefault();
//       var sc = $(this).attr('href'),
//         dn = $(sc).offset().top;
//       $('html, body').animate({ scrollTop: dn }, 500);
//     });
//   });

//   // Попап с политикой конфиденциальности
//   $('a[href="#policy"]').magnificPopup({
//     type: 'inline',
//   });

// });

$('document').ready(function () {
  toggleMobileMenu();
  setAboutSlider();
  setAccordionFaq();
  slowlyAnchor();
  setFeedbackForm();

  var phoneMask1 = IMask(document.getElementById('req-phone'), {
    mask: '+{7}(000)000-00-00'
  });

  $('a[href="#policy"]').magnificPopup({
    type: 'inline',
  });
});

function toggleMobileMenu() {
  $('.js-toggle').click(function () {
    $(this).toggleClass('active');
    $('.js-menu').toggleClass('navigation--active');
    $('.header').toggleClass('header--active');
  });
}

function setAboutSlider() {
  $('.about__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 451,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
    ]
  });
}

function setAccordionFaq() {
  $('.f-accordion__item').click(function () {
    if (!$(this).hasClass('active')) {
      $('.f-accordion__item-content').slideUp();
      $('.f-accordion__item').removeClass('active');

      $(this).addClass('active');
      $(this).find('.f-accordion__item-content').slideDown();
    } else {
      $(this).removeClass('active');
      $(this).find('.f-accordion__item-content').slideUp();
    }
  });
}

function slowlyAnchor() {
  $('.anc').on('click', function (event) {
    event.preventDefault();
    var sc = $(this).attr('href'),
      dn = $(sc).offset().top;
    $('html, body').animate({ scrollTop: dn }, 500);
  });
}

function setFeedbackForm() {
  $(document).on('submit', '#feedback__form', function () {
    var form = $(this);
    $.post('/forms/callback.php', form.serializeArray(), function (data) {
      if (data) {
        $.magnificPopup.close();
        $.magnificPopup.open({
          items: {
            src: '<div class="modal modal__result">' + data + '</div>',
            type: 'inline'
          }
        });
        form.trigger('reset');
      }
    });
    return false;
  });
}
