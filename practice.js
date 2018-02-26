var shoppingCart = {};

var groceryItemsArray = document.querySelectorAll(".item");
console.log(groceryItemsArray)


groceryItemsArray.forEach(function(foodItem) {
  //console.log(foodItem.querySelector("p").innerHTML)
  foodItem.addEventListener("click", function () {
    var itemName = foodItem.querySelector("p").innerHTML;
    //console.log(itemName);
    if (shoppingCart[itemName]) {
    shoppingCart[itemName]++
    } else {
    shoppingCart[itemName] = 1
    }
    //console.log(shoppingCart);
    var cart = document.getElementById("cart")
    cart.innerHTML = cart.innerHTML + "<li>" + itemName + "</li>";
  });
});


var categoriesArray = document.querySelectorAll("a");

var produceLink = document.getElementById("producelink");

/*
producelink.addEventListener("click", function() {
  document.getElementById("produce").style.display = "flex";
  document.getElementById("desserts").style.display = "none";
  document.getElementById("beverages").style.display = "none";
});
*/

var beveragesLink = document.getElementById("beverageslink");

/*
beverageslink.addEventListener("click", function() {
  document.getElementById("beverages").style.display = "flex";
  document.getElementById("produce").style.display = "none";
  document.getElementById("desserts").style.display = "none";
});
*/

var dessertsLink = document.getElementById("dessertslink");

/*
dessertslink.addEventListener("click", function() {
  document.getElementById("desserts").style.display = "flex";
  document.getElementById("produce").style.display = "none";
  document.getElementById("beverages").style.display = "none";
});
*/

/*var categoryClickDisplay = function(linkClicked, categoryYes, categoryNoOne, CategoryNoTwo) {
  linkClicked.addEventListener("click", function() {
  document.getElementById(categoryYes).style.display = "flex";
  document.getElementById(categoryNoOne).style.display = "none";
  document.getElementById(CategoryNoTwo).style.display = "none";
});
}

categoryClickDisplay(dessertsLink, "desserts", "produce", "beverages");
categoryClickDisplay(produceLink, "produce", "beverages", "desserts");
categoryClickDisplay(beveragesLink, "beverages", "desserts", "produce");




var produce = document.getElementById("produce");
var desserts = document.getElementById("desserts");
var beverages = document.getElementById("beverages"); */

var foodCategoriesArray = document.querySelectorAll(".categories")
console.log(foodCategoriesArray);


var categoryClicked = function(categoryLink, idName) {
foodCategoriesArray.forEach(function(categoryName) {
  categoryLink.addEventListener("click", function() {
    //console.log(categoryName);
    categoryName.style.display = "none";
    document.querySelector(idName).style.display = "flex";
  })
  //console.log(categoryName)
});
}

categoryClicked(produceLink, "#produce");
categoryClicked(beveragesLink, "#beverages");
categoryClicked(dessertsLink, "#desserts");






