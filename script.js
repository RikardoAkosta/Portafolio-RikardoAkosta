$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
    })
});
//typing Animation Script
var typed = new Typed(".typing", {
    strings: ["Developer", "Front-end", "Freelancer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Developer", "Front-end", "Freelancer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});