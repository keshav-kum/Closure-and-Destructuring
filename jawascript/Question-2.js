let order = {
    orderId : "123456",
    productName:"Laptop",
    quantity:2
};

// Without destructuring
console.log("Without Destructuring:");
console.log("Order ID:", order.orderId);
console.log("Product Name:", order.productName);
console.log("quantity:", order.quantity);

// With destructuring
let {orderId, productName, quantity} = order;
console.log("\nWith Destructuring:");
console.log("Order ID:", orderId);
console.log("Prodect Name:", productName);
console.log("quantity:", quantity);