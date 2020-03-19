$(document).ready(function() {
    $('.adobe').css('width', '30%');
    $('.html').css('width', '90%');
    $('.css').css('width', '80%');
    $('.jquery').css('width', '30%');
    $('.javascript').css('width', '55%');
    $('.bootstrap').css('width', '90%');
    $('.wordpress').css('width', '25%');
    $('.php').css('width', '55%');
    $('.mysql').css('width', '75%');
  });

  $(function() {
    var selectedClass = "";
    $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('animation');
    $("#gallery").fadeTo(300, 1);
    }, 300);
    });
    });