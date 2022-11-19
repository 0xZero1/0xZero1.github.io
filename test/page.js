const container = document.querySelector('#container');

const content = document.createElement('div');
content.setAttribute('style', 'background:pink; border: 5px solid black;');
content.style.color = 'red';
content.textContent = "Hey, I'm red!";

const header = document.createElement('h1');
header.textContent = 'I am in a div';

const para = document.createElement('p');
para.textContent = 'ME TOO!';

content.appendChild(header);
content.appendChild(para);

//const div = document.createElement('div');
//div.setAttribute('style', 'border: black', 'background: pink')

container.appendChild(content);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert('Hello World!');
});

function alertFunction() {
  alert("YAY! You did it!");
};
const first = document.querySelector('#first');
first.addEventListener('click', alertFunction);

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function (e) {
  console.log(e.target)
  e.target.style.background = 'blue';
});
