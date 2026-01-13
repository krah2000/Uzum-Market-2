import { getAllProducts } from "./helpers";
import { renderSmallCards } from "./cart";
import { getFavs } from "./favorite.js";    
import { HeaderNomer } from "../components/Header.js";
import { FooterNomer } from "../components/Footer.js";
HeaderNomer(document.body)
FooterNomer(document.body)

getAllProducts().then(goods => {
    const favIds = getFavs();
    const favorites = goods.filter(item => favIds.includes(item.id));

    renderSmallCards(favorites);
});