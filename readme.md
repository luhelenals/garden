# 🌸 Click Garden

This is a simple p5.js project that creates colorful flowers at each click position on the canvas. Each flower has a random size and color and gradually shrinks and fades over time, disappearing when it reaches a minimal size.

## 🎨 Features

- **Flower Generation**: Creates a flower where you click, with random color and size.
- **Animation**: Each flower fades and shrinks as it ages.
- **Auto-cleanup**: Old flowers are automatically removed from the canvas, keeping it tidy.

## 🛠️ Technologies Used

- **p5.js** - A JavaScript library that makes creating visual and interactive experiences easy.

## 📜 Code Explanation

### `Flower` Class

The `Flower` class defines the properties and behavior of each flower:
- `constructor(x, y)`: Initializes each flower with a random color, size, and lifespan.
- `process()`: Gradually reduces the flower’s size and lifespan, simulating fading and shrinking.

### `setup()` and `draw()`

- `setup()`: Sets up the canvas dimensions.
- `draw()`: Draws the background, checks if the mouse is pressed to create new flowers, and processes each flower to update its size and lifespan.

### `drawFlower(flower)`

This function renders each flower as a pair of ellipses for petals and a circle for the flower center.

## 🖱️ Usage

Simply click anywhere on the canvas to create a flower. Each click will generate a new flower with random attributes at the click position.

## Preview
