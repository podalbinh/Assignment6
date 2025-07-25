// 3. Interface và Type

// Bài 1: Định nghĩa interface 'Car'


// typescript
interface Car {
    readonly brand: string; 
    speed: number;         
    start(): void;         
  }
  
  // Bài 2: Tạo type 'Person' và 'Employee'
  
  // typescript
  type Person = { name: string }; 
  type Employee = Person & { employeeId: string }; 
  
  // Bài 3: Sử dụng index signature
  
  // typescript
  type Dictionary = {
    [key: string]: any; 
  };
  
  // Bài 4: Viết utility type 'OptionalFields\<T\>'
  
  // typescript
  type OptionalFields<T> = {
    [P in keyof T]?: T[P]; // This is the standard Partial<T> utility type in TypeScript.
  };