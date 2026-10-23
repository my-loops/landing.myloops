import { type RouteRecordRaw } from "vue-router";
import Home from "../components/templates/Home.vue";
import Default from "../layouts/Default.vue";
import Recruteurs from "../components/templates/Recruteurs.vue";
import Ecoles from "../components/templates/Ecoles.vue";
import Etudiants from "../components/templates/Etudiants.vue";
import FAQS from "../components/templates/FAQS.vue";


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
            },
            {
                name: "recruteurs",
                path: "/recruteurs",
                component: Recruteurs
            },
            {
                name: "ecoles",
                path: "/ecoles",
                component: Ecoles
            },
            {
                name: "etudiants",
                path: "/etudiants",
                component: Etudiants
            },
            {
                name: "faqs",
                path: "/faqs",
                component: FAQS
            },
        ]
    }
]