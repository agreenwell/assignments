var shopper = {
    groceryStoreName: "Harmons",
    shopperCardNum: 1234567890,
    isMember: true,
    itemsInCart: [
        {
            itemName: "Milk",
            type: "1%",
            category: "Dairy",
            price: 3.88,
            organic: true
        },
        {
            itemName: "Cheese",
            type: "Swiss",
            category: "Dairy",
            price: 9.99,
            organic: false
        },
        {
            itemName: "Pop-Tarts",
            type: "Brown Sugar",
            category: "Breakfast",
            price: 3.48,
            organic: false
        }
    ],
    totalPrice: function() {
        var totalPrice = 0;
        for (var i = 0; i < this.itemsInCart.length; i++) {
            totalPrice = totalPrice + this.itemsInCart[i].price;
        }
        return totalPrice;
    },
    
    groceryCart: function() {
    var groceryCart = " ";
        for (var i = 0; i < this.itemsInCart.length; i++) {
            groceryCart = groceryCart + " " + this.itemsInCart[i].itemName;
        }
        return groceryCart;
}
};

console.log(shopper.totalPrice());
console.log(shopper.groceryCart());