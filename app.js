$(function () {

    var accordion = $('#accordion');
    var headings = $('.heading');
    var paragraphs = $('p');


    var animateAccordion = function (elem, duration, easing) {
        paragraphs.stop(true, true).slideToggle(duration, easing);
        $(elem).stop(true, true).slideToggle(duration, easing);
    };
   // paragraphs.not(':first').hide();

   $('h2').on('click' ,function(){
        console.log($(this));
              $(this).css("font-weight","550"); 
              $(this).css("color","black");  
              $(this).next();  
              //console.log( $(this).next()) ;
 
    });

    headings.on('click' ,function(){
        console.log($(this));
        
              $(this).next();  
              //console.log( $(this).next()) ;

              if (!$(this).next().is(':visible')) {
                $(this).next().trigger('showParagraph');
            }      
    });

});


$(function () {
    $("#accordion").accordion({
        duration: 500
    });
});

