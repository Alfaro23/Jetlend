let slider = document.querySelector(".calculator__range");
let output = document.querySelector(".calculator__value");

let calculatorValueMounth = document.querySelector(".calculator__valueMounth");
let calculatorRangeMonth = document.querySelector(".calculator__rangeMonth");

let calculatorResultCalc = document.querySelector(".calculator__resultCalc");

let mobileBlock = document.querySelector(".mobile");
let mobileButton = document.querySelector(".fa-align-justify");
let mobileCloseButton = document.querySelector(".fa-times");

let summValue = document.createElement("span");
let monthValue = document.createElement("span");
monthValue.innerHTML = "1";

slider.oninput = function () {
    output.innerHTML = this.value + " руб.";
    summValue.innerHTML = this.value;
}

calculatorRangeMonth.oninput = function () {
    calculatorValueMounth.innerHTML = this.value + " мес.";
    monthValue.innerHTML = this.value;
}

setInterval(()=>{
    if(summValue.innerHTML == "" && monthValue.innerHTML == ""){
        calculatorResultCalc.innerHTML = "0 руб.";
    } else{
        calculatorResultCalc.innerHTML = Math.round((summValue.innerHTML / monthValue.innerHTML) + (summValue.innerHTML * 0.2) ) + " руб.";
    }
}, 3000)

mobileButton.addEventListener("click", function(){
    mobileBlock.style.display = "flex";
    mobileButton.style.display = "none";
    mobileCloseButton.style.display = "block";
});

mobileCloseButton.addEventListener("click", function(){
    mobileBlock.style.display = "none";
    mobileButton.style.display = "block";
    mobileCloseButton.style.display = "none";
});
