$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

function openTrailer(){
    var trailer =  document.querySelector(".trailer");
    var video =  document.querySelector("video");
    video.pause();
    video.currentTime = 0;

    trailer.classList.toggle("active");
}