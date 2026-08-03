LUCK'S CLEANING SERVICES — WEBSITE
====================================

WHAT'S INCLUDED
----------------
- index.html      Home page (hero video, services preview, why-us, gallery preview)
- about.html      Story + founders (Jacob & Arlo) + service area
- services.html   Window Cleaning + Power Washing detail
- gallery.html    Photo gallery (click to zoom) + video
- contact.html    Quote request form + FAQ
- css/styles.css  All styling
- js/main.js      Nav, animations, lightbox, form handling
- media/          Hero video (cut from your footage) + poster image
- images/         Your real business photos + video stills
- CNAME           Tells GitHub Pages to serve this site at
                   luckscleaningservices.com (see section 2 below)

Open index.html in any browser to view the site right now — no install needed.


1. YOUR CONTACT FORM IS LIVE
----------------------------------------------------------
The contact form on contact.html is wired to Formspree, a free service that
emails form submissions straight to your inbox — no server required.

It's connected to your Formspree account's form (endpoint id "mojgorvk"),
set up at formspree.io/register and pointed at luckscleaningservicesltd@gmail.com.
Because this uses a proper account-based form (not the old plain-email
method), there's no activation step — submissions land in your inbox
immediately, no confirmation email needed.

To check on submissions, spam filtering, or export a CSV of past messages,
log into your dashboard at formspree.io with the account you registered.

Free plan = 50 submissions/month, which is plenty to start. If you outgrow
that, upgrade from the same dashboard — no code changes needed.


2. PUTTING THE SITE ONLINE AT luckscleaningservices.com (GitHub Pages)
----------------------------------------------------------
This is a static site (plain HTML/CSS/JS), so GitHub Pages can host it for
free and serve it straight at luckscleaningservices.com.

  STEP 1 — Create the repository
  1. Go to https://github.com and sign up free if you don't have an account.
  2. Click the "+" in the top right > "New repository".
  3. Name it something like "lucks-cleaning-website", set it to Public,
     and click "Create repository".

  STEP 2 — Upload the site files
  1. On the new repo's page, click "uploading an existing file" (or
     "Add file" > "Upload files").
  2. Open the "site" folder on your computer, select EVERYTHING inside it
     (index.html, about.html, css/, js/, images/, media/, the CNAME file,
     etc. — the contents, not the folder itself), and drag them all into
     the GitHub upload box.
  3. Scroll down and click "Commit changes".

  STEP 3 — Turn on GitHub Pages
  1. In the repo, go to "Settings" (top menu) > "Pages" (left sidebar).
  2. Under "Build and deployment" > "Source", choose "Deploy from a
     branch".
  3. Under "Branch", pick "main" and folder "/ (root)", then "Save".
  4. GitHub gives you a live URL immediately, like
     https://yourusername.github.io/lucks-cleaning-website — the site is
     live at that point.

  STEP 4 — Connect luckscleaningservices.com
  1. Still in Settings > Pages, find the "Custom domain" box, type in
     luckscleaningservices.com, and click "Save". (A file called CNAME
     containing your domain is already included in this site folder for
     this exact purpose — GitHub Pages looks for it automatically.)
  2. Log into your domain registrar (GoDaddy, Namecheap, etc.), find DNS
     settings for luckscleaningservices.com, and add these four A records
     (all with name '@'), pointing at GitHub's servers:
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
  3. Also add a CNAME record for "www" pointing to
     yourusername.github.io (so both luckscleaningservices.com and
     www.luckscleaningservices.com work).
  4. Delete any other A, AAAA or CNAME records already pointing at the
     root domain (e.g. from a previous host) — a domain can only point
     to one place at a time.
  5. Wait for DNS to update — usually 5-30 minutes, occasionally longer.
     Back in Settings > Pages, tick "Enforce HTTPS" once it becomes
     available (GitHub issues a free SSL certificate automatically).

That's it — once verified, luckscleaningservices.com loads the site
directly, with nothing after it.


3. EDITING CONTENT
--------------------
Everything is plain text inside the .html files — no build tools needed.
Open any .html file in a text editor and:
  - Text: just edit the words directly.
  - Phone number: shown in the header, every footer, and the contact page
    (currently 021 0905 8847, linked as tel:+642109058847) — search for
    "0905 8847" across the .html files to update it everywhere if it changes.
  - Colors: all defined once at the top of css/styles.css under ":root" —
    change --navy, --blue etc. and it updates everywhere.
  - Photos: swap files in /images (keep the same filenames, or update the
    <img src="..."> paths).


4. THE HERO VIDEO
--------------------
media/hero-video.mp4 is a custom-cut highlight reel built from your four
uploaded clips — wide establishing shot, two close squeegee/detail shots,
and a dynamic reach shot, blended with quick crossfades and a blurred-edge
treatment so the vertical phone footage fills the widescreen hero nicely.
It's muted and loops automatically (standard for hero banners). Swap it out
any time by replacing media/hero-video.mp4 with a same-named file.


QUESTIONS FOR YOU TO DECIDE LATER
------------------------------------
- Copy currently says "Auckland's North Shore" as the service area — adjust
  in about.html / contact.html / index.html if you want to name specific
  suburbs.
