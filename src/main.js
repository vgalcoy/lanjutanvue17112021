import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Approval from './components/Approval.vue'
import Outstanding from './components/outstanding.vue'
import ItRequest from './components/ItRequest.vue'
import Qr from './components/qr.vue'
import Code from './components/Code.vue'
import scanner from './components/scanner.vue'
import Input from './components/input.vue'
import checkin from './components/checkin.vue'
import confirmcheckin from './components/confirmcheckin.vue'
import { createRouter, createWebHistory } from 'vue-router';


const routes =[
    {
        path: '/',
        component: Home,
    },
    {
        path: '/approval',
        component: Approval,
    },
    {
        path: '/scanner',
        component: scanner,
    },
    {
        path: '/out',
        component: Outstanding,
    },
    {
        path: '/itRequest',
        component: ItRequest,
    },
    {
        path: '/qr',
        component: Qr,
    },
    {
        path: '/code',
        component: Code,
    },
    {
        path: '/input',
        component: Input,
    },
    {
        path: '/checkin',
        component: checkin,
    },
    {
        path: '/confirmcheckin',
        component: confirmcheckin,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active',
});

const app = createApp(App);
app.use(router);
app.mount('#app');