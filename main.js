var x_nariz = 0;
var y_nariz = 0;
var x_braco_esq = 0;
var x_braco_dir = 0;
var diferenca = 0;

function setup(){
    canvas = createCanvas(800, 500);
    video = createCapture(VIDEO);
    video.size(700, 650);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}


function modelLoaded(){
    console.log('Carreguei');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        x_nariz = results[0].pose.nose.x;
        y_nariz = results[0].pose.nose.y;
        x_braco_esq = results[0].pose.leftWrist.x;
        x_braco_dir = results[0].pose.rightWrist.x;
        diferenca = floor(x_braco_esq - x_braco_dir);
        console.log(diferenca);
    }
}


function draw(){
    background('#969A97');
    document.getElementById('largura').innerHTML = diferenca;
    fill('#F90093');
    stroke('#f90093'); 
    square(x_nariz, y_nariz, diferenca);
}