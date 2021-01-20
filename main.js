canvas= document.getElementById("canvas1");
ctx= canvas.getContext("2d");

car1_width= 150;
car1_height= 70;
car1_image= "car1.2.jpg"
car1_x= 10;
car1_y= 10;

car2_width= 150;
car2_height= 70;
car2_image= "car2.jpg";
car2_x= 10;
car2_y=100;

background_can_img="track3.jpg"

function add(){
    background_canvas= new Image;
    background_canvas.onload= set_background;
    background_canvas.src= background_can_img;

    car1_img= new Image;
    car1_img.onload=set_img;
    car1_img.src= car1_image;

    car2_img= new Image;
    car2_img.onload=set_img2;
    car2_img.src=car2_image;
}
function set_background() {
    ctx.drawImage(background_canvas,0,0,canvas.width,canvas.height);
}
function set_img(){
    ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
}
function set_img2(){
    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed= e.KeyCode;
    console.log(keyPressed);
    if(KeyPressed=="38"){
        console.log("up");
    }
    if(KeyPressed=="37"){
        console.log("left");
    }
    if(KeyPressed=="39"){
        console.log("right");

    }
    if(KeyPressed=="40"){
        console.log("down");
    }
    if(KeyPressed=="65"){
        console.log("a key");

    }
    if(KeyPressed=="83"){
        console.log("s key");
    }
    if(KeyPressed=="83"){
        console.log("s key");
    }
    if(KeyPressed=="68"){
        console.log("d key");
    }
    if(KeyPressed=="87"){
        console.log("w key");
    }
}
