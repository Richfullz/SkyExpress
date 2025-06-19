let timer = null; // Para controlar el intervalo y evitar duplicados
let baseDate = null; // Fecha/hora base de la API

function mostrarDatosCiudad(ciudad) {
  fetch(`http://localhost:3000/tiempo/${encodeURIComponent(ciudad)}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) throw new Error(data.error.message || data.error);

      const temperatura = data.current?.temp_c;
      const ubicacion = data.location?.name;
      const localtime = data.location?.localtime; // Ejemplo: "2025-06-19 13:45"
      const tiempo = data.current?.condition?.text;
      const icono = data.current?.condition?.icon;

      if (!temperatura || !localtime) {
        throw new Error("Datos del tiempo no disponibles");
      }

      // Guarda la fecha/hora base de la API
      baseDate = new Date(localtime.replace(" ", "T"));

      // Limpia el intervalo anterior si existe
      if (timer) clearInterval(timer);

      // Actualiza los datos fijos
      document.getElementById(
        "ubicacion"
      ).textContent = `Ubicación: ${ubicacion}`;
      document.getElementById(
        "temperatura"
      ).textContent = `Temperatura: ${temperatura}°C`;
      document.getElementById(
        "descripcion-tiempo"
      ).textContent = `El tiempo está: ${tiempo}`;
      if (icono) {
        document.getElementById("icono-tiempo").src = "https:" + icono;
        document.getElementById("icono-tiempo").alt = tiempo;
      } else {
        document.getElementById("icono-tiempo").src = "";
        document.getElementById("icono-tiempo").alt = "icono-tiempo";
      }

      // Inicia el reloj en tiempo real
      actualizarHora();
      timer = setInterval(actualizarHora, 1000);

      function actualizarHora() {
        const ahora = new Date();
        const diff = Math.floor((ahora - baseDate) / 1000); // Diferencia en segundos
        const reloj = new Date(baseDate.getTime() + diff * 1000);

        const dia = reloj.getDate();
        const año = reloj.getFullYear();
        const hora =
          reloj.getHours().toString().padStart(2, "0") +
          ":" +
          reloj.getMinutes().toString().padStart(2, "0") +
          ":" +
          reloj.getSeconds().toString().padStart(2, "0");
        const mes = reloj.toLocaleString("es-ES", { month: "long" });

        document.getElementById(
          "dia"
        ).textContent = `Hoy es ${dia} de ${mes} de ${año}, son las ${hora}`;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("ubicacion").textContent = "";
      document.getElementById("temperatura").textContent = "";
      document.getElementById("dia").textContent = "";
      document.getElementById("descripcion-tiempo").textContent =
        "Error al cargar los datos del tiempo: " + error.message;
      document.getElementById("icono-tiempo").src = "";
      document.getElementById("icono-tiempo").alt = "icono-tiempo";
      if (timer) clearInterval(timer);
    });
}

// Mostrar Oviedo por defecto al cargar
mostrarDatosCiudad("Oviedo");

// Evento para el botón de búsqueda
document.getElementById("buscar").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudad").value.trim();
  if (ciudad) {
    mostrarDatosCiudad(ciudad);
  }
});

// Permitir buscar pulsando Enter en el input
document.getElementById("ciudad").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.getElementById("buscar").click();
  }
});
