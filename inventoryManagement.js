const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
    console.log(products[0]);
}

function addProduct(productName) {
    products.push(productName);
}

function removeLastProduct() {
    if (products.length > 0) {
        products.pop();
    } else {
        console.log("Error: Inventory is already empty.");
    }
}

function updateProductName(index, newName) {
    if (index >= 0 && index < products.length) {
        products[index] = newName;
    } else {
        console.log("Error: Invalid product position.");
    }
}

module.exports = { products, logFirstProduct, updateProductName, removeLastProduct, addProduct };


