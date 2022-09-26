const people = document.querySelector(".people");
const plus = document.querySelector(".fa-plus");
const minus = document.querySelector(".fa-minus");
const billInput = document.querySelector(".bill");
const tipInput = document.querySelector(".tip")
let numOfPeople = Number(people.innerText)   
const totalPerPerson = document.querySelector(".total")      

plus.addEventListener("click", increasePeople)
minus.addEventListener("click", decreasePeople)

function calculateBill() {
    const bill = Number(billInput.value)
    const tipPercentage = Number(tipInput.value) / 100
    const tipAmount = bill * tipPercentage
    const totalBill = tipAmount + bill
    const perPersonTotal = totalBill / numOfPeople
    totalPerPerson.innerHTML = `$${perPersonTotal.toFixed(2)}`

}

function increasePeople(){
    numOfPeople++
    people.innerText = numOfPeople
    calculateBill()
}
function decreasePeople(){
    if (numOfPeople <= 1){
        throw "You cannot have less than 1 person"
    }else{
        numOfPeople--
        people.innerText = numOfPeople
        calculateBill()
    }
}