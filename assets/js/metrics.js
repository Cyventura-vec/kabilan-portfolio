/**
 * z3r0byte Terminal Session Metrics Module
 */
window.TermMetrics = (function() {
    'use strict';

    var startTime = Date.now();
    var entropy = Math.random().toString(16).substring(2, 10);

    function getUptimeSeconds() {
        return ((Date.now() - startTime) / 1000).toFixed(1);
    }

    function getEntropy() {
        return '0x' + entropy;
    }

    function updateMetricsDisplay(elementId) {
        var el = document.getElementById(elementId || 'x-term-metrics');
        if (!el) return;
        el.textContent = 'uptime: ' + getUptimeSeconds() + 's | entropy: ' + getEntropy();
    }

    function initMetricsDaemon(elementId, intervalMs) {
        updateMetricsDisplay(elementId);
        return setInterval(function() {
            updateMetricsDisplay(elementId);
        }, intervalMs || 1000);
    }

    return {
        getUptime: getUptimeSeconds,
        getEntropy: getEntropy,
        init: initMetricsDaemon
    };
})();
