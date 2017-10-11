var gameUtils = {
    loadImage: function (src) {
        var image = new Image();
        image.src = src;

        return image;
    },
    drawImage: function (ctx, image, x, y) {
        ctx.drawImage(image, x, y);
    }
};