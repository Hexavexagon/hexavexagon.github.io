// grab #nnn-input.value
// convert it
// print result to #nnn-result.text

// maybe time the function so nnn across different languages can be compared

convert = () => {
  let input = document.getElementById('nnn-input').value;
  console.log('value is: ', input);
  let result = nullify(input);
  document.getElementById('nnn-result').textContent = result;
}

nullify = (input) => {
  let resultMid = [];
  for (let i = 0; i < input; i++) {
    // TODO remember how the fuck this works at some point
    resultMid.push(`{${resultMid.join(', ')}}`);
  }
  return `|{${resultMid.join(', ')}}|`;
}