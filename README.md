# Random_password_generator
A simple, responsive, and interactive password generator built using HTML, CSS, and JavaScript. This tool allows users to generate strong, random passwords based on customizable criteria.
   Features
➡Choose password length (1–32 characters)
  Include or exclude:
➡Lowercase letters
➡Uppercase letters
➡Numbers
➡Symbols

👉 Instant password generation on button click
💡 Clean and responsive UI with subtle styling
✅ Error handling for invalid input or unselected character types

  How It Works:
The program uses JavaScript to dynamically generate a password based on the user's selections. It collects selected character types, randomly selects characters from those sets, and then builds a password of the specified length.

The core logic is handled by the generatePassword() function, which:

➡Concatenates allowed characters based on checkbox states.
➡Uses Math.random() to randomly pick characters.
➡Displays the result inside a styled container.
