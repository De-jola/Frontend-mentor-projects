document.addEventListener("DOMContentLoaded", () => {
  // Your JavaScript code here...

  const billamount = document.getElementById("billamount");
  const customTip = document.getElementById("customtip");
  const people = document.getElementById("numofpeople");
  const tipAmountPerPerson = document.getElementById("tipamountperperson");
  const totalPerPerson = document.getElementById("amountperperson");
  const resetButton = document.getElementById("reset");

  let numPercent = 0;
  let numBill = 0;
  let numCustom = 0;
  let numPeople = 1;
  let TipAmount = 0;
  let Total = 0;

  // Function to calculate tip amount and total per person
  const calculateTipAndTotal = () => {
    if (numBill && numPeople) {
      TipAmount = (numPercent * numBill) / numPeople;
      tipAmountPerPerson.innerText = `$${TipAmount.toFixed(2)}`;

      Total = (numBill / numPeople + TipAmount).toFixed(2);
      totalPerPerson.innerText = `$${Total}`;
    }
  };

  // Event listeners for input fields
  billamount.addEventListener("input", () => {
    numBill = parseFloat(billamount.value);
    calculateTipAndTotal();
  });

  customTip.addEventListener("input", () => {
    numCustom = parseFloat(customTip.value);
    if (!isNaN(numCustom)) {
      numPercent = numCustom / 100;
      calculateTipAndTotal();
    }
  });

  people.addEventListener("input", () => {
    numPeople = parseFloat(people.value);
    calculateTipAndTotal();
  });

  // Event listeners for tip percentage buttons
  const tipButtons = document.querySelectorAll(".col-btn");
  tipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tipButtons.forEach((btn) => btn.classList.remove("clicked"));
      button.classList.add("clicked");
      const percentText = button.innerText.replace("%", "");
      numPercent = parseFloat(percentText) / 100;
      calculateTipAndTotal();
    });
  });

  resetButton.addEventListener("click", () => {
    numBill = 0;
    numCustom = 0;
    numPeople = 1;
    numPercent = 0;
    tipAmountPerPerson.innerText = `$0.00`;
    totalPerPerson.innerText = `$0.00`;
    billamount.value = "";
    customTip.value = "";
    people.value = "";
    tipButtons.forEach((button) => {
      button.classList.remove("clicked");
    });
  });
});
