song_1= "";
song_2= "";
leftWristX= 0;
leftWristY= 0;
rightWristX= 0;
rigthWristY= 0;

function draw(){
    image(video, 0, 0, 600, 500);
}

function setup(){
    canvas= createCanvas(600, 500);
    canvas.center()
    video= createCapture(VIDEO);
    video.hide()

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;

        console.log("leftWristX= " + leftWristX + "leftWristY= " + leftWristY);
        console.log("rightWristX= " + rightWristX + "rightWristY= " + rightWristY);
    }
}

function preload(){
    song_1= loadSound("music.mp3");
    song_2= loadSound("music2.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}