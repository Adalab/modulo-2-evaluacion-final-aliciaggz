/* eslint-disable no-unused-vars */
'use strict';

//listeners

function listenDeleteButtons() {
  listenClickEvents('.js-btn-delete', deleteFavAnime);
}

function listenArticle() {
  listenClickEvents('.main__article', favAnimeStyle);
}

//helper element
const listenClickEvents = (selector, handler) => {
  const elements = document.querySelectorAll(selector);
  for (const element of elements) {
    element.addEventListener('click', handler);
  }
};
