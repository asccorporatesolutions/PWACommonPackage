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

      var date = 'testuser';
      var newsTitle = token;

                    // Fetch the latest data.
                    var request = new XMLHttpRequest();
                    request.onreadystatechange = function () {
                        if (request.readyState === XMLHttpRequest.DONE) {
                            if (request.status === 200) {
                              //  var response = JSON.parse(request.response);

                               // alert("News added succesfully!!");
                                // Call the Send method on the hub. 
                               // notifications.server.sendNotification($('#message').val(), $('#urlmsg').val());
                                // Clear text box and reset focus for next comment. 
                               // $('#message').val('').focus();

                               
                            }
                        } else {
                            // Return the initial weather forecast since no data is available.
                            //alert(response.responseText);
                        }
                    };
                    request.open('GET', "https://bcvideoloadqa.aon.net:498/api/values/addnews?title=" + newsTitle + "&&date=" + date);
                    request.send();
                   
    /* $.ajax({
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
      })*/
    })
    .catch((err) => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
  }
