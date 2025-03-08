var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Method to return "Hello FirstName LastName"
    Customer.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName);
    };
    return Customer;
}());
// Create an instance of Customer with "John" and "Smith"
var customer = new Customer("John", "Smith");
// Print the greeting message
console.log(customer.greet());
