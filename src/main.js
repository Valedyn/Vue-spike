
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'

import Index from "./components/IndexPage.vue"
import Timer from './components/birthday/TimerPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {name: "pinkRedirect", path: "/pink", component: Index, props:{mode: "pink"}},
        {name: "blueRedirect", path: "/blue", component: Index, props:{mode: "blue"}}, // redirect to '/', pass props, save to local storage; if prop undefined, get it from local storage, else use the prop
        {name: "index", path: "/", component: Index},
        {name: "Timer", path: "/timer", component: Timer}
    ]
})

const app = createApp(App);

app.use(router);


app.mount("#app");