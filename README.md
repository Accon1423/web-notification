# web-notification
Steps to setup the project :

1.) Download apache tomcat server 

2.) Clear the content of ROOT folder except WEB-INF

3.) Copy and paste the content of the repository except screenshot folder.

4.) Open the index.html and firebase-messaging-sw.js file

5.) Replace the below credentials in it with your valid credentials in both the files

	    apiKey: "xyz",
	    authDomain: "abc-xyz",
	    databaseURL: "xyz.com",
	    projectId: "web-notification-d538f",
	    storageBucket: "xyzcom",
	    messagingSenderId: "12345",
	    appId: "12345"

6.) Save the files.

7.) Start the server at localhost:8080

Steps to generate the web notification:

1.) Hit the server at localhost:8080

2.) Click on the button Generate Firebase Token

3.) A token will be generated and permissionGranted column will change to true if connection is succesful.

4.) Copy the token.

5.) Use any api tool such as postman to generate the notification with the following parameters :

	            url:'https://fcm.googleapis.com/fcm/send',
                type: 'POST',
                Authorization: BearerToken---your legacyServerKey
                contentType: 'application/json; charset=utf-8'
				body:
					{"data":{
						"title":"WEB NOTIFICATION",
						"body":"Web notification example rendered by the user",
						"icon":"http://localhost:8080/icon.png",
						"click_action":"https://www.google.com"
					},
						"registration_ids":[your-token]
					}

6.)Click on send and see if the request is successful.

7.)Wait for some second to recieve the notification on your system (See the image screenshot for reference)
