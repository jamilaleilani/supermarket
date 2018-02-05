var shoppingCart = {};

/*document.querySelector(".item").addEventListener("click", function (event) {
  console.log("item clicked");
  }
  );*/


//on click, get the textContent of the <p> tag within the div


var groceryItemsArray = document.querySelectorAll(".item");
console.log(groceryItemsArray)


groceryItemsArray.forEach(function(foodItem) {
  //console.log(foodItem.querySelector("p").innerHTML)
  foodItem.addEventListener("click", function () {
    var itemName = foodItem.querySelector("p").innerHTML;
    console.log(itemName);
    if (shoppingCart[itemName]) {
    shoppingCart[itemName]++
    } else {
    shoppingCart[itemName] = 1
    }
    console.log(shoppingCart);
    var cart = document.getElementById("cart")
    cart.innerHTML = cart.innerHTML + "<li>" + itemName + "</li>";
  });
});


//var categories = document.querySelectorAll("a");

var producelink = document.getElementById("producelink");

producelink.addEventListener("click", function() {
  document.getElementById("produce").style.display = "flex";
  document.getElementById("desserts").style.display = "none";
  document.getElementById("beverages").style.display = "none";

});

var beverageslink = document.getElementById("beverageslink");

beverageslink.addEventListener("click", function() {
  document.getElementById("beverages").style.display = "flex";
  document.getElementById("produce").style.display = "none";
  document.getElementById("desserts").style.display = "none";
});

var dessertslink = document.getElementById("dessertslink");

dessertslink.addEventListener("click", function() {
  document.getElementById("desserts").style.display = "flex";
  document.getElementById("produce").style.display = "none";
  document.getElementById("beverages").style.display = "none";
});














