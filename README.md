# z3r0byte // Security Research & CTF Portfolio

```
  ______ ____ _____   ___  ______ __   __ _____ _____ 
 |___  /|___ /|  _ \ / _ \| __ ) \ \ / /|_   _| ____|
    / /   |_ \| |_) | | | |  _ \  \ V /   | | |  _|  
   / /   ___) |  _ <| |_| | |_) |  | |    | | | |___ 
  /_/   |____/|_| \_\\___/|____/   |_|    |_| |_____|
```

> **Identity & Directive**: Low-level memory corruption, protocol subversion, asymmetric telemetry, and embedded CTF puzzle carriers.

---

## 📌 Overview

**z3r0byte** is a terminal-themed security research portfolio and multi-stage Capture-The-Flag (CTF) web challenge. Designed with a dark cybernetic aesthetic, it features real-time session telemetry, classified project showcases, PGP public key verification, and an interactive multi-stage reverse engineering challenge simulating real-world security vulnerabilities like **Optionsbleed** (CVE-2017-9798) and client-side cryptographic obfuscation.

---

## 🔑 Environment Configuration (`.env`)

All challenge hints, cryptographic parameters, and hidden onion endpoints are centralized in `.env`.

### `.env` File Structure

```env
# ==============================================================================
# z3r0byte Terminal Portfolio & CTF Challenge Environment Configuration
# ==============================================================================

# CTF Challenge Hints & Onion Service Endpoint
HINT="check options"
HINT_BASE64="Y2hlY2sgb3B0aW9ucw=="
ONION_LINK="http://wjk7abc294k.onion"
ONION_HOST="wjk7abc294k.onion"

# Challenge Cryptographic Keys & Payloads
CRYPTO_KEY="testkey"
ENCRYPTED_DOM_PAYLOAD="030f18430a071a5a0a1d1d040b"
OPTIONS_BLEED_PAYLOAD="687474703a2f2f\\xff\\xff\\xff3239346b"

# Identity & Security Verification
PGP_FINGERPRINT="7B94 0F2A 44C8 E190 65D3 89A1 9F2A 112C BEEF 03F2"
SESSION_NODE="z3r0byte"
SESSION_ID="0x9f2a"
```

> 💡 *Note: Use `.env.example` as a template for version control.*

---

## 🧩 CTF Challenge Architecture & Stages

The portfolio contains an embedded 4-stage CTF challenge for security researchers:

```
[ Stage 1: Recon Headers ] ──► [ Stage 2: Optionsbleed ] ──► [ Stage 3: JS XOR Crypto ] ──► [ Stage 4: Onion Endpoint ]
```

### Stage 1: Recon Headers
- **Vector**: HTTP Response Headers (`_headers` / `nginx/conf.d/security_headers.conf`)
- **Header**: `X-Build-Ref: Y2hlY2sgb3B0aW9ucw==`
- **Decode**: Base64 decoding `Y2hlY2sgb3B0aW9ucw==` yields the hint: `check options`.

### Stage 2: Optionsbleed Simulation
- **Vector**: Nginx `OPTIONS` HTTP request handling (`nginx/conf.d/optionsbleed.conf`)
- **Mechanism**: Sending an `OPTIONS` request returns custom header `X-Bleed: 687474703a2f2f\xff\xff\xff3239346b`.
- **Payload Hex Parsing**:
  - `687474703a2f2f` ➔ `http://`
  - `3239346b` ➔ `294k`

### Stage 3: Obfuscated JS Telemetry
- **Vector**: `assets/js/crypto-engine.js`
- **Mechanism**: Contains string array rotation obfuscation and XOR key parameters (`CRYPTO_KEY="testkey"`).

### Stage 4: Hidden DOM Element & Onion Reconstruction
- **Vector**: `index.html` DOM element `<div id="x-ref" data-enc="030f18430a071a5a0a1d1d040b">`
- **Decryption**: XOR decoding `030f18430a071a5a0a1d1d040b` using key `testkey` results in `wjk7abc.onion`.
- **Final Onion Link**: Combining Stage 2 prefix/suffix (`http://` + `294k`) and Stage 4 body yields `http://wjk7abc294k.onion`.

---

## 📂 Repository Structure

```
kabilan-portfolio/
├── .env                  # Challenge hint, onion link, and cryptographic parameters
├── .env.example          # Environment configuration template
├── .gitignore            # Git exclusion rules
├── README.md             # Project documentation
├── index.html            # Core terminal interface & Stage 4 challenge carrier
├── nginx.conf            # Nginx HTTP server configuration with Optionsbleed mapping
├── _headers              # Static host response header definitions (Netlify / Cloudflare)
├── assets/
│   ├── style.css         # Terminal CSS stylesheet bundle
│   ├── main.js           # Master runtime bootstrapper
│   └── js/
│       ├── crypto-engine.js  # Telemetry & Stage 3 challenge engine
│       ├── interactions.js   # Terminal hotkey hooks & card listeners
│       └── metrics.js        # Dynamic uptime & entropy renderer
└── nginx/
    └── conf.d/
        ├── optionsbleed.conf      # OPTIONS method memory bleed simulation header map
        └── security_headers.conf  # Security headers & Recon challenge headers
```

---

## 🚀 Running Locally

### Option A: Using Nginx (Recommended for CTF header simulation)

Run Nginx pointing to `nginx.conf`:

```bash
nginx -c $(pwd)/nginx.conf
```

Access the terminal portfolio at `http://localhost:8080`.

To test the **Stage 1 & Stage 2 headers**:

```bash
# Stage 1: Recon Headers
curl -I http://localhost:8080

# Stage 2: Optionsbleed Header Leak
curl -X OPTIONS -I http://localhost:8080
```

### Option B: Using standard HTTP Server (Static Mode)

```bash
# Python 3
python3 -m http.server 8000

# Node / npx
npx serve .
```

---

## 🛡️ License & Legal Disclaimer

This repository is built for **educational security research** and portfolio demonstration purposes. All simulated vulnerability headers (Optionsbleed) are non-destructive synthetic mockups.
