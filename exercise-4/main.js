"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var customer = new customer_1.Customer("John", "Smith", 30); // Added age parameter
customer.greeter();
customer.GetAge(); // Calling the GetAge method
