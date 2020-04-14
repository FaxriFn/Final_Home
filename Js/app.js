$(function () {
  // Majid
  function modalOpener() {
    let scrollTop = $(document).scrollTop();
    $(document).scroll(function () {
      scrollTop = $(document).scrollTop();



    })
    $(document).on('click', '.bigPhotoCenter', function () {
      $('#modalHome').css('top', `${scrollTop}px`);
      $('.modalHomeYoutubeContent iframe').attr('src', ' https://www.youtube.com/embed/h59cKcb_J2M');
      $('#indexWeDoBest').css('opacity', '0.3');
      $('#ourVision').css('opacity', '0.3');

      $('#modalHome').show(100);
      $('.modalHomeYoutubeContent iframe').animate({
        width: '920px',
        height: '500px'
      }, 1000)
      $('body').css('overflow', 'hidden');



    })

  }

  // This function close a modal in the home page when u click big page (Majid)
  function modalCloser() {
    $(document).on('click', '.modalHomeYoutube', function () {
      $('#indexWeDoBest').css('opacity', '1');
      $('#ourVision').css('opacity', '1');


      $('#modalHome').hide(100);
      $('body').css('overflow', 'visible');
      $('.modalHomeYoutubeContent iframe').animate({
        width: '360px',
        height: '315px'
      }, 1000);
      $('.modalHomeYoutubeContent iframe').attr('src', ' ');

    })
    $(document).on('click', '.modalExit', function () {
      $('#indexWeDoBest').css('opacity', '1');
      $('#ourVision').css('opacity', '1');


      $('#modalHome').hide(100);
      $('body').css('overflow', 'visible');
      $('.modalHomeYoutubeContent iframe').animate({
        width: '360px',
        height: '315px'
      }, 1000);
      $('.modalHomeYoutubeContent iframe').attr('src', ' ');




    })


  }
  modalOpener();
  modalCloser();
  $('.count_nums').counterUp({
    delay: 30,
    time: 3000
  });
  // Macid End
  // ========================================================//
  //  Faxri
  $(document).on('mouseenter', '.cardDoctor', function () {
    $(this).css('background', 'rgba(0, 125, 242, 1)');
    $(this).children('.doctorName>h4>a').css('color', 'white');
    $(this).children('.doctorContent ').children('.doctorName').children('h4').children('a').css('color', 'white');
    $(this).children('.doctorContent ').children('.doctorName').children('span').css('color', 'white');
    $(this).children('.doctorContent ').children('.socialIconDoctor').children('i').css('color', 'white');
    $(this).css('transform', 'translateY(-20px)')
  })

  $(document).on('mouseleave', '.cardDoctor', function () {
    $(this).css('background', '#fff');
    $(this).css('transform', 'translateY(0px)')
    $(this).children('.doctorContent ').children('.doctorName').children('h4').children('a').css('color', 'black');
    $(this).children('.doctorContent ').children('.doctorName').children('span').css('color', '#777');
    $(this).children('.doctorContent ').children('.socialIconDoctor').children('i').css('color', 'rgba(0, 125, 242, 1)');
  })
  // ========================================================//
  $(document).on('mouseenter', '.cardTestimonials', function () {
    $(this).css('background', 'rgba(0, 125, 242, 1)');

    $(this).children('p').css('color', 'white');
    $(this).children('.doctorContent ').children('.doctorName').children('span').css('color', 'white');
    $(this).children('.testimonialsContent').children('.testimonialsText').children('h5').css('color', 'white');
    $(this).children('.testimonialsContent').children('.testimonialsText').children('p').css('color', 'white');
    $(this).children('i').css('color', 'white');
    $(this).css('transform', 'translateY(-10px)')
  })

  $(document).on('mouseleave', '.cardTestimonials', function () {
    $(this).css('background', '#fff');
    $(this).css('transform', 'translateY(0px)')
    $(this).children('p').css('color', '#777');
    $(this).children('.doctorContent ').children('.doctorName').children('span').css('color', 'black');
    $(this).children('.testimonialsContent').children('.testimonialsText').children('h5').css('color', 'black');
    $(this).children('.testimonialsContent').children('.testimonialsText').children('p').css('color', '#777');
    $(this).children('i').css('color', 'rgba(0, 125, 242, 1)');
  });
  // ========================================================//

  $('.variable-width').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // ========================================================//
  // Aos
  AOS.init({
    delay: 1000,

  });
  // ========================================================//
  $('.multiple-items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    // margin:30,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
  $('.zibil').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
  // Faxri end
// ======================================================================================
  // Farid
// ======================================================================================

  $('.dropdown').hover(function () {
    $(this).addClass('show');
    $(this).find('.dropdown-menu').addClass('show');


  }, function () {
    $(this).removeClass('show');
    $(this).find('.dropdown-menu').removeClass('show')

  })
  navbarFixedORSTaticSetter();
  navPosSetRelativeResize();


  // ============== NAVBAR POSITION CHANGE WHEN WINDOW SIZE CHANGES
  function navPosSetRelativeResize() {
    $(window).resize(function () {
      navbarFixedORSTaticSetter();
    });
  }


  // ============== SET NAVBAR POSITION WHEN WINDOW OPENS AND WHEN WINDOW SIZE CHANGES (DEFAULT POSITION) 
  function navbarFixedORSTaticSetter() {
    if ($(window).width() >= 576) {
      if (window.scrollY > (document.querySelector("nav").offsetHeight + document.querySelector(".header-top").offsetHeight)) {
        $("nav").css("position", 'fixed');
        $("nav").css("top", '0');
      } else {
        $("header").css("min-height", (document.querySelector("nav").offsetHeight + document.querySelector(".header-top").offsetHeight) + 'px');
        $("nav").css("position", 'static');
      }
    } else {
      $("header").css("min-height", document.querySelector("header>nav").offsetHeight + 'px');
      $("nav").css("position", 'static');
    }
    navbarScrollSetter();
  }


  // ============== ADD ANIMATION TO NAVBAR RELATIVE TO SCROLL HEIGHT
  function navbarScrollSetter() {
    window.addEventListener("scroll", function () {
      if (window.scrollY > (document.querySelector("nav").offsetHeight + document.querySelector("header").offsetHeight)) {
        $("nav").css({
          "position": "fixed",
          "background-color": "white",
          "box-shadow": "0 10px 10px -10px rgba(0, 0, 0, 0.35)",
          "animation-name": "navbarToShow",
          "animation-duration": "0.5s",
          "animation-fill-mode": "forwards"
        });
      } else {
        $("nav").css({
          "position": "static",
          "box-shadow": "0 10px 10px -10px rgba(0, 0, 0, 0)",
          "animation-name": "none",
          "animation-duration": "unset",
          "animation-fill-mode": "unset"
        });
      }
    });
  }



  //===================================== HOME SLIDER (BUTTON TURN)
  let idTimeOut;

  homeSlider();

  function homeSlider() {

    $(".homeSlider").fadeOut(0.0001);

    let sliderOrder = document.querySelectorAll(".orders");
    let sliderHome = document.querySelectorAll(".homeSlider");

    for (let i = 0; i < sliderOrder.length; i++) {
      sliderOrder[i].addEventListener("click", function () {

        for (let j = 0; j < sliderHome.length; j++) {
          $(".homeSlider").eq(j).fadeOut(1000);
          $(".bottomBorder").eq(j).removeClass("selectedBorder");
          $(".homeText").eq(j).fadeOut(0.0001);
          $(".homeText h3 span").removeClass("animationClassFromBottom");
        }

        $(".homeSlider").eq(i).fadeIn(1000);
        $(".bottomBorder").eq(i).addClass("selectedBorder");
        $(".homeText").eq(i).fadeIn(1000);


        if (i == 0) {
          $(".homeText h3 span").eq(0).addClass("animationClassFromTop");
          $(".homeText h3 span").eq(1).addClass("animationClassFromTop");
          $(".homeText h3 span").eq(2).addClass("animationClassFromBottom");
        } else if (i == 1) {

          $(".homeText h3 span").eq(3).addClass("animationClassFromTop");
          $(".homeText h3 span").eq(4).addClass("animationClassFromTop");
          $(".homeText h3 span").eq(5).addClass("animationClassFromBottom");
        } else {
          $(".homeText h3 span").eq(6).addClass("animationClassFromTop");
          $(".homeText h3 span").eq(7).addClass("animationClassFromTop");
          $(".homeText h3 span").eq(8).addClass("animationClassFromBottom");
        }
        clearTimeout(idTimeOut);
      });
    }
  }


  //====================================== HOME SLIDER (AUTO TURN)
  let slideIndex = 0;
  autoSliderHome();

  function autoSliderHome() {

    let number;
    let sliderHome = document.querySelectorAll(".homeSlider");

    for (let j = 0; j < sliderHome.length; j++) {
      $(".homeSlider").eq(j).fadeOut(1000);
      $(".bottomBorder").eq(j).removeClass("selectedBorder");
      $(".homeText").fadeOut(0.0001);
      $(".homeText h3 span").removeClass("animationClassFromBottom");
    }

    slideIndex++;
    if (slideIndex > sliderHome.length) {
      slideIndex = 1
    }
    number = slideIndex - 1;

    $(".homeSlider").eq(number).fadeIn(1000);
    $(".bottomBorder").eq(number).addClass("selectedBorder");
    $(".homeText").eq(number).fadeIn(1000);

    if (number == 0) {
      $(".homeText h3 span").eq(0).addClass("animationClassFromTop");
      $(".homeText h3 span").eq(1).addClass("animationClassFromTop");
      $(".homeText h3 span").eq(2).addClass("animationClassFromBottom");
    } else if (number == 1) {

      $(".homeText h3 span").eq(3).addClass("animationClassFromTop");
      $(".homeText h3 span").eq(4).addClass("animationClassFromTop");
      $(".homeText h3 span").eq(5).addClass("animationClassFromBottom");
    } else {
      $(".homeText h3 span").eq(6).addClass("animationClassFromTop");
      $(".homeText h3 span").eq(7).addClass("animationClassFromTop");
      $(".homeText h3 span").eq(8).addClass("animationClassFromBottom");
    }

    idTimeOut = setTimeout(autoSliderHome, 5000);
  }
// Farid End 
// ======================================================================================






});