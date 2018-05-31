(function () {
  var menuButton = document.getElementById('menuButton');
  var overlay = document.querySelector('div.overlay');
  var closeText = document.getElementById('closeText');
  var menuText = document.getElementById('menuText');

  function toggleOpen() {
    menuButton.classList.toggle('open');
    overlay.classList.toggle('open');
    menuText.classList.toggle('open');
    closeText.classList.toggle('open');

  }
  
  menuButton.addEventListener('click', toggleOpen);
  closeText.addEventListener('click', toggleOpen);
  menuText.addEventListener('click', toggleOpen);
})();