
let typeCounter;
let speed;
let txt;
let pokSound = new Audio('static/sounds/pok.mp3');
let typeSound = new Audio('static/sounds/type.mp3');
let colorRequest = new XMLHttpRequest();

document.querySelector('#RandomColorBtn').addEventListener('click', (event) => {
  document.body.style.backgroundColor = pickRandomColor();
});

document.querySelector('#PlayPokSoundBtn').addEventListener('click', (event) => {
  playSound(pokSound);
});

document.querySelector('#XMRRandomColorBtn').addEventListener('click', (event) => {
  getColor();
});

document.querySelector('#TypeBtn').addEventListener('click', (event) => {
  document.querySelector('#Carete').innerHTML = '<span id="TypedText2"></span>|';
  typeCounter = 0;
  speed = 80;
  txt = 'kek kek kek kek ㅋㅋㅋㅋㅋㅋㅋㅋ kek kek kek kek ㅋㅋㅋㅋㅋㅋㅋㅋ kek kek kek kek ㅋㅋㅋㅋㅋㅋㅋㅋ kek kek kek kek ㅋㅋㅋㅋㅋㅋㅋㅋ';
  typeText();
});

function pickRandomColor(alpha=1) {
  let red = Math.floor(Math.random() * (255 - 0) ) + 0;
  let green = Math.floor(Math.random() * (255 - 0) ) +0;
  let blue = Math.floor(Math.random() * (255 - 0) ) + 0;
  let color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  console.log(color);
  return color;
};

function playSound(sound) {
    sound.play();
};

function getColor() {
  colorRequest.open('POST', 'http://127.0.0.1:5000/getcolor', true);
  colorRequest.responseType = 'text';
  colorRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  colorRequest.onreadystatechange = () => {
    if (colorRequest.readyState === XMLHttpRequest.DONE && colorRequest.status === 200) {
      color = colorRequest.response;
      console.log('xmr random color: ', color);
      document.body.style.backgroundColor = color;
    };
  };
  colorRequest.send('hi=ok');
};

function typeText() {
  if (typeCounter < txt.length) {
    document.querySelector('#TypedText2').innerHTML += txt.charAt(typeCounter);
    playSound(typeSound);
    typeCounter++;
    setTimeout(typeText, speed);
  } else if (typeCounter == txt.length) {  document.querySelector('#Carete').innerHTML = document.querySelector('#Carete').innerHTML.slice(0, (document.querySelector('#Carete').innerHTML.length - 1));   }
};
