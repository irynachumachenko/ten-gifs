const API_ENDPOINT = 'http://api.giphy.com/v1/gifs/';
const API_KEY = 'DDLiQV0Jxw1Ks83GdntyUcGrR8qgReYs';
const GIF_LIMIT = 10;

const output = document.getElementById('output');
const loader = document.getElementById('loader');

const getTrendingGifs = () => {
    return fetch(`${API_ENDPOINT}trending?api_key=${API_KEY}&limit=${GIF_LIMIT}&q=${search}`)
        .then(res => res.json())
        .then(res => res.data);
}

function renderGifs(gifs) {
    output.innerHTML = '';

gifs.forEach(({ images, title }) => {
    const { url } = images.original;

    output.insertAdjacentHTML('beforeend', `<img src=${url} alt=${title}>`);
    });
}

getTrendingGifs().then(renderGifs);

searchInput.addEventListener('input', (e) => {
    const {value} = searchInput;

    if(!value) {
    getTrendingGifs().then(renderGifs);
    return;
}

searchGifs(value).then(renderGifs);
});