// Select Main Elements
let $ = document;
const changebtn = $.querySelector(".changeButton");
const resetButton = $.querySelector(".resetButton");
const convertButton = $.querySelector(".convertButton");
const input = $.querySelector("#converter");
const result = $.getElementById("rresult");

// Other Elements
const Cdegree = $.querySelector(".C");
const Fdegree = $.querySelector(".F");
const maintext = $.querySelector(".maintext");
let flagCtoF = true;
changebtn.addEventListener("click", ChangeFucntion);
convertButton.addEventListener("click", ConverFunction);
resetButton.addEventListener("click", ResetFunction);
let inp1 = $.querySelector(".CPP");
let out1 = $.querySelector(".CFF");
// Functions

function ChangeFucntion() {
  if (Cdegree.innerHTML === "°C") {
    input.setAttribute("placeholder", "°F");
    Cdegree.innerHTML = "°F";
    Fdegree.innerHTML = "°C";
    $.title = "°F to °C";
  } else {
    input.setAttribute("placeholder", "°C");
    Cdegree.innerHTML = "°C";
    Fdegree.innerHTML = "°F";
    $.title = "°C to °F";
  }
  ResetFunction();
}
function ConverFunction() {
  if (isNaN(input.value)) {
    result.style.display = "block";
    inp1.innerHTML = "";
    out1.innerHTML = "";
    maintext.innerHTML = "Please Enter Valid Input";
    maintext.style.color = "red";
  } else if (input.value === "") {
    result.style.display = "block";
    inp1.innerHTML = "";
    out1.innerHTML = "";
    maintext.innerHTML = "You Did not Enter anything ";
    maintext.style.color = "white";
  } else {
    maintext.style.color = "yellow";
    maintext.innerHTML = "°C to °F is :";

    if (Cdegree.innerHTML === "°C") {
      let inpc = input.value;
      let out12 = ChnageCtoF(inpc);

      inp1.innerHTML = inpc;
      out1.innerHTML = out12.toFixed(1);
      result.style.display = "block";
      pp(result.innerHTML);
    } else {
      let inpc = input.value;
      let out12 = ChnageFtoC(inpc);

      inp1.innerHTML = inpc;
      out1.innerHTML = out12.toFixed(1);
      maintext.innerHTML = "°F to °C is :";
      result.style.display = "block";
    }
  }
}
function ResetFunction() {
  input.value = "";
  result.style.display = "none";
}

function pp(name) {
  console.log(name);
}
function ChnageCtoF(temp) {
  return (temp * 9) / 5 + 32;
}
function ChnageFtoC(temp) {
  return ((temp - 32) * 5) / 9;
}
