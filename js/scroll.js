function updateSliderControl() {
  // Get all the slider links
  var links = document.querySelectorAll("#slider-control a");
  for (var i = 0; i < links.length; i++) {
    var link = links[i];

    // Get the section pointed to by the link
    var section = document.querySelector(link.hash);
    var sectionTop = section.offsetTop;
    var sectionBottom = section.offsetTop + section.offsetHeight;

    // Check if window.scrollY is between the section
    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}

function scrollToElement(element) {
  var topOfElement = element.offsetTop;

  TweenMax.to(window, 1, {
    scrollTo: {
      y: topOfElement
    },

    ease: Power2.easeInOut,
  });
}

function addSmoothScrolling() {
  var links = document.querySelectorAll("#slider-control a");

  for (var i = 0; i < links.length; i++) {
    var link = links[i];

    link.addEventListener('click', function(e) {
      e.preventDefault();
      // `event` is the mouse click event

      // BUG WARNING! Fix with a closure or ES6 `let`
      var href = this.hash;
      var section = document.querySelector(href);

      scrollToElement(section);
    }.bind(link));
  }
}

// Use the onscroll callback to update slider
window.onscroll = function() {
  updateSliderControl();
}

// Update the slider for the first time when the page is loaded
window.onload = function() {
  updateSliderControl();
  addSmoothScrolling();
}

