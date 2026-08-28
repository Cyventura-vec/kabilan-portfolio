# Kabilam Devraj Portfolio — Codex Content Upgrade

## Project Context

This repository contains an existing personal portfolio website built with **Next.js / React / TypeScript**.

The website is already implemented and functional. The task is **not to create a new portfolio**.

The existing site currently contains:

* a hero section
* an about section
* professional experience
* education
* projects
* skills
* contact
* footer
* navigation
* theme toggle
* reusable experience/project cards
* existing animations/reveal behavior
* existing contact API
* existing Nginx configuration

The project structure includes the following relevant application and content files:

```text
app/
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── About.tsx
├── Contact.tsx
├── Education.tsx
├── ExperienceCard.tsx
├── Experience.tsx
├── Footer.tsx
├── Hero.tsx
├── Nav.tsx
├── ProjectCard.tsx
├── Projects.tsx
├── SectionReveal.tsx
├── Skills.tsx
└── ThemeToggle.tsx

data/
├── education.ts
├── experience.ts
├── projects.ts
└── skills.ts
```

---

# Primary Objective

Transform the existing portfolio from its current subject into the portfolio of:

## Kabilam Devraj

Do this by **rewriting the existing content and data only**.

This is a **content replacement / identity upgrade**.

Do not redesign the website.

Do not introduce new pages.

Do not introduce new sections.

Do not add new features.

Do not change the architecture unless a very small content-related adjustment is strictly required.

---

# Exact Files to Edit

## 1. `app/layout.tsx`

Update identity-level metadata where necessary.

Possible changes:

* page title
* metadata description
* author/name references

The metadata should identify the site as belonging to **Kabilam Devraj**.

Do not modify the application's structural layout.

---

## 2. `app/page.tsx`

Only modify content references if the existing page contains hard-coded personal information.

Do not restructure the page.

Do not change section ordering.

Do not remove existing sections.

Do not add new sections.

---

## 3. `components/Hero.tsx`

Rewrite the hero copy for Kabilam.

Primary identity:

**Kabilam Devraj**

Primary profession:

**Software Engineer**

The hero should immediately communicate that he is a normal but capable software engineer based in Chennai.

Suggested personality direction:

> A software engineer based in Chennai, building practical things and having strong opinions about how they should be built.

The exact wording can be improved.

Keep the existing:

* layout
* typography
* animation
* buttons
* styling
* visual hierarchy

Only replace the personal content.

---

## 4. `components/About.tsx`

Rewrite the existing About content around Kabilam's personality and background.

Kabilam should come across as:

* intelligent
* technically capable
* confident
* slightly ego-conscious
* opinionated about engineering
* curious
* grounded
* realistic

He takes pride in being good at what he does.

Do not portray him as arrogant, famous, or extraordinary.

The About section should communicate that software engineering is an important part of his identity, but not his entire life.

Include references to:

* software engineering
* learning
* building practical software
* reading
* following technology
* his online presence
* life in Chennai

Use natural first-person writing if the existing component is written that way.

---

## 5. `components/Experience.tsx`

Keep the existing experience layout.

Only update the content if this file contains hard-coded text.

Do not change the component structure.

---

## 6. `components/ExperienceCard.tsx`

Do not redesign this component.

Only update hard-coded personal/company terminology if present.

The primary experience data should come from:

```text
data/experience.ts
```

---

## 7. `data/experience.ts`

This is one of the main files that should be rewritten.

Create a believable career history for Kabilam.

Maximum:

**3 companies**

Career progression should feel realistic.

### Experience 1 — Early career

A normal internship or junior software engineering position.

Focus on:

* learning production development
* bug fixing
* APIs
* Git
* databases
* working inside an existing codebase

### Experience 2 — Software Engineer

A normal software/product company.

Focus on:

* backend or full-stack engineering
* APIs
* databases
* feature development
* debugging
* performance
* collaboration with product/design/engineering teams

### Experience 3 — Current role

Kabilam currently works at a **startup**.

Title:

