// export function renderSmallCards(goods) {
//   const app = document.getElementById('app');

//   goods.forEach(item => {
//     const card = document.createElement('div');
//     card.className = 'card';


//     card.innerHTML = `
//       <div class="img_and_div">
//           <a href="./cart.html?id=${item.id}">
//               <img src="${item.media[0]}" alt="${item.title}">
//               <div class="title">${item.title}</div>
//           </a>
//       </div>
//       <div class="main_linkes_brother">
//           <div class="price">${item.price.toLocaleString()} сум</div>
//           <div class="month">
//               ${Math.round(item.price / 12).toLocaleString()} сум/мес
//               </div>
//               <button class="btn123">Корзина</button>
//               </div>
//               <button class="health">${favs.includes(item.id)?'❤️':'🤍'}</button>
//     `;




//     app.appendChild(card);
//   });
// }


import { toggleFav, isFav } from "./favorite.js";

export function renderSmallCards(goods) {
  const app = document.getElementById('app');
  app.innerHTML = "";

  goods.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const auth = !!localStorage.getItem("access-token");

    card.innerHTML = `
      <div class="img_and_div">
        <a href="./cart.html?id=${item.id}">
          <img src="${item.media[0]}" alt="${item.title}">
          <div class="title">${item.title}</div>
        </a>
      </div>

      <div class="main_linkes_brother">
        <div class="price">${item.price.toLocaleString()} сум</div>
        <div class="month">
          ${Math.round(item.price / 12).toLocaleString()} сум/мес
        </div>
        <button class="btn123">Корзина</button>
      </div>

      <button class="health ${!auth ? 'disabled-fav' : ''}">
        ${isFav(item.id) && auth ? '❤️' : '🤍'}
      </button>
    `;

    const favBtn = card.querySelector('.health');

    favBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const auth = !!localStorage.getItem("access-token");      

      if (!auth) {
        return;
      }

      toggleFav(item.id);
      favBtn.innerHTML = isFav(item.id) ? '❤️' : '🤍';
    });

    app.appendChild(card);
  });
}

