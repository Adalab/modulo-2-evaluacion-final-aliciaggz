'use strict';

const sectionAnime = document.querySelector('.js-section');
const inputUser = document.querySelector('.js-input');
const searchButton = document.querySelector('.js-btn-search');
const asideFavsElement = document.querySelector('.js-favanime');

let animeList = [];
let favAnimeList = [];

//get data from API

const getApiFromSearch = () => {
  fetch(`https://api.jikan.moe/v3/search/anime?q=${inputUser.value}`)
    .then((response) => response.json())
    .then((data) => {
      sectionAnime.innerHTML = '';

      const dataResult = data.results;
      animeList = dataResult;

      for (let i = 0; i < dataResult.length; i++) {
        if (dataResult.image_url === undefined) {
          dataResult[i].image_url = dataResult[i].image_url.replace(
            'https://cdn.myanimelist.net/images/qm_50.gif?s=e1ff92a46db617cb83bfc1e205aff620',
            'https://via.placeholder.com/210x295/ffffff/666666/'
          );
        }
      }
      replaceImage();
      renderAll(animeList);
    });
};

//image replace

const replaceImage = () => {
  for (let i = 0; i < animeList.length; i++) {
    if (animeList.image_url === undefined) {
      animeList[i].image_url = animeList[i].image_url.replace(
        'https://cdn.myanimelist.net/images/qm_50.gif?s=e1ff92a46db617cb83bfc1e205aff620',
        'https://via.placeholder.com/210x295/ffffff/666666/'
      );
    }
  }
};

//paint elements

const renderOne = (dataAnime) => {
  sectionAnime.innerHTML += ` 
            <article class="anime__article" data-id="${dataAnime.mal_id}">
              <img class="anime-image" src="${dataAnime.image_url}" alt="image-of-anime">
              <p class="title">${dataAnime.title}</p>
              </article>`;
};

const renderAll = (dataAnime) => {
  sectionAnime.innerHTML = '';

  for (let index = 0; index < dataAnime.length; index++) {
    renderOne(dataAnime[index]);
  }
  listenArticle();
};

//favorite section html
const getFavAnimesCode = (favAnime) => {
  let htmlCode = '';
  htmlCode += `<article class="anime__article">
  <img class="anime-image" src="${favAnime.image}" alt="image-of-anime">
  <p class="title">${favAnime.title}</p>
  <input class="js-btn-delete" data-id="${favAnime.id}" type="button" value="X"></article>`;
  return htmlCode;
};

const paintFavAnimes = () => {
  asideFavsElement.innerHTML = '';

  for (const item of favAnimeList) {
    asideFavsElement.innerHTML += getFavAnimesCode(item);
  }
  listenDeleteButtons();
};

function favAnimeStyle(event) {
  const click = event.currentTarget;

  click.classList.toggle('fav');
  addFavToList(event);
}

function addFavToList(ev) {
  const clickId = ev.currentTarget.dataset.id;
  const clickIdParse = parseInt(clickId);

  //comprobar si el anime esta en fav
  const foundFav = favAnimeList.find((item) => item.id === clickIdParse);

  if (foundFav === undefined) {
    let foundAnime = animeList.find((item) => item.mal_id === clickIdParse);
    // añado el anime favorito a la lista

    favAnimeList.push({
      id: foundAnime.mal_id,
      title: foundAnime.title,
      image: foundAnime.image_url,
    });
  }

  setLocalStorage();
  paintFavAnimes();
}

//BONUS DELETE BUTTON
function deleteFavAnime(event) {
  const clickedBtn = event.currentTarget.dataset.id;
  const clickBtnParse = parseInt(clickedBtn);

  let foundIndex = favAnimeList.findIndex((item) => item.id === clickBtnParse);
  favAnimeList.splice(foundIndex, 1);
  setLocalStorage();
  paintFavAnimes();
}
//listeners

function listenDeleteButtons() {
  listenClickEvents('.js-btn-delete', deleteFavAnime);
}

function listenArticle() {
  listenClickEvents('.anime__article', favAnimeStyle);
}

//LOCAL STORAGE

const getFromLocalStorage = () => {
  const localStorageFav = localStorage.getItem('favoriteAnime');
  if (localStorageFav !== null) {
    favAnimeList = JSON.parse(localStorageFav);
    paintFavAnimes();
  }
};

const setLocalStorage = () => {
  const favListSafe = JSON.stringify(favAnimeList);
  localStorage.setItem('favoriteAnime', favListSafe);
};

//helper element

const listenClickEvents = (selector, handler) => {
  const elements = document.querySelectorAll(selector);
  for (const element of elements) {
    element.addEventListener('click', handler);
  }
};

//start app

searchButton.addEventListener('click', getApiFromSearch);
getFromLocalStorage();
paintFavAnimes();
