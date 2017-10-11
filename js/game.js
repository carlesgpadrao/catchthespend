var game = {
    init: function () {
        this.keysDown = {};

        this.initializeCanvas();
        this.initializeAssets();
        this.initializeCharacters();

        this.bindKeyboardEvents();
        this.startAnimation();
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

    bindKeyboardEvents: function () {
        document.addEventListener('keydown', this.getKeyboardEvent.bind(this));
        document.addEventListener('keyup', this.getKeyboardEvent.bind(this));
    },

    getKeyboardEvent: function (event) {
        if (event.type == 'keydown') this.keysDown[event.keyCode] = true;
        if (event.type == 'keyup') delete this.keysDown[event.keyCode];
    },

    executeKeyBoardEvents: function (timelapse) {
        if (38 in this.keysDown) this.catcher.y -= 1;
        if (40 in this.keysDown) this.catcher.y += 1;
        if (37 in this.keysDown) this.catcher.x -= 1;
        if (39 in this.keysDown) this.catcher.x += 1;
    },

    drawCanvasElements: function () {
        this.executeKeyBoardEvents();
        gameUtils.drawImage(this.context, this.backgroundImage, 0, 0);
        gameUtils.drawImage(this.context, this.catcherImage, this.catcher.x, this.catcher.y);
        gameUtils.drawImage(this.context, this.spendImage, this.spend.x, this.spend.y);
    },

    startAnimation: function () {
        this.drawCanvasElements();
        requestAnimationFrame(this.startAnimation.bind(this));
    }
};