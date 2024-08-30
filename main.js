const url = 'https://dragonball-api.com/api/characters?limit=58';
let characterArray = {};
let randomCardId = 0;

fetch(url)
	.then(res => res.json())
	.then(data => { 
		let characters = data.items;
		console.log(data);
		updateArray(characters);
	}
);

function updateArray(characters) {
	for (let i = 0; i < characters.length; i++) {
		const character = characters[i];
		characterArray[i] = character;
	}
}

function randomCard(characterArray){
	let container = document.querySelector('.container');
	randomCardId = Math.floor(Math.random() * 57);
	let characterCard = document.createElement('div');
	let name = document.createElement('h1');
	let image = document.createElement('img');
	let ki = document.createElement('h2');
	image.src = characterArray[randomCardId].image;
	name.textContent = characterArray[randomCardId].name;
	ki.textContent = "Ki: " + characterArray[randomCardId].ki;
	characterCard.append(name);
	characterCard.append(image);
	characterCard.append(ki);
	container.append(characterCard);
}