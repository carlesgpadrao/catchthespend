var game = {
    init: function () {
        this.initializeCanvas();
        this.initializeAssets();
    },

    initializeCanvas: function () {
        this.canvas = document.getElementById('gameBoard');
        this.context = this.canvas.getContext('2d');
    },

    initializeAssets: function (callback) {
        this.backgroundImage = gameUtils.loadImage(gameConfig.backgroundImage);
        this.catcherImage = gameUtils.loadImage(gameConfig.catcherImage);
        this.spendImage = gameUtils.loadImage(gameConfig.spendImage);
    },
};