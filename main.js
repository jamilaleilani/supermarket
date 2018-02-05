//adding items to shopping cart

var shoppingCart = {};

var groceryItemsArray = document.querySelectorAll(".item");

groceryItemsArray.forEach(function(foodItem) {
  foodItem.addEventListener("click", function () {
    var itemName = foodItem.querySelector("p").innerHTML;
    if (shoppingCart[itemName]) {
    shoppingCart[itemName]++;
    } else {
    shoppingCart[itemName] = 1;
    }
    var cart = document.getElementById("cart");
    var shoppingCartItems = Object.keys(shoppingCart);
    var ulItems = "";
    shoppingCartItems.forEach(function(itemName) {
      var number = shoppingCart[itemName];
      ulItems = ulItems + "<li>" + "<p>" + itemName + "</p>" + "<p>" + number + "</p>" + "</li>";
    });
    cart.innerHTML = ulItems;
  });
});


//clickable links --> links show only items of their category

var produceLink = document.getElementById("producelink");
var beveragesLink = document.getElementById("beverageslink");
var dessertsLink = document.getElementById("dessertslink");


var foodCategoriesArray = document.querySelectorAll(".categories");


var categoryClicked = function(categoryLink, idName) {
foodCategoriesArray.forEach(function(categoryName) {
  categoryLink.addEventListener("click", function() {
    categoryName.style.display = "none";
    document.querySelector(idName).style.display = "flex";
  });
});
}

categoryClicked(produceLink, "#produce");
categoryClicked(beveragesLink, "#beverages");
categoryClicked(dessertsLink, "#desserts");








