import { FooterNomer } from "../components/Footer";
import { HeaderNomer } from "../components/Header";
import { getCart, changeQty, removeFromCart } from "./helpers";
import { getAllProducts } from "./helpers";

HeaderNomer(document.body);
FooterNomer(document.body);



const list = document.getElementById("basket-list");
const totalBlock = document.getElementById("basket-total");
const itemsCount = document.getElementById("items-count");
const summary = document.querySelector(".basket-summary");



async function renderBasket() {
    const cart = getCart();

    if (!cart.length) {
        list.innerHTML = `
      <div class="empty-basket-text">
        <img src="./public/icons/basket 1.png" alt="">
        <h2>В корзине пока нет товаров</h2>
        <p>
          Начните с подборок на <a href="./index.html" class="go-home-btn">на главную</a>
          или найдите нужный товар через поиск
        </p>
      </div>
    `;

        summary.style.display = "none";
        totalBlock.textContent = "0 сум";
        return;
    }

    summary.style.display = "block";    
    




    const products = await getAllProducts();

    let total = 0;
    let totalItems = 0;


    list.innerHTML = "";

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;

        totalItems += item.quantity;


        const itemTotal = product.price * item.quantity;
        total += itemTotal;


        const div = document.createElement("div");
        div.className = "basket-item";

        div.innerHTML = `
      <img src="${product.media[0]}">

      <div class="basket-info">
        <h3>${product.title}</h3>
        <p class="price">${product.price.toLocaleString()} сум</p>

        <div class="qty">
          <button class="minus">−</button>
          <span>${item.quantity}</span>
          <button class="plus">+</button>
        </div>

        <button class="remove">Удалить</button>
      </div>
    `;

        div.querySelector(".minus").onclick = () => {
            changeQty(item.id, -1);
            renderBasket();
        };

        div.querySelector(".plus").onclick = () => {
            changeQty(item.id, 1);
            renderBasket();
        };

        div.querySelector(".remove").onclick = () => {
            removeFromCart(item.id);
            renderBasket();
        };

        list.appendChild(div);
    });

    itemsCount.textContent = `Итого товаров: ${totalItems}`;
    totalBlock.textContent = `${total.toLocaleString()} сум`;
}

renderBasket();
