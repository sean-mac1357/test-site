// Image Switcher Code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/drift-240.jpg') {
    myImage.setAttribute('src','images/drift-240-3.jpg.dms');
  } else {
    myImage.setAttribute('src','images/drift-240.jpg');
  }
}

// Personalized welcom message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome ' + myName + ' To the life of Sean!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome ' + storedName + ' To the life of Sean!';
}

myButton.onclick = function() {
  setUserName();
}
