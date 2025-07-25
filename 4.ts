// 4. Classes và OOP

// Bài 1: Tạo class 'Animal'

// typescript
class Animal {
    private name: string; 
  
    constructor(name: string) { 
      this.name = name;
    }
  
    public speak(): void {
      console.log(`${this.name} makes a sound.`); 
    }
  }
  
  // Bài 2: Tạo class 'Cat' kế thừa 'Animal'
  
  // typescript
  class Cat extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    // Overrides the parent's speak method
    public speak(): void {
      console.log("Meow"); 
    }
  }
  
  // Bài 3: Tạo abstract class 'Shape'
  
  // typescript
  abstract class Shape {
    abstract area(): number; 
  }
  
  class Circle extends Shape {
    constructor(private radius: number) {
      super();
    }
  
    public area(): number {
      return Math.PI * this.radius ** 2; // Implements the 'area' method for a circle.
    }
  }
  
  // Bài 4: Sử dụng getter/setter
  
  // typescript
  class Person {
    private _age: number;
  
    constructor(age: number) {
      this.age = age; // Use the setter during initialization
    }
  
    public get age(): number {
      return this._age;
    }
  
    public set age(value: number) {
      if (value > 0 && value < 120) { 
        this._age = value;
      } else {
        throw new Error("Invalid age value");
      }
    }
  }
  