// ------------------------- Loader Spiner

$(window).on("load", function () {
  setTimeout(function () {
    $(".loader").fadeOut();
    $(".loader-mask").fadeOut("slow");
  }, 1000);
});

/*=============== DARK LIGHT THEME ===============*/
$(document).ready(function () {
  const themeButton = $("#theme-button");
  const darkTheme = "dark-theme";
  const iconTheme = "ri-sun-fill";
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  const getCurrentTheme = () =>
    $("body").hasClass(darkTheme) ? "dark" : "light";
  const getCurrentIcon = () =>
    themeButton.hasClass(iconTheme) ? "ri-moon-clear-fill" : "ri-sun-fill";

  if (selectedTheme) {
    $("body").toggleClass(darkTheme, selectedTheme === "dark");
    themeButton.toggleClass(iconTheme, selectedIcon === "ri-moon-clear-fill");
  }

  themeButton.on("click", function () {
    $("body").toggleClass(darkTheme);
    themeButton.toggleClass(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
});

// _-------------------Drop Down Open close data
$(document).ready(function () {
  $(".gx-sb-item > a").on("click", function (e) {
    e.preventDefault();
    const $dropdown = $(this).next(".dropdown-data");
    const $arrow = $(this).find(".drop-arrow");
    $(".gx-sb-item .dropdown-data").not($dropdown).slideUp();
    $(".gx-sb-item .drop-arrow").not($arrow).removeClass("rotate");
    $dropdown.slideToggle();
    $arrow.toggleClass("rotate");
  });
});

// _-------------------responsive Data from Gx-topic
$(document).ready(function () {
  $(document).on("click", ".header__toggle", function () {
    $(".gx-topic").toggleClass("gx-open-topic");
    if ($(".gx-topic").hasClass("gx-open-topic")) {
      $(".gx-side-overlay").fadeIn(300);
    } else {
      $(".gx-side-overlay").fadeOut(300);
    }
  });
  $(document).on("click", ".gx-side-overlay", function () {
    $(".gx-topic").removeClass("gx-open-topic");
    $(".gx-side-overlay").fadeOut(300);
  });
});

// --------------- Full screen data
// Full Screen Popup Box
$(".gx-full-card").on("click", function () {
  $(this).hide();
  $(this)
    .parent(".header-tools")
    .append(
      '<a href="javascript:void(0)" class="m-l-10 gx-full-card-close"><i class="ri-close-fill"></i></a>'
    );
  const cardWrapper = $(this).closest(".gx-card").parent();
  cardWrapper.addClass("gx-full-screen");
  setTimeout(() => {
    cardWrapper.addClass("active");
  }, 10);
  $(this)
    .closest(".gx-card")
    .parent()
    .parent()
    .append('<div class="gx-card-overlay show"></div>');
});
$("body").on("click", ".gx-card-overlay, .gx-full-card-close", function () {
  $(".gx-card").find(".gx-full-card-close").remove();
  $(".gx-card").find(".gx-full-card").show();

  const cardWrapper = $(".gx-card").parent();
  cardWrapper.removeClass("active");

  setTimeout(() => {
    cardWrapper.removeClass("gx-full-screen");
  }, 300);

  $(".gx-card-overlay").removeClass("show");
  setTimeout(() => {
    $(".gx-card-overlay").remove();
  }, 300);
});
//------------------------- Drop down File structer-1
$(document).ready(function () {
  $("body").on("click", ".gx-struct-drop", function (e) {
    const $dropBtn = $(this);
    const $subMenu = $dropBtn.nextAll().filter(".gx-sub");
    if ($subMenu.length) {
      const isOpen = $subMenu.hasClass("show");
      $(".gx-sub.show").css({
        opacity: "0",
        transform: "translateY(-20px)",
        maxHeight: "0",
      });
      setTimeout(function () {
        $(".gx-sub.show").removeClass("show");
      }, parseInt("300", 10));
      if (!isOpen) {
        setTimeout(function () {
          $subMenu.addClass("show");
          void $subMenu[0].offsetWidth;
          $subMenu.css({
            opacity: "1",
            transform: "translateY(0)",
            maxHeight: $subMenu[0].scrollHeight + "px",
          });
        }, parseInt("310", 10));
      }
    }
  });
});
//------------------------- Drop down File structer-2
$(document).ready(function () {
  $("body").on("click", ".gx-struct-drop-under", function () {
    const $dropBtn = $(this);
    const $subMenu = $dropBtn.nextAll().filter(".gx-sub-under");
    if ($subMenu.length) {
      const isOpen = $subMenu.hasClass("show");
      $(".gx-sub-under.show").each(function () {
        $(this)
          .css({
            opacity: "0",
            transform: "translateY(-20px)",
            maxHeight: "0",
          })
          .removeClass("show");
      });
      if (!isOpen) {
        setTimeout(function () {
          $subMenu.addClass("show");
          void $subMenu[0].offsetWidth;

          $subMenu.css({
            opacity: "1",
            transform: "translateY(0)",
            maxHeight: $subMenu[0].scrollHeight + "px",
          });
        }, 10);
      }
    }
  });
});
//------------------------- Drop down File structer-3
$(document).ready(function () {
  $("body").on("click", ".gx-struct-drop-back", function () {
    const $dropBtn = $(this);
    const $subMenu = $dropBtn.nextAll().filter(".gx-sub-under-under");
    if ($subMenu.length) {
      const isOpen = $subMenu.hasClass("show");
      $(".gx-sub-under-under.show").each(function () {
        $(this)
          .css({
            opacity: "0",
            transform: "translateY(-20px)",
            maxHeight: "0",
          })
          .removeClass("show");
      });
      if (!isOpen) {
        setTimeout(function () {
          $subMenu.addClass("show");
          void $subMenu[0].offsetWidth;

          $subMenu.css({
            opacity: "1",
            transform: "translateY(0)",
            maxHeight: $subMenu[0].scrollHeight + "px",
          });
        }, 10);
      }
    }
  });
});

// _navbar link
$(document).ready(function () {
  $(document).on("click", ".navbar-link", function (event) {
    event.preventDefault(); 
    const targetUrl = $(this).attr("href"); 
    console.log("Redirecting to:", targetUrl);
    window.location.href = targetUrl; 
  });
});
