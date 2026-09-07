# AI-Block.md — CTF Design Policy

This is a **capture-the-flag challenge** in the web domain (`ctf-web`), built to reward human judgment over shallow automation.

## Honest Policy (L1)

This challenge is intended to be solved by a person. Automated recon may find **plausible dead ends** (decoy onion-format flags). We do **not** claim to block all AI-assisted solving — the goal is to reward noticing what a shallow script won't.

- This is **not** an exam, and there is **no** government or legal authority here.
- No legal action is taken against any player.

## Flag Format (L2)

- `FLAG_FORMAT = http://*.onion`
- `REAL = http://wjk7abc294k.onion`
- Decoy flags are also `http://*.onion`, indistinguishable by format, and never accepted by the verifier.

## Verifier

`POST /api/v1/verify` → `{"r":1}` only for `http://wjk7abc294k.onion`. Every decoy/wrong/malformed submission returns `{"r":0}` with identical shape and timing.

## Anti-Automation Goal

Bait the shallow pass (`grep/curl/strings`), gate the real one behind judgment — combine the `OPTIONS X-Bleed` fragment with the XOR-decoded DOM fragment to assemble the onion link.