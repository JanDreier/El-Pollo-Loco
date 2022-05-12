class BottleBar extends StatusBar {
    IMAGES = [
        "img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png",
        "img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png",
        "img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png",
        "img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png",
        "img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png",
        "img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png",
    ];
    x = 480;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
    }
}
