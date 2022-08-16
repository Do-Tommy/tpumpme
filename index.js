function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  
  
  var flavor_list = "strawberry mango peach passionfruit blackberry tanerine cherry plum kiwi blueberry litchi watermelon greenapple guava banana coconut lemon ginger honey pineapple raspberry pomegranate rose lavendar chocolate vanilla cinammon chocolate cookiedough marshamallow saltedcaramel hazelnut almond gingebread caramel pumpkinspice almondroca taro match redbean honeydew"
  flavor_list = flavor_list.split(" ");
  var toppings = ["boba", "poppingboba", "redbean", "taro", "bobabran"];
//   var flavorli = document.getElementById("flavor_list");
//   for (var i = 0; i < flavor_list.length; i++ ) {
//     var item = document.createElement("li");
//     item.appendChild(document.createTextNode(flavor_list[i]));
//     flavorli.appendChild(item);
// }
  
  var flavors = [];
  var topping_list = [];
  function getFlavors() {
    
    var toppingsCount = document.getElementById("toppingCount");
    var resultDiv = document.getElementById("results");
    var toppingdiv = document.getElementById("toppings_ul");
    var flavorHtml = document.createElement("p");
    var flavorLine = document.createElement("p");
    removeAllChildNodes(resultDiv);
    removeAllChildNodes(toppingdiv);
    var flavor_count = 0;
    var temp_flav;
    while (flavor_count < 3) {
      temp_flav = flavor_list[Math.floor(Math.random() * flavor_list.length)];
      if (flavors.indexOf(temp_flav) == -1) {
        flavors.push(temp_flav);
        flavor_count += 1;
      }
    }
  
    var value = toppingsCount.options[toppingsCount.selectedIndex].value;
    while (topping_list.length < value) {
      var rand_topping = toppings[Math.floor(Math.random() * toppings.length)];
      if (topping_list.indexOf(rand_topping) == -1 ) {
        topping_list.push(rand_topping);
      }
    }
    
    var ul = document.getElementById("results");
    var li = document.createElement("li");
    li.className = "list-group-item text-primary";
    li.appendChild(document.createTextNode(flavors[0]));
    ul.appendChild(li);
    li = document.createElement("li");
    li.className = "list-group-item text-primary";
    li.appendChild(document.createTextNode(flavors[1]));
    ul.appendChild(li);
    li = document.createElement("li");
    li.className = "list-group-item text-primary";
    li.appendChild(document.createTextNode(flavors[2]));
    ul.appendChild(li);

    var topli = document.getElementById("toppings_ul");
    console.log(topping_list.length);
    for (var x = 0; x < topping_list.length; x++ ) {
      var item = document.createElement("li");
      item.className = "list-group-item text-primary";
      item.appendChild(document.createTextNode(topping_list[x]));
      topli.appendChild(item);
    }
    var milk_choice = Math.random() < 0.5 ? 'yes' : 'no' ;
    console.log(milk_choice);
    var milk = document.getElementById("milk");
    milk.className = "text-danger"
    milk.innerHTML= "your milk is " + milk_choice;


    // var text = document.createTextNode(flavors);
    // flavorHtml.appendChild(text);
    // resultDiv.appendChild(flavorHtml);
    // text = document.createTextNode(topping_list);
    // flavorLine.appendChild(text);
    // resultDiv.appendChild(flavorLine);
  
    flavors = [];
    topping_list = [];
  }
  
  document.getElementById("rand_button").addEventListener("click", getFlavors);
  