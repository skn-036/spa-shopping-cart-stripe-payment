
<template>
    <div>
        <h3 class="text-orange mb-5">Cart Page</h3>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-1">
                    <h6 class="font-bold text-teal">SL</h6>
                </div>
                <div class="col-2">
                    <h6 class="font-bold text-teal">Image</h6>                   
                </div>
                <div class="col-3">
                    <h6 class="font-bold text-teal">Product Name</h6>
                </div>
                <div class="col-1">
                    <h6 class="font-bold text-teal">Quantity</h6>
                </div>
                <div class="col-2">
                    <h6 class="font-bold text-teal">Unit Price</h6>
                </div>                
                <div class="col-2">
                    <h6 class="font-bold text-teal">Total Price</h6>
                </div>
            </div>

            <div class="row align-items-center my-4" v-for="(product, index) in cartProducts" :key="index">
                <div class="col-1">
                    <h6 v-text="index + 1"></h6>
                </div>
                <div class="col-2 d-flex">
                    <img :src="'./uploads/' + product.image" class="cart-img img-fluid my-auto border-radius-5px">                   
                </div>
                <div class="col-3">
                    <h6 v-text="product.brand + ' ' + product.category + ' ' + product.model"></h6>
                </div>
                <div class="col-1 d-flex flex-row align-items-center cart-quantity">                    
                    <input type="number" class="form-control" 
                    v-model.number="product.quantity" min="1" max="10"
                    @keyup="updateQty(product)" 
                    @click="updateQty(product)">
                </div>
                <div class="col-2">
                    <h6 v-text="formatPrice(product.discount_price)"></h6>
                </div>                
                <div class="col-2">
                    <h6 v-text="productTotal(product)"></h6>
                </div>
                <div class="col-1">
                    <font-awesome-icon icon="times" class="text-primary bg-red font-larger border-radius-5px small-padding cursor-pointer"
                    @click="removeFromCart(product); cartItems(); grandTotal(cartProducts)">
                    </font-awesome-icon>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-7"></div>
                <div class="col-2">
                    <h4 class="font-bold text-teal">Grand Total</h4>
                </div>
                <div class="col-2">
                    <h5 class="font-bold text-primary" v-text="total"></h5>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-9"></div>
                <div class="col-3">
                    <router-link :to="{ name : 'checkout' }">
                        <button class="btn bg-teal border-radius-5px text-primary mb-5">Proceed to Checkout</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                total : 0,
                cartProducts : [],
            }
        },

        methods : {
            ...mapActions(['removeFromCart', 'updateCartQty']),

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
                this.cartProducts = output
            },

            formatPrice(amount) {
                return amount.toLocaleString('en-US', {style : 'currency', currency : 'USD'})
            },

            productTotal(product) {
                let amount = product.quantity * product.discount_price
                return amount.toLocaleString('en-US', {style : 'currency', currency : 'USD'})
            },

            updateQty(product) {

                if(product.quantity < 0 || product.quantity == null || product.quantity == undefined) {
                    product.quantity = 1;
                }
                if(product.quantity > 10) {
                   product.quantity = 10; 
                }
                this.updateCartQty(this.cartProducts)
                this.grandTotal(this.cartProducts)                     
            },

            grandTotal(product) {
                if(product.length > 0) 
                {
                    let amount = product.reduce((acc, item) => acc + (item.quantity * item.discount_price), 0)
                    this.total = this.formatPrice(amount)
                }
                else
                {
                    this.total = 0
                }
            },
        },

        mounted() {
            this.cartItems()
            this.grandTotal(this.cartProducts)
        }
    }
</script>