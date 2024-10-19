
/**
 * Permite obtener el valor de la carta para despues sumarlo al total.
 * @param {String} deck Ejemplo:JD = Jota de Diamantes =10, 2D = Dos de diamantes = 2, 3C = Tres de Corazones = 3
 * @returns {Number} Regresa un número.
 */


// como se declara un numero entero en Javascrip



export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}