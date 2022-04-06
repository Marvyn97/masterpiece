// fonction getRandomColor va retourner une string avec des valeurs rgba
function getRandomColor() {
    return `rgba(${getRandomInteger(0, 255)},
            ${getRandomInteger(0, 255)},
            ${getRandomInteger(0, 255)},
            ${Math.random()})
            `;   
}

// fonction getRandomInteger
function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}