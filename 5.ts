// Bài tập tổng hợp: Xây dựng hệ thống quản lý User


// 1. Định nghĩa Types/Interfaces

interface User {
    readonly id: number;      
    username: string;         
    email: string;            
    isActive?: boolean;        
    role: 'admin' | 'user' | 'guest'; 
  }
  
  // Task 2: Create the 'UserProfile' type
  type UserProfile = User & {
    birthDate: Date;          
    address?: string;         
  };
  
  // 2. Class và OOP
  
  // Task 3: Create the 'UserAccount' class
  class UserAccount implements User {
    readonly id: number;
    username: string;
    email: string;
    isActive?: boolean;
    role: 'admin' | 'user' | 'guest';
    private password!: string; 
  
    constructor(user: User) {
      this.id = user.id;
      this.username = user.username;
      this.email = user.email;
      this.isActive = user.isActive;
      this.role = user.role;
    }
  
    public setPassword(pass: string): void {
        this.password = pass;
        this.validatePassword();
    }
  
    public validatePassword(): boolean {
      const isValid = this.password && this.password.length >= 8; 
      if (!isValid) console.log("Password must be at least 8 characters long.");
      return isValid;
    }
  }
  
  // Task 4: Create the 'AdminUser' class
  class AdminUser extends UserAccount {
    public permissions: string[]; 
  
    constructor(user: User, permissions: string[]) {
      super(user);
      this.permissions = permissions;
    }
  
    // Override the validatePassword method
    public validatePassword(): boolean {
      const isValid = this.password && this.password.length >= 12; 
      if (!isValid) console.log("Admin password must be at least 12 characters long.");
      return isValid;
    }
  }
  
  // 3. Function và Type Assertion
  
  // typescript
  // Task 5: Write the 'createUser' function
  function createUser(userData: Partial<User>): User {
    const newUser: User = {
      id: Date.now(), 
      isActive: true, 
      role: 'user',  
      ...userData,
      username: userData.username as string,
      email: userData.email as string,
    };
    return newUser;
  }
  
  // Task 6: Write the 'formatUserInfo' function
  function formatUserInfo(user: User | UserProfile): string {
    // Use a type guard to check for the 'birthDate' property.
    if ("birthDate" in user && user.birthDate) {
      return `User ${user.username} born on ${user.birthDate.toDateString()}`; 
    } else {
      return `User ${user.username} (${user.role})`; 
    }
  }
  
  // 4. Type Annotation và DOM
  
  // Assumes an HTML file with the form structure.
  // Task 7: Get DOM elements and apply types
  const form = document.getElementById("userForm") as HTMLFormElement; 
  const emailInput = document.querySelector("#email") as HTMLInputElement; 
  const usernameInput = form.elements.namedItem("username") as HTMLInputElement;
  
  // Task 8: Handle form submission with type annotation
  form.onsubmit = (e: SubmitEvent) => { 
    e.preventDefault(); 
  
    const newUser: Partial<User> = { 
      username: usernameInput.value, 
      email: emailInput.value, 
    };
  
    const createdUser = createUser(newUser); 
    console.log(createdUser); 
  };
  