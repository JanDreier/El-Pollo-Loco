class Coin extends MovableObject {
    IMAGES = ["img/8.Coin/Moneda1.png", "img/8.Coin/Moneda2.png"];
    sound = new Audio("audio/coin.mp3");
    height = 100;
    width = 100;


    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 250);
    }

    playSound() {
        this.sound.play();
    }
}