**Software Engineer**

The startup should feel like a believable small-to-medium Indian technology company.

Possible responsibilities:

* building product features
* backend services
* REST APIs
* PostgreSQL/database work
* debugging production issues
* CI/CD
* Docker
* cloud deployments
* code reviews
* working closely with a small engineering team

Do not make him a founder.

Do not make the company famous.

Do not give him absurd responsibilities.

Do not invent famous clients.

---

# 8. `components/Education.tsx`

Keep the existing education component.

Only update hard-coded content when necessary.

Education data should primarily come from:

```text
data/education.ts
```

---

# 9. `data/education.ts`

Create a believable educational history for Kabilam.

Location:

**Chennai, India**

Degree:

**B.E. / B.Tech in Computer Science or closely related engineering discipline**

Use a believable Chennai engineering college.

Do not use a globally prestigious university unless already present for a specific reason.

Academic performance should be good but ordinary.

He should come across as a bright engineering student rather than an academic prodigy.

Relevant areas:

* Data Structures
* Algorithms
* Database Systems
* Operating Systems
* Computer Networks
* Software Engineering
* Web Development

Do not invent:

* national-level awards
* exceptional academic rankings
* unrealistic scholarships
* major research achievements

---

# 10. `components/Projects.tsx`

Keep the existing project layout.

Do not add a new project section.

Do not add new functionality.

Only update project content through:

```text
data/projects.ts
```

---

# 11. `components/ProjectCard.tsx`

Preserve the existing card structure and visual design.

Only change hard-coded personal terminology if necessary.

Project content should come from:

```text
data/projects.ts
```

---

# 12. `data/projects.ts`

Replace the existing projects with believable software-engineering projects.

Use approximately **3–5 projects**, depending on the existing number of cards.

Projects should be useful but deliberately ordinary.

Examples of the intended level:

### Expense Tracker

A small web application for tracking expenses, categories, monthly summaries, and spending history.

### URL Shortener

A service for generating shortened URLs with basic analytics and expiration.

### Developer Notes

A personal technical-notes application for storing programming notes, snippets, and documentation.

### Deployment Dashboard

A small internal dashboard showing deployments, build status, and service health.

### Team Task Manager

A straightforward application for managing tasks, assignments, priorities, and status.

Projects should demonstrate real engineering ability without sounding revolutionary.

Focus descriptions on things such as:

* API design
* database schema
* authentication
* validation
* caching
* error handling
* deployment
* maintainability

Avoid absurd scale claims.

Do not say things such as:

> "Used by millions of users"

unless there is an existing factual basis for it.

---

# 13. `components/Skills.tsx`

Preserve the existing skills section.

Do not redesign it.

The skill data should come from:

```text
data/skills.ts
```

---

# 14. `data/skills.ts`

Create a focused, realistic software-engineering stack.

Suggested technologies:

### Languages

* TypeScript
* JavaScript
* Python
* Java
* SQL

### Frontend

* React
* Next.js

### Backend

* Node.js
* REST APIs

### Databases

* PostgreSQL
* Redis

### Engineering / Infrastructure

* Git
* Docker
* Linux
* AWS
* CI/CD

Do not list every technology imaginable.

The goal is to communicate:

**"This person knows how to build and maintain software."**

Not:

**"This person has touched 80 technologies."**

---

# Personal Profile

## Location

Kabilam is based in:

**Chennai, India**

Use Chennai naturally in the portfolio.

---

# Persona

Kabilam is a technically strong but normal software engineer.

He is proud of being good at engineering.

He cares about:

* writing clean code
* understanding systems
* making practical technical decisions
* being respected by other engineers
* improving his skills
* learning new technologies
* having opinions about software

He has a little professional ego.

That ego should appear subtly in his writing.

Example feeling:

> He knows he is good at what he does and doesn't mind letting people know it occasionally.

Do not turn this into arrogance.

---

# Online Presence

Kabilam is active on both:

## Quora

His Quora activity should revolve around:

