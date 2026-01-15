import { FooterNomer } from "../components/Footer";
import { HeaderNomer } from "../components/Header";
import { renderBigCards } from "./product";
import { renderSmallCards } from "./cart";

import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { addToCart, getAllProducts, getUserInfo } from "./helpers";

const body = document.body;
HeaderNomer(body);
FooterNomer(body);

getUserInfo()
addToCart("693d0b2d7b7d4a5c0f2c71c2")

let goods = [];

getAllProducts()
  .then(data => {

    goods = data;

    console.log(data);

    // const goods = data;

    renderSmallCards(goods);
    renderBigCards(goods.slice(10, 30));

    new Swiper(".mySwiper", {
      modules: [Navigation, Pagination, Autoplay],

      spaceBetween: 30,
      centeredSlides: true,
      loop: true,

      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    searchCard();
  });

export function searchCard() {
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase().trim();

    if (!value) {
      renderSmallCards(goods);
      return;
    }

    const filtered = goods.filter(item =>
      item.title.toLowerCase().includes(value)
    );

    renderSmallCards(filtered);
  });
}


const CATEGORY_MAP = {
  "Электроника": ["PC", "phone", "laptop", "monitor", "TV"],
  "Бытовая техника": ["fridge", "washer", "microwave"],
  "Одежда": ["clothes", "jacket", "pants"],
  "Обувь": ["shoes", "sneakers"],
  "Аксессуары": ["accessories", "watch", "bag", "audio"],
  "Красота и уход": ["beauty"],
  "Здоровье": ["health"],
  "Товар для дома": ["furniture", "home", "kitchen"],
  "Строительство для дома": ["build", "tools"]
};



// 2️⃣ ВСЕ ТОВАРЫ
let allGoods = [];

getAllProducts().then(data => {
  allGoods = data;

  renderSmallCards(allGoods);
  renderBigCards(allGoods.slice(10, 20));
});

// 🔹 ОДНА ТОЧКА ФИЛЬТРАЦИИ
window.addEventListener("category-change", (e) => {
  const categoryName = e.detail;
  const types = CATEGORY_MAP[categoryName];

  if (!types) {
    renderSmallCards(allGoods);
    return;
  }

  const filtered = allGoods.filter(item =>
    types.includes(item.type)
  );

  renderSmallCards(filtered);
});
