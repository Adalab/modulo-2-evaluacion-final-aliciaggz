/* eslint-disable no-unused-vars */
'use strict';
//start app

searchButton.addEventListener('click', getApiFromSearch);
resetButton.addEventListener('click', resetAll);
resetButtonFav.addEventListener('click', resetAllFav);
getFromLocalStorage();
paintFavAnimes();
