const apiKey = "MNafT5n97vrsAEtVj4iE7QSBGpb1F08e";
const searchBtn = document.querySelector("#search-btn");
const searchInput = document.querySelector("#search-input");
const searchLimit = document.querySelector("#search-limit");
const gifContainer = document.querySelector(".gif-container");

searchBtn.addEventListener('click', e => {
	e.preventDefault();
	const searchTerm = searchInput.value;
	const limit = searchLimit.value;
	getGifs(searchTerm, limit);
});

async function getGifs(searchTerm, limit) {
	try {
		const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&api_key=${apiKey}`);
		const data = await response.json();
		const gifs = data.data;
		let output = '';
		gifs.forEach(gif => {
			output += `
				<img src="${gif.images.downsized.url}">
			`;
		});
		gifContainer.innerHTML = output;
	} catch (error) {
		console.log(error);
	}
}
