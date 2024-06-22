import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFound from '../views/NotFound.vue';
import AboutView from '../views/AboutView.vue';
import JobsView from '../views/jobs/JobsView.vue';
import JobDetailsView from '../views/jobs/JobDetailsView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView,
    },
    {
        path: '/jobs/:id',
        name: 'jobDetails',
        component: JobDetailsView,
        props: true,
    },
    {
        path: '/new-jobs',
        redirect: 'jobs',
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
