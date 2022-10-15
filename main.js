img="";
Status="";
object=[];
objectDetector="";
function preload(){
img= loadImage('Bedroom.jpg')
}

function setup(){
canvas=createCanvas(650,450)
canvas.center()
objectDetector=ml5.objectDetector("cocosd",modelloaded)
document.getElementById("status").innerHTML="Detecting objects"
}
function modelloaded(){
    console.log("modelloaded")
    Status=true
    objectDetector.detect(img,gotresults)
}
function gotresults(error,results){
if(error){
console.log(error)
}
console.log(results)
object=results;
}
function draw(){
    image(img,0,0,650,450);
   
    if(Status !=""){
        for(var i =0;i<object.length;i++){
            document.getElementById("status").innerHTML="Objects:Detected" 
            fill("red")
            text(object[i].label,object[i].x,object[i].y)
            noFill()
            stroke("red")
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
    }
       
  
    
    }
    
}
function back(){
    window.location ="front.html"
}