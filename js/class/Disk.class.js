class Disk {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.color = "red";
        this.radius = 10;
        this.position = {
            x: 0,
            y: 0,
        }
    }

    set newPosition(position){
        this.position = position;
    }

    set newColor(color){
        this.color = color
    }

    set newRadius(radius){
        this.radius = radius;
    }

    draw(ctx) {

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
    // création du constructor, définition des propriété avec valeur par defaut
        // color, radius, position x & y


    // declarer les getter et setter en rapport avec les propriétés du constructor



    // une derniere méthode draw(argument à trouver)






}