let rgbInput = document.getElementById('rgbInput');
let hexOutput = document.getElementById('hexOutput'); 
let calButton = document.getElementById('calButton');

calButton.addEventListener('click', function rgbToHex() {
  let rgbValue = rgbInput.value;


  let rgbRegex = /^RGB\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;

  let match = rgbRegex.exec(rgbValue);

  if (match) {
    let r = parseInt(match[1]);
    let g = parseInt(match[2]);
    let b = parseInt(match[3]);

    if (isValidRgbValue(r) && isValidRgbValue(g) && isValidRgbValue(b)) {
     
      let hex = rgbToHexConverter(r, g, b);

      hexOutput.value = `#${hex}`;
    } else {
      alert('RGB values should be in the range of 0 to 255');
    }
  } else {
    alert('Please enter a valid RGB color code');
  }
});


function isValidRgbValue(value) {
  return value >= 0 && value <= 255;
}

function rgbToHexConverter(r, g, b) {

  let hexR = r.toString(16).padStart(2, '0');
  let hexG = g.toString(16).padStart(2, '0');
  let hexB = b.toString(16).padStart(2, '0');

  return `${hexR}${hexG}${hexB}`;
}