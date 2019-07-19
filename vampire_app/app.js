// 1. Require your node modules
const mongoose = require("mongoose");
// 2. Require your model (and possibly your extra data source);
const Vampire = require("./models/vampire.js")
// 3. Connect your database and collection name
connectionString = "mongodb://localhost/vampire";
// 4. Open your mongoose connection
mongoose.connect(connectionString, {useNewUrlParser: true});
const vampireData = require("./populateVampires.js");
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(vampireData,(err, data) => {
//     console.log("added provided vampire data")
//     mongoose.connection.close();
//  });
// ### Add some new vampire data
// Vampire.create({
// 	name: "Count Drew",
// 	hair_color: "Black",
// 	eye_color: "Blue",
// 	dob: "December 13, 1542",
// 	loves: ["rocks", "silent films"],
// 	location: "Olympia, WA",
// 	gender: "m",
// 	victims: 100,
// 	}, (err, createdVampire) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(createdVampire);
// 		}
// 	}
// );

// Vampire.create({
// 	name: "Count Dracula XXXV",
// 	hair_color: "White",
// 	eye_color: "Black",
// 	dob: "January 1, 2015",
// 	loves: ["hamsters", "doritos"],
// 	location: "Florence, Italy",
// 	gender: "m",
// 	victims: 1,
// 	}, (err, createdVampire) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(createdVampire);
// 		}
// 	}
// );

// Vampire.create({
// 	name: "Susan",
// 	hair_color: "Red",
// 	eye_color: "Hazel",
// 	dob: "March 3, 1900",
// 	loves: ["jazz", "lillies"],
// 	location: "Omaha, NE",
// 	gender: "f",
// 	victims: 34,
// 	}, (err, createdVampire) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(createdVampire);
// 		}
// 	}
// );

// Vampire.create({
// 	name: "Countess Maria",
// 	hair_color: "Brown",
// 	eye_color: "Brown",
// 	dob: "October 31, 1982",
// 	loves: ["empanadas", "Merluza"],
// 	location: "La Serena, Chile",
// 	gender: "f",
// 	victims: 0,
// 	}, (err, createdVampire) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(createdVampire);
// 		}
// 	}
// );
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Find ALL female vampires
Vampire.find(
	{gender: "f"},
	(err,vampireFound) => {
		if(err){
			console.log(err);
		} else {
			console.log(vampireFound);
		}
	}
);
// Find ALL vampires that have greater than 500 victims
Vampire.find(
	{victims: {
		$gt: 500,
	}},
	(err,vampireFound) => {
		if(err){
			console.log(err);
		} else {
			console.log(vampireFound);
		}
	}
);
// Find ALL vampires that have fewer than or equal to 150 victims
Vampire.find(
	{victims: {
		$lte: 150,
	}},
	(err,vampireFound) => {
		if(err){
			console.log(err);
		} else {
			console.log(vampireFound);
		}
	}
);
// Find ALL vampires that have victim count not equal to 210234
Vampire.find(
	{victims: {
		$ne: 210234,
	}},
	(err,vampireFound) => {
		if(err){
			console.log(err);
		} else {
			console.log(vampireFound);
		}
	}
);
// Find ALL that have greater than 150 AND less than 500 victims
Vampire.find(
	{victims: {
		$lt: 500,
		$gt: 150,
	}},
	(err,vampireFound) => {
		if(err){
			console.log(err);
		} else {
			console.log(vampireFound);
		}
	}
);
/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
