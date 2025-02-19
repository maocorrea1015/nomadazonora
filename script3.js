const programas = [
  { nombre: "El Mañanero", inicio: "05:00", fin: "07:30" },
  { nombre: "Entre Notas De Amor", inicio: "07:30", fin: "10:00" },
  { nombre: "Nomada Mix", inicio: "10:00", fin: "12:00" },
  { nombre: "Hora Vallenata", inicio: "12:00", fin: "13:00" },
  { nombre: "Popular Y Despecho", inicio: "13:00", fin: "14:30" },
  { nombre: "Salsa Y Sabor", inicio: "14:30", fin: "16:00" },
  { nombre: "Viejo Teca", inicio: "16:00", fin: "17:00" },
  { nombre: "Guascarrilera", inicio: "17:00", fin: "19:00" },
  { nombre: "Nomada Mixx", inicio: "19:00", fin: "20:00" },
  { nombre: "Una Noche Mas", inicio: "20:00", fin: "22:00" },
  { nombre: "Noche Infinita", inicio: "22:00", fin: "05:00" },
];

function actualizarPrograma() {
  const ahora = new Date();
  const horaActual =
    ahora.getHours() + ":" + ahora.getMinutes().toString().padStart(2, "0");
  const programaActual =
    programas.find((p) => horaActual >= p.inicio && horaActual < p.fin) ||
    programas[0];
  document.getElementById("programaActual").textContent = programaActual.nombre;
}

function cargarProgramacion() {
  const lista = document.getElementById("listaProgramas");
  lista.innerHTML = programas
    .map((p) => `<li>${p.nombre} (${p.inicio} - ${p.fin})</li>`)
    .join("");
}

document.getElementById("playPause").addEventListener("click", function () {
  var audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
    this.textContent = "⏸";
  } else {
    audio.pause();
    this.textContent = "▶";
  }
});

actualizarPrograma();
cargarProgramacion();
setInterval(actualizarPrograma, 60000);

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}
