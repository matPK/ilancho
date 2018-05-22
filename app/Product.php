<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
   	//
	public function product_category()
	{
		return $this->belongsTo(ProductCategory::class);
	}
	public function orders()
	{
		return $this->hasMany(Order::class);
	}
}
