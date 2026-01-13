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
        throw new Error("Internal Server Error", error);
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

// getData();
// healthcheck();
// // registerUser();
// loginUser();
// removeFromFavorites();
// addToCart();
// getAllProducts();
// getUserInfo();
