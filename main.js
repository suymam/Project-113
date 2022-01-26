function setup(){
    canvas = createCanvas(1200,1200);
    canvas.position(0 , 0);
    video = createCapture(VIDEO);
    video.hide();

  
}

function draw(){
    image(video , 250,155,790,320)

    fill(250,0,0);
   stroke(0,128,0);
   circle(250,150,90);
   circle(250,490,90);
   circle(1040,150,90);
   circle(1030,490,90)
   
   fill(0,128,0);
   rect(245, 195, 15, 250);
   rect(295 ,  140, 700 , 15);
   rect(1025,195 , 15 , 250);
   rect(295,475,692,15);

    
}

function take_snapshot(){
    save("image_png");
}

