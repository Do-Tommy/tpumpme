var flavor_list = "strawberry mango peach passionfruit blackberry tanerine cherry plum kiwi blueberry litchi watermelon greenapple guava banana coconut lemon ginger honey pineapple coffee butterscotch frenchtoast frenchvanilla brownsugar " +
"raspberry pomegranate rose lavendar chocolate vanilla cinammon chocolate cookiedough marshamallow saltedcaramel hazelnut almond gingebread caramel pumpkinspice almondroca taro match redbean honeydew"
flavor_list = flavor_list.split(" ");
var toppings = ["boba", "poppingboba", "redbean", "taro", "bobabran"];

var flavors = [];
var topping_list = [];
var highlightedlist = [false,false,false];


const flavor1 = document.getElementById("flavor1");
const flavor2 = document.getElementById("flavor2");
const flavor3 = document.getElementById("flavor3");

function removeAllChildNodes(parent) {
  while(parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
}

flavor1.addEventListener("click", () => {
  flavor1.classList.toggle("selected");
  highlightedlist[0] = !highlightedlist[0]
  
})

flavor2.addEventListener("click", () => {
  flavor2.classList.toggle("selected");
  highlightedlist[1] = !highlightedlist[1]
})

flavor3.addEventListener("click", () => {
  flavor3.classList.toggle("selected");
  highlightedlist[2] = !highlightedlist[2]
  
})

function getFlavors() {
  document.querySelectorAll(".list-group-item").forEach(a=>a.style.display = "initial");
  
  var toppingsCount = document.getElementById("toppingCount");
  var toppingdiv = document.getElementById("toppings_ul");
  var flavorDivs = [flavor1,flavor2,flavor3];
  removeAllChildNodes(toppingdiv);
  var temp_flav;
  var templist = [];
  

  for(var c = 0; c < 3; c++) {
    if(highlightedlist[c]) {
      templist[c] = flavors[c];
    }
    
  }
  
  //flavorDivs[c].classList.contains('selected')
  
  flavors = templist;

  var flavor_count = flavors.filter(Boolean).length;
  var tempcount = 0;
  
  
  while (tempcount < 3) {
    temp_flav = flavor_list[Math.floor(Math.random() * flavor_list.length)];
    if (flavors.indexOf(temp_flav) == -1 && !highlightedlist[tempcount]) {
      flavors[tempcount] = temp_flav;
      
    }
    tempcount += 1; 
  }

  
  

  var value = toppingsCount.options[toppingsCount.selectedIndex].value;
  while (topping_list.length < value) {
    var rand_topping = toppings[Math.floor(Math.random() * toppings.length)];
    if (topping_list.indexOf(rand_topping) == -1 ) {
      topping_list.push(rand_topping);
    }
  }
  

  var ul = document.getElementById("results");
  

  flavor1.innerHTML = flavors[0];
  flavor2.innerHTML = flavors[1];
  flavor3.innerHTML = flavors[2];

  var topli = document.getElementById("toppings_ul");
  console.log(topping_list.length);
  for (var x = 0; x < topping_list.length; x++ ) {
    var item = document.createElement("li");
    item.className = "list-group-item text-primary";
    item.appendChild(document.createTextNode(topping_list[x]));
    item.style.display = 'initial';
    topli.appendChild(item);
  }

  var milk_choice = Math.random() < 0.5 ? 'yes' : 'no' ;
  console.log(milk_choice);
  var milk = document.getElementById("milk");
  milk.className = "text-danger"
  milk.innerHTML= "your milk is " + milk_choice;


  
  console.log(highlightedlist)

  
  

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

const symbols = ['🍒', '🍇', '🍊', '🍋', '🍎', '🍉'];
const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');

function spinReel(reel) {
    let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    reel.textContent = randomSymbol;
}


function spin() {
    var reelelement = Array.from(document.getElementsByClassName("reel"));
    reelelement.forEach((element) => element.classList.add('reelanimate'));
    spinReel(reel1);
    spinReel(reel2);
    spinReel(reel3);
}


document.getElementById("rand_button").addEventListener("click", getFlavors);
document.getElementById("navFlavorModal").addEventListener("click",openModal);
document.getElementsByClassName("close")[0].addEventListener("click",closeModal);
document.getElementById("spinbutton").addEventListener("click",spin);
