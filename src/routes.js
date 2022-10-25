import {createRouter , createWebHistory} from 'vue-router';
import Landing from './Pages/Landing.vue'
import Login from './Pages/Login.vue';
import ResetPassword from './Pages/ResetPassword.vue';
import NewPassword from './Pages/NewPassword.vue';
import Signup from './Pages/Signup.vue';
 
const routes = [
    {
        name:'Landing',
        path: '/',
        component: Landing
    },
    {
        name:'Login',
        path: '/login',
        component: Login
    },
    {
        name:'Signup',
        path: '/signup',
        component: Signup
    },
    {
        name:'ResetPassword',
        path: '/reset/password',
        component: ResetPassword
    },
    {
        name:'NewPassword',
        path: '/reset/password/new',
        component: NewPassword
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;