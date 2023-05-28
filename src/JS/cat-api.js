const urlBreeds = 'https://api.thecatapi.com/v1/breeds';

function fetchBreeds() {
  return fetch(urlBreeds).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchBreeds };
