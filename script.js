document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});

// GA helper (must exist before usage)
function trackEvent(action, category, label) {
  if (typeof gtag !== "undefined") {
    gtag('event', action, {
      event_category: category,
      event_label: label
    });
  }
}

// Scroll tracking
window.addEventListener("scroll", () => {

  let scrollPercent =
    (window.scrollY + window.innerHeight) /
    document.documentElement.scrollHeight * 100;

  if (scrollPercent > 25 && !window.scroll25) {
    trackEvent('scroll_25', 'engagement', '25_percent');
    window.scroll25 = true;
  }

  if (scrollPercent > 50 && !window.scroll50) {
    trackEvent('scroll_50', 'engagement', '50_percent');
    window.scroll50 = true;
  }

  if (scrollPercent > 75 && !window.scroll75) {
    trackEvent('scroll_75', 'engagement', '75_percent');
    window.scroll75 = true;
  }

  if (scrollPercent > 90 && !window.scroll90) {
    trackEvent('scroll_90', 'engagement', '90_percent');
    window.scroll90 = true;
  }

});