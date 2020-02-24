/*
	functions sketch
	2.16.2020
*/

// loading graphics
var jerry;  // var declaration
var jenny;
var lake; 
var mta;
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
    mta = loadImage('mta.png'); 
    build = loadImage('build.png');
    taxi = loadImage('taxi.png')
   walk = loadImage('walk.png');
    boat = loadImage('boat.png');
  bird = loadImage('bird.png');
}

// location variables
var jerryX = 90;
var jerryY = 90;

var jennyX = 200;
var jennyY = 110;

var story = "There was this Old couple, Bill & Jane. they loved to travel";

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
        image(bird, 400, height - 500);
        image(bird, 500, height - 400);
        image(bird, 960, height - 450);
    }
	
// city setting
	else if (currentSetting == "city") {
		background('lightblue');

		fill('grey');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);

		// mta
		
		image(mta, 416, height - 350);
        image(build, 648, height - 550);
        image(taxi, 400, height - 110 );
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
         image(bird, 300, height - 500);
          image(bird, 400, height - 540);
         image(bird, 850, height - 550);
        
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
	 text("Click to go to the next scene or Use the arrow keys", width - 100, height - 100, 100);
    
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
		story = "Bill & Jane love to visit NYC, to see the new art.";

		// update characters position
//		jerryX = 400;
//		jennyX = 500;

	} else if (currentSetting == "city") {
		currentSetting = "peir";
		story = "bill loves to go to the ocean side by the Pier, where bill meet jane";

//		jennyX = 600;

	} else if (currentSetting == "peir") {
		currentSetting = "park";
		story = "There was this Old couple, Bill & Jane. they loved to travel";

		jerryX = 90;
		jennyX = 200;
        

        
        
        
        
        
        
	}    
    
}


   function keyPressed() {
	
	// test the keycode 
	if (keyCode == 39) {
		// change scene 
		// scene order: park, city, peir
		if (currentSetting == "park") {

			// change setting
			currentSetting = "city";

			// update story
			story = "they loved to travel to any city.";

			// update characters position
//			jerryX = 400;
//			jennyX = 500;

		} else if (currentSetting == "city") {
			currentSetting = "pier";
			story = "they loved the ocean side by the Pier";

//			jennyX = 600;

		} else if (currentSetting == "peir") {
			currentSetting = "park";
			story = "There was this Old couple,who loved to travel";

			jerryX = 90;
			jennyX = 200;
		}
  
        

    }




}