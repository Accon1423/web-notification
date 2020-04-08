self.addEventListener('notificationclick', function(event) {
	if (!event.action) {
		  event.notification.close();
		  event.waitUntil(self.clients.openWindow(event.notification.data.click_action));
		return;
	} else {
		event.notification.close();
	}
});

importScripts('https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.11.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.  
  firebase.initializeApp({
	    apiKey: "xyz",
	    authDomain: "abc-xyz",
	    databaseURL: "xyz.com",
	    projectId: "web-notification-d538f",
	    storageBucket: "xyzcom",
	    messagingSenderId: "12345",
	    appId: "12345"
	});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	console.log('[firebase-messaging-sw.js] Received background message',payload);
	const notificationTitle = payload.data.title;
	const notificationOptions = {
		body : payload.data.body,
		icon : payload.data.icon,
		data:{
			click_action : payload.data.click_action
		}
	}
	return self.registration.showNotification(notificationTitle,
			notificationOptions);
});

self.addEventListener('notificationclose', function(event) {
	  console.log('notification close');
	});
