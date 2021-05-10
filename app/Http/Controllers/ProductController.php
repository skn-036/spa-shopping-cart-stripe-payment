<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index() {
        return response()->json(Product::all());
    }

    public function cartProducts(Request $request) {
        $products = Product::findMany($request->cartItems);
        $productTotal = $products->sum('discount_price');
        return response()->json([
            'products' => $products,
            'productTotal' => $productTotal
        ]);
    }

    public function generateUserData() {
        return response()->json(User::factory()->make());
    }
}
