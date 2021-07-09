DESCRIPTION  DOCUMENT

https://hackathon-kiit.web.app/

Description document link, whose text has been copied below.
https://docs.google.com/document/d/135ti38SCYINYoza33lor-v5Iin8Dz07V7Vj-4v8FQ6w/edit#

Table of Contents

Project Title:	1
Overview:	1
Features:	2
Technology Stack Used:	2
Functional Description of the Project:	2
Implementation Description of the Project:	3

Project Title:
	Email Scheduler WebApp
Overview:
	A full stack web application where users can 
Login /SignUp
Send Emails
View History
Schedule an email for future
View all scheduled mails
Features:
Authentication:
	For new users:
Sign In with Google
Sign in with username and Password
	For existing users
Login 

Compose Button to compose a new email

Schedule Button to schedule emails for future

History Button that displays all past emails with Date of Sending


Technology Stack Used:
Frontend:
HTML
CSS
JavaScript (React.js)
Redux with  Persist Store
Firebase (Deployment Environment)

Backend:

MongoDB (Database)
Express (Connection)
SendGrid (Email service)
Heroku (Deployment Environment)

Functional Description of the Project:

The first step is authorization. We provide three options for authentication to the user-
	For new users:
Google Account Authentication
Email Password Authentication
	For Existing Users:
Login using Email and Password

After authentication, the user lands on the home page, which displays a table of all scheduled emails for the future.

The home has two more buttons- 
Compose: On clicking the compose button, the send email dialog box appears where the user can enter the email address to which he has to send the mail, enter the subject and the email body.
The user can now choose between 
Sending an email to the recipient right now, or
Scheduling the email for future 

Once the user selects any of the options, the dialog box exits.
If the user clicks on send mail, the email is sent and the sent email details and contents is pushed to the history tab, which the user can view on clicking the History Button on the homepage.

If the user clicks on schedule mail, the sending of the email is scheduled to the date and time as selected by the user and the details of the email are saved in the Schedule Mail list which is displayed on the homepage.


Implementation Description of the Project:
Firebase Authentication Services are used for User Signups and Logins.

MaterialUI was used to implement the UI at several instances in the project.

ReactJS was used as a framework for the project. 

The email sending service was implemented using SendGrid Email Delivery Service

MongoDB was used for database requirements, such as, storing all sent and scheduled emails.

Redux was used to globally store the user authentication data for Google Signup, user scheduled emails and Firebase login and signup. 

Heroku was used for deployment of the web application.
Express was used to handle GET and POST requests.



 

