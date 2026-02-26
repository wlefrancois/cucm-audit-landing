# 📄 TECHNICAL_ARCHITECTURE.md

Carnivore Command Center™
A Product of WDC LLC

---

## 🌐 Hosting & Deployment

**Hosting Platform:**
GitHub Pages

**Repository:**
wlefrancois / cucm-audit-landing

**Production Branch:**
main

**Deployment Method:**
Automatic deployment on push to main branch

**Build System:**
None (static HTML site)

---

## 🌍 Domain Configuration

**Primary Domain:**
https://www.carnivorecommandcenter.com

**Root Domain:**
https://carnivorecommandcenter.com

**DNS Provider:**
GoDaddy

**Domain Forwarding:**
Root → www (if enabled in GoDaddy)

---

## 📡 DNS Records (GitHub Pages Standard)

A Records:

* 185.199.108.153
* 185.199.109.153
* 185.199.110.153
* 185.199.111.153

CNAME Record:

* www → wlefrancois.github.io

---

## 🔐 Security

**SSL Certificate:**
Automatic GitHub Pages (Let’s Encrypt)

**HTTPS Redirect:**
Enabled

**Security Type:**
Static site — no server backend

---

## 🧠 Frontend Stack

**Language:**
HTML5

**Styling:**
Embedded CSS

**Frameworks:**
None

**JavaScript Integrations:**

* ConvertKit embed script
* Waitlist success event tracking (MutationObserver)
* Plausible analytics event trigger (if active)

---

## 📧 Email Marketing System

**Provider:**
ConvertKit (Kit)

**Form Type:**
Embedded inline form

**Form ID:**
9117546

**Form Location:**
Landing page index.html

**Double Opt-In:**
Enabled

---

## 📊 Analytics

**Platform:**
Plausible (optional / if installed)

**Tracked Event:**
Waitlist Signup

**Trigger Method:**
JavaScript MutationObserver detecting success message

---

## 📁 Repository Structure (Production)

```
/ (root)
   index.html
   /assets
       /logo
       /images
       /icons
```

---

## 🏢 Business Ownership

Parent Company:
WDC LLC

Product Brand:
Carnivore Command Center™

---

## 🚀 Deployment Flow

1. Edit site files locally or in GitHub
2. Commit changes
3. Push to main branch
4. GitHub Pages auto deploys
5. Domain resolves to live site

---

## 🧪 Environments

Production → GitHub Pages
Staging → Not configured
Development → Local editing only

---

## 📦 Infrastructure Summary

| Component     | Provider                   |
| ------------- | -------------------------- |
| Hosting       | GitHub Pages               |
| DNS           | GoDaddy                    |
| Domain        | carnivorecommandcenter.com |
| Email capture | ConvertKit                 |
| Analytics     | Plausible                  |
| SSL           | GitHub Pages               |

---

## 📌 Future Expansion (Planned)

* Mobile app backend
* User authentication
* Database
* Subscription billing
* Admin dashboard
* API services
* Family mode account system

---

## 📍 Last Updated

2026 — Founder Build Phase
