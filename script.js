const inicio = new Date("2026-01-06 20:27:00");

// contador
function atualizarContador() {
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("contador").innerText =
    `Vivendo há ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);


// 🌻 ÁRVORE EM FORMATO DE CORAÇÃO PREENCHIDO (VERSÃO CORRETA)
const tree = document.getElementById("tree");
const flores = ["🌻", "🌼"];

for (let i = 0; i < 1500; i++) {

  let x, y;

  // tenta até achar ponto dentro do coração
  while (true) {
    x = (Math.random() * 2 - 1) * 1.3;
    y = (Math.random() * 2 - 1) * 1.3;

    // EQUAÇÃO CERTA DO CORAÇÃO (ajustada)
    const eq = (x*x + y*y - 1)**3 - x*x*y*y*y;

    if (eq <= 0) break;
  }

  const flor = document.createElement("div");
  flor.classList.add("flower-tree");

  flor.innerText = flores[Math.floor(Math.random() * flores.length)];

  // 👉 AJUSTE FINO (ESSA PARTE CORRIGE O FORMATO)
  flor.style.left = (200 + x * 130) + "px";
  flor.style.top = (200 - y * 120) + "px";

  flor.style.fontSize = (Math.random() * 6 + 10) + "px";

  tree.appendChild(flor);
}

// 🌼 flores caindo
function cairFlor() {
    const flor = document.createElement("div");
    flor.classList.add("flower-fall");

    flor.innerText = Math.random() > 0.5 ? "🌻" : "🌼";

    flor.style.left = Math.random() * 100 + "vw";
    flor.style.fontSize = (Math.random() * 10 + 15) + "px";
    flor.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(flor);

    setTimeout(() => flor.remove(), 6000);
}

setInterval(cairFlor, 300);

function mostrarMensagem() {
  const msg = document.getElementById("mensagem");
  msg.style.display = "block";
}

function entrar() {
  const intro = document.getElementById("intro");

  intro.style.opacity = "0";
  intro.style.transition = "0.8s";

  setTimeout(() => {
    intro.style.display = "none";
  }, 800);
}