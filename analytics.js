window.dataLayer = window.dataLayer || [];

function gtag(){
  dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'G-0185VEVG7M', {
  anonymize_ip: true
});

// reusable event tracker
function trackEvent(action, category, label) {
  gtag('event', action, {
    event_category: category,
    event_label: label
  });
}