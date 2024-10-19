


import {crearCartaHTML, pedirCarta,valorCarta  } from "./index.js";

/**
 * Turno de la computadora.
 * @param {Number} puntosMinimos puntos minimos para ganar de la computadora
 * @param {HTMLElement} puntosHTML elementos html donde se muestra el puntaje
 * @param {HTMLElement} divCartasComputadora elementos html donde se muestran las cartas de la computadora
 * @param {Array<String>} deck 
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora,deck = [] ) => {
    if (!puntosMinimos)  throw new Error("No hay puntaje minimo");
    if (!deck.length) throw new Error("No hay cartas en el deck");
    if (!puntosHTML) throw new Error("No hay elementos html para mostrar los puntos");

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);
        
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

