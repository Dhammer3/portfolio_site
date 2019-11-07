$(document).ready(function(){
  $('#slides').superslides({
    animation:'fade',
    play: 5000,
    pagination: false,

  });
  var typed = new Typed(".typed", {
    strings:["Student.","Knowledge and Insights Research Aide.", "Undergraduate Researcher.","U.S. Army Veteran."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:5
        },
    }
  });

  var skills=$(".skillsSection").offset().top;

  $(window).scroll(function(){
    if(window.pageYOffset> skills-$(window).height()+200){
      $('.chart').easyPieChart({
          easing: 'easeInOut',
          barColor: '#fff',
          trackColor: false,
          scaleColor:false,
          lineWidth: 4,
          size: 152,
          onStep: function(from, to, percent){
            $(this.el).find('.percent').text(Math.round(percent));
          }
             //your options goes here
         });
    }
  });

});
