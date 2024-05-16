import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta ejemplo: ["C", "D", "H", "S"];
 * @param {Array<String>} tiposEspeciales ejemplo: ["A", "J", "Q", "K"];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */


export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if ( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error("tipos de carta es obligatorio como un array de String");
  if ( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error("tipos de carta especiales es obligatorio como un array de String");

  let deck = [];

  // Bucle externo: itera desde 2 hasta 10 (inclusive)
  for (let i = 2; i <= 10; i++) {
    //2 # en que inicia la baraja y 10 # final i++
    for (let tipo of tiposDeCarta) {
      // Combina el número 'i' con el tipo de carta 'tipo' y lo agrega al arreglo 'deck'
      deck.push(i + tipo); // Ejemplo: '2H', '2D', '2S', '2C' para i = 2 y tipos = ['H', 'D', 'S', 'C']
    }
  }

  for (let tipo of tiposDeCarta) {
    //itera sobre cada tipo de carta en el arreglo 'tipos'
    for (let especial of tiposEspeciales) {
      //itera sobre cada carta especial en el arreglo 'especiales' para Combinar la carta especial
      deck.push(especial + tipo); // Ejemplo: 'AH', 'JH', 'QH', 'KH' para tipo = 'H' y especiales = ['A', 'J', 'Q', 'K']
    }
  }

  // console.log(deck);
  deck = _.shuffle(deck); // Mezclar el arreglo  para reorganizar aleatoriamente el arreglo
  return deck; // Devolver el arreglo mezclado como resultado de la función
};
