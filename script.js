<button id="theme-toggle">

</button>

const themeButton = document.querySelector('#theme-toggle');


if (themeButton) {
  
  themeButton.addEventListener('click', () => {
   
    document.body.classList.toggle('dark-mode');
  });
}