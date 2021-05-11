<template>
<div>
    
    <div class="container mt-4">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <h4 class="text-orange text-center mb-3">Billing Info:</h4>
                <button class="btn btn-link" @click="fakeUser();">Generate random user details</button>
                <div class="text-center">
                    <img class="img-fluid w-100" style="height: 60px;" src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png">
                </div>
                <form @submit.prevent="processPayment()">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" id="name" placeholder="Name"
                        v-model="paymentDetails.userDetails.name" :disabled="processing" required>
                    </div>

                    <div class="form-group">
                        <label for="Email">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Email"
                        v-model="paymentDetails.userDetails.email" :disabled="processing" required>
                    </div>

                    <div class="form-group">
                        <label for="address"> Street Address:</label>
                        <input type="text" class="form-control" id="address" placeholder="Address"
                        v-model="paymentDetails.userDetails.address" :disabled="processing" required>
                    </div>

                    <div class="form-group">
                        <label for="city">City:</label>
                        <input type="text" class="form-control" id="city" placeholder="City"
                        v-model="paymentDetails.userDetails.city" :disabled="processing" required>
                    </div>

                    <div class="form-group">
                        <label for="state">State:</label>
                        <input type="text" class="form-control" id="state" placeholder="State"
                        v-model="paymentDetails.userDetails.state" :disabled="processing" required>
                    </div>

                    <div class="form-group">
                        <label for="zip">Zip Code:</label>
                        <input type="text" class="form-control" id="zip" placeholder="Zip Code"
                        v-model="paymentDetails.userDetails.zip_code" :disabled="processing">
                    </div> 

                    <div class="form-group">
                        <label for="card">Card Details:</label>
                        <div id="card"></div>
                    </div>

                    <button :class="[processing ? 'bg-grey cursor-not-allowed' : '', 
                    'btn text-primary bg-orange border-radius-5px w-100 mt-2 mb-3']"
                    v-text="processing ? 'Processing' : 'Proceed to pay ' + paymentDetails.total"
                    :disabled="processing" >
                    </button>
                </form>
            </div>
        </div>
    </div>                  
</div>

</template>

<script>
import {loadStripe} from '@stripe/stripe-js'

export default {
    data() {
        return {
            stripe : {},
            cardElement : {},
            paymentDetails : {
                userDetails : {
                    name : '',
                    email : '',
                    address : '',
                    city : '',
                    state : '',
                    zip_code : '',
                },
                total : 0,
                cartProducts : [],
            },                
            processing : false,
        }
    },

    methods : {
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
            this.paymentDetails.cartProducts = output
        },

        formatPrice(amount) {
            return amount.toLocaleString('en-US', {style : 'currency', currency : 'USD'})
        },

        grandTotal(product) {
            let amount = product.reduce((acc, item) => acc + (item.quantity * item.discount_price), 0)
            this.paymentDetails.total = this.formatPrice(amount)
        },
        
        fakeUser() {
            axios.get('/api/generate-user')
            .then(response => {
                this.paymentDetails.userDetails = response.data
                this.$store.dispatch('getPaymentDetails', this.paymentDetails)
            })
            .catch(error => {
                console.log(error)
            })
        },

        async processPayment() {
            this.processing = true
            this.cardElement.update({disabled: true})

            const {paymentMethod, error} = await this.stripe.createPaymentMethod({
                type : 'card',
                card : this.cardElement,
            
                billing_details : {
                    name : this.paymentDetails.userDetails.name,
                    email : this.paymentDetails.userDetails.email,
                }                        
            })

            if(error) {
                this.processing = false
                this.cardElement.update({disabled: false})
                console.log(error)                      
            }

            else 
            {
                this.paymentDetails.paymentId = paymentMethod.id

                this.paymentDetails.total = (this.paymentDetails.cartProducts.reduce((acc, item) => 
                acc + (item.quantity * item.discount_price), 0)) * 100

                axios.post('/api/pay', this.paymentDetails)
                .then(response => {
                    if(response.status == 200 && response.data.id !== undefined) {
                        this.processing = false
                        this.cardElement.update({disabled: false})
                        this.cardElement.clear()
                        
                        this.paymentDetails = {
                            userDetails : {},
                            total : this.formatPrice(0),
                            cartProducts : [],
                        }
                        this.$store.dispatch('updateCartQty', [])
                        this.$store.dispatch('orderDetails', response.data)
                        this.$router.push({ name : 'order'})
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            }
        }
    },

    async mounted() {
        this.stripe = await loadStripe(process.env.MIX_STRIPE_KEY)
        const elements = this.stripe.elements()

        this.cardElement = elements.create('card', {
            hidePostalCode: true,
            //showIcon: true,
            classes : {
                base : 'form-control' 
            }
        })
        this.cardElement.mount('#card')

        this.cartItems()
        this.grandTotal(this.paymentDetails.cartProducts)
    },
}
</script>
