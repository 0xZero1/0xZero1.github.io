const button = document.querySelectorAll('button');

button.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
