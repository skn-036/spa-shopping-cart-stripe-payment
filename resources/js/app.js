window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Router from './Router'
import Store from './Store'

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart, faTimes )
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)
Vue.use(VueResource)


import App from './Components/app'
new Vue({
    el : "#app",

    components : {
        App,
    },

    router : Router,
    store : Store,
})

