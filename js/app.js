var typed = new Typed(".text-slider",{
  strings : [
    "I am Developer Designer",
    "I am Developer Developer",
    "I am Developer Freelancer",
    "I am Developer Designer",
    "I am Developer Developer",
    "I am Developer Freelancer",
    "I am Developer Designer",
    "I am Developer Developer",
    "I am Developer Freelancer",
    "I am Developer Designer",
    "I am Developer Developer",
    "I am Developer Freelancer",
    "I am Developer Designer",
    "I am Developer Developer",
    "I am Developer Freelancer",
    "I am Developer Designer",
    "I am Developer Developer",
    "I am Developer Freelancer",
    "I am Developer Designer",
    "I am Developer Developer",
    "I am Developer Freelancer",
    "I am Developer Designer",
    "I am Developer Developer",
    "I am Developer Freelancer",
    "I am Developer Designer",
    "I am Developer Developer",
    "I am Developer Freelancer",
    "I am Developer Designer",
    "I am Developer Developer",
    "I am Developer Freelancer",
    "I am Developer Designer",
    "I am Developer Developer",
    "I am Developer Freelancer",
    "I am Developer Designer",
    "I am Developer Developer",
    "I am Developer Freelancer",
  ],
  typeSpeed:90,
  backSpeed:60,
  loop:true
});
$('.card').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
  });
var rellax = new Rellax('.rellax');
// if ($(".text-slider").length == 1) {
//   var typed_strings = $(".text-slider-items").text();
//   var typed = new Typed(".text-slider", {
//     strings: typed_strings.split(", "),
//     typeSpeed: 50,
//     loop: true,
//     backDelay: 900,
//     backSpeed: 300,
//   });
// }
