function generatePassword(
  passwordlength,
  includelowercase,
  includeuppercase,
  includenumbers,
  includesymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "~!@#$%^&*_-";

  let allowedChars = "";
  let password = "";

  allowedChars += includelowercase ? lowercaseChars : "";
  allowedChars += includeuppercase ? uppercaseChars : "";
  allowedChars += includenumbers ? numberChars : "";
  allowedChars += includesymbols ? symbolChars : "";

  if (passwordlength <= 0) {
    return `(Password length must be at least 1)`;
  }
  if (allowedChars.length === 0) {
    return `(Please select at least one character type)`;
  }

  for (let i = 0; i < passwordlength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

function DisplayPassword() {
  const length = Number(document.getElementById("length").value);
  const lowercase = document.getElementById("lowercase").checked;
  const uppercase = document.getElementById("uppercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;

  const password = generatePassword(
    length,
    lowercase,
    uppercase,
    numbers,
    symbols
  );
  document.getElementById("result").textContent = password;
}
