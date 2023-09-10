// card number

function updateCard() {
  const cardNumber = getFullCardNumber();
}

function getFullCardNumber() {
  const inputs = document.querySelectorAll(".card-number");
  let fullCardNumber = "";
  inputs.forEach((input) => {
    fullCardNumber += input.value;
  });
  return fullCardNumber;
}

function formatCardNumber(cardNumber) {
  // Add spaces every 4 characters for formatting
  return cardNumber.replace(/(\d{4})/g, "$1 ").trim();
}

function updateCardNumber() {
  const cardNumber = getFullCardNumber();
  const breakCardNumber = formatCardNumber(cardNumber);
  const cardNumBox = document.querySelector(".card-number-box");
  cardNumBox.textContent = breakCardNumber;
}

function moveToNext(input, event) {
  if (
    input.value.length === input.maxLength &&
    event.inputType !== "deleteContentBackward"
  ) {
    const nextInput = input.nextElementSibling;
    if (nextInput) {
      nextInput.focus();
    }
  }
  updateCard();
  updateCardNumber();
}

// update card logo
// Get references to the input field and card logo image element
const cardNumberInput = document.getElementById("cardNumber");
const cardLogoImg = document.getElementById("visa");

// Add an event listener to the input field to detect changes
cardNumberInput.addEventListener("input", updateCardLogo);

// Function to update the card logo based on the first digit of the card number
function updateCardLogo() {
  // Get the card number from the input field
  const cardNumber = cardNumberInput.value.trim();

  // Determine the card type based on the first digit
  let cardType;

  if (cardNumber.startsWith("2") || cardNumber.startsWith("5")) {
    cardType = "mastercard";
  } else if (cardNumber.startsWith("4")) {
    cardType = "visa";
  } else if (cardNumber.startsWith("3")) {
    cardType = "amex";
  } else {
    cardType = "unknown";
  }

  // Set the appropriate card logo image source based on the card type
  if (cardType === "mastercard") {
    cardLogoImg.src = "img/master-card.png";
  } else if (cardType === "visa") {
    cardLogoImg.src = "img/visa.png";
  } else if (cardType === "amex") {
    cardLogoImg.src = "img/american-express.png";
  } else {
    cardLogoImg.src = "";
  }
}

// card holder
document.querySelector(".input-card-number").oninput = () => {
  document.querySelector(".card-holder-name").innerText =
    document.querySelector(".input-card-number").value;
};

// month and year input
document.querySelector(".month-input").oninput = () => {
  document.querySelector(".exp-month").innerText =
    document.querySelector(".month-input").value + " /";
};

document.querySelector(".year-input").oninput = () => {
  document.querySelector(".exp-year").innerText =
    document.querySelector(".year-input").value - "2000";
};

// cvv input
document.querySelector(".cvv-input").onmouseenter = () => {
  document.querySelector(".front").style.transform =
    " perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    " perspective(1000px) rotateY(0deg)";
};

document.querySelector(".cvv-input").onmouseleave = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(-180deg)";
};

document.querySelector(".cvv-input").oninput = () => {
  document.querySelector(".cvv-box").innerText =
    document.querySelector(".cvv-input").value;
};

// form validation

function validate() {
  if (
    document.myForm.myInput.value.foreach() == "" ||
    document.myForm.myInput.value.length.foreach() < 4 ||
    isNaN(document.myForm.myInput.value.foreach())
  ) {
    alert("Card number not correct");
    document.myForm.myInput.focus();
    return false;
  }

  if (document.myForm.cardOwner.value == "") {
    alert("Please provide card owner's name");
    document.myForm.cardOwner.focus();
    return false;
  }

  if (document.myForm.Month.value == "-month") {
    alert("Please select card expiration month");
    // document.myForm.Month.focus();
    return false;
  }

  if (document.myForm.Year.value == "-year") {
    alert("Please select card expiration year");
    // document.myForm.Year.focus();
    return false;
  }
  if (
    document.myForm.CVV.value == "" ||
    isNaN(document.myForm.CVV.value) ||
    document.myForm.CVV.value.length < 3
  ) {
    alert("Invalid CVV");
    document.myForm.CVV.focus();
    return false;
  }
  alert("Your payment was successful!");
  return true;
}
