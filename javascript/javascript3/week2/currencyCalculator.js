const API_URL = "https://open.er-api.com/v6/latest/USD";

async function fetchExchangeRates() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const exchangeRates = data.rates;
    const currencies = Object.keys(exchangeRates);
    return { exchangeRates, currencies };
  } catch (error) {
    console.log("Error fetching exchange rates:", error);
  }
}

function updateResult(amount, fromCurrency, toCurrency, exchangeRates) {
  const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
  const result = (amount * rate).toFixed(2);
  const resultText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
  document.getElementById("result").textContent = resultText;
}


function updateDropdownOptions(currencies) {
  const fromDropdown = document.getElementById("from");
  const toDropdown = document.getElementById("to");
  currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.textContent = currency;
    if (currency === "EUR") {
      option.selected = true; 
    }
    fromDropdown.appendChild(option);
    const toOption = option.cloneNode(true);
    if (currency === "DKK") {
      toOption.selected = true; 
    }
    toDropdown.appendChild(toOption);
  });
}

function onInputChange(event, exchangeRates) {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("from").value;
  const toCurrency = document.getElementById("to").value;
  updateResult(amount, fromCurrency, toCurrency, exchangeRates);
}

async function init() {
  const { exchangeRates, currencies } = await fetchExchangeRates();
  updateDropdownOptions(currencies);
  updateResult(1, "EUR", "DKK", exchangeRates);
  document.addEventListener("input", (event) =>
    onInputChange(event, exchangeRates)
  );
}

init();