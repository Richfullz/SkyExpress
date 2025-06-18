function mostrarDatosCiudad(ciudad) {
  fetch(`http://localhost:3000/tiempo/${encodeURIComponent(ciudad)}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) throw new Error(data.error.message || data.error);

      const temperatura = data.current?.temp_c;
      const ubicacion = data.location?.name;
      const fechaHora = new Date(data.location?.localtime || Date.now());
      const tiempo = data.current?.condition?.text;
      const icono = data.current?.condition?.icon;

      if (!temperatura || !data.location?.localtime) {
        throw new Error("Datos del tiempo no disponibles");
      }

      // Día, hora, mes y año en una sola línea
      const dia = fechaHora.getDate();
      const año = fechaHora.getFullYear();
      const hora =
        fechaHora.getHours().toString().padStart(2, "0") +
        ":" +
        fechaHora.getMinutes().toString().padStart(2, "0");
      const mes = fechaHora.toLocaleString("es-ES", { month: "long" });

      // Actualiza el DOM en el orden de tu wireframe
      document.getElementById(
        "ubicacion"
      ).textContent = `Ubicación: ${ubicacion}`;
      document.getElementById(
        "temperatura"
      ).textContent = `Temperatura: ${temperatura}°C`;
      document.getElementById(
        "dia"
      ).textContent = `Hoy es ${dia} de ${mes} de ${año}, son las ${hora}`;
      document.getElementById(
        "descripcion-tiempo"
      ).textContent = `El tiempo está: ${tiempo}`;

      // Icono
      if (icono) {
        document.getElementById("icono-tiempo").src = "https:" + icono;
        document.getElementById("icono-tiempo").alt = tiempo;
      } else {
        document.getElementById("icono-tiempo").src = "";
        document.getElementById("icono-tiempo").alt = "icono-tiempo";
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
