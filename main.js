canvas=document.getElementById("canvas");
ctx = canvas.getContext("2d");
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //define una variable para una imagen nueva
	img_imgTag.onload = uploadimg; // establece una función para cargar la variable
	img_imgTag.src = img_image;   // carga la imagen
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
window.addEventListener("keydown", my_keydown);
//Escribe el código para obtener el evento key-pressed

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			borrado();
		aplhabetkey();
		document.getElementById("d1").innerHTML="presionaste una tecla del alfabeto";
		console.log("haz precionado las teclas:del alfabeto")}

		else if(keyPressed >=48 && keyPressed<=57){
			borrado();
		numberkey();
		document.getElementById("d1").innerHTML="presionaste una tecla de los numeros";
		console.log("haz precionado las teclas:de los numeros")}

		else if(keyPressed >=37 && keyPressed<=40){
			borrado();
			arrowkey();
			document.getElementById("d1").innerHTML="presionaste una tecla de flecha";
			console.log("haz precionado las teclas:de flecha")}

		else if((keyPressed ==17) || (keyPressed==18 || keyPressed==27)){
			borrado();
			specialkey();
			document.getElementById("d1").innerHTML="presionaste ctrl/esc/alt";
			console.log("haz precionado ctrl/esc/alt")}
	

	else {
		borrado();
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
    img_image= "Alpkey.png";
	add();
}
function numberkey()
{
	img_image= "numkey.png";
	add();
}
function arrowkey()
{
	img_image= "Arrkey.png";
	add();
}
function specialkey()
{
	img_image= "spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
function borrado(){
	const context=canvas.getContext('2d');
	context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}