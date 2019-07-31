$(document).ready(function() {
  $(".essentials-card#1").on("click", function() {
    $(".essentials-card#1").addClass("active");
    $(".essentials-card#2").removeClass("active");
    $(".essentials-card#3").removeClass("active");
    $("#ess-img1").addClass("active");
    $("#ess-img2").removeClass("active");
    $("#ess-img3").removeClass("active");
  })

  $(".essentials-card#2").on("click", function() {
    $(".essentials-card#2").addClass("active");
    $(".essentials-card#1").removeClass("active");
    $(".essentials-card#3").removeClass("active");
    $("#ess-img2").addClass("active");
    $("#ess-img1").removeClass("active");
    $("#ess-img3").removeClass("active");
  })

  $(".essentials-card#3").on("click", function() {
    $(".essentials-card#3").addClass("active");
    $(".essentials-card#2").removeClass("active");
    $(".essentials-card#1").removeClass("active");
    $("#ess-img3").addClass("active");
    $("#ess-img2").removeClass("active");
    $("#ess-img1").removeClass("active");
  })

  $(".menu-btn").on("click", function() {
    $(".menu").addClass("active");
  })

  $(".menu-close").on("click", function() {
    $(".menu").removeClass("active");
  })

  $(".menu-link").on("click", function() {
    $(".menu").removeClass("active");
  })
})