
// Add order Class when screen resize
$(window).on('resize', function() {
    if($(window).width() < 751) {
        $('.first').addClass('order-first');
        $('.last').addClass('order-last');
    }else{
        $('.first').removeClass('order-first');
        $('.last').removeClass('order-last');
    }
})

$(window).on('resize', function() {
    if($(window).width() < 991) {
        $('.padded').removeClass('pl-5');
    }else{
        $('.padded').addClass('pl-5');
    }
})


//Owl Carousel init
$(document).ready(function(){
    $('.owl-one').owlCarousel({
        loop:true,
        // margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.owl-two').owlCarousel({
        loop:true,
        // margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

});
  

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

