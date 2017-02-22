function setText(selector, text) {
	/*
		`selector` is string with CSS-like selector
		`text` - is just string with text we want to change
	*/

	// Write your code here
	var element = document.querySelector("p")
	element.innerText = text;
}


function setTextAll(selector, text) {
	// Write your code here
	var arrayElements = document.querySelectorAll("div .block a")
	// element.innerText = text;
	arrayElements.forEach(function(element){
		element.innerText = text;
	});
}


setText("p", "wasn't that hard, yeah ?");
setTextAll("div .block a", "or was it ?");
