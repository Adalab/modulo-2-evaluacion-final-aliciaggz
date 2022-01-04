/* eslint-disable no-unused-vars */
'use strict';

//reset
function resetAll() {
  inputUser.value = '';
  sectionAnime.innerHTML = '';
}

//BONUS DELETE BUTTON
function deleteFavAnime(event) {
  const clickedBtn = event.currentTarget.dataset.id;
  const clickBtnParse = parseInt(clickedBtn);

  let foundIndex = favAnimeList.findIndex((item) => item.id === clickBtnParse);
  favAnimeList.splice(foundIndex, 1);
  renderAll(animeList);
  setLocalStorage();
  paintFavAnimes();
}

//BONUS RESET ALL FAV
function resetAllFav() {
  favAnimeList = [];
  asideFavsElement.innerHTML = '';
  localStorage.clear();
  renderAll(animeList);
}
