// Simple addition operation returns value 102
64 + 38; 
// Simple subtraction operation returns value -176
28 - 204;
// Simple multiplication operation returns value 28
14 * 2;
// Simple division operation returns value 7
77 / 11;
// Looks like spaces are optional, returns value 7 
77/11;
//Complex operation returns value 404
25 + 488 + 11 - 20 * 12 / 2;
//ERROR, not sure if = operator has a use with simple operations...
//55=;

//I'm not sure how to run this using different ages without additional functionality. Returns: You're doing good!
	var lifetime = 75;

	if (lifetime >= 75) {
	   var greeting1 = "You're doing good!";
	    console.log(greeting1);
	} else {
	   var greeting2 = "You lived an average lifetime.";
	   console.log(greeting2);
	}


//01 | This object represents a boutique's stats and calcualtes their revenue. Returns: 2000
var boutique = {
  since: 2014;
  store: "Akasa Salon";
  owners: ["Adriene", "Lauren"];
  income: function revenue() {
  	var sales = 7000;
  	var commission = 2000;
  	console.log(sales - commission); 
  };
  services: var offering = {
  	hairCut: ["mens", "womens", "kids"];
  	hairColor: ["full", "partial"];
  	hairProduct: "Davines";
  }
};

//02 | This object represents a rent-a-clown and calcualtes his rate based on a 3 hour booking. Returns: 475. 
var clown = {
	age: 38;
	gender: "male";
	availability: ["friday", "saturday", "sunday"];
	fee: function total() {
		var baseRate = 250;
		var perHour = 75;
		var booking = 3;
		console.log(baseRate + (perHour * booking));
	}
	talents: var skills = {
		magic: ["card tricks", "balloon animals"]
		personas: ["Clumbsy Clown", "Hobo Clown", "Evil Clown"]
		rating: 4; 
	} 
}

//03 | This object represents The Studio at GE and builds a team with a custom message. Returns: Our concepting team for this project will include Isa, Robert, and Vicky.
var GE = {
	years: 4;
	business: "Capital";
	collegues: ["Vicky", "Robin", "Robert", "Jarrett", "Clare", "Linda", "Isa", "Joe", "Andy"];
	team: function teamBuild() {
		var designer = "Isa";
		var copyWriter = "Robert";
		var creativeDirector = "Vicky";
		console.log("Our concepting team will include " + designer + ", " + copyWriter + ", and " + creativeDirector + ".");
	}
	management: var Jeff = {
		title: "Studio Director";
		location: "Chicago";
		years: 13;
		annoyingBoss: true;
	}
}

//04 | This object represents my favorite band and calculates the total singles on all published albums. Returns: 7
var theSundays = {
	numAlbums: 3;
	genere: "90's Rock";
	members: ["Harriet Wheeler", "David Gavurin"]
	songs: function totalSingles() {
		var album1 = 2;
		var album2 = 2;
		var album3 = 3;
		console.log(album1 + album2 + album3)
	}
	stalkerStats: var laura = {
		numSignedAlbums: 3;
		numLiveShows: 1;
		singByHeart: true;
		favTrack: ["Skin & Bones"]
	}
}

//05 | ...I tried to run this without repeating firstName within nested function and it didn't work. Returns: Christine loves to go to the pool, to the movies, or even travel to Disney! 
var Sister = {
	born: 1977;
	firstName: "Christine";
	offspring: ["Addison", "Aiden", "Holden"];
	fun: function weekend() {
		var	firstName = "Christine";
		var outdoor = "pool";
		var indoor = "movies";
		var travel = "Disney";
		console.log(firstName + " loves to go to the " + outdoor + ", to the " + indoor + ", or even travel to " + travel + "!");
	}
	husband: var Sean = {
		sport: "soccer";
		job: "teacher";
		age: 41;
		food: ["Chocolate", "coffee"]
	}
}

//06 | This object details a closet and counts inventory minus loss with the function. Returns: 11750
var onlineCloset = {
	size: 10;
	buyer: "La Garconne";
	brands: ["Band of Outsiders", "Wood Wood", "Common Projects"]
	inventory: function totalSkus() {
		var tops = 6000;
		var bottoms = 4500;
		var accessories = 1500;
		var stolen = 250;
		console.log(tops + bottoms + accessories - stolen);
	}
	partner: var Wildfang = {
		international: false;
		tomboys: true;
		url: "www.wildfang.com";
	}
}

//07 | This object profiles a medical patient's lifestyle and calculates daily pill intake. Returns: Corker is taking 6 pills daily. 
var patient = {
	room: 407;
	lastName: "Corker"
	hobbies: ["cooking", "triathlons", "gardening"];
	health: function rxStatus() {
		var meds = 3;
		var perDay = 2;
		console.log("Corker is taking " + (meds * perDay) + " pills daily.");
	}
	doctors: var md2014() = {
		chiro: true;
		neuro: true;
		ent: true;
		accup: false;
	}
}

//08 | ...experimented with punctuation in variables here, but I know that won't work in the real world because these values represent user inputs. Still returns: All you'll need is mint syrup, lemon juice, and, cucumbers! 
var recipe = {
	page: 90;
	name: "Fizzy Cucumber Mint Fesca"
	ingredients: ["cucumbers", "lemon juice", "mint syrup"]
	instructions: function mixology() {
		var a = "mint syrup, ";
		var b = "lemon juice, ";
		var c = "and, cucumbers!";
		console.log("All you'll need is " + a + b + c);
	}
	serving: var glassware = {
		full: "Mason jar"
		half: "slim"
	} 
}

//09 | ...hey this is kind of like MadLibs! The history of pantyhose. Returns: Dear God, it's me, Laura. Did pantyhose really come about to disguise women's vericose veins, bruises, and leg hair? 
var pantyhose = {
	origin: 1920;
	altTerm: "hosiery";
	material: ["spandex", "nylon", "silk", "rayon"];
	purpose: function whyHose() {
		var x = "vericose veins";
		var y = "bruises";
		var z = "leg hair";
		console.log("Dear God, it's me, Laura. Did pantyhose really come about to disguise women's " + x + ", " + y + ", and " + z + "?");
	}
	men: var maleUses = {
		medical: "compression";
		fetish: "cross dressing";
		uniform: "fishermen";
		sport: "horse jockey";
	}
}

//10 | ...guess you can't use the word class as a param. Oh, I probably should have incorporated the methods we learned yesterday into more functions. Return: ["javascript", "sass", "css", "html"]
var sanityCheck = {
	date: 06102014;
	school: "The Ironyard";
	subjects: ["html", "css", "sass", "javascript"];
	level: function ciriculum() {
		var subjects = ["html", "css", "sass", "javascript"];
  console.log(subjects.reverse());
  }
	instructor: var Tim = {
		hometown: "Scranton";
		fav: "whiskey";
		course: "Front End Engineering";
		awesome: true;
		greatTeacher: true;
	}
}


