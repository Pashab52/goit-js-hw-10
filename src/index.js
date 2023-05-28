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
  const catInfoMarkup = `<img src="${data[0].url}" alt="cat photo" height="480" width="480"/><div class="descr-wrap"><h1 class="cat-header">${data[0].breeds[0].name}</h1>
  <p class="cat-description">${data[0].breeds[0].description}</p><p class="cat-temperament"><b>Temperament:</b>${data[0].breeds[0].temperament}</p></div>`;

  refs.catInfo.innerHTML = catInfoMarkup;
}

function showLoader() {
  refs.loader.classList.add('loader');
  refs.catInfo.classList.add('hidden');
  refs.selectBreed.classList.add('hidden');
  hideError();
}

function hideLoader() {
  refs.loader.classList.remove('loader');
  refs.catInfo.classList.remove('hidden');
  refs.selectBreed.classList.remove('hidden');
}

function showError() {
  refs.error.classList.remove('error');
}

function hideError() {
  refs.error.classList.add('error');
}

export { showLoader };
