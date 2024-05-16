/**
 *
 * @param {String} carta
 * @returns {HTMLImageElement} imagen de retorno
 */

export const crearCartaHTML = (carta) => {
  if (!carta) throw new Error("La carta es un argumento obligatorio");
  // <img class="carta" src="assets/cartas/cartas/10D.png" alt="">
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/cartas/${carta}.png`;
  imgCarta.classList.add("carta");

  return imgCarta;
};
