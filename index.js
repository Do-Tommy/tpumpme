function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  
  var fs = require("fs");
  var flavor_list = [];
  flavor_list = fs.readFileSync("./flavors.txt").toString("utf-8");
  flavor_list = flavor_list.split("\n");
  var toppings = ["boba", "poppingboba", "redbean", "taro", "bobabran"];
  document.getElementById("flavor_list").innerHTML =
    "<li>" + flavor_list + "</li>";
  
  var flavors = [];
  var topping_list = [];
  function getFlavors() {
    var toppingsCount = document.getElementById("toppingCount");
    var resultDiv = document.getElementById("results");
    var flavorHtml = document.createElement("p");
    var flavorLine = document.createElement("p");
    removeAllChildNodes(resultDiv);
    var flavor_count = 0;
    var temp_flav;
    while (flavor_count < 3) {
      temp_flav = flavor_list[Math.floor(Math.random() * flavor_list.length)];
      if (!(temp_flav in flavors)) {
        flavors.push(temp_flav);
        flavor_count += 1;
      }
    }
  
    var value = toppingsCount.options[toppingsCount.selectedIndex].value;
    while (topping_list.length < value) {
      var rand_topping = toppings[Math.floor(Math.random() * toppings.length)];
      if (!(rand_topping in topping_list)) {
        topping_list.push(rand_topping);
      }
    }
    var text = document.createTextNode(flavors);
    flavorHtml.appendChild(text);
    resultDiv.appendChild(flavorHtml);
    text = document.createTextNode(topping_list);
    flavorLine.appendChild(text);
    resultDiv.appendChild(flavorLine);
  
    flavors = [];
    topping_list = [];
  }
  
  document.getElementById("rand_button").addEventListener("click", getFlavors);
  