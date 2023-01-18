import {createRouter, createWebHashHistory} from 'vue-router'
import RandomCocktail from '../views/RandomCocktail.vue'

const routes = [
    {
        path: "/",
        name: "RandomCocktail",
        component: RandomCocktail,
    },
    // Different import of the first component for a later loading than for the reception = better performance
    {
        path: "/alcoolCocktails",
        name: "AlcoolCocktails",
        component: () => import('@/views/AlcoolCocktails.vue')
    },
    {
        // FIXME : Ajouter /:id à la suite du endpoint pour avoir l'id dans l'url et surtout diriger vers un cocktail en particulier
        path :'/detailCocktail/:id',
        name: 'DetailCocktail',
        props: true,
        component: () => import('@/views/DetailCocktail.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;