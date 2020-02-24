/*
	characters sketch
	2.10.2020
*/

// loading graphics
var jerry;  // var declaration
var jenny;
var lake; 
var walk;


/* 
	runs before setup
	when preload is done, 
	setup gets called
*/
function preload() {
	jerry = loadImage('jerry.png');
	jenny = loadImage('jenny.png');
    lake = loadImage('lake.png');
    tree = loadImage('tree.png');
    build = loadImage('build.png');
   walk = loadImage('walk.png');
    boat = loadImage('boat.png');
 
}

// location variables
var jerryX = 100;
var jerryY = 100;

var jennyX = 300;
var jennyY = 150;

var story = "There was this Old couple,who loved to travel";

// park, city, peir
var currentSetting = "park";

// runs once to set up browser
function setup() {
	createCanvas(windowWidth, windowHeight);
}


function draw() {

	// conditional statement
	if (currentSetting == "park") {
		background('lightblue');

		fill('SANDYBROWN');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);
        
        // lake
        image(lake, 100, height - 160);
		image(lake, 130, height - 120);
		image(tree, 616, height - 550);
        image(tree, 716, height - 350);
    }
	
// city setting
	else if (currentSetting == "city") {
		background('lightblue');

		fill('grey');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);

		// mta
		
		
        image(build, 648, height - 550);
     
	}

// peir setting 
	else if (currentSetting == "peir") {
		background('lightblue');

		fill('darkblue');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);
// walk
		
		
        image(walk, 0, height - 200);
        image(boat, 648, height - 480);
	}



	// draw characters

	image(jerry, jerryX, jerryY);
	image(jenny, jennyX, jennyY);

	// narration
    fill('black');
	textSize(30);
	textAlign(CENTER, CENTER);
	text(story, width/4, 20, width/2);
    
    // instructions
	textSize(18);
	fill('white');
	 text("Click to go to the next scene", width - 100, height - 70, 100);
    
}

/*
	event listener
	user interaction with browser
	mousePressed
	p5 running in background to call this function when user clicks
*/


function mousePressed() {
	// change scene 
	// scene order: park, city, peir
	if (currentSetting == "park") {

		// change setting
		currentSetting = "city";

		// update story
		story = "they loved to travel to any city.";

		// update characters position
//		jerryX = 400;
//		jennyX = 500;

	} else if (currentSetting == "city") {
		currentSetting = "peir";
		story = "they loved the ocean side by the Pier";

//		jennyX = 600;

	} else if (currentSetting == "peir") {
		currentSetting = "park";
		story = "There was this Old couple,who loved to travel";

		jerryX = 100;
		jennyX = 300;
	}

}