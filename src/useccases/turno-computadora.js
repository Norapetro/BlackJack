import { crearCartaHTML, pedirCarta, valorCarta } from "./";

/**
 * Turno de la Computadora
 * @param {Number} puntosMinimosJugador que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck
 */

export const turnoComputadora = (
  puntosMinimosJugador,
  puntosHTML,
  divCartasComputadora,
  deck = []
) => {
  if (!puntosMinimosJugador) throw new error("Puntos mínimos son necesarios");
  if (!puntosHTML) throw new error("Argumento puntosHTML es necesario");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCartaHTML(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimosJugador > 21) {
      break;
    }
  } while (
    puntosComputadora < puntosMinimosJugador &&
    puntosMinimosJugador <= 21
  );

  setTimeout(() => {
    if (puntosComputadora === puntosMinimosJugador) {
      alert("Ninguno ganó");
    } else if (puntosMinimosJugador > 21) {
      alert("Computadora Gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador gana");
    } else {
      alert("Computadora Gana");
    }
  }, 10);
};
