// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Éramos jóvenes", time: 9 },
  { text: "posters en la pared", time: 10 },
  { text: "Rezando para que seamos los unicos a los que el maestro no llamaria", time: 13 },
  { text: "Nos mirábamos el uno al otro", time: 16 },
  { text: "porque siempre estabamos en problemas", time: 19 },
  { text: "y todos los chicos geniales", time: 20 },
  { text: "hacian sus cosas", time: 22 },
  { text: "yo estaba fuera, siempre excluido", time: 24 },
  { text: "si, estuve alli pero no estaba", time: 27 },
  { text: "nunca les importo si yo estaba", time: 29 },
  { text: "todos necesitamos a alguien", time: 32 },
  { text: "que te trate como a nadie mas", time: 35 },
  { text: "justo cuando mas lo necesites", time: 38 },
  { text: "todos necesitamos un alma en la que confiar", time: 42 },
  { text: "un hombro donde llorar", time: 46 },
  { text: "un amigo durante las buenas y las malas", time: 49 },
  { text: "no voy a hacerlo solo", time: 52 },
  { text: "La-la-la-la, la-la-la-la", time: 55 },
  { text: "no voy a hacerlo solo", time: 57 },
  { text: "La-la-la-la, la-la-la-la", time: 59 },
  { text: "entonces vi tu cara", time: 64 },
  { text: "tus compasivos ojos", time: 65 },
  { text: "mirandome desde el otro lado", time: 66 },
  { text: "como si me comprendieras", time: 70 },
  { text: "y nunca te dejare ir", time: 73 },
  { text: "todos necesitamos a alguien", time: 76 },
  { text: "que te trate como a nadie mas", time: 79 },
  { text: "justo cuando mas lo necesites", time: 82 },
  { text: "todos necesitamos un alma en la que confiar", time: 86 },
  { text: "un hombro donde llorar", time: 89 },
  { text: "un amigo durante las buenas y las malas", time: 92 },
  { text: "no voy a hacerlo solo", time: 97 },
  { text: "La-la-la-la, la-la-la-la", time: 99 },
  { text: "no voy a hacerlo solo", time: 102 },
  { text: "La-la-la-la, la-la-la-la", time: 104 },
  { text: "no voy a hacerlo solo", time: 107 },
  { text: "La-la-la-la, la-la-la-la", time: 109 },
  { text: "no voy a hacerlo solo", time: 113 },
  { text: "La-la-la-la, la-la-la-la", time: 114 },
  { text: "no voy a hacerlo solo", time: 118 },
  { text: "La-la-la-la, la-la-la-la", time: 121 },
  { text: "no voy a hacerlo solo", time: 124 },
  { text: "La-la-la-la, la-la-la-la", time: 126 },
  { text: "porque tu eres ese alguien", time: 130 },
  { text: "que me trata como a nadie mas", time: 133 },
  { text: "justo cuando mas lo necesito", time: 136 },
  { text: "y sere en quien confies", time: 140 },
  { text: "un hombro donde llorar", time: 144 },
  { text: "un amigo durante las buenas y las malas", time: 147 },
  { text: "no voy a hacerlo solo", time: 151 },
  { text: "La-la-la-la, la-la-la-la", time: 152 },
  { text: "no voy a hacerlo solo", time: 157 },
  { text: "La-la-la-la, la-la-la-la", time: 158 },
  { text: "no voy a hacerlo solo", time: 162 },
  { text: "La-la-la-la, la-la-la-la", time: 163 },
  { text: "no voy a hacerlo solo", time: 167 },
  { text: "La-la-la-la, la-la-la-la", time: 168 },
  { text: "no voy a hacerlo solo", time: 173 },
  { text: "TE QUIERO MUCHO SA ❤️", time: 175 },
];

// Función para animar las letras
function updateLyrics() {
  var time = audio.currentTime;
  
  // Mostrar tiempo actual en consola
  console.log("Tiempo actual:", time);

  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 2.9 // Aumenté el tiempo de visibilidad a 4 segundos
  );

  if (currentLine) {
    console.log("Línea actual:", currentLine.text); // Depurar línea actual

    // Aplica el efecto de aparición
    lyrics.style.opacity = 1; // Sin desvanecimiento por ahora
    lyrics.innerHTML = currentLine.text;
  } else {
    console.log("No hay línea para mostrar"); // Depurar cuando no hay línea
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }

  // Solicita la siguiente actualización del fotograma
  requestAnimationFrame(updateLyrics);
}

// Inicia la animación con la sincronización más precisa
requestAnimationFrame(updateLyrics);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
