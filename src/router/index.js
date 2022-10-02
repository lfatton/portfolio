import {createRouter, createWebHashHistory} from "vue-router"
import HomePage from "../views/HomePage"
import AboutMe from "../views/AboutMe"

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/AboutMe",
        component: AboutMe,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router