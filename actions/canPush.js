module.exports = {
  init: () => null,
  requestPermission: (permission, _, actions) => {
    navigator.serviceWorker.register('sw.js');
    Notification.requestPermission().then(function(result) {
      actions.setPermission(result)
    })
    return 'requesting'
  },
  setPermission: (permission, result) => result
}
