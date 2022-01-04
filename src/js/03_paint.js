/* eslint-disable no-unused-vars */
'use strict';
//paint elements

const renderOne = (dataAnime) => {
  //find

  let idFavAnime = favAnimeList.find((item) => item.id === dataAnime.mal_id);

  //si en los resultados hay un id  igual que en favoritos se le añada class fav si no normal
  if (idFavAnime === undefined) {
    sectionAnime.innerHTML += `
              <article class="main__article " data-id="${dataAnime.mal_id}">
                <img class="main__article--image" src="${dataAnime.image_url}" alt="image-of-anime">
                <p class="main__article--title">${dataAnime.title}</p>
                </article>`;
  } else {
    sectionAnime.innerHTML += `
              <article class="main__article fav" data-id="${dataAnime.mal_id}">
                <img class="main__article--image" src="${dataAnime.image_url}" alt="image-of-anime">
                <p class="main__article--title">${dataAnime.title}</p>
                </article>`;
  }
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
  htmlCode += `<article class="main__article--fav favorites">
    <img class="main__article--image favorites " src="${favAnime.image}" alt="image-of-anime">
    <p class="main__article--title ">${favAnime.title}</p>
    <input class="js-btn-delete main__article--dltbtn" data-id="${favAnime.id}" type="button" value="X"></article>`;
  return htmlCode;
};

const paintFavAnimes = () => {
  asideFavsElement.innerHTML = '';

  for (const item of favAnimeList) {
    asideFavsElement.innerHTML += getFavAnimesCode(item);
  }
  listenDeleteButtons();
};
