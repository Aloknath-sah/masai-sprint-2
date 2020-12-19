var global = [];
var total_add_calo = 0;
var total_exp_calo = 0;
var total = 0;
var formdata = {};

window.onload = function () {
  var add_calo = document.querySelector(".form-1");
  add_calo.addEventListener("submit", handleform1);
};

function handleform1() {
  event.preventDefault();
  var elem = event.target.querySelectorAll(".input");
  var data = getFormData(elem);
  global.push(data);
  console.log(global)
  renderDOM(global) 
}

function getFormData(elem) {
  
  var add_food = elem[0].value;
  var add_calo = Number(elem[1].value);
  var add_exercise = elem[2].value;
  var add_exp_calo = Number(elem[3].value);

  total_add_calo += add_calo;
  total_exp_calo += add_exp_calo;
  total = add_calo - add_exp_calo;

  if (total < 0) {
    ans = (total * -1) / 7000;
    var myres = ans.toFixed(2);
    var weight = "loose"
  } else {
    ans = total / 7000;

    var myres = ans.toFixed(2);
    var weight = "gain"
  }
  var formdata = {add_food, add_calo, add_exercise, add_exp_calo,total_add_calo, total_exp_calo,total}
  handleClick(myres, weight)
  return formdata;
}

function handleClick(myres, weight) {
  document.getElementById("btn").innerHTML = "You have "+weight +" "+myres+" kg fat."
}

function renderDOM(global) {
  var div = document.getElementById("res");
  
  var totadd = global[global.length-1].total_add_calo
  document.getElementById("totadd").textContent = totadd+"cal"

  
  var totexp = global[global.length-1].total_exp_calo
  document.getElementById("totexp").textContent = totexp+"cal"

  var total_cal = global[global.length-1].total
  document.getElementById("total_cal").textContent = total_cal+"cal"
  console.log(totexp)
  for (var i = 0; i < global.length; i++) {
    console.log(global[i])
    var main = document.createElement("tr")
    main.setAttribute("class", "main_class")

    var add_food = document.createElement("td");
    add_food.append(global[i].add_food);

    var add_calo = document.createElement("td");
    add_calo.append(global[i].add_calo);

    var add_exercise = document.createElement("td");
      add_exercise.append(global[i].add_exercise);

      var exp_calo = document.createElement("td");
      exp_calo.append(global[i].add_exp_calo);

    main.append(add_food, add_calo, add_exercise, exp_calo)
    
  }
  div.append(main);
}
