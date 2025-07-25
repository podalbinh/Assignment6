// 2. Function


// Bài 1: Viết hàm 'sum'


function sum(a: number, b: number = 10): number { 
    return a + b;
  }
  
  // Bài 2: Sử dụng rest parameter để viết hàm 'mergeStrings'
  
  
  function mergeStrings(...strings: string[]): string { 
    return strings.join(" ");
  }
  
  // Bài 3: Overload hàm 'getValue'
  
  
  function getValue(input: string): string;
  function getValue(input: number): number;
  
  
  function getValue(input: string | number): string | number {
    if (typeof input === "string") {
      return input.toUpperCase();  
    } else {
      return input * 2;
    }
  }
  
  // Bài 4: Sử dụng generic để viết hàm 'filterArray'
  // Tim hieu ve generic va ung dung
  // Sử dụng generic để viết hàm 'filterArray' lọc các phần tử theo điều kiện
  function filterArray<T>(arr: T[], condition: (item: T) => boolean): T[] {
    return arr.filter(condition);
  }