class Customer {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method to return "Hello FirstName LastName"
    greet(): string {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

// Create an instance of Customer with "John" and "Smith"
let customer = new Customer("John", "Smith");

// Print the greeting message
console.log(customer.greet());
