    import { loginUser } from "./main.js";

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        try {
            await loginUser(phone, password);

            alert("Вход");
            window.location.href = "./auth.html";

        } catch (error) {
            alert(error.message || "Ошибка входа");
        }
    });
    import { loginUser } from "./main.js";

    const form = document.querySelector("form");
    const phoneInput = document.querySelector("#phone");
    const passwordInput = document.querySelector("#password");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const phone = phoneInput.value.trim();
        const password = passwordInput.value.trim();

        if (!phone || !password) {
            alert("Заполните все поля");
            return;
        }

        try {
            await loginUser(phone, password);

            alert("Успешный вход");
            window.location.href = "./index.html"; // главная страница
        } catch (error) {
            alert(error.message || "Ошибка входа");
        }
    });
