import {
    createMemoryHistory,
    createRouter,
    createWebHistory,
} from "vue-router";
import { routes } from "./routes";

export function createAppRouter(isServer = false) {
    return createRouter({
        history: isServer ? createMemoryHistory() : createWebHistory(),
        routes,
    });
}