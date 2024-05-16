
/**
 * Esta funcion me permite tomar una carta
 * @param {Array<String>} deck 
 * @returns {String} Retorna la carta del deck
 */
export const pedirCarta = (deck) => {


  if (!deck || deck.length === 0) {
    //Si el mazo esta vacio lanzará un error
    throw "No hay mas cartas en el deck";
  }

  const carta = deck.pop(); // Sacar la última carta del mazo
  return carta;
};
