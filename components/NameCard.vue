<template>
  <div>
    <div class="animated flip namecard">
      <div class="card-container">
        <div class="card-info">
            <img class="card-avatar" :src="'https://avatars2.githubusercontent.com/u/24757020?s=460&v=4'" />
          <div class="card-name">
            John Law
          </div>
          <div class="card-location">
            <a
              href="https://www.google.com/maps/place/22%C2%B019'09.5%22N+114%C2%B010'09.8%22E/@22.319306,114.1688288,19z/"
            >
              (22.319,114.169)
            </a>
            , Hong Kong
          </div>
          <div class="card-connection">
            <a
              href="mailto:johnlaw@poyea.me?subject=I want to send you coffee, John"
              target="_blank"
            >
              <font-awesome-icon
                class="connection-icon"
                :icon="['fas', 'envelope']"
              />
            </a>
            <a href="https://www.linkedin.com/in/poyea/" target="_blank">
              <font-awesome-icon
                class="connection-icon"
                :icon="['fab', 'linkedin']"
              />
            </a>
            <a href="https://github.com/poyea/" target="_blank">
              <font-awesome-icon
                class="connection-icon"
                :icon="['fab', 'github']"
              />
            </a>
            <a href="https://gitlab.com/poyea/" target="_blank">
              <font-awesome-icon
                class="connection-icon"
                :icon="['fab', 'gitlab']"
              />
            </a>
            <a href="https://dev.to/poyea/" target="_blank">
              <font-awesome-icon
                class="connection-icon"
                :icon="['fab', 'dev']"
              />
            </a>
            <a href="https://keybase.io/poyea/" target="_blank">
              <font-awesome-icon
                class="connection-icon"
                :icon="['fab', 'keybase']"
              />
            </a>
          </div>
          <div class="card-description">
            Mathematics Student, Software Developer, Language Learner
            <br. />
          </div>
        </div>
        <div class="card-bio">
          It is impossible to separate a cube into two cubes, or a fourth power
          into two fourth powers, or in general, any power higher than the
          second into two like powers. I have discovered a truly marvellous
          proof of this, which this margin is too narrow to contain.
          <br. />
          <br. />
          Cubum autem in duos cubos, aut quadratoquadratum in duos
          quadratoquadratos et generaliter nullam in infinitum ultra quadratum
          potestatem in duos eiusdem nominis fas est dividere cuius rei
          demonstrationem mirabilem sane detexi. Hanc marginis exiguitas non
          caperet.
          <br. />
          <br. />--- Pierre de Fermat
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faGithub,
  faKeybase,
  faGitlab,
  faDev
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
library.add(faLinkedin, faGithub, faKeybase, faGitlab, faEnvelope, faDev)
Vue.component("font-awesome-icon", FontAwesomeIcon)
export default {
  props: ['https://avatars2.githubusercontent.com/u/24757020?s=460&v=4']
}
</script>

<style scoped>
.center {
  text-align: center;
}

.namecard {
  height: 80vh;
  width: 90vw;
  border-radius: 30px;
  margin: 20px;
  padding: 25px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
  text-align: center;
  transition: ease-in-out 0.5s;
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
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: wrap;
}

.card-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
}

.card-avatar {
  vertical-align: middle;
  width: 25vmin;
  height: 25vmin;
  border-radius: 50%;
  box-shadow: 2px 2px 30px 1px rgba(0, 0, 0, 0.6);
}

.card-name {
  margin-top: 0.5em;
  font-size: 5vh;
}
.card-location {
  letter-spacing: 1px;
  font-size: 1.5vh;
  opacity: 0.5;
  margin: 10px;
}

.card-location a {
  text-decoration: none;
}

.card-location a:link,
.card-location a:visited {
  color: gray;
}
.card-connection {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: baseline;
  font-size: 1.5em;
}

.card-connection a:link,
.card-connection a:visited {
  color: orange;
}

.card-connection a:hover {
  color: blue;
}

.connection-icon {
  margin: 0 5px 0 5px;
}

.card-description {
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 2vw;
  margin-top: 0.5em;
  margin-bottom: 1em;
  color: gray;
  word-wrap: initial;
  max-width: 80vw;
}

.card-bio {
  color: indianred;
  font-size: 10px;
  font-size: 1vmax;
  max-width: 80vw;
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
