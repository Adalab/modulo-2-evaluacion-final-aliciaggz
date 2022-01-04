/* eslint-disable no-unused-vars */
'use strict';

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
