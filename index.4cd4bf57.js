!function(){var e={selectBreed:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info")};fetch("https://api.thecatapi.com/v1/breeds").then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(t){!function(t){var n=t.map((function(e){var t=e.name,n=e.id;return'<option value="'.concat(n,'">').concat(t,"</option>")}));e.selectBreed.insertAdjacentHTML("beforeend",n)}(t)})).catch((function(e){console.log("error")})),e.selectBreed.addEventListener("change",(function(t){""!==t.target.value&&(n=t.target.value,c="https://api.thecatapi.com/v1/images/search?breed_ids=".concat(n),fetch(c,{headers:{"x-api-key":"live_EEbvOb60XL9UgLJJ7bv9kNbMuHwRbvWrsXT5YGAW7rBTMnO7j1Xmegr3LLfBWJjJ"}}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))).then((function(t){!function(t){console.log(t),console.log(t[0].url),console.log(t[0].breeds[0].name),console.log(t[0].breeds[0].description),console.log(t[0].breeds[0].temperament);var n='<img class="cat-img" src="'.concat(t[0].url,'" alt="cat photo" height="320"/>\n      <h1 class="cat-header">').concat(t[0].breeds[0].name,'</h1>\n      <p class="cat-description">').concat(t[0].breeds[0].description,'</p>\n      <p class="cat-temperament"><b>Temperament:</b>').concat(t[0].breeds[0].temperament,"</p>");e.catInfo.innerHTML=n}(t)})).catch((function(e){console.log("error")}));var n,c}))}();
//# sourceMappingURL=index.4cd4bf57.js.map
