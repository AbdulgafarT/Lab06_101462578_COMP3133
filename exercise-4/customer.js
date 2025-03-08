"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age; // Assign age
    }
    // Method to greet the customer
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    // New method to return and log the customer's age
    Customer.prototype.GetAge = function () {
        console.log("Customer Age: ".concat(this._age));
        return this._age;
    };
    return Customer;
}());
exports.Customer = Customer;
