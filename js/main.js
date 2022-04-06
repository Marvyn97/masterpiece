// déclarer les variables qui vont recevoir le canvas et le context
let myCanvas = document.getElementById("canvas");
let ctx = myCanvas.getContext("2d");
let c = new Disk(myCanvas, ctx);
console.log(ctx);

// fonction getMouseLocation(e) qui va retourner la position de la souris
function getMouseLocation(e) {
  let mouse_X = e.clientX;
  let mouse_Y = e.clientY;
}

// fonction onClickCanvas(e) qui va récuperer la position du clic et appeler differente méthodes pour génerer le dessin
function onClickCanvas() {
  console.log("qsdqsd");
  this.draw();
}

// au chargement de la page, on va récupérer le canvas, le context et installer un écouteur
document.addEventListener("DomContentLoaded", () => {
  document.addEventListener("click", getMouseLocation());
  myCanvas.addEventListener("click", onClickCanvas());
});
