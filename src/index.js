// fetch(url, options)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     // console.log(response.json());
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//     console.log(data);
//   })
//   .catch(error => {
//     // Error handling
//   });

import { fetchBreeds } from './JS/cat-api';

const refs = {
  selectBreed: document.querySelector('.breed-select'),
};

const urlSearchByBreeds =
  'https://api.thecatapi.com/v1/images/search?breed_ids=${breedsId}';
const options = {
  headers: {
    'x-api-key':
      'live_EEbvOb60XL9UgLJJ7bv9kNbMuHwRbvWrsXT5YGAW7rBTMnO7j1Xmegr3LLfBWJjJ',
  },
};

fetchBreeds()
  .then(data => {
    createMarkup(data);
  })
  .catch(error => {
    console.log('error');
  });

// console.log(breedsArray);

function createMarkup(data) {
  data.map(({ name, id }) => {
    console.log(`<option value="${id}">${name}</option>;`);
  });

  // console.log(breedsArray);

  // return `<option value="xs">${}</option>;`
}
