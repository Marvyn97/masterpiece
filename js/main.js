// déclarer les variables qui vont recevoir le canvas et le context
let myCanvas = document.getElementById("canvas");
let ctx = myCanvas.getContext("2d");

//console.log(ctx);

// fonction getMouseLocation(e) qui va retourner la position de la souris
function getMouseLocation(e) {
 const position = {
   x: e.offsetX,
   y: e.offsetY,
 }
 return position;
}

// fonction onClickCanvas(e) qui va récuperer la position du clic et appeler differente méthodes pour génerer le dessin
function onClickCanvas(e) {
    const location = getMouseLocation(e);
    const color = getRandomColor();
    const radius = getRandomInteger(10, 50);
    const disk = new Disk(myCanvas, ctx);

    disk.newColor = color;
    disk.newRadius = radius;
    disk.newPosition = location;

    disk.draw(ctx);
}

// au chargement de la page, on va récupérer le canvas, le context et installer un écouteur
document.addEventListener("DOMContentLoaded", () => {
  myCanvas.addEventListener("click", onClickCanvas);
});
