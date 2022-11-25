// Javascript for Etchasketch Project

const container = document.querySelector('#container');

// TODO: Control grid size no matter what the elements were
// Function that creates grid based on number, default 16
function grid(num=16) {
  for(var i = 0; i < num; i += 1) {
      var div = document.createElement("div");
      div.className = "row";
      div.setAttribute('style', 'display: inline-block;')
      div.id = `${i}`
      //div.innerHTML = `row ${i}`;
      container.appendChild(div)
  };

  for(var i = 0; i < num; i += 1) {
      var box = document.querySelectorAll(".row");
      for (var x = 0; x < num; x++) {
        var square = document.createElement('div');
        square.className = "box"
        square.setAttribute('id', `box ${x}`);
        //square.textContent = `I'm box ${count}!`;
        box[i].appendChild(square);
      }
  };

  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    size = 500/num
    console.log(size);
    box.setAttribute('style', `width: ${size}px; height: ${size}px;`)
    box.addEventListener('mouseover', function() {
      box.style.setProperty('background-color', 'purple')
    });
  });
};

if (!document.querySelector('box')) {
  grid();
};

function reset() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {box.style.setProperty('background-color', '#1F2937')});
  console.log(boxes)
};

function resize() {
  answer = prompt("What size do you want?");
  console.log(isNaN(answer))
  if (isNaN(answer)) {
    answer = prompt("Please pick a number: ");
  } else if (answer > 100 || answer < 0 ) {
    answer = prompt("Please pick a number between 1 and 100: ");
  };
  console.log(answer);
  var row = document.querySelectorAll(".row");
  row.forEach(row => row.remove());
  grid(answer);
};



const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

const sizer = document.querySelector('#sizer');
sizer.addEventListener('click', resize);
