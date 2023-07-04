const generateMemeButton = document.querySelector(".memeGenerator .generateMemeButton");
const memeImage = document.querySelector(" .memeGenerator img");
const memeTitle = document.querySelector(".memeGenerator .memeTitle");
const memeAuthor = document.querySelector(".memeGenerator, .memeAuthor");

const updateDetails = (url, title, author) => {
	memeImage.setAttribute("src", url);
	memeTitle.innerHTML = title;
	memeAuthor.innerHTML = author;
};
const generateMeme = () => {
	fetch("https://meme-api.com/gimme/wholesomememes")
		.then((response) => response.json())
		.then((data) => {
			updateDetails(data.url, data.title, data.author);
		});
};
generateMemeButton.addEventListener("click", generateMeme);
