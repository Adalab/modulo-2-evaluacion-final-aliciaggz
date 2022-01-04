/* eslint-disable no-unused-vars */
'use strict';

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
  } else {
    const clickedBtn = ev.currentTarget.dataset.id;
    const clickBtnParse = parseInt(clickedBtn);

    let foundIndex = favAnimeList.findIndex(
      (item) => item.id === clickBtnParse
    );
    favAnimeList.splice(foundIndex, 1);
  }

  setLocalStorage();
  paintFavAnimes();
}
