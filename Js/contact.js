$(document).ready(function(){
   function errorMessage(){
       
       
       let errors=['The field is required','<span>The e-mail address entered is invalid.</span>','<span>The Number entered is invalid.</span>'];
       let inputs=$('.inputError').toArray();
    //    let finalError=$('<span>')

       $(document).on('click','.buttonDiv input', function(){
        $('.secondErrorMessage').hide();

           let deleteErrors=[];
          deleteErrors= $('.errorMesage').toArray();

          for(let i=0;i<deleteErrors.length;i++){
              $(deleteErrors[i].remove());
          }
      for(let i = 0;i<inputs.length;i++){
          if($(inputs[i]).val()==''){
            $(inputs[i]).parent().append(`<span class="errorMesage">${errors[0]}</span>`); 
          }else{
            $(inputs[i]).next().remove();

          }
          if(i==1){
            if($(inputs[i]).val().indexOf('@')==-1){
                console.log($(inputs[i]).next())
                $(inputs[1]).next().remove();

                $(inputs[1]).parent().append(`<span class="errorMesage">${errors[1]}</span>`);
                  
              }else{
                 $(inputs[i]).next().remove();


              }

          }
          if(i==2){
              let numberText=[];
              numberText=$(inputs[i]).val();
              console.log(numberText);
              for(let i=0;i<numberText.length;i++){
                  if(numberText[i].charCodeAt(0)>48 && numberText[i].charCodeAt(0)<57){

                  }else{
                $(inputs[2]).parent().append(`<span class="errorMesage">${errors[2]}</span>`);
                break;


                  }
              }
              
            //   if($(inputs[i]).val())
          }
         let deleteFinalMessage=[];
         deleteFinalMessage=$('.errorMesage').toArray()
        
         
          
          if(deleteFinalMessage.length>0){
              console.log("ozudu");
              
              $('.secondErrorMessage').show();
          }
          
      }
    })
       
       
   }
   function scrollShower(){
       $('.contactTextDiv').offset();
       let breakPoint=$('.contactTextDiv').offset().top

       console.log( $('.contactTextDiv').offset().top);
        let scrollTop;
       $(document).scroll(function(){
        scrollTop=$(document).scrollTop();
        console.log(scrollTop);
        if(scrollTop>breakPoint){
            console.log("ozudu");
            
            $('.scrollerTop').css('z-index','111');
            
            $('.scrollerTop').css('opacity','1');


        } else{
            $('.scrollerTop').css('opacity','0');
            $('.scrollerTop').css('z-index','-1');

 




        }
        
        
    })
   
       
   }
   function contentToTop(){
       $(document).on('click','.scrollerTop',function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
       })
   }
   errorMessage();
   scrollShower();
   contentToTop();
   AOS.init({
    delay: 1000,

  });
    
})