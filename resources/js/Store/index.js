import Vue from 'vue'
import Vuex from 'vuex'
import Product from './Modules/product'

Vue.use(Vuex)

const Store = new Vuex.Store({
    modules : {
        Product
    }
})

export default Store