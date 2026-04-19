<template>
  <article itemscope itemtype="https://schema.org/Person">
    <div class="animated flip namecard" role="main">
      <div class="card-container">
        <div class="card-info">
          <img
            class="card-avatar"
            :src="'https://avatars2.githubusercontent.com/u/24757020?s=460&v=4'"
            alt="John Law"
            itemprop="image"
            draggable="false"
          />
          <h1 class="card-name" itemprop="name">John Law</h1>
          <p class="card-tagline" itemprop="description">Mathematics, Software, Languages.</p>
          <div class="location-roller">
            <div class="location-track">
              <span class="card-location">
                <font-awesome-icon class="location-pin" :icon="['fas', 'map-marker-alt']" />
                <a
                  href="https://www.openstreetmap.org/?mlat=22.319297&mlon=114.169367#map=17/22.319/114.169"
                  target="_blank"
                >
                  (22.319, 114.169)
                </a>, Hong Kong
              </span>
              <span class="card-location">
                <font-awesome-icon class="location-pin" :icon="['fas', 'map-marker-alt']" />
                <a
                  href="https://www.openstreetmap.org/?mlat=51.5164&mlon=-0.1304#map=17/51.5164/-0.1304"
                  target="_blank"
                >
                  (51.516, -0.130)
                </a>, London
              </span>
              <span class="card-location" aria-hidden="true">
                <font-awesome-icon class="location-pin" :icon="['fas', 'map-marker-alt']" />
                <a
                  href="https://www.openstreetmap.org/?mlat=22.319297&mlon=114.169367#map=17/22.319/114.169"
                  target="_blank"
                  tabindex="-1"
                >
                  (22.319, 114.169)
                </a>, Hong Kong
              </span>
            </div>
          </div>
          <nav class="card-connection" aria-label="Social links">
            <a class="connection-icon" href="mailto:johnlaw@poyea.me?subject=I want to send you coffee, John" target="_blank" rel="noopener" title="Email" itemprop="email">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </a>
            <a class="connection-icon" href="https://www.linkedin.com/in/poyea/" target="_blank" rel="noopener" title="LinkedIn" itemprop="sameAs">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a class="connection-icon" href="https://github.com/poyea/" target="_blank" rel="noopener" title="GitHub" itemprop="sameAs">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a class="connection-icon connection-shine" href="https://poyea.me/b/" target="_blank" rel="noopener" title="Blog" itemprop="url">
              <font-awesome-icon :icon="['fas', 'blog']" />
            </a>
            <a class="connection-icon" href="https://gitlab.com/poyea/" target="_blank" rel="noopener" title="GitLab" itemprop="sameAs">
              <font-awesome-icon :icon="['fab', 'gitlab']" />
            </a>
            <!-- <a class="connection-icon" href="https://dev.to/poyea/" target="_blank" rel="noopener" title="DEV">
              <font-awesome-icon :icon="['fab', 'dev']" />
            </a> -->
            <a class="connection-icon" href="https://math.stackexchange.com/users/498637/poyea" target="_blank" rel="noopener" title="Math Stack Exchange" itemprop="sameAs">
              <svg class="connection-svg" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true"><path d="M3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"/><path d="M15 11H3c0 1.1.9 2 2 2h5v3l3-3a2 2 0 0 0 2-2"/><path d="M3 5h12v2H3z"/><path d="M3 8h12v2H3z"/></svg>
            </a>
            <a class="connection-icon" href="https://keybase.io/poyea/" target="_blank" rel="noopener" title="Keybase" itemprop="sameAs">
              <font-awesome-icon :icon="['fab', 'keybase']" />
            </a>
          </nav>
        </div>
        <blockquote class="card-bio">
          <p class="quote-text">It is impossible to separate a cube into two cubes, or a fourth power
          into two fourth powers, or in general, any power higher than the
          second into two like powers. I have discovered a truly marvellous
          proof of this, which this margin is too narrow to contain.</p>
          <footer class="quote-author">Pierre de Fermat</footer>
        </blockquote>
      </div>
    </div>
  </article>
</template>
<script>
import Vue from "vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEnvelope, faBlog, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faGithub,
  faKeybase,
  faGitlab
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
library.add(
  faLinkedin,
  faGithub,
  faKeybase,
  faGitlab,
  faEnvelope,
  faBlog,
  faMapMarkerAlt
)
Vue.component("font-awesome-icon", FontAwesomeIcon)
export default {}
</script>

<style scoped>
:root {
  --bg:        oklch(99% 0.002 240);
  --ink:       oklch(15% 0.01 240);
  --ink-mid:   oklch(40% 0.01 240);
  --ink-faint: oklch(60% 0.008 240);
  --rule:      oklch(88% 0.004 240);
  --accent:    oklch(50% 0.14 250);
}

