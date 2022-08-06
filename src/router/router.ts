import { RouteRecordRaw } from "vue-router";
import {home} from '../views/home/home'
export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "home",
    },
    {
        path: "/home",
        name: "home",
        component: home,
    }

]