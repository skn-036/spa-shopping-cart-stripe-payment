<template>
    <div>
        <h2 class="text-orange my-3">All Products:</h2>
        <div class="row">
            <div class="col-lg-2 col-md-3 col-sm-6 mb-4" v-for="(product, index) in products" :key="index">
                <img :src="'./uploads/' + product.image" alt="" class="img-fluid border-radius-5px">
                <h5 class="text-center my-2 text-teal">{{ product.brand + ' ' + product.category + ' ' + product.model }}</h5>
                <div class="d-flex flex-row justify-content-center">
                    <h6 class="line-through mr-2 text-grey" 
                    v-if="product.price !== product.discount_price"
                    v-text="formatPrice(product.price)">
                    </h6>
                    <h6 class="text-orange" v-text="formatPrice(product.discount_price)"></h6>    
                </div>
                <div class="text-center">
                    <button class="btn bg-teal text-primary my-1"
                    @click="removeFromCart(product)" v-if="cartItems !== null && cartContainsProduct(cartItems, product)">
                        Remove from Cart
                    </button>

                    <button class="btn bg-orange text-primary my-1" 
                    @click="addToCart(product)" v-else>
                        Add To Cart
                    </button> 
                </div>     
            </div>
        </div>
    </div>
</template>

<script>

    import {mapActions, mapGetters} from 'vuex'

    export default {

        methods : {
            ...mapActions(['getProducts', 'addToCart', 'removeFromCart']),

            formatPrice(amount) {
                return amount.toLocaleString('en-US', {style : 'currency', currency : 'USD'})
            },

            cartContainsProduct(cart, product) {
                let index = false;
                cart.forEach(check)

                function check(item) {
                    if(item.id == product.id) {
                        return index = true
                    }
                }
                return index
            }
        },
        
        computed : {
            ...mapGetters(['products']),

            cartItems() {
                let output = undefined;
                if(this.$store.getters.cartItems !== undefined && output == undefined) {
                    output = this.$store.getters.cartItems
                }
                else if(JSON.parse(sessionStorage.getItem('cartItems')) !== undefined && output == undefined) {
                    output = JSON.parse(sessionStorage.getItem('cartItems'))
                }
                else {
                    output = []
                }
                return output
            },
        },

        created() {
            this.getProducts()
        }
    }
</script>