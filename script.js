async function fetchRadioStats() {
  try {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/http://uk18freenew.listen2myradio.com:26530/stats?json=1"
    );
    const data = await response.json();
    document.getElementById("song-title").innerText =
      data.songtitle || "Desconocido";
  } catch (error) {
    console.error("Error obteniendo datos del stream:", error);
  }
}

fetchRadioStats();
setInterval(fetchRadioStats, 10000); // Actualiza cada 10 segundos
