const state = {
    products : {},
    cartItems : (JSON.parse(sessionStorage.getItem('cartItems'))) ? JSON.parse(sessionStorage.getItem('cartItems')) : [],
    paymentDetails : {},
    order : {}
}

const getters = {
    products : state => state.products,
    cartItems : state => state.cartItems,
    getpaymentDetails : state => state.paymentDetails,
    getOrderDetails : state => state.order
}

const actions = {
    getProducts({commit}) {
        axios.get('/api/')
        .then(response => {
            if(response.status == 200) {
                commit('mutateProducts', response.data)    
            }
        })
        .catch(error => {
            console.log(error)
        })
    },

    addToCart({commit, getters}, product) {
        let cartItems = getters.cartItems
        
        if(!unique(cartItems, product)) {
            product.quantity = 1
            cartItems.push(product)
        }

        function unique(main, push) {
            let index =false
            main.forEach(sortUnique)

            function sortUnique(item) {
                if(item.id == push.id) {
                    return index = true
                }
            }
            return index
        }

        sessionStorage.setItem('cartItems', JSON.stringify(cartItems))
        commit('mutateCartItems', cartItems)
    },

    removeFromCart({commit, getters}, product) {
        let cartItems = getters.cartItems

        if(removeItem(cartItems, product) !== null) {
            cartItems.splice(removeItem(cartItems, product), 1)           
        }

        function removeItem(main, remove) {
            let index = null;
            main.forEach(del)
            function del(item) {
                if(item.id == remove.id) {
                    return index = main.indexOf(item)                   
                }
            }
            return index
        }

        sessionStorage.setItem('cartItems', JSON.stringify(cartItems))
        commit('mutateCartItems', cartItems)
    },

    updateCartQty({commit}, products) {
        sessionStorage.setItem('cartItems', JSON.stringify(products))
        commit('mutateCartItems', products)        
    },

    getPaymentDetails({commit}, details) {
        commit('mutatePaymentDetails', details)
    },

    orderDetails({commit}, order) {
        sessionStorage.setItem('order', JSON.stringify(order))
        commit('mutateOrder', order)   
    }
}

const mutations = {
    mutateProducts : (state, payload) => state.products = payload,
    mutateCartItems : (state, payload) => state.cartItems = payload,
    mutatePaymentDetails : (state, payload) => state.paymentDetails = payload,
    mutateOrder : (state, payload) => state.order = payload,
}

export default {
    state, getters, actions, mutations
}