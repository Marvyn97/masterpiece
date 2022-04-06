class Disk {
    constructor(canvas, ctx, color, radius){
        this.canvas = canvas;
        this.ctx = ctx;
        this.color = color;
        this.radius = radius;
        this.position = {
            X: 50,
            y: 100,
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        this.ctx.stroke()
    }
    // création du constructor, définition des propriété avec valeur par defaut
        // color, radius, position x & y


    // declarer les getter et setter en rapport avec les propriétés du constructor



    // une derniere méthode draw(argument à trouver)






}