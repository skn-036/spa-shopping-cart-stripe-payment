## About This Repository

This repository implements Laravel and Vue.js as a product shopping cart single page application(SPA). Laravel Cashier(stripe) is used as the payment gateway.

## Installation

First download this repository. Navigate to root of the project and then
<pre>
    <code>composer update</code>
    <code>npm install</code>
</pre>

copy the contents of .env.example to .env file. Fill up the database credentials(DB_DATABASE, DB_USERNAME, DB_PASSWORD) according to your database. Then put your STRIPE_KEY and STRIPE_SECRET. You can get your own <a href="https://dashboard.stripe.com/test/apikeys">here.</a>

At the root of your project run the following commands on terminal sequentially.
<pre>
    <code>php artisan key:generate</code>
    <code>php artisan migrate</code>
    <code>php artisan db:seed</code>
</pre>

This will store all the default data into the database. Then bootstrap all the javascript files by
<pre>
    <code>npm run dev</code>
</pre>

Finally initiate your server and enjoy !!!
<pre>
    <code>php artisan serve</code>
</pre>
