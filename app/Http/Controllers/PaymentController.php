<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function payment(Request $request) 
    {
        $user = User::firstOrCreate([
            'email' => $request->userDetails['email']
        ],
        [
            'name' => $request->userDetails['name'],
            'address' => $request->userDetails['address'],
            'city' => $request->userDetails['city'],
            'state' => $request->userDetails['state'],
            'zip_code' => $request->userDetails['zip_code'],
        ]
        );

        try {
            $payment = $user->charge($request->total, $request->paymentId);
            $payment = $payment->asStripePaymentIntent();
            
            $order = $user->orders()->create([
                'transection_id' => $payment->charges->data[0]->id,
                'total_payment' => $payment->charges->data[0]->amount,
                'items' => json_encode($request->cartProducts),
            ]);

            return response()->json($order);
        }
        catch(\Exception $ex) {
            return response()->json(['message' => $ex->getMessage()], 500);
        }

    }
}
