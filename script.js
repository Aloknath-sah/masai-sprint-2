var global = [];
var total_add_calo = 0;
var total_exp_calo = 0;
var total = 0;

window.onload = function () {
  var add_calo = document.querySelector(".form-1");
  add_calo.addEventListener("submit", handleform1);
};

function handleform1() {
  event.preventDefault();
  var elem = event.target.querySelectorAll(".input");
  var data = getFormData(elem);
  global.push(data);
  for (var i = 0; i < elem.length; i++) {
    elem[i].value = " ";
  }

  renderDOM(global);
}

function getFormData(elem) {
  var formdata = {};
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
    alert("fat loss by " + myres + " kg");
  } else {
    ans = total / 7000;

    var myres = ans.toFixed(2);
    alert("fat gain by " + myres + " kg");
  }

  formdata.add_food = add_food;
  formdata.add_calo = total_add_calo;
  formdata.add_exercise = add_exercise;
  formdata.exp_calo = total_exp_calo;
  formdata.total = total;

  return formdata;
}

function renderDOM(global) {
  var div = document.getElementById("res");
  div.innerHTML = "";
  var cont = document.createElement("div");
  var header = createHeader();

  for (var i = 0; i < global.length; i++) {
    var row = createRow(
      global[i].add_food,
      global[i].add_calo,
      global[i].add_exercise,
      global[i].exp_calo,
      global[i].total
    );
    cont.append(row);
  }
  div.append(header);
  div.append(row);
}

function createRow(add_food, add_calo, add_exercise, exp_calo, total) {
  var div = document.createElement("div");

  var my_food = document.createElement("p");
  my_food.textContent = add_food;
  var my_calo = document.createElement("p");
  my_calo.textContent = add_calo;
  var my_exercise = document.createElement("p");
  my_exercise.textContent = add_exercise;
  var my_exp_calo = document.createElement("p");
  my_exp_calo.textContent = exp_calo;
  var total_calo = document.createElement("p");
  total_calo.textContent = total;

  div.append(my_food, my_calo, my_exercise, my_exp_calo, total_calo);

  return div;
}

function createHeader() {
  var div = document.createElement("div");

  var food_header = document.createElement("p");
  food_header.textContent = "Food Added";

  var total_consumed_calo = document.createElement("p");
  total_consumed_calo.textContent = "Total consumed Calories";

  var exercise_header = document.createElement("p");
  exercise_header.textContent = "Exercise";

  var total_exp_calo = document.createElement("p");
  total_exp_calo.textContent = "Total Expenditure Calories";

  var total_calories = document.createElement("p");
  total_calories.textContent = "Total gain/loss";

  div.append(
    food_header,
    total_consumed_calo,
    exercise_header,
    total_exp_calo,
    total_calories
  );

  return div;
}
