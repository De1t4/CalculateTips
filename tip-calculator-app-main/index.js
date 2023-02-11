const inputBill = document.getElementById("billTotal")
const inputPeople = document.getElementById("numberPeople")
const tipPerson = document.getElementById("tipPerson")
const totalPersons = document.getElementById("totalPersons")
const activeError = document.getElementById("textError")

inputBill.addEventListener("keyup", () =>{
    console.log(inputBill.value)
    inputPeople.addEventListener("keyup", () =>{
        const valorInput = inputPeople.value
        if(valorInput > 0){
            inputPeople.classList.add("correct")
            inputPeople.classList.remove("incorrect")
            activeError.classList.remove("errorActive")
            totalPersons.innerHTML =+ parseFloat(inputBill.value / inputPeople.value).toFixed(2)

        } else{
            activeError.classList.add("errorActive")
            inputPeople.classList.add("incorrect")
            inputPeople.classList.remove("correct")
            totalPersons.innerHTML =+ "0"
        }
        tipPerson.innerHTML =+ inputBill.value
    })
})





