// **1. Data Types, Type Annotation, Type Assertion**

// Bài 1: Fix lỗi type và giải thích

// typescript
// Original code with errors
// let age: number = "25";
// let isActive: boolean = "true";
// let data: any  { x: 10 };
// data  "hello";

// Fixed code
let age: number = 25; // Corrected: The value "25" was a string, but the type was 'number'. The quotes were removed. 
let isActive: boolean = true; // Corrected: The value "true" was a string, not a boolean. The quotes were removed. 
let data: any = { x: 10 }; // Corrected: Added '=' for variable assignment. 
data = "hello"; // This line is correct as `data` is of type 'any', which can hold any type of value. 

// Bài 2: Định nghĩa biến 'user'

// typescript
// Defines a 'user' variable with type annotation.
let user: {
  name: string; 
    age?: number; 
    roles: [string, number]; 
};


// Bài 3: Sử dụng type assertion để fix lỗi

// typescript
    // Assumes an HTML file with: <input type="number" id="input" value="123" />
const inputElement = document.getElementById("input");

// Use type assertion to tell TypeScript that inputElement is an HTMLInputElement
const input = inputElement as HTMLInputElement;

// Assert that the value is a number after parsing.
const value: number = Number(input.value); // The '.value' of an input is a string. [cite_start]It must be converted to a number. [cite: 20]

console.log(value);


// Bài 4: Khi nào dùng 'unknown' thay cho 'any'?

// `unknown` is a safer alternative to `any`. You should use `unknown` when you don't know the type of a variable but want to perform type-checking before performing any operations on it. `any` bypasses all type checks, whereas `unknown` forces you to narrow the type.

// Example:

// typescript
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// This would cause a runtime error if userInput was not a string.
// With 'unknown', TypeScript forces a check.
if (typeof userInput === 'string') {
  userName = userInput; // This is safe.
}

// If we used 'any', this would compile without error but could fail at runtime.
let anyInput: any;
anyInput = 123;
userName = anyInput; // No error at compile time, but userName is now a number.
