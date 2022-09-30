import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub, faLinkedin, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faSquareGithub, faLinkedin, faSquareTwitter)

const app = createApp(App)
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')