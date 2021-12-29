'use strict';

const sectionAnime = document.querySelector('.js-section');
const inputUser = document.querySelector('.js-input');
const searchButton = document.querySelector('.js-btn-search');

// const aside = document.querySelector('.js-section');

// let animeList = [];

// let favAnimeList = [];

const getApiFromSearch = () => {
  fetch(`https://api.jikan.moe/v3/search/anime?q=${inputUser.value}`)
    .then((response) => response.json())
    .then((data) => {
      sectionAnime.innerHTML = '';

      const dataResult = data.results;
      //   animeList = dataResult;

      for (let i = 0; i < dataResult.length; i++) {
        if (dataResult.image_url === undefined) {
          dataResult[i].image_url = dataResult[i].image_url.replace(
            'https://cdn.myanimelist.net/images/qm_50.gif?s=e1ff92a46db617cb83bfc1e205aff620',
            'https://via.placeholder.com/210x295/ffffff/666666/'
          );
        }
      }

      //   renderAll(animeList);
    });
};

searchButton.addEventListener('click', getApiFromSearch);
