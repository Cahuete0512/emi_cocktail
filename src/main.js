import {createApp} from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import RandomCocktail from './components/RandomCocktail.vue'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path:'/',
            name: 'RandomCocktail',
            component: RandomCocktail
        },
        // Different import of the first component for a later loading than for the reception = better performance
        {
            path :'/alcoolCocktails',
            name: 'AlcoolCocktails',
            component: () => import('@/views/AlcoolCocktails.vue')
        },
        {
            // FIXME : Ajouter /:id à la suite du endpoint pour avoir l'id dans l'url et surtout diriger vers un cocktail en particulier
            path :'/detailCocktail',
            name: 'DetailCocktail',
            component: () => import('@/components/DetailCocktail.vue')
        }
    ]
})

const app = createApp(App)
app.use(router).mount('#app')
app.mount('app')
