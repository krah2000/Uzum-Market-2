import { FooterNomer } from "../components/Footer";
import { HeaderNomer } from "../components/Header";
import { renderBigCards } from "./product";
import { renderSmallCards } from "./cart";
// import { reload } from "./cityModal";

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

getAllProducts()
  .then(data => {

    console.log(data);

    const goods = data;



    renderBigCards(goods.slice(10, 20));
    renderSmallCards(goods);

    new Swiper(".mySwiper", {
      modules: [Navigation, Pagination, Autoplay],

      spaceBetween: 30,
      centeredSlides: true,
      loop: true,

      // autoplay: {
      //   delay: 2000,
      //   disableOnInteraction: false,
      // },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

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