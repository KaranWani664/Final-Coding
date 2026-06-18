// Definition: React.js is a free, open-source JavaScript front-end library created by Meta (Facebook) for building user interfaces.

// Create a h1 element using js

const elementOne = document.createElement('h1');
elementOne.textContent = "Hello Coders";
elementOne.className = 'element';
elementOne.id = 'first';
elementOne.style.fontSize = "100px"
elementOne.style.backgroundColor = "white"
elementOne.style.color = "orange"

const elementRoot = document.getElementById('root');
elementRoot.append(elementOne);

// id name.append(parent name) -> is used to create child element