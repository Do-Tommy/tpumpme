function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  
  
  var flavor_list = "strawberry mango peach passionfruit blackberry tanerine cherry plum kiwi blueberry litchi watermelon greenapple guava banana coconut lemon ginger honey pineapple raspberry pomegranate rose lavendar chocolate vanilla cinammon chocolate cookiedough marshamallow saltedcaramel hazelnut almond gingebread caramel pumpkinspice almondroca taro match redbean honeydew"
  flavor_list = flavor_list.split(" ");
  var toppings = ["boba", "poppingboba", "redbean", "taro", "bobabran"];

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
    li.id = "flavor1";
    li.appendChild(document.createTextNode(flavors[0]));
    ul.appendChild(li);

    li = document.createElement("li");
    li.className = "list-group-item text-primary";
    li.id = "flavor2";
    li.appendChild(document.createTextNode(flavors[1]));
    ul.appendChild(li);

    li = document.createElement("li");
    li.className = "list-group-item text-primary";
    li.id = "flavor3";
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

    var flavor1 = document.getElementById("flavor1");
    flavor1.addEventListener("click", () => {
      console.log(flavor1.innerHTML);
    })

    var flavor2 = document.getElementById("flavor2");
    flavor2.addEventListener("click", () => {
      console.log(flavor2.innerHTML);
    })

    var flavor3 = document.getElementById("flavor3");
    flavor3.addEventListener("click", () => {
      console.log(flavor3.innerHTML);
    })

    
    
  
    flavors = [];
    topping_list = [];
  }
  function openModal() {
    var modal = document.getElementById("flavormodal");
    modal.style.display = "block";
  }
  function closeModal() {
    var modal = document.getElementById("flavormodal");
    modal.style.display = "none";
  }



  
  document.getElementById("rand_button").addEventListener("click", getFlavors);
  

 document.getElementById("navFlavorModal").addEventListener("click",openModal);
document.getElementsByClassName("close")[0].addEventListener("click",closeModal);
