import { fetchBreeds, fetchCatByBreed } from './JS/cat-api';

const refs = {
  selectBreed: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
};

fetchBreeds()
  .then(data => {
    createMarkup(data);
  })
  .catch(error => {
    console.log('error');
  });

function createMarkup(data) {
  const breedsArray = data.map(({ name, id }) => {
    return `<option value="${id}">${name}</option>`;
  });
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
        console.log('error');
      });
  }
}

function createCatinfoMarkup(data) {
  console.log(data);
  console.log(data[0].url);
  console.log(data[0].breeds[0].name);
  console.log(data[0].breeds[0].description);
  console.log(data[0].breeds[0].temperament);

  const catInfoMarkup = `<img class="cat-img" src="${data[0].url}" alt="cat photo" height="320"/>
      <h1 class="cat-header">${data[0].breeds[0].name}</h1>
      <p class="cat-description">${data[0].breeds[0].description}</p>
      <p class="cat-temperament"><b>Temperament:</b>${data[0].breeds[0].temperament}</p>`;

  refs.catInfo.innerHTML = catInfoMarkup;
}
