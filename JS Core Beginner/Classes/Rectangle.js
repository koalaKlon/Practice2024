// variant 2
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  const myRectangle = new Rectangle(10, 5);
  
  console.log(`Area: ${myRectangle.getArea()}`);         // Area: 50
  console.log(`Perimeter: ${myRectangle.getPerimeter()}`); // Perimeter: 30
  