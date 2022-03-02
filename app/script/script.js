let bill = document.getElementById("bill");
let PeopleCount = document.getElementById("noOfPeople");
let customPercentage = document.getElementById("custom");
const perBtn = document.querySelectorAll(".percentage");
const errorMsg = document.querySelector('.error-msg')
const display = document.querySelectorAll(".amount")
let billValue = 0.0

let tipPercentage = 0.15

let pleCount = 1

PeopleCount.value = 1

bill.addEventListener('input' , setBill)

perBtn.forEach(element => {
    element.addEventListener('click', handlePercentage)
})

customPercentage.addEventListener('input', setCustomPercentage)

PeopleCount.addEventListener('input',setPeopleCount)

function setBill(){
    billValue = parseFloat(bill.value)
    calculateTip()
}

function handlePercentage(event){
    perBtn.forEach(btn => {
        btn.classList.remove("active")
        if(event.target.innerHTML == btn.innerHTML){
            btn.classList.add("active")
            tipPercentage = parseFloat(btn.innerHTML)/100
        }
    })
    customPercentage.value = ''
    calculateTip()

}

function setCustomPercentage(){
    perBtn.forEach(btn => {
        btn.classList.remove("active")
    })
    tipPercentage = parseFloat(customPercentage.value)/100
    if(customPercentage.value!=''){
        calculateTip()
    }
}

function setPeopleCount(){
    pleCount = parseFloat(PeopleCount.value)
    if(pleCount <= 0){
        errorMsg.classList.add("active")
        setTimeout(() => {
            errorMsg.classList.remove("active")
        }, 2000);
    }
    calculateTip()
}

function calculateTip(){
    if(pleCount >= 1){
        let tip = billValue*tipPercentage/pleCount
        let total = billValue*(tipPercentage+1)/pleCount

        display[0].innerHTML = '$'+tip.toFixed(2)
        display[1].innerHTML = '$'+total.toFixed(2)
       
    }
}

