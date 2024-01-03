// var initialImg = "/assets/img/header-logo.png";
// var scrolledImg = "/assets/img/header-logo-scrolled.png";
// var fullNameLogo = "/assets/img/full-name-logo.png";
// var fullNameLogoScrolled = "/assets/img/full-name-logo-scrolled.png";

var initialImg = "/assets/img/bce-logo.png";
var scrolledImg = "/assets/img/bce-logo.png";
var fullNameLogo = "/assets/img/bce-logo.png";
var fullNameLogoScrolled = "/assets/img/bce-logo.png";

$(document).ready(function () {
  if (window.matchMedia("(max-width: 800px)").matches) {
    $(".navLogoOne").attr("src", initialImg);
    document.getElementById("faq-mobile-version").classList.remove("d-none")
    document.getElementById("faq").classList.add("d-none")
    document.getElementById("get-started-btn").classList.add("d-none")
  } else {
    $(".navLogoOne").attr("src", fullNameLogo);
    document.getElementById("faq-mobile-version").classList.add("d-none")
    document.getElementById("faq").classList.remove("d-none")
    // document.getElementById("get-started-btn").classList.remove("d-none")
  }
});

$(window).scroll(function () {
  var value = $(this).scrollTop();
  if (value > 100) {
    // $(".nav-link").css({ color: "black" });
    document
      .getElementById("get-started-btn")
      .classList.remove("get-started-btn");
    document
      .getElementById("get-started-btn")
      .classList.add("get-started-btn-scrolled");
  } else {
    // $(".nav-link").css({ color: "white" });
    document.getElementById("get-started-btn").classList.add("get-started-btn");
    document
      .getElementById("get-started-btn")
      .classList.remove("get-started-btn-scrolled");
  }
});

$(window).scroll(function () {
  var value = $(this).scrollTop();
  if (value > 100) {
    $(".mobile-nav-toggle").css({ color: "#CF2824" });
  } else {
    $(".mobile-nav-toggle").css({ color: "white" });
  }
});

$(window).scroll(function () {
  var value = $(this).scrollTop();
  if (value > 100) {
    if (window.matchMedia("(max-width: 767px)").matches) {
      $(".navLogoOne").attr("src", scrolledImg);
    } else {
      $(".navLogoOne").attr("src", fullNameLogoScrolled);
    }
  } else {
    if (window.matchMedia("(max-width: 767px)").matches) {
      $(".navLogoOne").attr("src", initialImg);
    } else {
      $(".navLogoOne").attr("src", fullNameLogo);
    }
  }
});

$(window).scroll(function () {
  var value = $(this).scrollTop();
  if (value < 100) {
    document.getElementById("back-to-top").classList.add("d-none");
  } else {
    document.getElementById("back-to-top").classList.remove("d-none");
  }
});

$(window).scroll(function () {
  var value = $(this).scrollTop();
  if (value > 100) {
    document
      .getElementById("get-started-btn")
      .classList.remove("get-started-btn");
    document
      .getElementById("get-started-btn")
      .classList.add("get-started-btn-scrolled");
  } else {
    document.getElementById("get-started-btn").classList.add("get-started-btn");
    document
      .getElementById("get-started-btn")
      .classList.remove("get-started-btn-scrolled");
  }
});


