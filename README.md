# Experimental Typography on the Web
## Otis College of Art and Design · COMD312

The following are supporting materials to my introductory workshops for generative typography with p5.js.

<hr>

<img src="img/1-final.gif" width="300"/>

### Workshop 1: Exploiting Type in p5.js
[Final Demo](https://editor.p5js.org/ygev/collections/w_TW8Q-NU) · [Figma Deck](https://www.figma.com/proto/nChFKP4aChQrrFze823GKB/Otis-Experimental-Typography-Workshops?node-id=12%3A2478&viewport=488%2C249%2C0.15884123742580414&scaling=min-zoom)

New concepts brought up in the workshop:

|Syntax  |Quick Definition  | More Info |
|:---|:---|:---|
| `preLoad()`  | Used alongside `function draw()` and `function setup()` when you need to import an image or a font.  |    [preLoad()](https://p5js.org/reference/#/p5/preload)  |
|`loadFont()`   | Used inside `function preload()` to import your font from URL or file path.  | [loadFont()](https://p5js.org/reference/#/p5/loadFont)  |
|`textToPoints()`   | Used inside `function draw()` to turn your text into a series of points we can manipulate. | [textToPoints()](https://p5js.org/reference/#/p5.Font/textToPoints)  |
|`loadFont()`   | Used inside `function preload()` to import your font from URL or file path.  | [loadFont()](https://p5js.org/reference/#/p5/loadFont)  |
| `for` loops   | A control flow statement that lets you repeat anything that goes inside of it.  | [for](https://p5js.org/reference/#/p5/for)  |
|`push()`, `pop()`   | A pair of functions that lets you store unique styles inside it, so they don't affect the rest of the canvas.  | [push()](https://p5js.org/reference/#/p5/push)  |
|`sampleFactor:`   | An object for the `textToPoints()` function that lets you control how many points to generate from the typeform. | [textToPoints()](https://p5js.org/reference/#/p5.Font/textToPoints)  |
|`colorMode()`   | A way to define your colormode in p5, for instance to HSL. | [colorMode()](https://p5js.org/reference/#/p5/colorMode)  |
|`random()`   | Randomizes anything that dares to be inside it. Useful for erratic animations. | [random()](https://p5js.org/reference/#/p5/random)  |
|`frameCount()`   | Iterates through the frame count of the canvas infinitely. This is the key for making looped animations. | [frameCount()](https://p5js.org/reference/#/p5/frameCount)  |

<hr>

<img src="img/2-final.gif" width="300"/>

### Workshop 2: Sound & Type in p5.js
[Final Demo](https://editor.p5js.org/ygev/collections/QKEHqk4jL) · [Figma Deck](https://www.figma.com/proto/nChFKP4aChQrrFze823GKB/Otis-Experimental-Typography-Workshops?node-id=124%3A3&viewport=-1274%2C-1317%2C0.6101463437080383&scaling=scale-down)


New concepts brought up in the workshop:

|Syntax  |Quick Definition  | More Info |
|:---|:---|:---|
| `beginShape()`  | Used alongside `endShape()` and `vertex()` to make any vector shape.  |    [beginShape()](https://p5js.org/reference/#/p5/beginShape)  |
| p5 Sound library   | An library for p5 that allows you to play around with audio input. | [p5.sound](https://p5js.org/reference/#/libraries/p5.sound)  |
|`p5.AudioIn()`   | A function in **p5.sound** that calls on an audio input  | [p5.AudioIn()](https://p5js.org/reference/#/p5.AudioIn)  |
|`getLevel()`   | A function in **p5.sound** that fetches the volume of the audio input.  | [getLevel()](https://p5js.org/reference/#/p5.Amplitude/getLevel)  |

<hr>

<img src="img/3-final.gif" width="300"/>

### Workshop 3: Animation in p5.js
[Final Demo](https://editor.p5js.org/ygev/sketches/C5dRmt16o) · [Figma Deck](https://www.figma.com/proto/nChFKP4aChQrrFze823GKB/Otis-Experimental-Typography-Workshops?node-id=215%3A84&viewport=957%2C282%2C0.13776342570781708&scaling=min-zoom)


New concepts brought up in the workshop:

|Syntax  |Quick Definition  | More Info |
|:---|:---|:---|
| `sin()`  | A function that calculates the sine of an angle, used for easing and looping in animation.  |    [sin()](https://p5js.org/reference/#/p5/sin)  |
|`frameCount`   | A variable that contains the number of elapsed frames since the program started.  | [frameCount](https://p5js.org/reference/#/p5/frameCount)  |

