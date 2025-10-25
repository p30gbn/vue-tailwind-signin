import {createRouter,createWebHistory} from "vue-router"
import Signin from "../views/Signin.vue"
import Billing from "../views/Billing.vue"

const routes = [
    {
        path:"/",
        name:"Signin",
        component:Signin
    },
    {
        path:"/billing",
        name:"Billing",
        component:Billing
    }

]


const router = createRouter({
    history:createWebHistory(),
    routes:routes
})


export default router