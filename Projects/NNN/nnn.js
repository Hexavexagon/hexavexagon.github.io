// grab #nnn-input.value
// convert it
// print result to #nnn-result.text

// maybe time the function so nnn across different languages can be compared

convert = () => {
  let input = document.getElementById('nnn-input').value;
  let result = nullify(input);
  document.getElementById('nnn-result').textContent = result;
}

nullify = (input) => {
  let timer = Date.now();
  let resultMid = [];
  for (let i = 0; i < input; i++) {
    resultMid.push(`{${resultMid.join(', ')}}`);
  }
  // It turns out this timer is pretty useless because the function is too fast but oh well
  document.getElementById('js-timer').textContent = Date.now() - timer;
  return `|{${resultMid.join(', ')}}|`;
}