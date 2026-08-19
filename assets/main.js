/**
 * z3r0byte Terminal Master Bootstrapper
 * Coordinates: metrics, interactions, crypto/telemetry engines
 */

(function() {
    'use strict';

    function boot() {
        if (window.TermCrypto && window.TermCrypto.init) {
            window.TermCrypto.init();
        }
        if (window.TermInteractions && window.TermInteractions.init) {
            window.TermInteractions.init();
        }
        if (window.TermMetrics && window.TermMetrics.init) {
            window.TermMetrics.init('x-term-metrics', 1000);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
