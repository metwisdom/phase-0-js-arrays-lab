const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
    console.log(products[0]);
}

function addProduct(productName) {
    products.push(productName);
}

function removeLastProduct() {
    products.pop();
}

function updateProductName(index, newName) {
    if (index >= 0 && index < products.length) {
        products[index] = newName;
    } else {
        console.log("Error: Invalid product position.");
    }
}

module.exports = { products, logFirstProduct, updateProductName, removeLastProduct, addProduct };

