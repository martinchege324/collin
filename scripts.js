$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    margin: 0,
    nav: true,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

$(document).ready(function () {
  var owl = $(".owl-carousel-featured-stories");
  owl.owlCarousel({
    margin: 20,
    nav: true,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

$(function () {
  $(document).on("hover", ".mainnav .dropdown-menu", function (e) {
    e.stopPropagation();
  });
});

// Menu plus icons
$(".mainNavigation li ul")
  .siblings("a")
  .addClass("hasChildren")
  .before('<a class="plus" href="#" tabindex="-1" />');
//$('.sectionNavigation li ul').siblings('a').before('<a class="plus" href="#" />');
$(".plus").click(function () {
  var plus = $(this);
  plus.toggleClass("plusOpen").siblings("ul").slideToggle("fast");
  plus.parent("li").toggleClass("open");
  return false;
});

let closeMenu = function () {
  $(".cover").fadeOut("fast");
  $(".siteNavigation")
    .removeClass("open")
    .animate(
      {
        right: "-390px",
      },
      300,
      function () {
        $(".siteNavigation").hide();
      }
    );
  return false;
};

// Mobile menu toggle
$(".menuToggle").click(function () {
  if (!$(".cover").length) {
    $("body").append('<div class="cover"></div>');
  }
  $(".cover").fadeIn("fast");
  $(".siteNavigation").addClass("open").show().animate(
    {
      right: "+0px",
    },
    300
  );
  // force focus (and TAB index) to first menu item:
  $("li.dropdown:nth-child(1) > a:nth-child(2)").focus();

  // close menu on ESC
  $(document).keyup(function (e) {
    if (e.which == 27) {
      closeMenu();
    }
  });

  return false;
});
$(".menuClose").click(function () {
  closeMenu();
  return false;
});

jQuery(document).ready(function ($) {
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $(".cd-top");

  //hide or show the "back to top" link
  $(window).scroll(function () {
    $(this).scrollTop() > offset
      ? $back_to_top.addClass("cd-is-visible")
      : $back_to_top.removeClass("cd-is-visible cd-fade-out");
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass("cd-fade-out");
    }
  });

  //smooth scroll to top
  $back_to_top.on("click", function (event) {
    event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      scroll_top_duration
    );
  });
});
