const accessKey = "JkNEcW4IisMJ6Yz3WaFOqnpueB8Hr1HG108DQCZ96yQ";

const seacrhForm = document.getElementById("search-form");
const seacrhBox = document.getElementById("search-box");
const seacrhResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-button");

let keyword = " ";
let page = 1;
async function SearchImages() {
  keyword = seacrhBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=30`;
  const responce = await fetch(url);
  const data = await responce.json();
  const results = data.results;
if (page===1){
  seacrhResult.innerHTML = "";
}

results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href= result.links.html;
    imageLink.target="_blank";
    imageLink.appendChild(image)
    seacrhResult.appendChild(imageLink);
  });
  showMoreBtn.style.display="block";
}
seacrhForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  SearchImages();
});
showMoreBtn,addEventListener("click", ()=>{
    page ++;
    SearchImages();
})