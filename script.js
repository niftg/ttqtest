addEventListener('load', function(e) {
  document.querySelectorAll('#ts div')
    .forEach(v => {
      v.addEventListener('click', e => {submit(e.target.id)});
      v.addEventListener('touchstart', e => {e.preventDefault(); e.target.style.cssText = 'background-color: black;'} );
      v.addEventListener('mousedown', e => {e.target.style.cssText = 'background-color: black;'} );
      v.addEventListener('touchend', e => {e.preventDefault(); e.target.style.cssText = 'background-color: white;'; submit(e.target.id) } );
      v.addEventListener('mouseup', e => {e.target.style.cssText = 'background-color: white;'} );
    });
  document.getElementById('answer')
    .addEventListener('click', e => {const s = e.target.style; s.color = s.color=='white' ? 'black' : 'white';} );

  newPrompt();
});

function randi(n) { return Math.floor(Math.random() * n) }
function pick(arr) { return arr[randi(arr.length)] }

window.files = { 'na': [
  'https://toaq.github.io/TwE/tones/t1.mp3',
  'https://toaq.github.io/TwE/tones/t2.mp3',
  'https://toaq.github.io/TwE/tones/t3.mp3',
  'https://toaq.github.io/TwE/tones/t4.mp3',
  'https://toaq.github.io/TwE/tones/t5.mp3',
  'https://toaq.github.io/TwE/tones/t6.mp3',
  'https://toaq.github.io/TwE/tones/t7.mp3'
] }

const words = Object.keys(files)

let anstone

const prompt = document.getElementById('prompt')
const answer = document.getElementById('answer')

function newPrompt() {
  let answord = pick(words)
  anstone = randi(files[answord].length) + 1
  let file = files[answord][anstone-1]

  prompt.src = file
  answer.textContent = `(${anstone})`
}
function submit(num) {
  console.log(num)
  const ok = num == 't'+anstone
  document.getElementById(ok? 'correct': 'wrong').textContent -= -1
  newPrompt()
}
