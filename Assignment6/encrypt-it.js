/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    const encryptButton = document.getElementById("encrypt-it");
    const resetButton = document.getElementById("reset");
    if (encryptButton) {
      encryptButton.addEventListener("click", handleEncrypt);
    }
    if (resetButton) {
      resetButton.addEventListener("click", handleReset);
    }
  }

  function handleEncrypt() {
    const input = document.getElementById("input-text");
    const output = document.getElementById("result");
    if (!input || !output) {
      return;
    }

    const encryptedText = shiftCipher(input.value);
    output.textContent = encryptedText;
  }

  function shiftCipher(text) {
    let result = "";
    const lowerText = text.toLowerCase();
    for (let i = 0; i < lowerText.length; i++) {
      const ch = lowerText[i];
      if (ch < "a" || ch > "z") {
        result += ch;
      } else if (ch === "z") {
        result += "a";
      } else {
        const letter = lowerText.charCodeAt(i);
        result += String.fromCharCode(letter + 1);
      }
    }
    return result;
  }

  function handleReset() {
    const input = document.getElementById("input-text");
    const output = document.getElementById("result");
    if (input) {
      input.value = "";
    }
    if (output) {
      output.textContent = "";
    }
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
