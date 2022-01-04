/* eslint-disable no-unused-vars */
'use strict';

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
