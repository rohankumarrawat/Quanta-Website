/**
* Q&A - Question and Answer Template
*
* @author StackBros (https://stackbros.in/)
* @version 1.0.0
**/


/* ===================
Table Of Content
======================
01 PRELOADER
02 MENU DROPDOWN HOVER
03 STICKY HEADER
04 STICKY BAR
05 TOOLTIP
06 POPOVER
07 BACK TO TOP
08 CHOICES
09 QUILL EDITOR
10 TOSTER
11 SWIPER SLIDER
12 FAKE PASSWORD
13 OVERLAY SCROLLBAR
14 STEPPER
====================== */

"use strict";
!function () {

    window.Element.prototype.removeClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.remove(className);
        }
        return this;
    }, window.Element.prototype.addClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.add(className);
        }
        return this;
    }, window.Element.prototype.toggleClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.toggle(className);
        }
        return this;
    }, window.Element.prototype.isVariableDefined = function () {
        return !!this && typeof (this) != 'undefined' && this != null;
    }
}();

// Get CSS var value
var ThemeColor = function () {
  return {
    getCssVariableValue: function (e) {
      var t = getComputedStyle(document.documentElement).getPropertyValue(e);
      return t && t.length > 0 && (t = t.trim()), t;
    }
  };
}();

