# ==============================================================================
# z3r0byte Terminal Portfolio & CTF Challenge Makefile (Next.js Edition)
# ==============================================================================

.PHONY: help install dev build serve up stop test status logs nginx-conf clean

.DEFAULT_GOAL := help

PORT ?= 8085
NEXT_PORT ?= 3000
NGINX_CONF := $(shell pwd)/nginx.conf
ROOT_DIR := $(shell pwd)

help: ## Show this help message
	@echo "======================================================================"
	@echo " z3r0byte CTF Challenge & Next.js Portfolio Management Commands"
	@echo "======================================================================"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	@echo "[+] Installing project dependencies..."
	@npm install

dev: ## Start Next.js development server
	@echo "[+] Starting Next.js dev server..."
	@npm run dev

build: ## Build Next.js production bundle
	@echo "[+] Building Next.js application..."
	@npm run build

nginx-conf: ## Generate nginx.conf from template using current directory
	@ROOT_DIR=$(ROOT_DIR) envsubst '$$ROOT_DIR' < nginx.conf.template > nginx.conf
	@echo "[+] nginx.conf generated for $(ROOT_DIR)"

serve: build nginx-conf ## Start Next.js server + Nginx reverse proxy (Port 8085)
	@echo "[+] Launching Next.js frontend on port $(NEXT_PORT)..."
	@npx next start -p $(NEXT_PORT) &
	@echo "[+] Waiting for Next.js to be ready..."
	@for i in $$(seq 1 30); do curl -s http://127.0.0.1:$(NEXT_PORT) > /dev/null && break; sleep 1; done
	@if command -v nginx > /dev/null 2>&1; then \
		echo "[+] Starting Nginx reverse proxy on port $(PORT)..."; \
		nginx -c $(NGINX_CONF); \
		echo "[+] CTF Challenge active at http://localhost:$(PORT)"; \
	else \
		echo "[!] Nginx not found. Access Next.js directly at http://localhost:$(NEXT_PORT)"; \
	fi

up: install build nginx-conf ## Full deploy: install, build, and start challenge (use this on cloud)
	@echo "[+] Starting Next.js on port $(NEXT_PORT)..."
	@npx next start -p $(NEXT_PORT) &
	@echo "[+] Waiting for Next.js to be ready..."
	@for i in $$(seq 1 30); do curl -s http://127.0.0.1:$(NEXT_PORT) > /dev/null && break; sleep 1; done
	@if command -v nginx > /dev/null 2>&1; then \
		echo "[+] Starting Nginx reverse proxy on port $(PORT)..."; \
		nginx -c $(NGINX_CONF); \
		echo "[+] CTF Challenge active at http://localhost:$(PORT)"; \
	else \
		echo "[!] Nginx not found. Install with: sudo apt install nginx"; \
		echo "[+] Next.js accessible at http://localhost:$(NEXT_PORT)"; \
	fi

stop: ## Stop Next.js and Nginx server instances
	@echo "[+] Stopping Nginx server..."
	@nginx -s stop -c $(NGINX_CONF) 2>/dev/null || pkill nginx || true
	@echo "[+] Stopping Next.js server..."
	@pkill -f "next-server" || pkill -f "next start" || pkill -f "next dev" || true
	@echo "[+] Stopped."

test: ## Execute CTF Stage 1 & Stage 2 HTTP header tests
	@echo "======================================================================"
	@echo " Running CTF Challenge Verification Tests (Port $(PORT))"
	@echo "======================================================================"
	@echo "\n[1/3] Testing GET Response Status..."
	@curl -sI http://localhost:$(PORT) | head -n 1
	@echo "\n[2/3] Stage 1 Test: Recon Header (X-Request-ID)..."
	@curl -sI http://localhost:$(PORT) | grep -i "X-Request-ID" || echo "[-] Header not found"
	@echo "\n[3/3] Stage 2 Test: Optionsbleed Header (X-Bleed)..."
	@curl -sI -X OPTIONS http://localhost:$(PORT) | grep -i "X-Bleed" || echo "[-] Optionsbleed header not found"
	@echo "\n======================================================================"

status: ## Check process and port listening status
	@echo "[+] Checking port $(PORT) (Nginx Proxy) and port $(NEXT_PORT) (Next.js)..."
	@lsof -i :$(PORT) -i :$(NEXT_PORT) 2>/dev/null || netstat -tuln | grep -E "$(PORT)|$(NEXT_PORT)" || echo "[-] No server currently running on target ports."

logs: ## Tail Nginx access and error logs
	@echo "[+] Tailing Nginx logs in /tmp/..."
	@tail -f /tmp/nginx_access.log /tmp/nginx_error.log 2>/dev/null || echo "[-] Log files not found."

clean: ## Clean build cache, logs, and generated configs
	@echo "[+] Cleaning Next.js build cache and temporary log files..."
	@rm -rf .next /tmp/nginx_*.log /tmp/nginx.pid nginx.conf
	@echo "[+] Cleanup complete."
