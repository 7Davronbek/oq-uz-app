import { createRouter } from 'vue-router'
import Navbar from '../components/HelloWorld'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Navbar
    }
]

const router = createRouter({
    routes
})

export default router