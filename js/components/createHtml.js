const resultsContainer = document.querySelector(".results");

export function createHtml(data) {
    resultsContainer.innerHTML = "";
    for (let i = 1; i < data.length; i++) {
      resultsContainer.innerHTML += `<div class="result">
          <h4>${data[i].name}</h4>
          <p>
            Price: <b>${data[i].price}</b>
          </p>
          <button type="button">WISHLIST</button>
        </div>`;
    }
  };