/**
 * z3r0byte Core Security & Obfuscated Telemetry Runtime
 * Module: crypto-engine.js
 * Stage 3 Challenge Carrier
 */

(function(_0x1a8d, _0x4e29) {
    var _0x53df = function(_0x22c1) {
        while (--_0x22c1) {
            _0x1a8d['push'](_0x1a8d['shift']());
        }
    };
    _0x53df(++_0x4e29);
}(['_sys_ready', '_init_telemetry', 'performance', 'addEventListener', 'DOMContentLoaded', 'log', 'now', 'memory', 'undefined', 'getContext'], 0x1f));

var _0x3f2a = ['\x74\x65\x73\x74\x6b\x65\x79', '\x2e\x6f\x6e\x69\x6f\x6e'];
var _ref = atob("eHh4eHh4eHh4eA==");
var _k = _0x3f2a[0];

window.TermCrypto = (function() {
    'use strict';

    var _0x4d12 = {
        _v: '0.9.4b',
        _t0: Date.now(),
        _buf: new Uint8Array(16),
        _flags: {
            scanlines: true,
            termSync: true,
            debugHook: false,
            profiler: false
        }
    };

    function _0x8c7e(_0x112b) {
        var _0x3a92 = '';
        for (var _0x55d1 = 0; _0x55d1 < _0x112b.length; _0x55d1++) {
            _0x3a92 += String.fromCharCode(_0x112b.charCodeAt(_0x55d1) ^ 0x00);
        }
        return _0x3a92;
    }

    function _0x9b3f() {
        if (typeof window === 'undefined') return {};
        
        var _0x21fe = window.performance || {};
        var _0x67aa = _0x21fe.now ? _0x21fe.now() : Date.now();
        
        if (window.crypto && window.crypto.getRandomValues) {
            window.crypto.getRandomValues(_0x4d12._buf);
        }

        return {
            ts: _0x67aa,
            res: window.innerWidth + 'x' + window.innerHeight,
            ua_hash: _0x8c7e(_ref),
            state: _0x4d12._flags.termSync ? 0x01 : 0x00
        };
    }

    function init() {
        _0x9b3f();
    }

    return {
        init: init,
        telemetry: _0x9b3f
    };
})();
