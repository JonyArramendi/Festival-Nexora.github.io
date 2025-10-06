document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("nav").classList.toggle("show");
});
// === CONTADOR CORREGIDO ===
function actualizarContadorTiempo() {
  const ahora = new Date();
  const evento = new Date(ahora.getFullYear(), 10, 16, 0, 0, 0); // 10 = noviembre (los meses empiezan desde 0)

  // Si el evento ya pasó, contamos para el año siguiente
  if (ahora > evento) {
    evento.setFullYear(ahora.getFullYear() + 1);
  }

  const diferencia = evento - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  // Mostrar días y tiempo
  document.getElementById("contador-tiempo").innerHTML = `
    <span>${dias}</span>d :
    <span>${horas.toString().padStart(2, "0")}</span>h :
    <span>${minutos.toString().padStart(2, "0")}</span>m :
    <span>${segundos.toString().padStart(2, "0")}</span>s
  `;
}

// Actualiza cada segundo
setInterval(actualizarContadorTiempo, 1000);
actualizarContadorTiempo();



// === INTERACCIÓN DE LAS FLORES Y LAS CARDS ===
document.querySelector('.pos1').addEventListener('click', () => {
  document.getElementById('card1').style.display = 'flex';
});

document.querySelector('.pos2').addEventListener('click', () => {
  document.getElementById('card2').style.display = 'flex';
});

document.querySelector('.pos3').addEventListener('click', () => {
  document.getElementById('card3').style.display = 'flex';
});

// Cerrar cards
document.querySelectorAll('.cerrar').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.card-modal').style.display = 'none';
  });
});
// JS para animar estrellas
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    d: Math.random() * 2.5
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    ctx.moveTo(s.x, s.y);
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveStars();
}

function moveStars() {
  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    s.y += s.d;
    if (s.y > canvas.height) s.y = 0;
  }
}

setInterval(draw, 50);


const elementos = document.querySelectorAll('section, header, footer');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

elementos.forEach(el => observer.observe(el));