* programming
* software engineering
* computer science
* developer careers
* technical questions
* practical engineering advice

He is not a famous internet personality.

He simply enjoys reading questions and occasionally writing detailed answers.

## Twitter / X

Represent his account as a normal engineer's social account.

Posts may include:

* engineering opinions
* articles
* programming observations
* technology news
* developer culture
* books
* occasional jokes
* random everyday thoughts

Do not portray him as a tech influencer.

Do not invent:

* follower counts
* viral posts
* verification
* celebrity interactions
* huge audiences

Keep it believable.

---

# Personal Interests

Kabilam has interests outside work.

## Books

Reading is one of his regular hobbies.

He reads a mix of:

* technology
* software engineering
* psychology
* history
* science
* fiction

He should not appear to read only programming books.

## Other interests

Use several normal interests where the existing portfolio supports personal-interest content:

* coffee
* music
* films
* photography
* walking
* trying new restaurants
* Linux tinkering
* technology news
* collecting interesting articles

Do not create an exaggerated lifestyle.

---

# Tone

The portfolio copy should be:

* natural
* confident
* understated
* intelligent
* slightly opinionated
* technically credible
* human

Avoid generic résumé language.

Do not repeatedly use phrases such as:

* passionate developer
* visionary engineer
* results-driven professional
* technology enthusiast
* innovative thought leader
* cutting-edge solutions
* highly motivated individual

The portfolio should not sound AI-generated or corporate.

---

# Realism Constraints

Kabilam is a normal software engineer.

Do not invent:

* major awards
* patents
* famous conference talks
* celebrity connections
* huge open-source projects
* billion-user systems
* massive startup exits
* founder credentials
* unrealistic technical achievements
* unrealistic salaries
* famous clients

Do not turn every ordinary accomplishment into something extraordinary.

The career should feel like a believable progression of a smart engineer.

---

# What Must NOT Be Edited

Unless absolutely required for a content reference, do not modify:

```text
app/globals.css
components/Nav.tsx
components/Footer.tsx
components/SectionReveal.tsx
components/ThemeToggle.tsx
app/api/contact/route.ts
robots.ts
sitemap.ts
nginx/
nginx.conf
_headers
Makefile
next.config.mjs
```

Do not touch:

```text
node_modules/
```

Do not change dependency versions.

Do not redesign the UI.

Do not alter animations.

Do not alter the color system.

Do not add pages.

Do not add components.

Do not add new sections.

---

# Implementation Strategy

Use the existing project structure.

The primary content sources to rewrite are:

```text
data/experience.ts
data/education.ts
data/projects.ts
data/skills.ts
```

Then update identity/hard-coded copy in:

```text
app/layout.tsx
app/page.tsx
components/Hero.tsx
components/About.tsx
components/Experience.tsx
components/ExperienceCard.tsx
components/Education.tsx
components/Projects.tsx
components/ProjectCard.tsx
components/Skills.tsx
components/Contact.tsx
```

Only modify a component when it contains content that still refers to the previous portfolio subject.

Do not modify component behavior merely to rewrite text.

---

# Final Verification

After making the content changes:

1. Confirm all references to the previous person have been replaced.
2. Confirm the name is consistently **Kabilam Devraj**.
3. Confirm the current role is a normal **Software Engineer at a startup**.
4. Confirm Chennai is reflected naturally.
5. Confirm there are no impossible achievements or exaggerated claims.
6. Confirm Quora and Twitter/X are represented naturally.
7. Confirm books and personal interests appear where appropriate.
8. Confirm the existing portfolio structure is unchanged.
9. Confirm no unnecessary files were modified.
10. Run the existing project checks/build and fix only issues caused by the content update.

## Success Criteria

The finished website should feel like:

> A believable personal portfolio belonging to a smart Chennai-based software engineer who has worked at a few ordinary companies, currently works at a startup, enjoys building software, reads a lot, spends time on Quora and Twitter/X, and takes a little pride in being technically good.

It should **not** feel like a fabricated celebrity résumé.
