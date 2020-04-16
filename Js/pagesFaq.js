$(function () {


  $(document).on('click', '.accHeader', function () {

if ($(this).hasClass('activeHead')) {
  
  $(this).next().slideToggle(1000);
  $(this).toggleClass("activeHead")
  $(this).children('i').toggleClass('fa-angle-up')
  return;
}

    let headersNext = [];
    headersNext = $('.accBody').toArray();
    
    let iS = [];
    iS = $('.accHeader i').toArray();
    let headers=[];
    headers=$('.accHeader').toArray();
    
    let headersA=[];
    headersA=$('.accHeader a').toArray();

    
    for (let i = 0; i < headersNext.length; i++) {
      
      $(headersNext[i]).slideUp(1000);
      $(iS).removeClass('fa-angle-up')
      $(headersA).removeClass('colorDefault');
     
      $(headers).removeClass('activeHead')
     
    }

    $(this).children('a').addClass('colorDefault');
    $(this).addClass("activeHead")
    $(this).next().slideDown(1000);
    $(this).children('i').addClass('fa-angle-up')
    
  })
  


  
//  Accardeon
  $('.acc2').hide();
  $('.acc3').hide();
  $('.acc4').hide();
  $('.acc5').hide();
  $('.сlick1').on('click', function () {
    $('.acc1').show();
    $('.acc2').hide();
    $('.acc3').hide();
    $('.acc4').hide();
    $('.acc5').hide();
  })
  $('.сlick2').on('click', function () {
    $('.acc1').hide();
    $('.acc3').hide();
    $('.acc4').hide();
    $('.acc5').hide();
    $('.acc2').show();

    $(".1acc").next().slideDown();
    // $(".1acc").css('background', "rgba(0, 125, 242, 1)")
    $(".1acc").children("a").css("color","white");
    $(".1acc").children("i").css("color","white");
  })

  $('.сlick3').on('click', function () {
    // $(".1acc").css('background', "white")
    $('.acc1').hide();
    $('.acc2').hide();
    $('.acc4').hide();
    $('.acc5').hide();
    $('.acc3').show();

    $(".3acc").next().slideDown();
    // $(".3acc").css('background', "rgba(0, 125, 242, 1)")
    $(".3acc").children("a").css("color","white");
    $(".3acc").children("i").css("color","white");
  })
  $(".сlick4").on('click', function () {
    $('.acc1').hide();
    $('.acc2').hide();
    $('.acc3').hide();
    $('.acc5').hide();
    $('.acc4').show();
 
    $(".4acc").next().slideDown();
    $(".4acc").css('background', "rgba(0, 125, 242, 1)")
    $(".4acc").children("a").css("color","white");
    $(".4acc").children("i").css("color","white");
    
  })
  $('.сlick5').on('click', function () {
    $('.acc1').hide();
    $('.acc2').hide();
    $('.acc3').hide();
    $('.acc4').hide();
    $('.acc5').show();
    $(".5acc").next().slideDown();
    $(".5acc").css('background', "rgba(0, 125, 242, 1)");
    $(".5acc").children("a").css("color","white");
    $(".5acc").children("i").css("color","white");
  })


console.log($('body').width());

let width=$('html').width();

if (width<786) {



  $(".twoClick2").on('click',function () {
    $('.twoAcc1').hide();
    $('.twoAcc2').show();
    $('.twoAcc2').removeClass('noneClassMajid');
    $(".1acc").next().slideDown();
    $(".1acc").css('background', "rgba(0, 125, 242, 1)")
  })
  $(".twoClick3").on('click',function () {
    $('.twoAcc1').hide();
    $('.twoAcc2').hide();
    $('.twoAcc3').show();
    $('.twoAcc3').removeClass('noneClassMajid');
  })
  $(".twoClick4").on('click',function () {
    $('.twoAcc1').hide();
    $('.twoAcc2').hide();
    $('.twoAcc3').hide();
    $('.twoAcc4').show();
    $('.twoAcc4').removeClass('noneClassMajid');
  })
  $(".twoClick5").on('click',function () {
    $('.twoAcc1').hide();
    $('.twoAcc2').hide();
    $('.twoAcc3').hide();
    $('.twoAcc4').hide();
    $('.twoAcc5').show();
    $('.twoAcc5').removeClass('noneClassMajid');
  })

}
  else{
  $('.twoAcc2').addClass('noneClassMajid');
  $('.twoAcc3').addClass('noneClassMajid');
  $('.twoAcc4').addClass('noneClassMajid');
  $('.twoAcc5').addClass('noneClassMajid');
  $('.twoAcc1').addClass('noneClassMajid');
 }

  // 

  $(document).on('mouseenter', '.pagesFaqContent', function () {
    $(this).css('border', ' 1px solid rgba(0, 125, 242, 1)');


    $(this).children('h5').css('color', 'rgba(0, 125, 242, 1)');
    $(this).children('i').css('color', 'white');

  })

  $(document).on('mouseleave', '.pagesFaqContent', function () {
    $(this).css('border', '1px solid rgba(0, 0, 0, 0.151)');

    $(this).children('h5').css('color', 'black');

    $(this).children('a ').css('color', 'black');
    $(this).children('i').css('color', 'black');
  });

 





  AOS.init({
    delay:1000
  });

})


