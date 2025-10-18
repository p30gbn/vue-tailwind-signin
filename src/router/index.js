import {createRouter,createWebHistory} from "vue-router"
import Signin from "../views/Signin.vue"

const routes = [
    {
        path:"/",
        name:"Signin",
        component:Signin
    }

]


const router = createRouter({
    history:createWebHistory(),
    routes:routes
})


export default router