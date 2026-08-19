/**
 * z3r0byte Terminal Interaction & State Module
 */
window.TermInteractions = (function() {
    'use strict';

    function initProjectCardListeners() {
        var cards = document.querySelectorAll('.project-card');
        if (!cards || !cards.length) return;

        cards.forEach(function(card, index) {
            card.addEventListener('mouseenter', function() {
                card.setAttribute('data-active-index', '0x' + index.toString(16));
            });
            card.addEventListener('mouseleave', function() {
                card.removeAttribute('data-active-index');
            });
        });
    }

    function initKeyboardHooks() {
        document.addEventListener('keydown', function(event) {
            // Hotkey hook: Ctrl+Shift+K prints terminal status
            if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'k') {
                console.info('[TTY] Node: z3r0byte // Session: 0x9f2a // State: SECURE');
            }
        });
    }

    function init() {
        initProjectCardListeners();
        initKeyboardHooks();
    }

    return {
        init: init
    };
})();
