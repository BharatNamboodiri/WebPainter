var  mouse_event = "empty";
var startX,startY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = "1";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
mouse_event="mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    currentX = e.clientX-canvas.offsetLeft;
    currentY = e.clientY-canvas.offsetTop;

    if(mouse_event == "mouseDown")
    {
        console.log("yes");
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + startX + "y = "+ startY);
        ctx.moveTo(startX, startY);

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + currentX + "y = " + currentY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
    }

    startX=currentX;
    startY=currentY;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouse_event = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
mouse_event = "mouseleave";
}

function clearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
 