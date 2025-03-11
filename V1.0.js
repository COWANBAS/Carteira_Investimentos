// ==UserScript==
// @name          Checagem dos FIIS
// @description   Abre as páginas dos FIIS ao pressionar Shift + 1 e Shift + 2
// @namespace     CowanFISS
// @license       CowBas
// @version       1.0
// @author        Cowanbas
// @match         *://*/*
// @run-at        document-start
// ==/UserScript==

(function() {
    'use strict';

    const links = {
        'Digit1': 'https://investidor10.com.br/fiis/mxrf11/',
        'Digit2': 'https://investidor10.com.br/fiis/gare11/',
        'Digit3': 'https://www.bancodata.com.br/',
        'Digit4': 'https://br.investing.com/currencies/usd-brl',
        'Digit0': 'https://investidor10.com.br/'
    };

    document.addEventListener('keydown', function(event) {
        if (event.shiftKey && links[event.code] && !event.target.matches('input, textarea, [contenteditable="true"]')) {
            window.open(links[event.code], '_blank');
        }
    });
})();
