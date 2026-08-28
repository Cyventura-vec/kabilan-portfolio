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
├── Makefile              # Automation rules (dev, build, serve, test, clean)
├── README.md             # Project documentation
├── next.config.mjs       # Next.js configuration and response header injection
├── package.json          # Node dependencies and build scripts
├── tailwind.config.ts    # Tailwind CSS design system configuration
├── tsconfig.json         # TypeScript compiler configuration
├── app/                  # Next.js 14 App Router (layout, page, styles)
├── components/           # React UI components (Hero, Nav, Projects, Skills, etc.)
├── data/                 # Portfolio content definitions (projects, skills, education)
├── public/               # Static assets & PDF resources
├── types/                # TypeScript type declarations
├── _headers              # Static host response header definitions (Netlify / Cloudflare)
├── nginx.conf            # Nginx HTTP reverse proxy configuration with Optionsbleed mapping
└── nginx/
    └── conf.d/
        ├── optionsbleed.conf      # OPTIONS method memory bleed simulation header map
        └── security_headers.conf  # Security headers & Recon challenge headers
```

---

## 🚀 Running Locally

### Option A: Using Makefile (Recommended)

```bash
# View available Makefile targets
make help

# Run Next.js dev server
make dev

# Build production bundle
make build

# Start production server + Nginx reverse proxy (Port 8085)
make serve

# Run CTF Stage 1 & Stage 2 verification tests
make test

# Stop background server instances
make stop
```

### Option B: Direct NPM Workflow

```bash
# Install dependencies
npm install

# Start Next.js development server (http://localhost:3000)
npm run dev

# Build for production
npm run build
```

---

## 🛡️ License & Legal Disclaimer

This repository is built for **educational security research** and portfolio demonstration purposes. All simulated vulnerability headers (Optionsbleed) are non-destructive synthetic mockups.
