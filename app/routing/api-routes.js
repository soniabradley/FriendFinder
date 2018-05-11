var friends = require("../data/friends.js");

module.exports = function (app) { 

// build a route to view friends.js on localhost:1080/api/friends
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {

		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		console.log(req.body);

// Here we take the result of the user's survey POST and parse it.
var userData = req.body;
var userScores = userData.scores;

console.log(userScores); 

var totalDifference = 0;
// nested forloop
for (var i =0; i < friends.length; i++) {
	
	console.log(friends[i]);
	totalDifference = 0;

	for (var j = 0; j < friends[i].scores[j]; j++) {
		totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

		if (totalDifference <= bestMatch.friendDifference) {

			bestMatch.name = friends[i].name;
			bestMatch.photo = friends[i].photo;
			bestMatch.friendDifference = totalDifference;

		}
	}

}

friends.push(userData);

res.json(bestMatch);

});

}