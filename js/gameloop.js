//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var player2;
var ball;
var p1Wins = 0;
var p2Wins = 0;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player and NPCs
	player = new GameObject(25,450,25,150,"purple");
	player2 = new GameObject(canvas.width - 25,450,25,150,"green");
	ball = new GameObject(450,450,30,30,"red");
	//npc1 = new GameObject(50,500,100,100,"yellow");
	//npc2 = new GameObject(500,500,100,100,"yellow");
	//npc3 = new GameObject(950,500,100,100,"yellow");

	//Set the Animation Timer
	timer = setInterval(animate, interval);

	context.font = "20px Georgia"

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);

	//Score
	context.fillText("Player 1  | Player 2", canvas.width/2 , 50);
	context.fillText(p1Wins + "                " + p2Wins, canvas.width/2 , 75);

	//move ball
	ball.move();

	//--------------Bounce of Right----------------------
	if(ball.x >= canvas.width - ball.width/2)
	{
		ball.x = ball.prevX;
		ball.y = ball.prevY;
		ball.vx = -4;
		ball.vy = 0;
		p1Wins++;
	}
	//---------------------------------------------------

	//--------------Bounce of Left----------------------
	if(ball.x <= ball.width/2)
	{
		ball.x = ball.prevX;
		ball.y = ball.prevY;
		ball.vx = -4;
		ball.vy = 0;
		p2Wins++;
	}
	//---------------------------------------------------

	//--------------Bounce of Top----------------------
	if(ball.y <= ball.height/2)
	{
		ball.vy = -ball.vy;
	}
	//---------------------------------------------------

	//--------------Bounce of Bottom----------------------
	if(ball.y >= canvas.height - ball.height/2)
	{
		ball.vy = -ball.vy;
	}
	//---------------------------------------------------
	
	
	//Move the Player to the right
	//if(d)
	//{
		//console.log("Moving Right");
		//player.x += 4;
	//}
	//if(a)
	//{
		//console.log("Moving Left");
		//player.x += -4;
	//}

	if (w) {
		console.log("Moving UP");
		player.y += -8;
	}
	if (s) {
		console.log("Moving Down");
		player.y += 8;
	}

	if (arrowUp) {
		console.log("Moving UP");
		player2.y += -8;
	}
	if (arrowDown) {
		console.log("Moving Down");
		player2.y += 8;
	}
//////////////////////
/////////////////////
	//ball hits top
	if (ball.collisionCheck(player))
	{
		if (ball.y < player.y - 25)
		{
			ball.vx = ball.vx + ball.force;
			ball.vy = ball.vy - ball.force;
		}
	}

	//ball hits center
	if (ball.collisionCheck(player))
	{
		if (ball.y < player.y + 25 && ball.y > player.y - 25)
		{
			ball.vx = -ball.vx;
		}
	}

	//ball hits bottom
	if (ball.collisionCheck(player))
	{
		if (ball.y > player.y + 25)
		{
			ball.vx = ball.vx + ball.force;
			ball.vy = ball.vy + ball.force;
		}
	}

	//ball hits top
	if (ball.collisionCheck(player2))
	{
		if (ball.y < player2.y - 25)
		{
			ball.vx = ball.vx - ball.force;
			ball.vy = ball.vy - ball.force;
		}
	}

	//ball hits center
	if (ball.collisionCheck(player2))
	{
		if (ball.y < player2.y + 25 && ball.y > player2.y - 25)
		{
			ball.vx = -ball.vx;
		}
	}

	//ball hits bottom
	if (ball.collisionCheck(player2))
	{
		if (ball.y > player2.y + 25)
		{
			ball.vx = ball.vx - ball.force;
			ball.vy = ball.vy + ball.force;
		}
	}

//////////////////////
/////////////////////

	//--------------Bounce of Top----------------------
	if(player.y <= player.height/2)
	{
		player.y += 8;
	}
	//---------------------------------------------------

	//--------------Bounce of Bottom----------------------
	if(player.y >= canvas.height - player.height/2)
	{
		player.y -= 8;
	}
	//---------------------------------------------------

	//--------------Bounce of Top----------------------
	if(player2.y <= player2.height/2)
	{
		player2.y += 8;
	}
	//---------------------------------------------------

	//--------------Bounce of Bottom----------------------
	if(player2.y >= canvas.height - player2.height/2)
	{
		player2.y -= 8;
	}
	//---------------------------------------------------

	//Update the Screen
	player.drawRect();
	player2.drawRect();
	ball.drawCircle();
	//npc1.drawCircle();
	//npc2.drawCircle();
	//npc3.drawCircle();
}
ball.drawCircle();
