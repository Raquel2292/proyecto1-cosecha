class Manzana {
    constructor() {
        this.img = new Image()
        this.img.src = "./imagenes/manzana.png.png"
        this.x = 140;
        this.y = 50;
        this.w = 50;
        this.h = 50;
        this.speed = 4;
        this.moveManzana = 25;
    }

    drawManzana = () => {
        ctx.drawImage (this.img, this.x, this.y, this.w, this.h);
    }

    movimientoApple = () => {
        this.y = this.y + this.speed;
    }
   
}

class Sandia {
    constructor() {
        this.img = new Image()
        this.img.src = "./imagenes/sandia.png"
        this.x = 300;
        this.y = 50;
        this.w = 50;
        this.h = 50;
        this.speed = 6;
        this.moveSandia = 25;
    }

    drawSandia = () => {
        ctx.drawImage (this.img, this.x, this.y, this.w, this.h);
    }

    movimientoSandia = () => {
        this.y = this.y + this.speed;
    }
   
}

class Cereza{
    constructor() {
        this.img = new Image()
        this.img.src = "./imagenes/cereza.png"
        this.x = 400;
        this.y = 50;
        this.w = 50;
        this.h = 50;
        this.speed = 5;
        this.moveCereza = 25;
    }

    drawCereza = () => {
        ctx.drawImage (this.img, this.x, this.y, this.w, this.h);
    }

    movimientoCereza = () => {
        this.y = this.y + this.speed;
    }
   
}

class Platano{
    constructor() {
        this.img = new Image()
        this.img.src = "./imagenes/platano.png"
        this.x = 530;
        this.y = 50;
        this.w = 50;
        this.h = 50;
        this.speed = 3;
        this.movePlatano = 25;
    }

    drawPlatano = () => {
        ctx.drawImage (this.img, this.x, this.y, this.w, this.h);
    }

    movimientoPlatano = () => {
        this.y = this.y + this.speed;
    }
}

    class Pocion{
        constructor() {
            this.img = new Image()
            this.img.src = "./imagenes/pocion.png.png"
            this.x = 200;
            this.y = 50;
            this.w = 50;
            this.h = 50;
            this.speed = 8;
            this.movePlatano = 25;
        }
    
        drawPocion = () => {
            ctx.drawImage (this.img, this.x, this.y, this.w, this.h);
        }
    
        movimientoPocion = () => {
            this.y = this.y + this.speed;
        }

}