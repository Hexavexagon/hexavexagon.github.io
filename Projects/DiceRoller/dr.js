roll = () => {
  console.log('rollin');
  let number = document.getElementById('dr-number').value;
  let size = document.getElementById('dr-dicesize').value;
  let drop = document.getElementById('dr-drop').value;
  let highorlow = document.getElementById('dr-highorlow').value ? 'high' : 'low';

  let result = {};
  result.rolls = [];

  // Roll
  for (let i = 0; i < number; i++) {
    result.rolls.push(Math.ceil(Math.random()*size));
  }

  // Sort
  result.rolls.sort(compareFunction);

  // Drop high/low
  result.dropped = result.rolls;
  if (drop > 0 && highorlow === 'high') {
    for (let i = 0; i < drop; i++) {
      result.dropped = result.dropped.slice(0, -1);
    }
  } else if (drop > 0 && highorlow === 'low') {
    for (let i = 0; i < drop; i++) {
      result.dropped = result.dropped.slice(1, result.dropped.length-1);
    }
  }

  // Print
  document.getElementById('dr-result').textContent = result.dropped;
}

function compareFunction(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0; // equal
  }
}
