import { getAllProducts } from "./helpers.js";
import { FooterNomer } from "../components/Footer";
import { HeaderNomer } from "../components/Header";

const bodyy = document.body;

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
            <div class="padding_ingone">
                <img src="${item.media[0]}" alt="${item.title}">
            </div>
            <div class="title_comment">
                <div class="title_oneul">${item.title}</div>
                <div class="price_oneul">${item.price.toLocaleString()} сум</div>
                <p class="luse_minuse">+ 1 -</p>
                <div class="colors_oneul">Color: ${item.colors} </div>
                <div class="types_oneul">Type: ${item.type}</div>
            </div>

            <div>
                <div class="opisaniye_oneul">Описание товара</div>
                <div class="opisaniye_comment_oneul">${item.description}</div>
            </div>
        `;

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


