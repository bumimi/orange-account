import { createApp } from 'vue'
import {App} from "./App"
import {  createRouter } from 'vue-router'
import { routes } from './config/routes'
import { history } from './share/history'


const router = createRouter({history,routes})
createApp(App).use(router).mount('#app')
