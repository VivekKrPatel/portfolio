# Handoff — Vivek Kumar Patel portfolio

Use this file if another agent continues the work. Ask Vivek rather than guessing missing personal details.

## Person

- **Name:** Vivek Kumar Patel
- **Role target:** Java Backend Engineer (3+ YOE)
- **Location:** Bengaluru, Karnataka
- **Employer:** InspironLabs, Software Engineer, Backend, Sep 2023 – Present
- **LinkedIn:** https://www.linkedin.com/in/vivek-kumar-patel/
- **GitHub:** https://github.com/VivekKrPatel (portfolio repo: https://github.com/VivekKrPatel/portfolio.git)
- **Public email / phone:** vivekkrpatel2442@gmail.com · +91 77018 52442
- **Photo:** `assets/photo.jpg` (viewpoint portrait, cropped to face in CSS)
- **Education:** B.Sc. Mathematics (Hons.), Lingaya's Vidyapeeth, Faridabad, Jul 2019 – Jun 2022, CGPA 8.74 / 10. On the site as a short block, not in the hero.
- **Certifications:** AWS Partner: Accreditation (Technical) — exact resume wording, not Solutions Architect.

## Resume facts already used on the page

Only these metrics. Do not fabricate new percentages.

**Summary**

Java backend engineer with 3+ years building Spring Boot microservices, REST APIs, Apache Kafka workflows, and reactive data-access services for US healthcare and enterprise data products.

**Elevanta**

- Clay → Smartlead → n8n → HubSpot webhook pipeline (sends, opens, replies, bounces)
- Python backfill for historical contacts
- ~70% of the sync process automated via n8n

**Turinton**

- Reusable Java persistence library: fetch/write REST APIs, parameterized PostgreSQL against client datasources
- Replaced 12+ ConnectionFactory calls across 6 Spring Boot repositories (~40% less duplication/maintenance)
- Redis caching: ~600ms → ~200ms average query time
- Gmail and Microsoft Outlook mailbox connectors
- Unit tests for 15+ persistence and connector classes (JUnit 5, Mockito)
- NYAI data-breach module: REST APIs and schema, principal relationships, DPDPA-aligned reporting (one bullet on the resume; expanded on the site from the NYAI folder)

**Optum**

- 5+ Java/Spring Boot microservices, 50,000+ patients, API latency −30%
- Kafka 100K+ events/day, 3 downstream services
- Camunda BPM, manual processing −35%, rule engine 10,000+ requests/day at 99.9% uptime
- Migrated 2 APIs NestJS → Spring Boot (US government healthcare platform), maintainability +40% on resume
- HIPAA consent popup and communication-card UI

**Skills on resume**

Java, Python, JavaScript/React (working knowledge), Spring Boot, Spring WebFlux, PostgreSQL, Redis, Kafka, Docker, Kubernetes, Jenkins, Red Hat OpenShift, Camunda BPM, Splunk, SonarQube, JUnit, Mockito, GitHub Copilot / Claude / Cursor.

Do **not** claim MCP servers, LLM agents, Angular, Bootstrap, Perl, or PHP.

## What is built

Folder: `portfolio/` (this directory)

- Recruiter-first one-pager: sticky sidebar on desktop, stacked layout on mobile
- Dark navy + mint accent (Brittany Chiang structure; short positioning like Lee Robinson)
- Sections: About, Experience, Selected work, Skills, How I work, Contact
- Soft skills grounded in real code (shared libraries, tests, typed errors, client integrations)
- Mentoring: 3–5 juniors on problem statements, LLD, implementation doubts
- Hobby on site: cooking (more pending)
- Cloudflare `_headers`, `wrangler.toml`, no bundler

## Changes requested vs previous draft

Previous conversation asked for:

1. More polished, responsive design — done
2. Hobbies, soft skills, mentoring — soft skills live; hobbies/mentoring wait for Vivek
3. Projects from `D:\turinton consulting` and `D:\nyai` — selected work cards, ownership from file headers, not whole-repo claims

## Recruiter research (use this, do not decorate for decoration)

In the first few seconds they want:

1. Role + domain + stack above the fold
2. Stack keywords visible without scrolling
3. Outcomes / known clients (Optum, healthcare, DPDPA) as trust shortcuts
4. 3–5 projects with **problem, what you built, what was hard, result**
5. Clear ownership (“I authored X”), not “we built the platform”
6. Live demo or honest “private employer code”
7. Tests, readable structure, no tutorial clones

Reference portfolios for layout, not copy:

- https://brittanychiang.com — sticky identity, numbered nav, work before toy projects
- https://leerob.com — short bio, no fluff
- https://www.joshwcomeau.com — teach through the work (use for case-study depth, not playful UI)

## Project inventory (private folders)

Do not publish source. Summaries only.

**Turinton (`D:\turinton consulting`)** — many connectors exist (Postgres, MySQL, Mongo, Snowflake, REST, Shopify, email, etc.). Vivek is **not** the author of every connector. Proven Vivek work from headers:

- `insights-email-data-connector` — EWS listFolders, OAuth, SSO on fetch/test/list, Kafka after fetch, tests
- `insights-dataconnector-mongo` — sampleValues v2
- `turinton-common-library` / `reactive-database` — matches the persistence-library story on the resume

**NYAI (`D:\nyai`)**

- `nyai-persistence-service` — execute-query router authored by Vivek
- `nyai-dpdpa-notification-service` — substantial Vivek history: recipients, dashboard SQL, duplicate dispatch, SMTP status, AccessTokenGuard
- `nyai-dpdpa-consent-api` — external find-consent-by-id (product context; confirm extra personal bullets before expanding)

If asked for “how many projects,” count **cards you can defend**, not folders on disk.

## Open questions (still)

1. Remaining hobbies besides cooking
2. Custom domain vs `*.pages.dev`
3. Confirm GitHub **profile** is https://github.com/VivekKrPatel (the URL given was the portfolio repo)

## Cloudflare

Agent cannot complete login. Vivek must `npx wrangler login` or use the dashboard. Never accept a Cloudflare password in chat.

Steps: see `README.md`.

## Pre-launch checklist

- [ ] GitHub link wired (remove `aria-disabled` on the button)
- [ ] Photo or keep initials on purpose
- [ ] Mentoring and hobbies cards replaced or removed
- [ ] Email / contact CTA
- [ ] Click every nav item on a phone-width viewport
- [ ] LinkedIn URL still 200
- [ ] No client secrets, internal hostnames, or SQL from those repos
- [ ] Metrics still match the Word resume
- [ ] `_headers` deployed with the site
- [ ] Cloudflare account is Vivek’s; Pages project created
- [ ] After deploy, open the `pages.dev` URL and send LinkedIn message from the live Contact button
