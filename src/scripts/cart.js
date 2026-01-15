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
import { isInCart, removeFromFavorites, toggleCart } from "./helpers.js";

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
          <div id="stars_and_rating">
            <img src="./public/icons/stars.png" alt="">
            <a id="rading_card">${item.rating}</a>
          </div>
          <div class="price_gray">${Math.round(item.price / 0.9).toLocaleString()} сум</div>
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
    favBtn.onclick = async () => {
      const auth = !!localStorage.getItem("access-token");

      if (!auth) {
        alert("Войдите в аккаунт");
        return;
      }

      toggleFav(item.id);


      if (window.location.pathname.includes("favorite")) {
        await removeFromFavorites(item.id);

        card.remove();

        if (!document.querySelector(".card")) {
          document.getElementById("app").innerHTML = `
        <div class="empty-favorites">
          <img src="./public/icons/hearts 1.png" alt="">
          <h2>Добавьте то, что понравилось</h2>
          <p>Перейдите на главную страницу</p>
          <a href="./index.html">На главную</a>
        </div>
      `;
        }

        return;
      }

      if (isFav(item.id)) {
        favBtn.classList.add("liked");
        favBtn.textContent = "❤️";
      } else {
        favBtn.classList.remove("liked");
        favBtn.textContent = "🤍";
      }
    };

    const cartBtn = card.querySelector(".btn123");

    function updateCartButton() {
      if (isInCart(item.id)) {
        cartBtn.classList.add("in-cart");
        cartBtn.textContent = "Добавлено";
        cartBtn.style.color = 'blue';
        cartBtn.style.backgroundColor = 'white'
        cartBtn.style.border = '1px solid black'
      } else {
        cartBtn.classList.remove("in-cart");
        cartBtn.textContent = "Корзина";
        cartBtn.style.color = 'white';
        cartBtn.style.backgroundColor = 'blue'
      }
    }

    updateCartButton();

    cartBtn.onclick = () => {
      toggleCart(item.id);
      updateCartButton();
    };







    app.appendChild(card);
  });
}

