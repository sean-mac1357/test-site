// Image Switcher Code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/drift-240-2.jpg') {
    myImage.setAttribute('src','images/drift-bmw.jpg');
  } else {
    myImage.setAttribute('src','images/drift-240-2.jpg');
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
    myHeading.innerHTML = 'Welcome ' + myName + ' To The MacEachern Manifesto!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome ' + storedName + ' To The MacEachern Manifesto!';
}

myButton.onclick = function() {
  setUserName();
}
