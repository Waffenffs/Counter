const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const value = document.querySelector(".value");
let currentValue = 0;

const changeValue = () => {
    return value.textContent = currentValue;
}

increase.addEventListener(`click`, function(){
    currentValue++;
    changeValue();
})

decrease.addEventListener(`click`, function(){
    currentValue--;
    changeValue();
})

reset.addEventListener(`click`, function(){
    currentValue = 0;
    changeValue();
})

