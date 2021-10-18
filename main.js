var canvas = new fabric.Canvas('myCanvas');
bimgw=30;
bimgh=30;
playerx=10;
playery=10;
var playobject="";
var blockobject="";
function player_update() {
fabric.Image.fromURL("player.png", function(Img){
    playobject = Img;
     playobject.scaleToWidth(150);
      playobject.scaleToHeight(140);
       playobject.set({ top:playery, left:playerx
});
canvas.add(playobject);
});
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        blockobject = Img;
        blockobject.scaleToWidth(bimgw);
        blockobject.scaleToHeight(bimgh);
    blockobject.set({ top:playery, left:playerx
    });
    canvas.add(blockobject);
    });
    }

    window.addEventListener("keydown", keyd);
    function keyd(e) {
        keypressed=e.keyCode;
        if (e.shiftKey==true&& keypressed=='80') {
            bimgw=bimgw+10;
            bimgh=bimgh+10;
            document.getElementById("current_width").innerHTML=bimgw;
            document.getElementById("current_height").innerHTML=bimgh;
        }

        if (e.shiftKey==true&& keypressed=='77') {
            bimgw=bimgw-10;
            bimgh=bimgh-10;
            document.getElementById("current_width").innerHTML=bimgw;
            document.getElementById("current_height").innerHTML=bimgh;
        }

        if(keypressed=='38') {
            up();
            console.log("up");
        }

        if(keypressed=='40') {
            down();
            console.log("down");
        }

        if(keypressed=='39') {
            right();
            console.log("right");
        }

        if(keypressed=='37') {
            left();
            console.log("left");
        }

        if(keypressed=='71'){
            new_image('ground.png');
            console.log("g");
        }

        if(keypressed=='87'){
            new_image('wall.jpg');
            console.log("w");  
        }

        if(keypressed=='76'){
            new_image('light_green.png');
            console.log("l");  
        }

        if(keypressed=='84'){
            new_image('truck.jpg');
            console.log("t");  
        }

        if(keypressed=='82'){
            new_image('roof.jpg');
            console.log("r");  
        }

        if(keypressed=='89'){
            new_image('yellow_wall.png');
            console.log("y");  
        }

        if(keypressed=='68'){
            new_image('dark_green.png');
            console.log("d");  
        }

        if(keypressed=='85'){
            new_image('unique.png');
            console.log("u");  
        }

        if(keypressed=='67'){
            new_image('cloud.jpg');
            console.log("c");  
        }
    }

    function up() {
        if (playery>=0) {
            playery=playery-bimgh;
            console.log("block image height="+bimgh);
            console.log("when up arrow key is pressed, x="+playerx+"y="+playery);
            canvas.remove(playobject);
            player_update(); 
        }
    }

    function down() {
        if (playery<=550) {
            playery=playery+bimgh;
            console.log("block image height="+bimgh);
            console.log("when up arrow key is pressed, x="+playerx+"y="+playery);
            canvas.remove(playobject);
            player_update(); 
        }
    }

    function right() {
        if (playerx<=855) {
            playerx=playerx+bimgw;
            console.log("block image width="+bimgw);
            console.log("when up arrow key is pressed, x="+playerx+"y="+playery);
            canvas.remove(playobject);
            player_update(); 
        }
    }

    function left() {
        if (playerx>=0) {
            playerx=playerx-bimgw;
            console.log("block image width="+bimgw);
            console.log("when up arrow key is pressed, x="+playerx+"y="+playery);
            canvas.remove(playobject);
            player_update(); 
        }
    }