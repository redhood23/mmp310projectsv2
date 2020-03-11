/*
	array 
	3.8.20
*/

var Cloud;
var air;
var ground;
var bird;

function setting() {
    // background colors
        background('skyblue')
}

function preload() {
    Cloud = loadImage('Cloud.png')
    ground = loadImage('ground.png')
    air = loadImage('air.gif')
    bird = loadImage('bird.gif')
}

/* position variables for images */
var CloudX = []; // empty array
var CloudY = [];
var numClouds = 10;

var groundX = [];
var numAir = 1
var airX = [];
var airY = [];

var bird = [];
var numBird = 6
var birdX = [];
var birdY = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    setting();

    // add cloud positions
    let x = -50;
    for (let i = 0; i < numClouds; i++) {
        CloudX.push(x);
        // update x, distributing number of clouds across canvas
        x += width / numClouds + random(-100, 100);
        CloudY.push(random(height / 2));


    }

    //adding ground positions
    for (let x = 0; x < width; x += ground.width) {
        groundX.push(x);
    }

    //adding air positions
    for (let i = 0; i < numAir; i++) {
        airX.push(width + random(width));
        airY.push(height - ground.height - air.height + 10);
    }

    //adding air positions
    for (let i = 0; i < numAir; i++) {
        airX.push(width + random(width));
        airY.push(height - ground.height - air.height + 10);


    }

    //adding bird positions
    for (let i = 0; i < numBird; i++) {
        birdX.push(width + random(width));
        birdY.push(height - ground.height - bird.height - 300);


    }

}

function draw() {
    background('skyblue');


    //drawing ground level
    for (let i = 0; i < groundX.length; i++) {
        image(ground, groundX[i], height - ground.height)
    }

    //air
    for (let i = 0; i < numAir; i++) {
        image(air, airX[i], airY[i]);
        airX[i] -= 2
    }
    //bird
    for (let i = 0; i < numBird; i++) {
        image(bird, birdX[i], birdY[i]);
        birdX[i] -= 2
    }
    // draw clouds
    for (let i = 0; i < numClouds; i++) {
        image(Cloud, CloudX[i], CloudY[i]);



        // animate x
        CloudX[i] += 1;

        // check if cloud is beyond right side of canvas
        if (CloudX[i] > width) {
            // reset cloud back to left side
            CloudX[i] = -Cloud.width;



        }
    }



}
