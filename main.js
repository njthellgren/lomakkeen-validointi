document.getElementById('mainForm').addEventListener('submit', function(event) {
  if (!validateForm()) {
      event.preventDefault();
      document.getElementById("validateText").innerText = "Täytä kaikki vaaditut kentät";  }
    

  let country = document.getElementById('country').value;
  if (country === "choice"){
    document.getElementById("countryText").innerText = "Valitse maa";  }
    else {
        document.getElementById("genderText").innerText = "";
    }

  let gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    document.getElementById("genderText").innerText = "Valitse sukupuoli";  }

  let language = document.querySelector('input[name="language"]:checked');
  if (!language){
    document.getElementById("languageText").innerText = "Valitse kieli";  }


  });

  function checkUserID() {
    let userInput = document.getElementById("userInput");
    let userID = userInput.value.trim();
    let text = "";

    if (userID.length < 6) {
        text = "Käyttäjä ID:n on oltava vähintään 6 merkkiä";
    }

    document.getElementById("userIdText").innerHTML = text;
    return text;
}

  function checkPassword() {
    let userInput = document.getElementById("passwordInput");
    let password = userInput.value.trim();
    let text = "";

    if (password.length < 6) {
        text = "Salasanan on oltava vähintään 6 merkkiä";
    } else if (!/\d/.test(password)) {
        text = "Salasanassa on oltava vähintään yksi numero";
    } else if (!/[A-Z]/.test(password)) {
        text = "Salasanassa on oltava vähintään yksi iso kirjain.";
    } else if (!/[!@£$€&%#]/.test(password)) {
        text = "Salasanassa on oltava vähintään yksi erikoismerkki";
    }

    document.getElementById("passwordText").innerHTML = text;
    return text;
}

function checkPostalCode() {
    let userInput = document.getElementById("postalInput");
    let postalCode = userInput.value.trim();
    let text = "";

    if (postalCode.length !== 5) {
        text = "Postinumeron on oltava 5 merkkiä";
    }

    document.getElementById("postalText").innerHTML = text;
    return text;
}

function checkEmail() {
    let userInput = document.getElementById("emailInput");
    let eMail = userInput.value.trim();
    let text = "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(eMail)) {
        text = "Sähköposti ei ole kelvollinen";
    }

    document.getElementById("emailText").innerHTML = text;
    return text;
}

function checkName() {
    let fullName = document.getElementById("nameInput").value.trim();
    let names = fullName.split(/\s+/);
    let text = "";

    if (names.length < 2 || names.some(name => name === "")) {
        text = "Anna etu- ja sukunimi";
    }

    document.getElementById("fullNameText").innerHTML = text;
    return text;
}

function checkAddress() {
    let address = document.getElementById("addressInput").value.trim();
    let parts = address.split(/\s+/);
    let text = "";

    let numberPattern = /\d+$/;
    if (address.length < 2 || !numberPattern.test(parts[parts.length - 1])) {
        text = "Anna validi osoite";
    }

    document.getElementById("addressText").innerHTML = text;
    return text;
}

function validateForm() {
  let isValid = true;

  if (checkUserID()) isValid = false;
  if (checkPassword()) isValid = false;
  if (checkPostalCode()) isValid = false;
  if (checkEmail()) isValid = false;
  if (checkName()) isValid = false;
  if (checkAddress()) isValid = false;

  let country = document.getElementById('country').value;
  if (country === "choice") {
      document.getElementById("countryText").innerText = "Valitse maa";
      isValid = false;
  } else {
      document.getElementById("countryText").innerText = "";
  }

  let gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
      document.getElementById("genderText").innerText = "Valitse sukupuoli";
      isValid = false;
  } else {
      document.getElementById("genderText").innerText = "";
  }

  let language = document.querySelector('input[name="language"]:checked');
  if (!language) {
      document.getElementById("languageText").innerText = "Valitse kieli";
      isValid = false;
  } else {
      document.getElementById("languageText").innerText = "";
  }

  return isValid;
}

