import { getUserInfo, removeUser } from "../scripts/helpers.js";

export async function HeaderNomer(arr) {
  const dectiongl = document.createElement('section');
  const sectionone = document.createElement('section');
  const container = document.createElement('div');
  const header1 = document.createElement('header');
  const menu = document.createElement('div');
  const img1 = document.createElement('div');
  const foto = document.createElement('img');
  const h1ttt = document.createElement('div');
  const p1000 = document.createElement('p');
  const img2 = document.createElement('div');
  const foto2 = document.createElement('img');
  const dfd1 = document.createElement('div');
  const p2000 = document.createElement('p');
  const nav1000 = document.createElement('nav');
  const cyllka = document.createElement('a');
  const cyllka1 = document.createElement('a');
  const cyllka2 = document.createElement('a');
  const cyllka3 = document.createElement('a');
  const div222 = document.createElement('div');
  const foto3 = document.createElement('img');
  const rossi = document.createElement('a');


  const section200 = document.createElement('section');
  const container1 = document.createElement('div');
  const osnova1 = document.createElement('div');
  const uzumlogo1 = document.createElement('div');
  const logo111 = document.createElement('div');
  const foto4 = document.createElement('img');
  const rut1 = document.createElement('div');
  const h11 = document.createElement('h1');
  const form111 = document.createElement('div');
  const input1 = document.createElement('input');
  const foto5 = document.createElement('img');
  const acco1 = document.createElement('div');
  const accout1 = document.createElement('div');
  const arr1 = document.createElement('div');
  const foto6 = document.createElement('img');
  const afg1 = document.createElement('div');
  const p3000 = document.createElement('a');
  const chosen1 = document.createElement('div');
  const p4000 = document.createElement('a');
  const korzina1 = document.createElement('div');
  const p5000 = document.createElement('a');


  const section300 = document.createElement('section');
  const container2 = document.createElement('div');
  const osnivatwo1 = document.createElement('div');
  const imgitext1 = document.createElement('div');
  const notone1 = document.createElement('div');
  const foto7 = document.createElement('img');
  const textitwo2 = document.createElement('div');
  const h22 = document.createElement('h1');
  const hedeli1 = document.createElement('div');
  const elektronika1 = document.createElement('div');
  const elektronika2 = document.createElement('div');
  const elektronika3 = document.createElement('div');
  const elektronika4 = document.createElement('div');
  const elektronika5 = document.createElement('div');
  const elektronika6 = document.createElement('div');
  const elektronika7 = document.createElement('div');
  const elektronika8 = document.createElement('div');
  const elektronika9 = document.createElement('div');
  const syll = document.createElement('a');
  const syll1 = document.createElement('a');
  const syll2 = document.createElement('a');
  const syll3 = document.createElement('a');
  const syll4 = document.createElement('a');
  const syll5 = document.createElement('a');
  const syll6 = document.createElement('a');
  const syll7 = document.createElement('a');
  const syll8 = document.createElement('a');
  const elektronika100 = document.createElement('div');
  const my1 = document.createElement('div');
  const will = document.createElement('a');
  const hubd = document.createElement('div');
  const foto8 = document.createElement('img');

  const linkesone = document.createElement('a')

  if (localStorage.getItem("access-token")) {
    const userData = await getUserInfo()
    p3000.textContent = userData.phone;
    p3000.style.fontSize = '12px';
  } else {
    p3000.textContent = 'Войти';
  }





  p1000.textContent = 'Самарканд';
  p2000.textContent = 'Пункты выдачи';
  cyllka.textContent = 'Стать продавцом';
  cyllka1.textContent = 'Открыть пункт выдачи';
  cyllka2.textContent = 'Вопрос-ответ';
  cyllka3.textContent = 'Мои заказы';
  rossi.textContent = 'Россия';
  h11.textContent = 'Каталог';
  p4000.textContent = 'Избранное';
  p5000.textContent = 'Корзина';

  h22.textContent = 'Товар недели';
  syll.textContent = 'Электроника';
  syll1.textContent = 'Бытовая техника';
  syll2.textContent = 'Одежда';
  syll3.textContent = 'Обувь';
  syll4.textContent = 'Аксессуары';
  syll5.textContent = 'Красота и уход';
  syll6.textContent = 'Здоровье';
  syll7.textContent = 'Товар для дома';
  syll8.textContent = 'Строительство для дома';
  will.textContent = 'Ещё';

  input1.type = 'search';
  input1.placeholder = 'Искать товары';
  input1.id = 'search';
  input1.className = 'nosubmit';

  p3000.id = "login-btn";
  p4000.id = "favorites-btn";
  p5000.id = "cart-btn";

  p3000.style.textDecorationc = "none"
  p4000.style.textDecorationc = "none"
  p5000.style.textDecorationc = "none"

  // p4000.href = './favorite.html'
  p4000.style.color = 'black';


  dectiongl.className = 'dectiongl';
  sectionone.className = 'section1';
  container.className = 'container';
  header1.className = 'header1';
  menu.className = 'menu';
  img1.className = 'img1';
  h1ttt.className = 'h1t';
  img2.className = 'img2';
  dfd1.className = 'dfd';
  nav1000.className = 'nav199';
  cyllka2.className = 'bt';
  cyllka3.className = 'bt';
  div222.className = 'nav100';

  section200.className = 'section20';
  container1.className = 'container';
  osnova1.className = 'osnova';
  uzumlogo1.className = 'uzumlogo';
  logo111.className = 'logo11';
  rut1.className = 'rut';
  form111.className = 'form11';
  acco1.className = 'acco';
  accout1.className = 'accout';
  arr1.className = 'arr';
  afg1.className = 'afg';
  chosen1.className = 'chosen';
  korzina1.className = 'korzina';

  section300.className = 'section30';
  container2.className = 'container';
  osnivatwo1.className = 'osnivatwo';
  imgitext1.className = 'imgitext';
  notone1.className = 'notone';
  textitwo2.className = 'textitwo';
  hedeli1.className = 'hedeli';
  elektronika1.className = 'elektronika';
  elektronika2.className = 'elektronika';
  elektronika3.className = 'elektronika';
  elektronika4.className = 'elektronika';
  elektronika5.className = 'elektronika';
  elektronika6.className = 'elektronika';
  elektronika7.className = 'elektronika';
  elektronika8.className = 'elektronika';
  elektronika9.className = 'elektronika';
  elektronika100.className = 'elektronika1';
  my1.className = 'my';
  hubd.className = 'imghubd';


  cyllka.href = '#';
  cyllka1.href = '#';
  cyllka2.href = '#';
  cyllka3.href = '#';
  rossi.href = '#';



  syll.href = '#';
  syll1.href = '#';
  syll2.href = '#';
  syll3.href = '#';
  syll4.href = '#';
  syll5.href = '#';
  syll6.href = '#';
  syll7.href = '#';
  syll8.href = '#';
  will.href = '#';


  foto.style.width = '15px';
  foto.style.height = '15px';
  foto.src = './public/icons/508233.png';
  foto.alt = 'logo';

  foto2.style.width = '15px'
  foto2.style.height = '15px';
  foto2.src = 'https://cdn-icons-png.flaticon.com/512/32/32195.png';
  foto2.alt = 'simvol';
  linkesone.href = './index.html';

  foto3.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/2560px-Flag_of_Russia.svg.png';
  foto.alt = 'img';
  foto3.style.width = '20px'
  foto3.style.height = '20px';

  foto4.src = './public/icons/Logo Uzum.png';
  foto4.alt = 'logouzum';

  foto5.src = 'https://cdn-icons-png.flaticon.com/512/149/149309.png';
  foto5.alt = 'icon';
  foto5.style.width = '20px';
  foto5.style.height = '20px';

  foto6.src = './public/icons/Group 237729.png';
  foto6.alt = 'Gro2377';
  foto6.style.width = '15px';
  foto6.style.height = '15px';

  foto7.src = 'https://static.uzum.uz/fast_categories/Topsales.png';
  foto7.alt = 'static2356';
  foto7.style.width = '20px';
  foto7.style.height = '20px';

  foto8.src = 'https://cdn-icons-png.flaticon.com/512/32/32195.png';
  foto8.alt = 'icons.png';
  foto8.style.width = '10px';
  foto8.style.height = '10px';


  dectiongl.append(sectionone);
  sectionone.prepend(container);
  container.prepend(header1);
  header1.prepend(menu);
  menu.prepend(img1);
  img1.prepend(foto);
  img1.after(h1ttt);
  h1ttt.prepend(p1000);
  h1ttt.after(img2);
  img2.prepend(foto2);
  img2.after(dfd1);
  dfd1.prepend(p2000);
  menu.after(nav1000);
  nav1000.prepend(cyllka);
  cyllka.after(cyllka1);
  cyllka1.after(cyllka2);
  cyllka2.after(cyllka3);
  cyllka3.after(div222);
  div222.prepend(foto3);
  foto3.after(rossi);

  sectionone.after(section200);
  section200.prepend(container1);
  container1.prepend(osnova1);
  osnova1.prepend(uzumlogo1);
  uzumlogo1.prepend(logo111);

  logo111.prepend(linkesone);
  linkesone.prepend(foto4)
  logo111.after(rut1);
  rut1.prepend(h11);
  rut1.after(form111);
  form111.prepend(input1);
  input1.after(foto5);
  uzumlogo1.after(acco1);
  acco1.prepend(accout1);
  accout1.prepend(arr1);
  arr1.prepend(foto6);
  arr1.after(afg1);
  afg1.prepend(p3000);
  accout1.after(chosen1);
  chosen1.after(korzina1);
  chosen1.prepend(p4000);
  korzina1.prepend(p5000);

  section200.after(section300);
  section300.prepend(container2);
  container2.prepend(osnivatwo1);
  osnivatwo1.prepend(imgitext1);
  imgitext1.prepend(notone1);
  notone1.prepend(foto7);
  notone1.after(textitwo2);
  textitwo2.prepend(h22);
  imgitext1.after(hedeli1);
  hedeli1.prepend(elektronika1);
  elektronika1.prepend(syll);
  elektronika1.after(elektronika2);
  elektronika2.after(elektronika3);
  elektronika3.after(elektronika4);
  elektronika4.after(elektronika5);
  elektronika5.after(elektronika6);
  elektronika6.after(elektronika7);
  elektronika7.after(elektronika8);
  elektronika8.after(elektronika9);
  elektronika2.prepend(syll1);
  elektronika3.prepend(syll2);
  elektronika4.prepend(syll3);
  elektronika5.prepend(syll4);
  elektronika6.prepend(syll5);
  elektronika7.prepend(syll6);
  elektronika8.prepend(syll7);
  elektronika9.prepend(syll8);
  hedeli1.after(elektronika100);
  elektronika100.prepend(my1);
  my1.prepend(will);
  my1.after(hubd);
  hubd.prepend(foto8);

  arr.prepend(dectiongl);

  const catalogModalHTML = `
    <div class="catalog-modal">
    <div class="catalog-moda__content">
        <h3>Бытовая техника</h3>
        <h3>Электроника</h3>
        <h3>Бытовая техника</h3>
        <h3>Бытовая техника</h3>
        <h3>Бытовая техника</h3>
    </div>
</div>
  `

  header1.insertAdjacentHTML("beforeend", catalogModalHTML)

  // Вход в аккаунт
  const auth = !!localStorage.getItem("access-token");


  p3000.style.cursor = "pointer";
  p4000.style.cursor = "pointer";
  p5000.style.cursor = "pointer";


  p3000.addEventListener("click", () => {
    const auth = !!localStorage.getItem("access-token");

    if (!auth) {
      window.location.href = "./auth.html";
    } else {
      if (confirm("Выйти из аккаунта?")) {
        removeUser();
      }
    }
  })

  p4000.addEventListener("click", (e) => {
    e.preventDefault();

    const auth = !!localStorage.getItem("access-token");

    if (!auth) {
      alert("Вы должны войти в аккаунт или зарегистрироваться");
    } else {
      window.location.href = "./favorite.html";
    }
  });


  p5000.addEventListener("click", (e) => {
    e.preventDefault();

    const auth = !!localStorage.getItem("access-token");

    if (!auth) {
      alert("Вы должны войти в аккаунт или зарегистрироваться");
    } else {
      window.location.href = "./basket.html";
    }
  });

  const catalogModal = document.querySelector(".catalog-modal")



  h11.addEventListener("click", () => {
    if (catalogModal.classList.contains("_active")) {
      document.body.classList.remove("_lock")
      catalogModal.classList.remove("_active")
    } else {
      document.body.classList.add("_lock")
      catalogModal.classList.add("_active")
    }
  })



  // Modal - окно --- Самарканд

  // const modal = document.getElementById("modal");
  // const overlay = arr.querySelector(".overlay");
  // const closeBtnone = document.querySelector(".btn_one");
  // const closeBtn2 = document.getElementById("closeModalBtn2");



  // const openModal = () => {
  //   modal.classList.remove('hidden');
  //   overlay.classList.remove('hidden');
  // };

  // const closeModal = () => {
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
  // };

  // // События
  // p1000.addEventListener('click', openModal);  // открываем модалку при клике на город
  // closeBtnone.addEventListener('click', closeModal);
  // closeBtn2.addEventListener('click', closeModal);
  // overlay.addEventListener('click', closeModal);

  // // Кнопки выбора города
  // const cityButtons = document.querySelectorAll(".city-btn");
  // cityButtons.forEach(btn => {
  //   btn.addEventListener('click', () => {
  //     p1000.textContent = btn.textContent; // меняем название города
  //     closeModal();
  //   });
  // });

}