(function() {
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

var bgImageArray = [
  '../img/header/1.jpg',
  '../img/header/2.jpg',
  '../img/header/3.jpg',
  '../img/header/4.jpg',
];
//   secs = 4;
bgImageArray.forEach(function(img) {
  new Image().src = img;
  // caches images, avoiding white flash between background replacements
});

var headerBgElm = document.getElementById('headerBg');
var previousHeaderBgElm = document.getElementById('previousHeaderBg');
previousHeaderBgElm.classList.add('bgImage1');

var backgroundImage = 1;
var fadeInToggle = false;

function fadeHeaderImages(callback) {
  // setInterval(function() {
  //   backgroundImage++;
  //   headerBgElm.classList.add('bgImage'+backgroundImage);
  //   headerBgElm.classList.toggle('fadeIn');
  //   fadeInToggle = !fadeInToggle;
  //   console.log('setInterval')
  //   callback();
  // }, 6000);
}

fadeHeaderImages(function(){
//  console.log('callback');
//  previousHeaderBgElm.classList.remove('bgImage'+backgroundImage);
//  previousHeaderBgElm.classList.add('bgImage'+backgroundImage);
})


