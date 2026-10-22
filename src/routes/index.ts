import { type RouteRecordRaw } from "vue-router";
import Home from "../components/templates/Home.vue";
import Default from "../layouts/Default.vue";


export const routes: RouteRecordRaw[] = [
    {
        name: "default-layout",
        path: "/",
        component: Default,
        children: [
            {
                name: "home",
                path: "/",
                component: Home
            }
        ]
    }
]