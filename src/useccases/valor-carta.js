/**
 * Obtener el valor de la carta
 * @param {String} carta 
 * @returns {Number} valor de la carta
 */

export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1); // Obtener el valor de la carta (todos los caracteres excepto el último)

  return isNaN(valor) // Verificar si el valor no es un número (especial)
    ? valor === "A"
      ? 11
      : 10 // Devolver 11 para As ('A') o 10 para otras cartas especiales ('J', 'Q', 'K')
    : valor * 1; // Convertir el valor a número (si es un número) y devolverlo
};
