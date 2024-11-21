//get a 2d canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//load player images in
const playerOneImage = new Image();
playerOneImage.src="images/marisa_flight.png";

const playerTwoImage = new Image();
playerTwoImage.src="images/kiki_flight.png";

let player = {
    x: 10,
    y: 200
};

let comp = {
    x: 10,
    y: 150
};

//draw in canvas
function draw() {
    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //draw finish line
    ctx.fillRect(750, 0, 10, canvas.height);
    //draw player
    ctx.drawImage(playerOneImage, player.x, player.y);
    //draw computer
    ctx.drawImage(playerTwoImage, comp.x, comp.y);
}

function update() {
    if(player.x > 750 && player.x > comp.x) {
        ctx.font = "50px serif";

        ctx.fillText("You win", 200, 40);
        cancelAnimationFrame(gameLoop);
        return;
    } 

    else if(comp.x > 750 && player.x < comp.x) {
        ctx.font = "50px serif";

        ctx.fillText("You lose", 200, 40);
        cancelAnimationFrame(gameLoop);
        return;
    }

    //move computer amount (potentially rename variable)
    comp.x += 1;
}

//continuous update animation
function gameLoop(){
    draw();
    update();
    requestAnimationFrame(gameLoop);
}
//on load, run draw function
document.body.onload = function() {
    //run function
    draw();
}

//move the player
document.onkeyup = function(event) {
    //right
    if(event.key == "d") {
        player.x += 10;
        draw(); 
    }
    
    //left
    if (event.key == "a") {
        player.x -= 10;
        draw(); 
    }

    //up
    if (event.key == "w") {
        player.y -= 10;
        draw(); 
    }

    //down
    if (event.key == "s") {
        player.y += 10;
        draw(); 
    }
}

document.getElementById("btnStart").onclick = function () {
    requestAnimationFrame(gameLoop);
}