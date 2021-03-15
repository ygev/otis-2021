# Experimental Typography on the Web
## Otis College of Art and Design · COMD312

The following are supporting materials to my introductory workshops for generative typography with p5.js.

<hr>

<img src="img/1-final.gif" width="300"/>

### Workshop 1: Exploiting Type in p5.js
[Final Demo](https://editor.p5js.org/ygev/collections/w_TW8Q-NU) · [Figma Deck](https://www.figma.com/proto/nChFKP4aChQrrFze823GKB/Otis-Experimental-Typography-Workshops?node-id=12%3A2478&viewport=488%2C249%2C0.15884123742580414&scaling=min-zoom)

New concepts brought up in the workshop:
- **`preload()`** function
  - This is used alongside `function draw()` and `function setup()` when you need to import an image or a font. 
   [More Info](https://p5js.org/reference/#/p5/preload)
- **`loadFont()`**
  - This is the function you call inside `function preload()` to import your font from URL or file path. [More Info](https://p5js.org/reference/#/p5/loadFont)
- **`textToPoints()`**
  - This is the function you call inside `function draw()` to turn your text into a series of points we can manipulate. [More Info](https://p5js.org/reference/#/p5.Font/textToPoints)
- **`for loops`**
  - A control flow statement that lets you repeat anything that goes inside of it. [More Info](https://p5js.org/reference/#/p5/for)
- **`push()` and `pop()`**
  - A pair of functions that lets you store unique styles inside it, so they don't affect the rest of the canvas. [More Info](https://p5js.org/reference/#/p5/push)
- **`sampleFactor:`**
  - An object for the `textToPoints()` function that lets you control how many points to generate from the typeform. [More Info](https://p5js.org/reference/#/p5.Font/textToPoints)
- **`colorMode()`**
  - A way to define your colormode in p5, for instance to HSL. [More Info](https://p5js.org/reference/#/p5/colorMode)
- **`random()`**
  - Randomizes anything that dares to be inside it. Useful for erratic animations. [More Info](https://p5js.org/reference/#/p5/random)
- **`frameCount()`**
  - Iterates through the frame count of the canvas infinitely. This is the key for making looped animations. [More Info](https://p5js.org/reference/#/p5/frameCount)

<hr>

<img src="img/2-final.gif" width="300"/>

### Workshop 2: Sound & Type in p5.js [WIP]
[Final Demo](https://editor.p5js.org/ygev/collections/QKEHqk4jL) · [Figma Deck](https://www.figma.com/proto/nChFKP4aChQrrFze823GKB/Otis-Experimental-Typography-Workshops?node-id=124%3A3&viewport=-1274%2C-1317%2C0.6101463437080383&scaling=scale-down)

New concepts brought up in the workshop:
- **`beginShape()`, `endShape()` and `vertex()`**
- **p5.sound Library**
- **`micLevel()`**
- **Limiting `random()`** 
