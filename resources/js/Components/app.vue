<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex flex-row m-2 justify-content-between align-items-center">
                    <h1>
                        <router-link :to="{ name : 'product'}">
                            G<span class="font-bold text-orange logo">&</span>G
                        </router-link>
                        </h1>
                    <div class="d-flex align-items-center">
                        <span v-if="cartItems !== null && cartItems.length !== 0">{{ cartItems.length }} items in cart</span>
                        <router-link :to="{ name : 'cart'}">
                            <font-awesome-icon class="shopping-cart cursor-pointer" icon="shopping-cart" />
                        </router-link>
                    </div>

                </div>

            </div>
        </div>
        <div class="container-fluid">
            <div class="small-gutter top-header-border"></div>
        </div>

        <div class="container">
            <router-view />
        </div>
    </div>

</template>

<script>
    export default {

        computed : {
            cartItems() {
                let items = undefined;
                let output;
                if(this.$store.getters.cartItems !== undefined && items == undefined) {
                    output = this.$store.getters.cartItems
                }
                if(JSON.parse(sessionStorage.getItem('cartItems')) !== undefined && items == undefined) {
                    output = JSON.parse(sessionStorage.getItem('cartItems'))
                }
                else {
                    output = []
                }
                return output
            }
        },

    }
</script>