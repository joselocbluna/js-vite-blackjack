

// Esta función crea un nuevo deck
import _ from "underscore";


/**
 * Esta funcion crea un nuevo deck de cartas.
 * @param {Array<String>} tiposDeCarta  Ejemplo:['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Regresa un array con las cartas del deck
 */

 export  const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || !tiposEspeciales) {
        throw new Error("No se ha especificado el tipo de cartas o las especiales");
    }
if (tiposDeCarta.length === 0 || tiposEspeciales.length === 0) {
      throw new Error("Los arreglos no pueden estar vacios");}

   
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}