canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=upldbackground;
    background_imgtag.src=background_image;
    rover_imgtag=new Image();
    rover_imgtag.onload=upldrover;
    rover_imgtag.src=rover_image;
}
function upldbackground(){
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}
function upldrover(){
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log("Key pressed is ", keypressed);
    if(keypressed=='38'){
        move_up();
        console.log("The key pressed is up arrow");
    }
    if(keypressed=='40'){
        move_down();
        console.log("The key pressed is down arrow");
    }
    if(keypressed=='37'){
        move_left();
        console.log("The key pressed is left arrow");
    }
    if(keypressed=='39'){
        move_right();
        console.log("The key pressed is right arrow");
    }
}
function move_up(){}
function move_down(){}
function move_left(){}
function move_right(){}