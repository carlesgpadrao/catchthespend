var game = {
    init: function () {
        this.initializeCanvas();
        this.initializeAssets();
        this.initializeCharacters();

        setTimeout(this.drawCanvasElements.bind(this), 200);
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

    initializeCharacters: function () {
        this.initializeCatcher();
        this.initializeSpend();
    },

    initializeCatcher: function () {
        this.catcher = {
            x: this.canvas.width/2,
            y: this.canvas.height/2
        };
    },

    initializeSpend: function () {
        this.spend = {
            x: Math.random() * (this.canvas.width - this.spendImage.naturalWidth),
            y: Math.random() * (this.canvas.height - this.spendImage.naturalHeight)
        };
    },

    drawCanvasElements: function () {
        gameUtils.drawImage(this.context, this.backgroundImage, 0, 0);
        gameUtils.drawImage(this.context, this.catcherImage, this.catcher.x, this.catcher.y);
        gameUtils.drawImage(this.context, this.spendImage, this.spend.x, this.spend.y);
    }
};