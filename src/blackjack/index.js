import _ from "underscore";
import {
  crearDeck,
  pedirCarta,
  valorCarta,
  turnoComputadora,
  crearCartaHTML,
} from "../useccases";

(() => {
  "use strict";

  let deck = []; //Arreglo donde se almacenarán las cartas de la baraja
  const tipos = ["C", "D", "H", "S"]; //Tipo de cartas 'H' corazones, 'D' diamantes, 'S' espadas, 'C' tréboles
  const especiales = ["A", "J", "Q", "K"]; //Cartas comodines 'A' As, 'J' Jota, 'Q' Reina, 'K' Rey

  let puntosJugador = 0,
    puntosComputadora = 0;

  //Referencias de HTML
  const btnPedir = document.querySelector("#btnPedir");
  const btnDetener = document.querySelector("#btnDetener");
  const btnNuevo = document.querySelector("#btnNuevo");

  const divCartasJugador = document.querySelector("#jugador-cartas");
  const divCartasComputadora = document.querySelector("#computadora-cartas");
  const puntosHTML = document.querySelectorAll("small");

  deck = crearDeck(tipos, especiales);

  //Eventos
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta(deck);

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    // <img class="carta" src="assets/cartas/cartas/10D.png" alt="">
    const imgCarta = crearCartaHTML(carta);
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
      console.log("perdiste");
      btnPedir.disabled = true; //Bloquea el boton
      btnDetener.disabled = true;
      turnoComputadora(
        puntosJugador,
        puntosHTML[1],
        divCartasComputadora,
        deck
      );
    } else if (puntosJugador === 21) {
      console.warn("21 Genial!");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(
        puntosJugador,
        puntosHTML[1],
        divCartasComputadora,
        deck
      );
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
  });

  btnNuevo.addEventListener("click", () => {
    console.clear();

    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasJugador.innerHTML = "";
    divCartasComputadora.innerHTML = "";

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  });
})();
