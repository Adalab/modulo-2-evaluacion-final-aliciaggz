/* eslint-disable no-unused-vars */
'use strict';
const getApiFromSearch = () => {
  fetch(`http://api.jikan.moe/v3/search/anime?q=${inputUser.value}`)
    .then((response) => response.json())
    .then((data) => {
      sectionAnime.innerHTML = '';

      const dataResult = data.results;
      animeList = dataResult;

      replaceImage();
      renderAll(animeList);
    });
};
