// ==UserScript==
// @name          Checagem dos FIIS
// @description   Abre as páginas dos FIIS e a cotação do dolar.
// @namespace     CowanFIIS
// @license       CowBas
// @version       1.0
// @author        Cowanbas
// @match         *://*/*
// @run-at        document-start
// ==/UserScript==

(function () {
    'use strict';

    const links = {
        'Digit1': 'https://investidor10.com.br/fiis/mxrf11/',
        'Digit2': 'https://investidor10.com.br/fiis/gare11/',
        'Digit3': 'https://br.investing.com/currencies/usd-brl',
        'Digit0': 'https://investidor10.com.br/'
    };

    let isKeyPressed = false;

    document.addEventListener('keydown', function (event) {
        if (event.shiftKey && !isKeyPressed && links[event.code] && !event.target.matches('input, textarea, [contenteditable="true"]')) {
            isKeyPressed = true;
            window.open(links[event.code], '_blank');
        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.shiftKey === false) {
            isKeyPressed = false;
        }
    });
})();
