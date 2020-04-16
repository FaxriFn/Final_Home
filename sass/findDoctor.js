$(function () {
    



$( function() {
    $( "#datepicker" ).datepicker({
        showWeek: true,
        firstDay: 1
    });
  } );
  $('.modalFindDoctor').hide();
  
  $('.modalClick').on('click',function () {
     
    $('.modalFindDoctor').show();

    //   $('.modalFindDoctor').show();
      $('body').css("overflow","hidden")
  })

  $('.circle').on('click',function () {
    $('.modalFindDoctor').hide();

    $('body').css("overflow","auto")
  })

  $('.windowClick').on('click',function () {
    $('.modalFindDoctor').hide();

    $('body').css("overflow","auto")
  })
  AOS.init();


  

})