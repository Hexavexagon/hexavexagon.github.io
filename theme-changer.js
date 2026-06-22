function addThemeToggle() {
  // create elements
  const label = document.createElement("label");
  const input = document.createElement("input");
  const sliderbg = document.createElement("span");
  const sliderknob = document.createElement("span");

  // add attributes
  label.setAttribute('class', 'toggle');
  label.addEventListener('mouseup', this.toggleTheme);
  input.setAttribute('type', 'checkbox');
  sliderbg.setAttribute('class', 'slider-bg');
  sliderknob.setAttribute('class', 'slider-knob');

  // nest elements
  label.appendChild(input);
  label.appendChild(sliderbg);
  label.appendChild(sliderknob);

  // add elements
  document.body.insertBefore(label, document.body.firstChild);
  console.log('added theme toggle');
}

console.log('loaded theme-changer.js');
addThemeToggle();


function toggleTheme() {
  const html = document.getElementsByTagName('html')[0];
  const currentTheme = html.getAttribute('class');

  if (currentTheme === 'abyss') {
    document.getElementsByTagName('html')[0].setAttribute('class', 'zenith');
  } else {
    document.getElementsByTagName('html')[0].setAttribute('class', 'abyss');
  }
}
