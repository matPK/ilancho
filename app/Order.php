<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //
	public function kitchen()
	{
		return $this->belongsTo(Kitchen::class);
	}
	public function product()
	{
		return $this->belongsTo(Product::class);
	}
	public function customer()
	{
		return $this->belongsTo(Customer::class);
	}
}
