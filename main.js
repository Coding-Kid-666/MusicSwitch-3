leftWrist_X = 0;
leftWrist_Y = 0;

rightWrist_X = 0;
rightWrist_Y = 0;

var song_1 = "";
var song_2 = "";

function preload(){
    song_1 = loadSound("song1.mp3");
    song_2 = loadSound("song2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}
function modelLoaded(){
    console.log("PoseNet has successfully been set up.");
}
function gotPoses(results){
    if(results){

        leftWrist_X = results[0].pose.leftWrist.x;
        leftWrist_Y = results[0].pose.leftWrist.y;

        rightWrist_X = results[0].pose.rightWrist.x;
        rightWrist_Y = results[0].pose.rightWrist.y;

        console.log("Left wrist X = " + leftWrist_X + " left wrist Y = " + leftWrist_Y);
        console.log("Right wrist X = " + rightWrist_X + " right wrist Y = " + rightWrist_Y);



    }
}
