/**
 * Template Name: Rapid - v2.0.0
 * Template URL: https://bootstrapmade.com/rapid-multipurpose-bootstrap-business-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
function getTime()
		{
			var date=new Date();
			var comingdate= new Date("September 1, 2020 00:00:00");
			
		 
			var hr=formatTime(date.getHours());
			var min=formatTime(date.getMinutes());
			var sec=formatTime(date.getSeconds());
			document.getElementById("time").innerHTML=hr+":"+min+":"+sec;
		}
		function formatTime(time)
		{
			if(time>9)
				return time;
			else
				return "0"+time;
		}
		var opacity=1;
		var bool=true;
		function slider()
		{
			var slider=document.getElementById("slider");
			var slider2=document.getElementById("slider2");
			var slidersm=document.getElementById("slidersm");
			//var slider2sm=document.getElementById("slider2sm");
			if(bool)
				opacity=opacity-0.1;
			else
				opacity=opacity+0.1;
			slider.style.opacity=opacity;
			slider2.style.opacity=opacity;
			slidersm.style.opacity=opacity;
			//slider2sm.style.opacity=opacity;
			if(opacity<=0)
			{
				slider.innerHTML="We are starting our evaluation class for free.";
				slider2.innerHTML="Prepare yourself for the market with CoEdify Interview Preparation Bootcamp.";
				slidersm.innerHTML="Learn from top level MNC professionals.";
				//slider2sm.innerHTML="Prepare yourself for the market with CoEdify Interview Preparation Bootcamp.";
				bool=false;
			}
			else if(opacity>=1)
			{
				slider.innerHTML="Finding hard to get a good IT job after the gap, not to worry.";
				slider2.innerHTML="Learn from top level MNC professionals.";
				slidersm.innerHTML="Prepare yourself for the market with CoEdify Interview Preparation Bootcamp..";
				//slider2sm.innerHTML="Learn from top level MNC professionals.";
				bool=true;
			}
		}
		//setInterval(getTime,1000);
		setInterval(slider,200);
(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $(".main-nav a, .mobile-nav a, .scrollto").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-scrolled")) {
            top_space = top_space - 40;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".main-nav, .mobile-nav").length) {
          $(".main-nav .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $(".mobile-nav-overly").fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".main-nav, .mobile-nav");
  var main_nav_height = $("#header").outerHeight();

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    nav_sections.each(function () {
      var top = $(this).offset().top - main_nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find("li").removeClass("active");
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
    });
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
    });
    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $(".venobox").venobox();
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 4,
      },
      900: {
        items: 6,
      },
    },
  });
})(jQuery);

// Client testimonials
var prevButton =
    '<button type="button" data-role="none" class="slick-prev" aria-label="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1"><path fill="#FFFFFF" d="M 16,16.46 11.415,11.875 16,7.29 14.585,5.875 l -6,6 6,6 z" /></svg></button>',
  nextButton =
    '<button type="button" data-role="none" class="slick-next" aria-label="next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M8.585 16.46l4.585-4.585-4.585-4.585 1.415-1.415 6 6-6 6z"></path></svg></button>';

$(".single-item").slick({
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1000,
  cssEase: "ease-in-out",
  prevArrow: prevButton,
  nextArrow: nextButton,
});

$(".quote-container").mousedown(function () {
  $(".single-item").addClass("dragging");
});
$(".quote-container").mouseup(function () {
  $(".single-item").removeClass("dragging");
});
