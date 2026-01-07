export function renderSmallCards(goods) {
  const app = document.getElementById('app');

  goods.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';


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
    `;




    app.appendChild(card);
  });
}
