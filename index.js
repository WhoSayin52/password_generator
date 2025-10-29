const characters = [
	"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];

let outputElLeft = document.querySelector(".passwords .output-field.left");
let outputElRight = document.querySelector(".passwords .output-field.right");

let includeNumbersCheckboxEl = document.getElementById("include-numbers-checkbox");
let includeSymbolsCheckboxEl = document.getElementById("include-symbols-checkbox");

function generatePassword() {
	let maxIndex = 52;

	let hasNumbers = includeNumbersCheckboxEl.checked;
	let hasSymbols = includeSymbolsCheckboxEl.checked;

	if (hasNumbers) {
		maxIndex += 10;
	}
	if (hasSymbols) {
		maxIndex += 29;
	}

	let leftPass = "";
	let rightPass = "";

	for (let i = 0; i < 15; ++i) {
		let leftIndex = generateRandomInt(0, maxIndex);
		let rightIndex = generateRandomInt(0, maxIndex);

		if (hasSymbols === true && hasNumbers === false) {
			if (leftIndex >= 52 && leftIndex <= 61) {
				leftIndex += 10;
			}
			if (rightIndex >= 52 && rightIndex <= 61) {
				rightIndex += 10;
			}
		}

		leftPass += characters[leftIndex];
		rightPass += characters[rightIndex];
	}
	outputElLeft.textContent = leftPass;
	outputElRight.textContent = rightPass;
}

function generateRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function copyToClipboard(password) {
	navigator.clipboard.writeText(password);
}
