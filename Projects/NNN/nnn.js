convert = () => {
  let input = document.getElementById('nnn-input').value;
  let result = nullify(input);
  document.getElementById('nnn-result').textContent = result;
}

nullify = (input) => {
  let breakMe = document.getElementById('breakMe').value === 'on';
  console.log('bre', breakMe);
  if (input > 21 && !breakMe) {
    return 'Specified number too high';
  }
  let resultMid = [];
  for (let i = 0; i < input; i++) {
    resultMid.push(`{${resultMid.join(', ')}}`);
  }
  return `|{${resultMid.join(', ')}}|`;
}