.namecard {
  height: calc(100vh - 40px);
  height: calc(100dvh - 40px);
  width: 90vw;
  border-radius: 30px;
  margin: 20px;
  padding: 25px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
  text-align: center;
  transition: ease-in-out 0.5s;
  font-family: 'DM Sans', sans-serif;
  color: oklch(15% 0.01 240);
  background: oklch(99% 0.002 240);
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
}

.namecard:hover,
.namecard:after {
  box-shadow: 0 0px 25px rgba(0, 0, 0, 0.8);
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  max-width: 100%;
}

.card-avatar {
  vertical-align: middle;
  width: clamp(80px, 25vmin, 200px);
  height: clamp(80px, 25vmin, 200px);
  max-width: 100%;
  border-radius: 50%;
  box-shadow: 2px 2px 30px 1px rgba(0, 0, 0, 0.6);
  margin-bottom: clamp(12px, 3vh, 24px);
}

.card-name {
  font-size: clamp(26px, 7vw, 34px);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: oklch(15% 0.01 240);
  margin-top: 0;
  margin-bottom: 0;
}

.card-tagline {
  margin-top: clamp(4px, 1vh, 8px);
  font-size: clamp(11px, 1.8vmin, 15px);
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: oklch(60% 0.008 240);
}

.location-roller {
  overflow: hidden;
  height: 20px;
  margin-top: clamp(6px, 1.2vh, 10px);
  position: relative;
}

.location-track {
  display: flex;
  flex-direction: column;
  animation: roll 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.card-location {
  margin-top: 0;
  height: 20px;
  line-height: 20px;
  font-size: clamp(9px, 1.4vmin, 13px);
  letter-spacing: 0.06em;
  color: oklch(40% 0.01 240);
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.location-pin {
  font-size: clamp(8px, 1.2vmin, 12px);
  flex-shrink: 0;
}

.card-location a {
  color: oklch(40% 0.01 240);
  text-decoration: none;
  transition: color 0.18s;
}

.card-location a:hover {
  color: oklch(50% 0.14 250);
}

.card-connection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(4px, 1vmin, 10px);
  margin-top: clamp(8px, 2vh, 14px);
  max-width: 100%;
}

.connection-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: oklch(40% 0.01 240);
  width: clamp(28px, 5vmin, 42px);
  height: clamp(28px, 5vmin, 42px);
  border: 1px solid oklch(88% 0.004 240);
  border-radius: 50%;
  background: transparent;
  transition: color 0.18s, border-color 0.18s, background 0.18s, transform 0.18s;
  font-size: clamp(10px, 1.8vmin, 16px);
}

.connection-icon:hover {
  color: oklch(50% 0.14 250);
  border-color: oklch(50% 0.14 250);
  background: oklch(96% 0.02 250 / 0.06);
  transform: translateY(-2px);
}

.connection-svg {
  width: 1em;
  height: 1em;
  flex-shrink: 0;
}

.card-bio {
  max-width: 100%;
  margin: clamp(16px, 4vh, 32px) auto 0;
}

.quote-text {
  font-family: 'Lora', Georgia, serif;
  font-style: italic;
  font-size: clamp(11px, 1.8vmin, 16px);
  line-height: 1.75;
  color: oklch(40% 0.01 240);
  text-wrap: pretty;
}

.quote-text::before { content: "\201C"; }
.quote-text::after  { content: "\201D"; }

.quote-author {
  margin-top: clamp(6px, 1.5vh, 12px);
  font-size: clamp(9px, 1.4vmin, 13px);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: oklch(60% 0.008 240);
}

.quote-author::before { content: "— "; }

.connection-shine {
  position: relative;
  overflow: hidden;
}

.connection-shine::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    135deg,
    transparent 40%,
    rgba(255, 215, 0, 0.5) 45%,
    rgba(255, 235, 100, 0.6) 50%,
    rgba(255, 215, 0, 0.5) 55%,
    transparent 60%
  );
  animation: shine 3s ease-in-out infinite;
  pointer-events: none;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%);
  }
  67% {
    transform: translateX(100%) translateY(100%);
  }
  100% {
    transform: translateX(100%) translateY(100%);
  }
}

@keyframes roll {
  0%, 35% {
    transform: translateY(0);
  }
  40%, 45% {
    transform: translateY(calc(-100% / 3));
  }
  50%, 85% {
    transform: translateY(calc(-100% / 3));
  }
  90%, 100% {
    transform: translateY(calc(-200% / 3));
  }
}

@keyframes flip {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(0, 1, 1, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(0, 1, 1, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

.flip {
  backface-visibility: visible !important;
  animation-name: flip;
}
</style>

