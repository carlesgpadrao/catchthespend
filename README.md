# Canvas HTML5 + Js Game
## 1. Initialize canvas
* Get the HTML Canvas element
* Get the Canvas 2d Context type
```javascript
canvas.getContext(contextType);
```

## 2. Initialize assets
Load images for all game elements: background, catcher, spend bag.
* images/background.jpg
* images/catcher.png
* images/spend.png

```javascript
var image = new Image();
image.src = src;
```

## 3. Initialize characters
* Catcher: create object with catcher position, centered in canvas
* Spend: create object with a random spend bag position in canvas
```javascript
var obj = {x: xPos, y: yPos};
```

## 4. Draw canvas elements
Draw all the elements: background, catcher, spend bag.
Consider current catcher and spend bag position.
```javascript
context.drawImage(image, xPos, yPos);
```
## 5. Animation
Draw canvas elements repeatedly to create an animation.
```javascript
requestAnimationFrame(callback);
```

## 6. Bind keyboard events to control the catcher
Add keywoard events to move up, down, left and right the catcher.
```javascript
element.addEventListener(event, function);
```
Store keys pressed in an array and delete when keys are released. Use event.type and event.keyCode.
Keycodes:
* Up: 38
* Down: 40
* Left: 37
* Right: 39

## 7. Set a speed for the catcher
Set Pixels / second speed in catcher movements.
Hint: Calculate timelapse until last request animation frame via Date.now();

## 8. Restrict catcher movements to canvas size
Prevent the catcher from disappearing from the canvas area.

## 9.Detect catcher collision with spend bag
When catcher collides with the spend bag, show a new bag in a random position.

## 10. Add a spend caught counter
Everytime the catcher collides with a spend bag, increment counter.
Show the counter in canvas top right corner. x: 880, y: 10
```javascript
context.fillStyle = 'rgb(255, 168, 0)';
context.font = 'bold 50px Helvetica';
context.textAlign = 'right';
context.textBaseline = 'top';
context.fillText(text, xPos, yPos);
context.lineWidth = 2;
context.strokeStyle = 'white';
context.strokeText(text, xPos, yPos);
```

## 11. Enable spend bag expiration
Reduce spend size until it dissapears and can't be caught.
Show a new bag in a random position after expiration.

## 12. Play audio when spend bag catched
Use sounds/spend.wav
```javascript
var audio = new Audio(src);
audio.play();
```

## 13. Set a countdown timer and print it
Set a countdown timer of 60 seconds and print it in corner top left. x: 10, y:20
Consider changing text align to left.

## 14. If enough time, add game status Won/Lost.
A game is won if you catch 30 spend bags in 60 seconds.
A game is lost if countdown is expired and you didn't get enough spend bags.
For each status, clear animation, clear canvas and render message images stored in:
* images/won.png
* images/gameover.png

When these messages are shown, play an audio and enable onclick event to restart the game.
Audios:
* sounds/won.wav
* sounds/gameover.wav



