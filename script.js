
document.querySelector("#state_dropdown");

let userInput = document.querySelector("#income_input");

let stateInput = document.querySelector("#state_input");

let submit_button = document.querySelector("#button");

submit_button.addEventListener("click", onClick);


function onClick(event) {
  event.preventDefault();
  if (userInput.value > 21400 && stateInput.value == "New York") {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p1.innerHTML = "You live in " + stateInput.value;
    p2.innerHTML = "Your yearly income is " + userInput.value;
    let income = userInput.value * .0621 * .22;
    p3.innerHTML = "You will have " + "$" + income + " after state taxes and federal taxes";
    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3);
  }

}
let price = document.querySelector("#tax_price");

let state = document.querySelector("#tax_state");

let tax_button = document.querySelector("#tax_button");

tax_button.addEventListener("click", taxClick);

function taxClick(event) {
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let actual_price = price.value * .04

  p1.innerHTML = "You live in" + state.value + "which has a total sales tax rate of 4%";
  p2.innerHTML = "You live in" + price.value;
  p3.innerHTML = "The actual price is" + actual_price.value;
  document.body.appendChild(p1);
  document.body.appendChild(p2);
  document.body.appendChild(p3);
}



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
