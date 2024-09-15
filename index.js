let shoppingList = [
    { name: "Apples", quantity: 5, purchased: false },
    { name: "Bread", quantity: 1, purchased: true },
    { name: "Milk", quantity: 2, purchased: false }
];

function displayShoppingList() {
    let unpurchasedItems = "<h3>Unpurchased items:</h3><ul>";
    let purchasedItems = "<h3>Purchased items:</h3><ul>";

    let displayDiv = document.getElementById("shoppingListDisplay");
    displayDiv.innerHTML = "";

    for (let i = 0; i < shoppingList.length; i++) {
        if (!shoppingList[i].purchased) {
            unpurchasedItems += `<li>${shoppingList[i].name} - ${shoppingList[i].quantity}</li>`;
        } else {
            purchasedItems += `<li>${shoppingList[i].name} - ${shoppingList[i].quantity}</li>`;
        }
    }
    unpurchasedItems += "</ul>";
    purchasedItems += "</ul>";

    displayDiv.innerHTML = unpurchasedItems + purchasedItems;
}

function addProductToList() {
    let name = document.getElementById("productName").value;
    let quantity = parseInt(document.getElementById("productQuantity").value);

    if (name && quantity) {
        let productExists = false;

        for (let i = 0; i < shoppingList.length; i++) {
            if (shoppingList[i].name === name) {
                shoppingList[i].quantity += quantity; // If product exist, increase quantity
                productExists = true;
                break;
            }
        }

        if (!productExists) {
            shoppingList.push({ name: name, quantity: quantity, purchased: false });
        }

        displayShoppingList(); // Refresh the displayed list
    } else {
        alert("Please enter both product name and quantity.");
    }
}

function markAsPurchased() {
    let name = document.getElementById("productName").value;

    if (name) {
        let found = false;
        for (let i = 0; i < shoppingList.length; i++) {
            if (shoppingList[i].name === name) {
                shoppingList[i].purchased = true;
                found = true;
                break;
            }
        }

        if (found) {
            displayShoppingList(); // Refresh the displayed list
        } else {
            alert(name + " not found in the shopping list.");
        }
    } else {
        alert("Please enter the product name.");
    }
}


//initial console writeout
/* 


let shoppingList = [];

function addProduct() {
    let productName = document.getElementById("product-name").value;
    let quantity = parseInt(document.getElementById("product-quantity").value);

    if (productName && quantity > 0) {
        shoppingList.push({ name: productName, quantity: quantity, purchased: false });
        console.log(`Product added: ${productName}, Quantity: ${quantity}`);
    } else {
        console.log("Please enter a valid product name and quantity.");
    }
}

function markAsPurchased() {
    let productName = document.getElementById("product-name").value;

    let product = shoppingList.find(item => item.name.toLowerCase() === productName.toLowerCase());
    if (product) {
        product.purchased = true;
        console.log(`Product marked as purchased: ${productName}`);
    } else {
        console.log(`Product not found: ${productName}`);
    }
}

function displayShoppingList() {
    console.log("Unpurchased items:");
    shoppingList.forEach(item => {
        if (!item.purchased) {
            console.log(`${item.name}: ${item.quantity}`);
        }
    });

    console.log("Purchased items:");
    shoppingList.forEach(item => {
        if (item.purchased) {
            console.log(`${item.name}: ${item.quantity}`);
        }
    });
}

*/
