import { addToCart, getAllProducts, isInCart } from "./helpers.js";
import { FooterNomer } from "../components/Footer";
import { HeaderNomer } from "../components/Header";
import { isFav, toggleFav } from "./favorite.js";


HeaderNomer(document.body);
FooterNomer(document.body);

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

getAllProducts()
    .then(data => {


        const item = data.find(el => el.id == id);
        const carts = document.getElementById('carts_small');

        const card = document.createElement('div');
        card.className = 'pa_Card';

        card.innerHTML = `
            
        <div id="modalcarddouble">
               <div class="displaycard">
                     <div class="padding_ingone">
                    <img src="${item.media[0]}" alt="${item.title}">
                </div>
                    <div class="title_comment">
                    <div class="title_oneul">${item.title}</div>
                    <div class="price_oneul">${item.price.toLocaleString()} сум <span>${Math.round(item.price / 12).toLocaleString()} сум/мес</span></div>
                    <div class="p_description"><p class="luse_minuse"><span>+</span> <b>1</b> <span class="one_span">-</span></p></div>
                    Color: <button class="colors_oneul"> ${item.colors} </button>
                    <div class="types_oneul">Type: ${item.type}</div>
                    <div class="opoci_button1">
                        <button id="btn_basket">Корзина</button>
                        <button id="btn_favorite">Избранное</button>
                    </div>

                </div>
               </div>

            <div class="description_one">
                <div class="opisaniye_oneul"><b>Описание товара</b></div>
                <div class="opisaniye_comment_oneul">${item.description}</div>
            </div>
        </div>
        `;


        const favBtn = card.querySelector('#btn_favorite');

        function updateFavButton() {
            if (isFav(item.id)) {

                favBtn.textContent = "🧺 Перейти";
                favBtn.style.color = 'blue';
                favBtn.style.backgroundColor = 'white'

                favBtn.classList.add("liked");
            } else {
                favBtn.textContent = "Избранное";
                favBtn.style.color = 'white';
                favBtn.style.backgroundColor = 'blue'
                favBtn.classList.remove("liked");
            }
        }


        updateFavButton();

        favBtn.onclick = () => {
            toggleFav(item.id);
            updateFavButton();
        };

        favBtn.onclick = () => {
            toggleFav(item.id);

            if (isFav(item.id)) {
                if (confirm("Товар добавлен в избранное. Перейти?")) {
                    window.location.href = "./favorite.html";
                }
            }

            updateFavButton();
        };





        let quantity = 1;
        const plus = card.querySelector(".luse_minuse span:first-child");
        const minus = card.querySelector(".luse_minuse span:last-child");
        const countEl = card.querySelector(".luse_minuse b");
        const priceBlock = card.querySelector(".price_oneul");

        function updatePrice() {
            priceBlock.innerHTML = `
        ${(item.price * quantity).toLocaleString()} сум
        <span style="color: gray; font-size: 14px;">
            ${Math.round(item.price * quantity / 12).toLocaleString()} сум/мес
        </span>
    `;
        }

        plus.onclick = () => {
            quantity++;
            countEl.textContent = quantity;
            updatePrice();
        };

        minus.onclick = () => {
            if (quantity > 1) {
                quantity--;
                countEl.textContent = quantity;
                updatePrice();
            }
        };

        updatePrice();



        carts.appendChild(card);
        console.log(data);
    });




// <div class="img_and_div">
//       <a href="./cart.html">
//           <img src="${item.media[0]}" alt="${item.title}">
//           <div class="title">${item.title}</div>
//       </a>
//   </div>
//   <div class="main_linkes_brother">
//       <div class="price">${item.price.toLocaleString()} сум</div>
//       <div class="month">
//           ${Math.round(item.price / 12).toLocaleString()} сум/мес
//       </div>
//       <button class="btn123">Корзина</button>

//   </div>


