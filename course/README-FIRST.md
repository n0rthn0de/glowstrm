# The Pathway — course site (upload guide)

## What this is
The complete Web Accessibility Contractor Pathway as a self-hosted course on glowstrm.com.
22 files: course home (index.html), Modules 0–12, 4 Lantern stations, the Checkpoint, the Trail, plus course.css + course.js.

## Upload (one time, ~2 minutes)
1. Go to github.com/n0rthn0de/glowstrm → Add file → Upload files.
2. IMPORTANT: the files must live inside a folder called `course`. Easiest way: on your Mac, keep this whole `course` folder intact and drag the FOLDER into the GitHub upload area (Chrome supports folder drag). Commit to main.
3. Vercel deploys in ~1 minute. The course lives at: glowstrm.com/course/

## Three things to set before sharing the link
1. PASSCODE — SET. Currently `what@gl0wg!rl`, defined inline in every gated page (search: PASS=). Text it to each traveler after they pass the Checkpoint.
   NOTE: this is a soft gate — the passcode is readable in the page source by anyone who looks. Do not reuse it as a password anywhere else.
2. SLACK LINK — DONE. All pages point to the live invite:
   https://join.slack.com/t/glowstrmworkspace/shared_invite/zt-45eanybv8-B0erYF4_MwsFXHc6y20obQ
   This link is set to NEVER EXPIRE — no renewal needed.
3. EMAIL ALIAS — DONE. course@glowstrm.com is live with an auto-reply.

So the only remaining pre-launch setting is the PASSCODE (#1 above).

## Slack channels (live in glowstrmworkspace)
- #pathway-welcome — front door, intros
- #pathway-the-trail — lanterns
- #pathway-stuck-ask-here — running Q&A
- #pathway-ops — private, your weekly checklist
Invite travelers as MULTI-CHANNEL GUESTS limited to the three pathway channels, so client work stays separate.

## Weekly rhythm (your 30 minutes)
- Checkpoint emails arrive with subject "Checkpoint — I'm in" → text that traveler the passcode.
- Lantern emails ("Lantern — Part X") → paste the best into trail.html ("The trail so far" box) via the GitHub editor.
- Set Proton filters on the subject prefixes: Checkpoint —, Lantern —, Reflection —, Certificate —.

## One content TODO
Module 11's page carries the credentials-table placeholder flag — paste the table from your Pages original into module-11.html (or ask Claude to format it once you send the table text).
