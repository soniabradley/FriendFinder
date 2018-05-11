# FriendFinder

Fill out the survey to find out who, in the database, is most similar to you. 

![](app/data/JackWhite.png)

# To install
Git Clone the repository

Navigate to the folder where the repository exists

Run the command $ npm init

Run the command $ npm install body-parser express --save

Then run the command $ node server.js

Browser start with search for localhost:8080

# Built With
* App Folder Structure
    * data - folder will hold our data that we are storing in our server.  It contains all of the different freinds someone can be matched up with.
    * public - folder will contain all of our html files that we want to show to the client.
    * routing - folder will include our routes to our html files to deliver to clients as well as our api routes to deliver the data from the front to the back end and the back to the front end.

* [Chosen Library](https://harvesthq.github.io/chosen/) used on survey.html, a jQuery plug-in that makes select boxes more user-frienly.
* [For Loops](https://www.digitalocean.com/community/tutorials/how-to-construct-for-loops-in-javascript) In this application we use a nested for loop, i & j, in the api-routes.js folder.
* [Math.abs()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) function returns the absolute value of the given number.
* [body-parser](https://www.npmjs.com/package/body-parser) Middleware.  Makes it easy for the back and front-end to talk to each other.  
* [Express](https://www.npmjs.com/package/express) makes routing easy using Node.js by setting var app = express(); so we can easily call it.
    * Features robust routing
    * HTTP helpers
    * Generates applications quickly

# Deployment
Deployed through Heroku

# Author
Sonia Bradley

# License
This project is licensed under the MIT License

# Acknowledgments

