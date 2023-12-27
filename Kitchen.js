img=""
status="";

function setup()
{
    canvas=createCanvas(620,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="-_-";
}

function preload()
{
img=loadImage("dog_cat.jpg");
}

function draw()
{
    image(img,0,0,620,420);
    fill("red");
    text("doge",35,45);
    noFill();
    stroke("green");
    rect(30,40,450,350);

    fill("red");
    text("cat",300,100);
    noFill();
    stroke("green");
    rect(300,90,270,320);
}

function modelLoaded()
{
    console.log("Modal is lodad");
    status=true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}