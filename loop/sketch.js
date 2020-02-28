/*
	loop 
	2.26.2020
*/

var deerImage, cloudImage, treeImage,birdImage;

function mouseClicked() {
	Images();
}

function preload() {
	deerImage = loadImage('deer.png');
	cloudImage = loadImage('cloud.png');
	treeImage = loadImage('tree.png');
    birdImage = loadImage('bird.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	// background colors
	background('#4996d1');

	noStroke();
	fill('lightblue');
	rect(0, height/2, width, height/2);

	fill('green');
	rect(0, height * 2/3, width, height/3);

	// images
	
	// clouds
	for (let x = -40; x <= width; x += 200) {
		image(cloudImage, x, 50 - x/10);
		image(cloudImage, x, 200 - x/10);
	}

	// trees
	for (let x = 90; x <= width; x += 370) {
		image(treeImage, x, height/2 - 130 + x/20);
	}

    // birds
	for (let x = 110; x <= width; x += 390) {
		image(birdImage, x, height/2 - 120 + x/10);
	}
    
	// deer
    
	for (let x = 130; x <= width; x += 370) {
		image(deerImage, x, height/1 - 200 + x/100);
    
    }

}