document.getElementById("convertBtn").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const resultBox = document.getElementById("result");

  if (isNaN(amount) || amount <= 0) {
    resultBox.textContent = "Please enter a valid amount.";
    return;
  }

  // Conversion rates (base = 1 unit of that currency)
  const rates = {
    INR: { USD: 0.012, JPY: 1.82, KRW: 15.7, INR: 1 },
    USD: { INR: 83, JPY: 151, KRW: 1300, USD: 1 },
    JPY: { INR: 0.55, USD: 0.0066, KRW: 8.6, JPY: 1 },
    KRW: { INR: 0.064, USD: 0.00077, JPY: 0.12, KRW: 1 }
  };

  const rate = rates[from][to];
  const converted = amount * rate;

  resultBox.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
});
