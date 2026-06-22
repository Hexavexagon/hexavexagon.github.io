convert = () => {
  let input = document.getElementById('nnn-input').value;
  let result = nullify(input);
  document.getElementById('nnn-result').textContent = result;
}

nullify = (input) => {
  let resultMid = [];
  for (let i = 0; i < input; i++) {
    resultMid.push(`{${resultMid.join(', ')}}`);
  }
  return `|{${resultMid.join(', ')}}|`;
}
