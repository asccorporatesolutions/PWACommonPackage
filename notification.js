// Initialises firebase
// TODO: fill in firebase config information
var config = {
  apiKey: "AIzaSyC6VydiwyEuRgphpx8RoVW6Ab0S7w1DQTg",
  authDomain: "testproject-803fd.firebaseapp.com",
  databaseURL: "https://testproject-803fd.firebaseio.com",
  storageBucket: "testproject-803fd.appspot.com",
  messagingSenderId: "526397621409"
};

firebase.initializeApp(config);
var messaging = firebase.messaging();

// On load register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('firebase-messaging-sw.js').then((registration) => {
      // Successfully registers service worker
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
      messaging.useServiceWorker(registration);
    })
    .then(() => {
      // Requests user browser permission
      return messaging.requestPermission();
    })
    .then(() => {
      // Gets token
      return messaging.getToken();
    })
    .then((token) => {
      // Simple ajax call to send user token to server for saving
     $.ajax({
        type: 'POST',
        url: '/api/setToken',
        dataType: 'json',
        data: JSON.stringify({token: token}),
        contentType: 'application/json',
        success: (data) => {
          console.log('Success ', data);
        },
        error: (err) => {
          console.log('Error ', err);
        }
      })
    })
    .catch((err) => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
  }
