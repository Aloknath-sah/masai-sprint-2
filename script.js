var addsum = 0;
function function1() {
  event.preventDefault;
  var B_calo = document.getElementById("bcalo").value;
  var L_calo = document.getElementById("lcalo").value;
  var D_calo = document.getElementById("dcalo").value;
  addsum = Number(B_calo) + Number(L_calo) + Number(D_calo);
  var sump2 = document.getElementById("p2");
  sump2.textContent = addsum;
}

window.addEventListener("load", function () {
  var btn = document.getElementById("btn1");
  btn.addEventListener("click", function1);
});

var burnsum = 0;
function function2() {
  event.preventDefault;
  var c_calo = document.getElementById("cycling_cal").value;
  var w_calo = document.getElementById("walking_cal").value;
  var e_calo = document.getElementById("exercise_cal").value;
  burnsum = Number(c_calo) + Number(w_calo) + Number(e_calo);

  var sump3 = document.getElementById("p3");
  sump3.textContent = burnsum;

  result = addsum - burnsum;
  var para = document.getElementById("p1");
  para.textContent = result;
}

window.addEventListener("load", function () {
  var btn = document.getElementById("btn2");
  btn.addEventListener("click", function2);
});

var ans;
function function3() {
  if (result < 0) {
    ans = (result * -1) / 7000;
    var myres = ans.toFixed(2);
    alert("fat loss by " + myres + " kg");
  } else {
    ans = result / 7000;

    var myans = ans.toFixed(2);
    alert("fat gain by " + myans + " kg");
  }
}
window.addEventListener("load", function () {
  var btn = document.getElementById("btn3");
  btn.addEventListener("click", function3);
});
