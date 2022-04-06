// déclarer les variables qui vont recevoir le canvas et le context
let myCanvas = document.getElementById("canvas");
let ctx = myCanvas.getContext("2d");
let c = new Disk(myCanvas, ctx);
console.log(ctx);



// fonction getMouseLocation(e) qui va retourner la position de la souris
function getMouseLocation(e) {
    mouse_X = e.clientX;
    mouse_Y = e.clientY;
    console.log("sdsd", mouse_X);
}




// fonction onClickCanvas(e) qui va récuperer la position du clic et appeler differente méthodes pour génerer le dessin
function onClickCanvas(){
    console.log("qsdqsd");
    this.draw();
}



// au chargement de la page, on va récupérer le canvas, le context et installer un écouteur 
document.addEventListener("DomContentLoaded", () => {

document.addEventListener("click", getMouseLocation(e));
myCanvas.addEventListener("click", onClickCanvas());

});