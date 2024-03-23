function generateRandomNumber() {
    var length = parseInt(document.getElementById("length").value);
    var randomNumber = '';

    for (var i = 0; i < length; i++) {
      randomNumber += Math.floor(Math.random() * 10);
    }
    document.getElementById("randomNumberTextBox").value = randomNumber;
  }
