import { getAllProducts } from "./helpers.js";


getAllProducts()
export function getFavs() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function toggleFav(id) {
    let favs = getFavs();

    if (favs.includes(id)) {
        favs = favs.filter(itemId => itemId !== id);
    } else {
        favs.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favs));
}

export function isFav(id) {
    return getFavs().includes(id);
}
