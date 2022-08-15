import { createRouter, createWebHashHistory } from "vue-router";
import routers from '~pages';
import Echarts1 from '../views/Echarts1'

const routers = [
    { path: '/echarts1', component: Echarts1 },
]


const router = createRouter({
    history: createWebHashHistory(),
    routers,
})

export default router;