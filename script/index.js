//Declaring variables
let rgbInput = document.getElementById('rgbInput')
let hexOutput = document.getElementById('hexOutput');
let calButton = document.getElementById('calButton');

function rgbToHex() {
  let redInput = parseInt(document.getElementById('redInput').value);
  let grnInput = parseInt(document.getElementById('grnInput').value);
  let bluInput = parseInt(document.getElementById('bluInput').value);

  //Converting the single color value to a hexadecimal
  function Hex(color) {
      let hex = color.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
  }
  // Converting each RGB value to a hexadecimal
  let red = Hex(redInput);
  let grn = Hex(grnInput);
  let blu = Hex(bluInput);

  hexOutput.value = "#" + red + grn + blu;
}
calButton.addEventListener('click', rgbToHex);







