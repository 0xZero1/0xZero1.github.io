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


var docFrag = document.createDocumentFragment();
docFrag.appendChild(container);

for(var i = 1; i < 17; i += 1) {
    var div = document.createElement("div");
    div.className = "finalBlock";
    div.innerHTML = i;
    document.body.appendChild(div);
};


//Count/While version of etchasketch
count = 1;
console.log(count);
while (count < num+1) {
  var square = document.createElement('div');
  square.className = "box"
  square.setAttribute('id', `box ${count}`);
  //square.textContent = `I'm box ${count}!`;
  box[i].appendChild(square);
  count += 1;
};
