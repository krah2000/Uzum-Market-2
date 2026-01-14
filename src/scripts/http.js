import { getAllProducts } from "./helpers";
import { renderSmallCards } from "./cart";
import { getFavs } from "./favorite.js";
import { HeaderNomer } from "../components/Header.js";
import { FooterNomer } from "../components/Footer.js";

HeaderNomer(document.body);
FooterNomer(document.body);

const app = document.getElementById("app");

getAllProducts().then(goods => {
    const favIds = getFavs();
    const favorites = goods.filter(item => favIds.includes(item.id));

    if (favorites.length === 0) {
        app.innerHTML = `
      <div class="empty-favorites">
        <h2>Добавьте то, что понравилось</h2>
        <p>Перейдите на главную страницу и нажмите на ♡ в товаре</p>
        <a href="./index.html" class="go-home-btn">На главную</a>
      </div>
    `;
        return;
    }

    renderSmallCards(favorites);
});
