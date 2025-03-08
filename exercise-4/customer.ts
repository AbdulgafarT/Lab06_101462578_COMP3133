export class Customer {
    private firstName: string;
    private lastName: string;
    private _age: number;  // New private property for age

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;  // Assign age
    }

    // Method to greet the customer
    greeter(): void {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    // New method to return and log the customer's age
    GetAge(): number {
        console.log(`Customer Age: ${this._age}`);
        return this._age;
    }
}
