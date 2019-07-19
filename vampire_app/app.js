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
// Vampire.find(
// 	{gender: "f"},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
// Find ALL vampires that have greater than 500 victims
// Vampire.find(
// 	{victims: {
// 		$gt: 500,
// 	}},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
// Find ALL vampires that have fewer than or equal to 150 victims
// Vampire.find(
// 	{victims: {
// 		$lte: 150,
// 	}},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
// Find ALL vampires that have victim count not equal to 210234
// Vampire.find(
// 	{victims: {
// 		$ne: 210234,
// 	}},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
// Find ALL that have greater than 150 AND less than 500 victims
// Vampire.find(
// 	{victims: {
// 		$lt: 500,
// 		$gt: 150,
// 	}},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Have a title poperty
// Vampire.find(
// 	{title: {$exists: true}},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
// Do NOT have a victims property
// Vampire.find(
// 	{victims: {$exists: false}},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
// Have a title AND no victims
// Vampire.find(
// 	{title: {$exists: true},
// 	victims: {$exists: false},
// },
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
// Have victims AND the victims they have are greater than 1000
// Vampire.find(
// 	{
// 	victims: {$exists: false},
// 	victims: {$gt: 1000},
// 	},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );

/////////////////////////////////////////////////
// ### Select with OR
// Are from New York, New York, US OR New Orleans, Louisiana, US
// Vampire.find(
// 	{ $or: [
// 		{location: "New York, New York, US"},
// 		{location: "New Orleans, Louisiana, US"}
// 	]},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
// Love brooding or being tragic
// Vampire.find(
// 	{ $or: [
// 		{loves: "brooding"},
// 		{loves: "being tragic"}
// 	]},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
// Have more than 1000 victims or love marshmallows
// Vampire.find(
// 	{ $or: [
// 		{victims: {$gt: 1000}},
// 		{loves: "marshmallows"}
// 	]},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
// Have red hair or green eyes
// Vampire.find(
// 	{ $or: [
// 		{hair_color: "red"},
// 		{eye_color: "green"}
// 	]},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
/////////////////////////////////////////////////
//### Select objects that match one of several values
// Love either frilly shirtsleeves or frilly collars
// Vampire.find(
// 	{ $or: [
// 		{loves: "frilly shirtsleeves"},
// 		{loves: "frilly collars"}
// 	]},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
// Love brooding
// Vampire.find(
// 		{loves: "brooding"},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
// Love at least one of the following: appearing innocent, 
// trickery, lurking in rotting mansions, R&B music
// Vampire.find(
// 	{ $or: [
// 		{loves: "appearing innocent"},
// 		{loves: "trickery"},
// 		{loves: "lurking in rotting mansions"},
// 		{loves: "R&B music"}
// 	]},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
// Love fancy cloaks but not if they also love either top 
// hats or virgin blood 
// Vampire.find(
// 		{$and: [ 
// 			{loves: "fancy cloaks"},
// 			{loves: { $nin: ["top hats", "virgin blood"]}},
// 		]},
// 	(err,vampireFound) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampireFound);
// 		}
// 	}
// );
/////////////////////////////////////////////////
//### Negative Selection
// Love ribbons but do not have brown eyes
Vampire.find(
	{$and: [ 
		{loves: "ribbons"},
		{eye_color: { $nin: "brown"}},
	]},
		(err,vampireFound) => {
		if(err){
			console.log(err);
		} else {
			console.log(vampireFound);
		}
	}
);
// Are not from Rome
Vampire.find(
		{location: { $nin: "Rome, Italy"}},
		(err,vampireFound) => {
		if(err){
			console.log(err);
		} else {
			console.log(vampireFound);
		}
	}
);
// Do not love any of the following
// [fancy cloaks, frilly shirtsleeves, appearing innocent, 
// being tragic, brooding]
Vampire.find(
		{loves: { $nin: ["fancy cloaks", "frilly shirtsleeves", "appearing innocent", "being tragic", "brooding"]}},
		(err,vampireFound) => {
		if(err){
			console.log(err);
		} else {
			console.log(vampireFound);
		}
	}
);
// Have not killed more than 200 people
Vampire.find(
	{victims: {$lte: 200}},
	(err,vampireFound) => {
		if(err){
			console.log(err);
		} else {
			console.log(vampireFound);
		}
	}
)
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
