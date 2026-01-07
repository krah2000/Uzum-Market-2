export function renderBigCards(goods) {
    const wrapper = document.getElementById('big_card_one');

    goods.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        slide.innerHTML = `
        <div class="swiper-slide">
        <div class="text">
            <h1 class="title">${item.title}</h1>
            <h2 class="price">${item.price} сум</h2>
              <p class="description">${item.description.slice(0, 500)}</p>
        </div>
        <div class="white">
        <img src="${item.media[0]}" >
        </div>
       </div>
    `;

        wrapper.appendChild(slide);
    });
}
