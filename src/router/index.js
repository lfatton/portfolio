import {createRouter, createWebHistory} from "vue-router"
import HomePage from "../views/HomePage"
import AboutMe from "../views/AboutMe"

const routes = [
    { path: "/portfolio", component: HomePage },
    { path: "/AboutMe", component: AboutMe }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router