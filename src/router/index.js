import {createRouter,createWebHistory} from "vue-router"
import Signin from "../views/Signin.vue"
import Billing from "../views/Billing.vue"
import Teamiya from "../views/Teamiya.vue"

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
    },
    {
        path:"/teamiya",
        name:"Teamiya",
        component:Teamiya

    }

]


const router = createRouter({
    history:createWebHistory(),
    routes:routes
})


export default router