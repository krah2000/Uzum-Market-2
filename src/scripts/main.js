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

const body = document.body;
HeaderNomer(body);
FooterNomer(body);



getAllProducts()
  .then(data => {
    
    console.log(data);
    
    const goods = data;

    
    
    renderBigCards(goods.slice(30, 40));
    renderSmallCards(goods);
    // reload(goods);

    new Swiper(".mySwiper", {
      modules: [Navigation, Pagination, Autoplay],

      // spaceBetween: 30,
      // centeredSlides: true,
      // loop: true,

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
  })
// .catch(err => console.error("Ошибка загрузки данных:", err));

const nosubmit_inp123 = document.querySelector('#search')
// console.log(nosubmit_inp123)

nosubmit_inp123.onkeyup = (event) => {
    const keyword = event.target.value.toUpperCase().trim()

    const filtered = goods.filter(item => {
        const title = item.title.toUpperCase().trim()
        return title.includes(keyword)
    })

    renderSmallCards(filtered)

}


// async function getData() {
//   try {
//     const res = await fetch("/backend/db.json");
//     const data = await res.json();

//     console.log(data);
//   } catch (error) {
//     throw new Error("Internal Server Error");
//   }
// }

// async function healthcheck() {
//   try {
//     const res = await fetch(
//       `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/healthcheck`
//     );
//     const data = await res.json();

//     console.log(data);
//   } catch (error) {
//     throw new Error("Internal Server Error", error);
//   }
// }

async function registerUser() {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: "+998941234567",
          password: "test1",
        }),
      }
    );
    const data = await res.json();

    console.log(data);
  } catch (error) {
    throw new Error("Internal Server Error", error);
  }
}

async function loginUser() {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: "+998941234567",
          password: "test1",
        }),
      }
    );
    const data = await res.json();

    localStorage.setItem("access-token", data.data.token);

    console.log(data);
  } catch (error) {
    throw new Error("Internal Server Error", error);
  }
}

async function getAllProducts() {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/main/products`
    );
    const data = await res.json();

    return data
  } catch (error) {
    throw new Error("Internal Server Error", error);
  }
}

// async function removeFromFavorites() {
//   try {
//     const res = await fetch(
//       `${import.meta.env.VITE_BACKEND_BASE_URL
//       }/api/v1/user/favorites/693d0b2d7b7d4a5c0f2c71b9`,
//       {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("access-token")}`,
//         },
//       }
//     );
//     const data = await res.json();

//     console.log(data);
//   } catch (error) {
//     throw new Error("Internal Server Error", error);
//   }
// }

async function addToCart() {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL
      }/api/v1/user/cart/693d0b2d7b7d4a5c0f2c71b9`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      }
    );
    const data = await res.json();

    console.log(data);
  } catch (error) {
    throw new Error("Internal Server Error", error);
  }
}


// async function getUserInfo() {
//   try {
//     const res = await fetch(
//       `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/user/user-info`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("access-token")}`,
//         },
//       }
//     );
//     const data = await res.json();

//     console.log(data);
//   } catch (error) {
//     throw new Error("Internal Server Error", error);
//   }
// }

// getData();
// healthcheck();
// // registerUser();
// loginUser();
// removeFromFavorites();
// addToCart();
// getAllProducts();
// getUserInfo();
