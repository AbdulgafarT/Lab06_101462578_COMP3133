class Customer {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method to greet the customer
    greeter(): void {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

// Create a new Customer instance
let customer = new Customer("John", "Smith");

// Call the greeter method
customer.greeter();
