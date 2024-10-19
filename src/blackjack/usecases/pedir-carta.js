

/**
 * Esta funcion permite obtener una carta del Deck de cartas.
 * @param {Array<String>} deck Ejemplo:['JD', 'KH', 'AH', '5D', '2C']
 * @returns {String} Regresa un string con la carta del deck.
 */


export const pedirCarta = (deck) => {

    if (!deck ||  deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}