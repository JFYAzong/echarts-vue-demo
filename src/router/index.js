import { createRouter, createWebHashHistory } from "vue-router";
// import routes from '~pages';
import Echarts1 from '../views/Echarts1'
import Echarts2 from '../views/Echarts2'

const routes = [
    { path: '/', component: Echarts1 },
    { path: '/echarts2', component: Echarts2 },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;