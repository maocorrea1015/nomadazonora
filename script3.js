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
  { nombre: "Noche Infinita", inicio: "22:00", fin: "04:59" }, // Fin antes del inicio
];

function convertirAHorasMinutos(hora) {
  const [horas, minutos] = hora.split(":").map(Number);
  return horas * 60 + minutos;
}

function actualizarPrograma() {
  const ahora = new Date();
  const minutosActuales = ahora.getHours() * 60 + ahora.getMinutes();

  let programaActual = programas.find((p) => {
    const inicioMin = convertirAHorasMinutos(p.inicio);
    const finMin = convertirAHorasMinutos(p.fin);

    // Caso especial: Noche Infinita (pasa la medianoche)
    if (inicioMin > finMin) {
      return minutosActuales >= inicioMin || minutosActuales < finMin;
    }

    return minutosActuales >= inicioMin && minutosActuales < finMin;
  });

  if (!programaActual) {
    programaActual = programas[0]; // En caso de que no haya coincidencias
  }

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
