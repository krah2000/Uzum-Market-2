async function healthcheck() {
    try {
        const res = await fetch(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/healthcheck`
        );
        const data = await res.json();

        console.log(data);
    } catch (error) {
        throw new Error("Internal Server Error", error);
    }
}

export async function registerUser(phone, password) {
    try {
        const res = await fetch(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    phone,
                    password
                }),
            }
        );
        const data = await res.json();

        console.log(data);
    } catch (error) {
        throw new Error("Internal Server Error", error);
    }
}

export async function loginUser(phone, password) {
    try {
        const res = await fetch(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/auth/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    phone,
                    password,
                }),
            }
        );

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Ошибка авторизации");
        }

        // сохраняем токен
        localStorage.setItem("access-token", data.data.token);

        return data;
    } catch (error) {
        throw error.log('Error')
    }
}

export async function getAllProducts() {
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


export async function removeFromFavorites(productId) {
    try {
        const res = await fetch(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/user/favorites/${productId}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access-token")}`,
                },
            }
        );

        return await res.json();
    } catch (error) {
        console.error("Ошибка удаления из избранного");
    }
}


export async function addToCart(id) {
    try {
        const res = await fetch(
            `${import.meta.env.VITE_BACKEND_BASE_URL
            }/api/v1/user/cart/${id}`,
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
        throw new Error("Internal Server Error");
    }
}


export async function getUserInfo() {
    try {
        const res = await fetch(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/user/user-info`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access-token")}`,
                },
            }
        );
        const data = await res.json();

        return data
    } catch (error) {
        throw new Error("Internal Server Error", error);
    }
}

export function removeUser() {
    localStorage.removeItem("favorites");
    localStorage.removeItem("access-token");
    window.location.href = "./index.html";
}

// helpers.js
const CART_KEY = "cart";

export function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function changeQty(id, delta) {
    const cart = getCart().map(item =>
        item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
    );
    saveCart(cart);
}

// Добавляем товар в корзину или убираем
export function toggleCart(id) {
    let cart = getCart();
    const index = cart.findIndex(item => item.id === id);
    if (index === -1) {
        cart.push({ id, quantity: 1 });
    } else {
        cart.splice(index, 1);
    }
    saveCart(cart);
}

// Проверка, есть ли товар в корзине
export function isInCart(id) {
    return getCart().some(item => item.id === id);
}

// Удаление товара из корзины
export function removeFromCart(id) {
    const cart = getCart().filter(item => item.id !== id);
    saveCart(cart);
}

// // Пример функции для получения всех товаров (симуляция fetch)
// export async function getAllProducts() {
//     // Если у тебя есть реальный fetch, замени ниже на fetch
//     const res = await fetch('./public/backend/db.json');
//     const data = await res.json();
//     return data.goods; // массив товаров
// }



// getData();
// healthcheck();
// // registerUser();
// loginUser();
// removeFromFavorites();
// addToCart();
// getAllProducts();
// getUserInfo();
