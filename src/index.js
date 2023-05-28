import { fetchBreeds, fetchCatByBreed } from './JS/cat-api';

const refs = {
  selectBreed: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader-inv'),
  error: document.querySelector('.error'),
};
console.log(refs.loader);

fetchBreeds()
  .then(data => {
    createMarkup(data);
  })
  .catch(error => {
    showError();
    console.log('error');
  })
  .finally(() => {
    hideLoader();
  });

function createMarkup(data) {
  const breedsArray = data
    .map(({ name, id }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
  refs.selectBreed.insertAdjacentHTML('beforeend', breedsArray);
  // refs.selectBreed.innerHTML = breedsArray.join('');
}

refs.selectBreed.addEventListener('change', handleChangeSelect);

function handleChangeSelect(event) {
  if (event.target.value !== '') {
    fetchCatByBreed(event.target.value)
      .then(data => {
        createCatinfoMarkup(data);
      })
      .catch(error => {
        showError();
        console.log('error');
      })
      .finally(() => {
        hideLoader();
      });
  }
}

function createCatinfoMarkup(data) {
  console.log(data);
  console.log(data[0].url);
  console.log(data[0].breeds[0].name);
  console.log(data[0].breeds[0].description);
  console.log(data[0].breeds[0].temperament);

  const catInfoMarkup = `<img src="${data[0].url}" alt="cat photo" height="480" width="480"/><div class="descr-wrap"><h1 class="cat-header">${data[0].breeds[0].name}</h1>
  <p class="cat-description">${data[0].breeds[0].description}</p><p class="cat-temperament"><b>Temperament:</b>${data[0].breeds[0].temperament}</p></div>`;

  refs.catInfo.innerHTML = catInfoMarkup;
}

function showLoader() {
  refs.loader.classList.add('loader');
  hideError();
}

function hideLoader() {
  refs.loader.classList.remove('loader');
}

function showError() {
  refs.error.classList.remove('error');
}

function hideError() {
  refs.error.classList.add('error');
}

export { showLoader };
