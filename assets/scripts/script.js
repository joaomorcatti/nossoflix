function scrollCont(value, row) {
  const container = document.getElementById(row);
  // Move o scroll do container somando/subtraindo o valor em pixels
  container.scrollLeft += value;
}

document.addEventListener("DOMContentLoaded", () => {
  /* Fecha clicando fora do modal */
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  /* Fecha com Escape */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.style.background = "#141414";
    } else {
      header.style.background = "transparent";
    }
  });
});

const fotosData = [
  {
    id: 0,
    modal: "f0",
    data: "16/08/2025",
    img: "assets/images/flores/0.jpg",
    title: "O primeiro buque de muitos!",
    sub: "O começo de tudo ✨",
    desc: "Esse foi para simbolizar o nosso começo de namoro, um dia muito especial para mim!",
  },
  {
    id: 1,
    modal: "f1",
    data: "16/09/2025",
    img: "assets/images/flores/1.jpg",
    title: "Um buque para um pedido de namoro!",
    sub: "",
    desc: "Uma jornada épica que começou com um sorriso e nunca mais parou. 365 dias de cumplicidade, aventuras, risadas e amor puro. Esta é a nossa história — e ela ainda tem muitos capítulos pela frente. ❤️",
  },
  {
    id: 2,
    modal: "f2",
    data: "16/10/2025",
    img: "assets/images/flores/2.jpg",
    title: "Nosso Primeiro Encontro",
    sub: "",
    desc: "O dia em que tudo começou. Aquele encontro que mudou nossas vidas para sempre. Nervosos, curiosos e cheios de expectativa — foi o início da nossa melhor história.",
  },
  {
    id: 3,
    modal: "f3",
    data: "16/11/2025",
    img: "assets/images/flores/3.jpg",
    title: "",
    sub: "",
    desc: "",
  },
  {
    id: 4,
    modal: "f4",
    data: "16/12/2025",
    img: "assets/images/flores/4.jpg",
    title: "",
    sub: "",
    desc: "",
  },
  {
    id: 5,
    modal: "f5",
    data: "16/01/2026",
    img: "assets/images/flores/5.jpg",
    title: "",
    sub: "",
    desc: "",
  },
  {
    id: 6,
    modal: "f6",
    data: "16/02/2026",
    img: "assets/images/flores/6.jpg",
    title: "",
    sub: "",
    desc: "",
  },
  {
    id: 7,
    modal: "f7",
    data: "16/03/2026",
    img: "assets/images/flores/7.jpg",
    title: "",
    sub: "",
    desc: "",
  },
  {
    id: 8,
    modal: "f8",
    data: "16/04/2026",
    img: "assets/images/flores/8.jpg",
    title: "",
    sub: "",
    desc: "",
  },
  {
    id: 9,
    modal: "f9",
    data: "16/05/2026",
    img: "assets/images/flores/9.jpg",
    title: "",
    sub: "",
    desc: "",
  },
  {
    id: 10,
    modal: "f10",
    data: "16/06/2026",
    img: "assets/images/flores/10.jpg",
    title: "",
    sub: "",
    desc: "",
  },
  {
    id: 11,
    modal: "f11",
    data: "16/07/2026",
    img: "assets/images/flores/11.jpg",
    title: "",
    sub: "",
    desc: "",
  },
  {
    id: 12,
    modal: "f12",
    data: "16/08/2026",
    img: "assets/images/flores/12.jpg",
    title: "",
    sub: "",
    desc: "",
  },
];

function inputPhotos(row, start, end) {
  const container = document.getElementById(row);
  const slice = fotosData.slice(start, end);

  const html = slice
    .map(
      (d) => `
     <div class="card" onclick="openModal('${d.modal}')">
      <img src="${d.img}" alt="Flor referente ao ${d.id}° mês." class="card-img"/>
  
      <div class="card-overlay">
            <div class="card-actions">
              <div class="card-btn play"><i class="fa-solid fa-play"></i></div>
              <div class="card-btn"><i class="fa-solid fa-plus"></i></div>
              <div class="card-btn"><i class="fa-regular fa-thumbs-up"></i></div>
            </div>
            <div class="card-title">${d.title}</div>
            <div class="card-sub">${d.sub}</div>
        </div>
     </div>
  `,
    )
    .join("");

  container.innerHTML = html;
}

inputPhotos("row1", 0, 6);
inputPhotos("row2", 6, 13);

function openModal(modalId) {
  const id = fotosData.find((d) => d.modal === modalId);

  if (!id) return;

  document.getElementById("modalImg").src = id.img;
  document.getElementById("modalTitle").textContent = id.title;
  document.getElementById("modalDesc").textContent = id.desc;
  document.body.style.overflow = "hidden";
  document.getElementById("modal-overlay").classList.add("modal-open");
}

function closeModal() {
  document.body.style.overflow = "";
  document.getElementById("modal-overlay").classList.remove("modal-open");
}
