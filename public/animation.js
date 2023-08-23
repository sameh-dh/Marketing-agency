// helper for limiting window scroll event listener calls
function debounce(func, wait = 10, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const header = document.querySelector('.header');
const headline = document.querySelector('.headline');
const subheadline = document.querySelector('.subheadline');

const headlineSlideIn = function() {
  headline.classList.add('header-slide-in');
}
const subheadlineSlideIn = function() {
  subheadline.classList.add('header-slide-in');
}

const headerToggleFade = function() {
  if (window.scrollY > 100) {
    header.classList.add('header-fade-out');
  } else {
    header.classList.remove('header-fade-out');
  }
}

const panels = document.querySelectorAll('.panel');

const panelSlideIn = function() {
  // for each panel, check if window bottom has scrolled past start of panel -> if yes, add .panel-fade-in class
  panels.forEach(panel => {
    const slideInAt = (window.scrollY + window.innerHeight) - panel.offsetHeight / 4;
    const panelMidpoint = panel.offsetTop + panel.offsetHeight / 4;
    if (slideInAt > panelMidpoint) {
      panel.classList.add('panel-fade-in');
    }
  })
}

setTimeout(headlineSlideIn, 1000);
setTimeout(subheadlineSlideIn, 2000);
window.addEventListener('scroll', debounce(function() {
  panelSlideIn();
  headerToggleFade();
}));
