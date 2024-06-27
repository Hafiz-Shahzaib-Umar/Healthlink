jQuery(
  (function ($) {
    "use strict";

    // Header Sticky
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 120) {
        $(".navbar-area").addClass("is-sticky");
      } else {
        $(".navbar-area").removeClass("is-sticky");
      }
    });

    // Button Hover JS
    $(function () {
      $(".default-btn")
        .on("mouseenter", function (e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find("span").css({ top: relY, left: relX });
        })
        .on("mouseout", function (e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find("span").css({ top: relY, left: relX });
        });
    });

    // Nice Select JS
    $("select").niceSelect();

    // Odometer JS
    $(".odometer").appear(function (e) {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });

    // Testimonials Slider
    $(".testimonials-slider").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      autoplayHoverPause: true,
      autoplay: true,
      smartSpeed: 1000,
      margin: 0,
      items: 1,
    });

    // FAQ Accordion
    $(function () {
      $(".accordion")
        .find(".accordion-title")
        .on("click", function () {
          // Adds Active Class
          $(this).toggleClass("active");
          // Expand or Collapse This Panel
          $(this).next().slideToggle("fast");
          // Hide The Other Panels
          $(".accordion-content").not($(this).next()).slideUp("fast");
          // Removes Active Class From Other Titles
          $(".accordion-title").not($(this)).removeClass("active");
        });
    });
  })(jQuery)
);