var e = {
    init: function () {
        e.preLoader(),
        e.dropdownHover(),
        e.stickyHeader(),
        e.stickyBar(),
        e.toolTipFunc(),
        e.popOverFunc(),
        e.backTotop(),
        e.choicesSelect(),
        e.quill(),
        e.toasts(),
        e.swiperSlider(),
        e.fakePwd(),
        e.overlayScrollbars(),
        e.stepper();
        
    },
    isVariableDefined: function (el) {
        return typeof !!el && (el) != 'undefined' && el != null;
    },
    getParents: function (el, selector, filter) {
        const result = [];
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

        // match start from parent
        el = el.parentElement;
        while (el && !matchesSelector.call(el, selector)) {
            if (!filter) {
                if (selector) {
                    if (matchesSelector.call(el, selector)) {
                        return result.push(el);
                    }
                } else {
                    result.push(el);
                }
            } else {
                if (matchesSelector.call(el, filter)) {
                    result.push(el);
                }
            }
            el = el.parentElement;
            if (e.isVariableDefined(el)) {
                if (matchesSelector.call(el, selector)) {
                    return el;
                }
            }

        }
        return result;
    },
    getNextSiblings: function (el, selector, filter) {
        let sibs = [];
        let nextElem = el.parentNode.firstChild;
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
        do {
            if (nextElem.nodeType === 3) continue; // ignore text nodes
            if (nextElem === el) continue; // ignore elem of target
            if (nextElem === el.nextElementSibling) {
                if ((!filter || filter(el))) {
                    if (selector) {
                        if (matchesSelector.call(nextElem, selector)) {
                            return nextElem;
                        }
                    } else {
                        sibs.push(nextElem);
                    }
                    el = nextElem;

                }
            }
        } while (nextElem = nextElem.nextSibling)
        return sibs;
    },
    on: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            if (!(selectors instanceof HTMLElement) && selectors !== null) {
                selectors = document.querySelector(selectors);
            }
            selectors.addEventListener(type, listener);
        });
    },
    onAll: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(selectors).forEach((element) => {
                if (type.indexOf(',') > -1) {
                    let types = type.split(',');
                    types.forEach((type) => {
                        element.addEventListener(type, listener);
                    });
                } else {
                    element.addEventListener(type, listener);
                }


            });
        });
    },
    removeClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.removeClass(className);
        }
    },
    removeAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors) && (selectors instanceof HTMLElement)) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.removeClass(className);
            });
        }

    },
    toggleClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.toggleClass(className);
        }
    },
    toggleAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors)  && (selectors instanceof HTMLElement)) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.toggleClass(className);
            });
        }
    },
    addClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.addClass(className);
        }
    },
    select: function (selectors) {
        return document.querySelector(selectors);
    },
    selectAll: function (selectors) {
        return document.querySelectorAll(selectors);
    },

    // START: 01 Preloader
    preLoader: function () {
        window.onload = function () {
            var preloader = e.select('.preloader');
            if (e.isVariableDefined(preloader)) {
                preloader.className += ' animate__animated animate__fadeOut';
                setTimeout(function(){
                    preloader.style.display = 'none';
                }, 200);
            }
        };
    },
    // END: Preloader

    // START: 02 Menu Dropdown Hover
    dropdownHover: function () {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        (function ($bs) {
            document.querySelectorAll(".dropdown-hover .dropdown").forEach(function (dd) {
                dd.addEventListener("mouseenter", function (e) {
                    let toggle = e.target.querySelector(":scope>[data-bs-toggle='dropdown']");
                    if (!toggle.classList.contains("show")) {
                        $bs.Dropdown.getOrCreateInstance(toggle).toggle();
                    }
                });
                dd.addEventListener("mouseleave", function (e) {
                    let toggle = e.target.querySelector(":scope>[data-bs-toggle='dropdown']");
                    if (toggle.classList.contains("show")) {
                        $bs.Dropdown.getOrCreateInstance(toggle).toggle();
                    }
                    // Remove focus from the link
                    toggle.blur();
                });
            });
        })(bootstrap);
    }

    // Detect Keyboard Navigation
    document.addEventListener("keydown", function (e) {
        if (e.key === "Tab") {
            document.body.classList.add("user-tabbed");
        }
    });

    document.addEventListener("mousedown", function () {
        document.body.classList.remove("user-tabbed");
    });
    },

    // END: Menu Dropdown Hover

    // START: 02 Sticky Header
    stickyHeader: function () {
        var stickyNav = e.select('.header-sticky');
        if (e.isVariableDefined(stickyNav)) {
            var stickyHeight = stickyNav.offsetHeight;
            stickyNav.insertAdjacentHTML('afterend', '<div id="sticky-space"></div>');
            var stickySpace = e.select('#sticky-space');
            if (e.isVariableDefined(stickySpace)) {
                document.addEventListener('scroll', function (event) {
                    var scTop = window.pageYOffset || document.documentElement.scrollTop;
                    if (scTop >= 400) {
                        stickySpace.addClass('active');
                        e.select("#sticky-space.active").style.height = stickyHeight + 'px';
                        stickyNav.addClass('header-sticky-on');
                    } else {
                        stickySpace.removeClass('active');
                        stickySpace.style.height = '0px';
                        stickyNav.removeClass("header-sticky-on");
                    }
                });
            }
        }
    },
    // END: Sticky Header

    // START: 04 Sticky Bar
    stickyBar: function () {
        var sb = e.select('[data-sticky]');
        if (e.isVariableDefined(sb)) {
            var sticky = new Sticky('[data-sticky]');
        }
    },
    // END: Sticky Bar

    // START: 05 Tooltip
    // Enable tooltips everywhere via data-toggle attribute
    toolTipFunc: function () {
        var tooltipTriggerList = [].slice.call(e.selectAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    },
    // END: Tooltip

    // START: 06 Popover
    // Enable popover everywhere via data-toggle attribute
    popOverFunc: function () {
        var popoverTriggerList = [].slice.call(e.selectAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
          return new bootstrap.Popover(popoverTriggerEl)
        })
    },
    // END: Popover

    // START: 07 Back to Top
    backTotop: function () {
        var scrollpos = window.scrollY;
        var backBtn = e.select('.back-top');
        if (e.isVariableDefined(backBtn)) {
            var add_class_on_scroll = () => backBtn.addClass("back-top-show");
            var remove_class_on_scroll = () => backBtn.removeClass("back-top-show");

            window.addEventListener('scroll', function () {
                scrollpos = window.scrollY;
                if (scrollpos >= 800) {
                    add_class_on_scroll()
                } else {
                    remove_class_on_scroll()
                }
            });

            backBtn.addEventListener('click', () => window.scrollTo({
                top: 0,
                behavior: 'smooth',
            }));
        }
    },
    // END: Back to Top

    // START: 08 Choices
    choicesSelect: function () {
       var choice = e.select('.js-choice');
       
       if (e.isVariableDefined(choice)) {
         var element = document.querySelectorAll('.js-choice');

         element.forEach(function (item) {
           var removeItemBtn = item.getAttribute('data-remove-item-button') == 'true' ? true : false;
           var placeHolder = item.getAttribute('data-placeholder') == 'false' ? false : true;
           var placeHolderVal = item.getAttribute('data-placeholder-val') ? item.getAttribute('data-placeholder-val') : 'Type and hit enter';
           var maxItemCount = item.getAttribute('data-max-item-count') ? item.getAttribute('data-max-item-count') : 3;
           var searchEnabled = item.getAttribute('data-search-enabled') == 'false' ? false : true;

           var choices = new Choices(item, {
               removeItemButton: removeItemBtn,
               placeholder: placeHolder,
               placeholderValue: placeHolderVal,
               maxItemCount: maxItemCount,
               searchEnabled: searchEnabled,
               shouldSort: false
           });

         });
       }
    },
    // END: Choices

    // START: 09 Quill Editor
     quill: function () {
        var ql = e.select('.quilleditor');
        if (e.isVariableDefined(ql)) {
            var element = e.selectAll('.quilleditor');
            element.forEach(function (item) {
                var t = item.previousElementSibling;
                var edt = new Quill(item, {
                    modules: { toolbar: t },
                    theme: 'snow'
                  });
            });
        }
    },
    // END: Quill Editor

  	// START: 10 Toster
	toasts: function () {
		if (e.isVariableDefined(e.select('.toast-btn'))) {
			window.addEventListener('DOMContentLoaded', (event) => {
					document.querySelectorAll(".toast-btn").forEach((t) => {
						t.addEventListener("click", function() {
							var toastTarget = document.getElementById(t.dataset.target);
							var toast = new bootstrap.Toast(toastTarget);
							toast.show();
						});
					});
			});
		}
	},
	// END: Toster

    // START: 11 Swiper slider
    swiperSlider: function () {

        var swpr = e.select('[data-swiper-options]');
        if (e.isVariableDefined(swpr)) {

        // basic options for all sliders
        let defaults = {
            spaceBetween: 0,
            slidesPerView: 1,
            loop: true,
            autoplay:{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            },
            freeMode: false,
        };
        
        // call init function
        initSwipers(defaults);
        
        function initSwipers(defaults = {}, selector = ".swiper") {
            // get all swiper elements
            let swipers = document.querySelectorAll(selector);
        
            // iterate over swiper elements
            swipers.forEach((swiper) => {
            // get custom options
            let optionsData = swiper.getAttribute("data-swiper-options")
                ? JSON.parse(swiper.getAttribute("data-swiper-options"))
                : {};
        
            // combine defaults and custom options
            let options = {
                ...defaults,
                ...optionsData
            };
        
            // init swiper
            new Swiper(swiper, options);
            });
        }
        }
    },
    // END: Swiper slider

    // START: 12 Fake Password
    fakePwd: function () {
        if (e.isVariableDefined(e.select('.fakepassword'))) {
            var password = document.querySelector('.fakepassword');
            var toggler = document.querySelector('.fakepasswordicon');
        
            var showHidePassword = () => {
                if (password.type == 'password') {
                    password.setAttribute('type', 'text');
                    toggler.classList.add('fa-eye');
                } else {
                    toggler.classList.remove('fa-eye');
                    password.setAttribute('type', 'password');
                }
            };
        
            toggler.addEventListener('click', showHidePassword);
        }
    },
    // EMD: Fake Password

    // START: 13 Overlay scrollbar
    overlayScrollbars: function () {
        var os = e.select('.custom-scrollbar');
        if (os) {
          document.addEventListener("DOMContentLoaded", function() {
            var cs = document.querySelectorAll('.custom-scrollbar');
            cs.forEach(c => {
                OverlayScrollbars(c, {
                  scrollbars: {
                    autoHide: 'leave',
                    autoHideDelay: 200
                  },
                  overflowBehavior : {
                      x : "visible-hidden",
                      y : "scroll"
                  }
                 });
            });
          });
        }
    },
    // END: Overlay scrollbar

    // START: 14 Stepper
    /* @required https://github.com/Johann-S/bs-stepper */

    stepper: function () {
        var stp = e.select('#stepper');
        if (e.isVariableDefined(stp)) {
          var nxtBtn = document.querySelectorAll('.next-btn');
          var prvBtn = document.querySelectorAll('.prev-btn');

          var stepper = new Stepper(document.querySelector('#stepper'), {
            linear: false,
            animation: true
          });

          nxtBtn.forEach(function (button) {
            button.addEventListener("click", () =>{
            stepper.next()
          })
          });

          prvBtn.forEach(function (button) {
            button.addEventListener("click", () =>{
            stepper.previous()
          })
          });
        }
    },
    // END: Stepper

};
e.init();