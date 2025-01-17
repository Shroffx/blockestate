// Example TypeScript file

// Define an interface for a User
interface User {
    id: number;
    name: string;
    email: string;
}

// Create a class that implements the User interface
class UserAccount implements User {
    id: number;
    name: string;
    email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Method to display user information
    displayUserInfo(): void {
        console.log(`User ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`);
    }
}


user.displayUserInfo();