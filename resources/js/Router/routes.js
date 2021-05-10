const routes = [
    {
        path : '/',
        component : () => import('../Components/product'),
        name : 'product'
    },

    {
        path : '/cart',
        component : () => import('../Components/cart'),
        name : 'cart'
    },

    {
        path: '/checkout',
        component : () => import('../Components/checkout'),
        name : 'checkout'
    },

    {
        path: '/order-details',
        component : () => import('../Components/order'),
        name : 'order'
    }
]

export default routes