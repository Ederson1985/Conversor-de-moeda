const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueconverted = document.querySelector(".currency-value  ")

    
    const eurotoday = 6.2
    const dolarToday = 5.2

    if(currencySelect.value == "dolar") {
        currencyValueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro") {
        currencyValueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / eurotoday)     
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

    function changeCurrency(){
        const currencyName = document.getElementById("currency-name")
        const currencyImg = document.querySelector(".currency-img")

        if (currencySelect.value == "dolar"){
            currencyName.innerHTML = "Dólar"
            currencyImg.src = "assets/estados-unidos (1) 1.png"
        }

        if (currencySelect.value == "euro"){
            currencyName.innerHTML = "Euro"
            currencyImg.src = "assets/Design sem nome 3.png"
        }
        
    }

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", convertValues)