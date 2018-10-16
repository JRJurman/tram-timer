module.exports = {
  init: () => null,
  notification: (_, {title, body}) => {
    navigator.serviceWorker.ready.then(function(registration) {
      registration.showNotification(title, {
        body,
        icon: 'favicon64.png',
      });
    });
  }
}
