<script>
  import {
    hero,
    highScore,
    work,
    doors,
    built,
    skills,
    spoken,
    education,
    links
  } from './lib/content.js';

  // The attract loop. `lit` is the index of the line currently playing across
  // the flattened work list. -1 means "everything lit" — the composed static
  // frame that ships when JS is off, motion is reduced, or a visitor engages.
  const lines = work.flatMap((entry, e) => entry.bullets.map((_, b) => `${e}-${b}`));
  const STEP = Math.round(45000 / lines.length);

  let lit = $state(-1);
  let engaged = $state(false);

  function stop() {
    engaged = true;
    lit = -1;
  }

  $effect(() => {
    if (engaged) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    lit = 0;
    const id = setInterval(() => {
      lit = lit + 1 >= lines.length ? -1 : lit + 1;
      if (lit === -1) stop(); // one pass, then the page rests
    }, STEP);
    return () => clearInterval(id);
  });

  const isLit = (e, b) => lit === -1 || lines[lit] === `${e}-${b}`;
</script>

<svelte:window onscroll={stop} onwheel={stop} ontouchstart={stop} onkeydown={stop} />

<a class="skip" href="#work">Skip to work</a>

<!-- ------------------------------------------------------------- cabinet -->
<header class="band ground-ink">
  <div class="shell">
    <div class="col-main enter">
      <h1 class="marquee">
        <!-- Two block spans, not <br>: the break is visual. The space between
             them collapses to nothing on screen but keeps the accessible name
             "İ. Çağkan Çağlayanel" rather than one run-together word. -->
        {#each hero.nameLines as line}<span class="marquee-line">{line}</span>{' '}{/each}
      </h1>
      <p class="five-second">
        {hero.role}, in {hero.place}. {hero.proof.before}<a
          class="link"
          href={hero.proof.link.href}
          rel="noopener">{hero.proof.link.label}</a
        >{hero.proof.after}
      </p>
    </div>

    <div class="col-side enter enter-2">
      <h2 class="label score-head">High score</h2>
      <ul class="score">
        {#each highScore as row}
          <li class="score-row">
            <span class="figure score-figure">{row.figure}<span class="score-unit">{row.unit}</span
              ></span>
            <span class="score-cause">
              {row.cause} · {row.source}
              {#if row.now}<span class="now">Now</span>{/if}
            </span>
          </li>
        {/each}
      </ul>
    </div>

    <p class="credit-row enter enter-3">
      <a class="coin" href="#work" aria-label="1 Credit — start at Work">
        <svg class="ico" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="7.5" />
          <path d="M10 6.5v7" />
        </svg>
        <span class="label">1 Credit</span>
      </a>
    </p>
  </div>
</header>

<main>
  <!-- --------------------------------------------------------- screen -->
  <!-- ponytail: placeholder. Swap the src for a real Barfender still at
       >=1920px wide and change nothing else. -->
  <section class="band ground-ink screen-band bezel">
    <div class="shell">
      <figure class="screen">
        <img src="/images/_placeholder.svg" alt="Barfender in play" width="1920" height="1080" />
        <figcaption class="screen-cap">
          <span class="label">Barfender</span>
          <span class="screen-note">Physics-based bar simulation. 4,000+ wishlists in month one.</span>
        </figcaption>
      </figure>
    </div>
  </section>

  <!-- ----------------------------------------------------------- work -->
  <section id="work" class="band ground-paper bezel">
    <div class="shell">
      <div class="col-main">
        <h2 class="head head-on-paper">Work</h2>
      </div>
      <div class="stack">
        {#each work as entry, e}
          <article class="entry">
            <h3 class="entry-head">
              <span class="entry-company">{entry.company}</span>
              {#if entry.role}<span class="entry-role">{entry.role}</span>{/if}
              <span class="entry-dates figure">{entry.dates}</span>
              {#if entry.current}<span class="now">Now</span>{/if}
            </h3>
            {#if entry.scope}<p class="entry-scope">{entry.scope}</p>{/if}
            <ul class="bullets">
              {#each entry.bullets as bullet, b}
                <li class="attract-row bullet" class:lit={isLit(e, b)}>{bullet}</li>
              {/each}
            </ul>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <!-- ----------------------------------------------------------- live -->
  <section class="band ground-ink bezel">
    <div class="shell">
      <div class="col-main">
        <h2 class="head head-on-ink">Live</h2>
      </div>
      <div class="stack">
        {#each doors as door}
          <a class="door" href={door.href}>
            <span class="door-top">
              <span class="door-title">{door.title}</span>
              <span class="label door-state">{door.state}</span>
            </span>
            <span class="door-blurb">{door.blurb}</span>
            <span class="door-go label">
              Open
              <svg class="ico" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h11" />
                <path d="M10.5 5.5 15 10l-4.5 4.5" />
              </svg>
            </span>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- ---------------------------------------------------------- built -->
  <section class="band ground-paper bezel">
    <div class="shell">
      <div class="col-main">
        <h2 class="head head-on-paper">Built</h2>
      </div>
      <ul class="stack built">
        {#each built as item}
          <li class="built-row" class:has-shot={item.img}>
            {#if item.img}
              <img class="built-shot" src={item.img} alt="" width="315" height="250" />
            {/if}
            <span class="built-title">
              {#if item.href}
                <a class="link" href={item.href} rel="noopener">{item.title}</a>
              {:else}
                {item.title}
              {/if}
            </span>
            <span class="built-note">{item.note}</span>
            <span class="built-year figure">{item.year}</span>
          </li>
        {/each}
      </ul>
    </div>
  </section>
</main>

<!-- -------------------------------------------------------------- footer -->
<footer class="band ground-ink bezel">
  <div class="shell">
    <div class="col-main">
      <h2 class="head head-on-ink">Contact</h2>
      <p class="section-note">
        You can find me on <a class="link" href={links.github} rel="noopener">GitHub</a>,
        <a class="link" href={links.linkedin} rel="noopener">LinkedIn</a> and
        <a class="link" href={links.itch} rel="noopener">itch.io</a>. I read every
        <a class="link" href={links.email}>email</a>.
      </p>
      <p class="section-note">
        <a class="link" href={links.resume}>Résumé (PDF)</a> · {education}
      </p>
    </div>
    <div class="col-side">
      <h2 class="label score-head">Toolkit</h2>
      <dl class="skills">
        {#each skills as row}
          <dt class="label skills-group">{row.group}</dt>
          <dd class="skills-items">{row.items}</dd>
        {/each}
        <dt class="label skills-group">Spoken</dt>
        <dd class="skills-items">{spoken}</dd>
      </dl>
    </div>
  </div>
</footer>

<style>
  /* Only layout that is specific to this page lives here; every color,
     spacing value and shadow comes from the tokens in app.css. */

  .skip {
    position: absolute;
    left: -9999px;
    top: 0;
    z-index: 10;
    background: var(--color-amber);
    color: var(--color-ink);
    padding: calc(var(--v-space) * 0.5) var(--v-space);
    font-weight: 700;
  }
  .skip:focus {
    left: var(--gutter);
  }

  .band {
    padding-block: calc(var(--v-space) * 4);
  }
  .ground-ink {
    background: var(--color-ink);
    color: var(--color-paper);
  }
  .ground-paper {
    background: var(--color-paper);
    color: var(--color-ink);
  }

  /* ------------------------------------------------------------ cabinet */
  header.band {
    padding-block: calc(var(--v-space) * 4);
    min-height: 100vh;
    min-height: 100dvh;
    display: grid;
    align-content: center;
  }

  .marquee-line {
    display: block;
  }

  .marquee {
    margin-bottom: calc(var(--v-space) * 1.5);
  }

  .five-second {
    max-width: 44ch;
    color: var(--color-paper);
  }

  .score-head {
    color: var(--color-paper-muted);
    padding-bottom: calc(var(--v-space) * 0.5);
    border-bottom: 1px solid var(--color-rule-ink);
  }
  .score {
    margin-top: calc(var(--v-space) * 0.5);
  }
  .score-row {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0 calc(var(--v-space) * 0.75);
    padding-block: calc(var(--v-space) * 0.5);
    border-bottom: 1px solid var(--color-rule-ink);
  }
  .score-figure {
    font-family: var(--font-display);
    font-size: var(--text-figure);
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--color-paper);
  }
  .score-unit {
    font-family: var(--font-body);
    font-size: var(--text-label);
    font-weight: 600;
    letter-spacing: 0.02em;
    margin-left: 0.35ch;
    color: var(--color-paper-muted);
  }
  .score-cause {
    font-size: var(--text-label);
    line-height: 1.3;
    color: var(--color-paper-muted);
  }

  /* The one "current" marker: paper on red-deep is 5.89:1 and reads at
     label size, where flat red would not. */
  .now {
    display: inline-block;
    margin-left: calc(var(--v-space) * 0.25);
    padding: 0.1em 0.5em;
    background: var(--color-red-deep);
    color: var(--color-paper);
    border-radius: var(--radius-control);
    font-size: var(--text-label);
    line-height: 1.3;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    vertical-align: 0.1em;
  }

  .credit-row {
    margin-top: calc(var(--v-space) * 3);
  }
  .coin {
    text-decoration: none;
    transition:
      transform 150ms ease-out,
      background-color 150ms ease-out,
      color 150ms ease-out;
  }
  .coin:hover {
    background: var(--color-amber);
    color: var(--color-ink);
  }
  .coin:active {
    transform: scale(0.96);
  }

  .ico {
    width: 1em;
    height: 1em;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.75;
    stroke-linecap: round;
    stroke-linejoin: round;
    flex: none;
  }

  /* --------------------------------------------------------------- work */
  .stack {
    display: flex;
    flex-direction: column;
    gap: calc(var(--v-space) * 2);
  }

  .entry {
    border-top: 1px solid var(--color-rule-paper);
    padding-top: var(--v-space);
  }
  .entry-head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0 calc(var(--v-space) * 0.75);
    font-size: var(--text-body);
    font-weight: 400;
  }
  .entry-company {
    font-family: var(--font-display);
    font-size: var(--text-figure);
    letter-spacing: -0.03em;
    text-transform: uppercase;
  }
  .entry-role {
    font-weight: 600;
  }
  .entry-dates {
    font-size: var(--text-label);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-ink-muted);
    margin-left: auto;
  }
  .entry-scope {
    margin-top: calc(var(--v-space) * 0.25);
    max-width: 68ch;
  }
  .bullets {
    margin-top: calc(var(--v-space) * 0.75);
  }
  .bullet {
    max-width: 68ch;
    padding-left: var(--v-space);
    padding-block: calc(var(--v-space) * 0.25);
    border-left: 1px solid var(--color-rule-paper);
    color: var(--color-ink-muted);
  }
  .bullet.lit {
    color: var(--color-ink);
    border-left-color: var(--color-red-deep);
  }

  /* --------------------------------------------------------------- live */
  .section-note {
    max-width: 60ch;
    margin-top: var(--v-space);
    color: var(--color-paper-muted);
  }

  .door-top {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: calc(var(--v-space) * 0.5);
  }
  .door-title {
    font-family: var(--font-display);
    font-size: var(--text-head);
    line-height: 0.95;
    letter-spacing: -0.04em;
    text-transform: uppercase;
  }
  .door-state {
    background: var(--color-ink);
    color: var(--color-amber);
    padding: 0.2em 0.6em;
    border-radius: var(--radius-control);
  }
  .door-blurb {
    display: block;
    max-width: 62ch;
    margin-top: var(--v-space);
    color: var(--color-ink-muted);
  }
  .door-go {
    display: inline-flex;
    align-items: center;
    gap: 0.5ch;
    margin-top: var(--v-space);
    color: var(--color-red-deep);
  }

  /* -------------------------------------------------------------- built */
  .built {
    gap: 0;
  }
  .built-row {
    display: grid;
    grid-template-columns: minmax(12ch, 20ch) 1fr auto;
    align-items: baseline;
    gap: 0 calc(var(--v-space) * 0.75);
    padding-block: calc(var(--v-space) * 0.75);
    border-top: 1px solid var(--color-rule-paper);
  }
  .built-row:last-child {
    border-bottom: 1px solid var(--color-rule-paper);
  }
  .built-title {
    font-weight: 700;
  }
  .built-note {
    color: var(--color-ink-muted);
    font-size: var(--text-body);
    max-width: 60ch;
  }
  .built-year {
    font-size: var(--text-label);
    letter-spacing: 0.04em;
    color: var(--color-ink-muted);
  }

  /* ------------------------------------------------------------- screen */
  .screen-band {
    padding-block: calc(var(--v-space) * 3);
  }
  .screen {
    margin: 0;
    border: 1px solid var(--color-rule-ink);
    box-shadow: var(--offset-1) var(--color-red);
  }
  .screen img {
    width: 100%;
    /* the cabinet screen never pushes the next band off the fold */
    max-height: 70vh;
    object-fit: cover;
  }
  .screen-cap {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0 calc(var(--v-space) * 0.75);
    padding: calc(var(--v-space) * 0.5) calc(var(--v-space) * 0.75);
    border-top: 1px solid var(--color-rule-ink);
  }
  .screen-note {
    font-size: var(--text-label);
    color: var(--color-paper-muted);
  }

  /* ponytail: thumbnails exist so the 3-of-7 coverage gap and the 315px
     source width are visible. Delete this block and the img above with it. */
  .built-row.has-shot {
    grid-template-columns: 96px minmax(12ch, 20ch) 1fr auto;
  }
  .built-shot {
    width: 96px;
    height: 76px;
    object-fit: cover;
    align-self: center;
    border: 1px solid var(--color-rule-paper);
  }

  /* ------------------------------------------------------------- footer */
  .skills {
    margin: 0;
    padding-top: calc(var(--v-space) * 0.5);
    border-top: 1px solid var(--color-rule-ink);
  }
  .skills-group {
    color: var(--color-paper-muted);
    margin-top: var(--v-space);
  }
  .skills-items {
    margin: 0.2em 0 0;
    font-size: var(--text-label);
    line-height: 1.5;
    letter-spacing: 0;
    text-transform: none;
  }

  @media (width <= 834px) {
    header.band {
      min-height: 0;
    }
    .entry-dates {
      margin-left: 0;
    }
    /* single column: the year stays on the title's line, the note drops
       underneath — otherwise the date orphans on a third row */
    .built-row {
      grid-template-columns: 1fr auto;
      grid-template-areas: 'title year' 'note note';
    }
    .built-title {
      grid-area: title;
    }
    .built-note {
      grid-area: note;
    }
    .built-year {
      grid-area: year;
    }
  }
</style>
