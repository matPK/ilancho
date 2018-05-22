<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    //

    public function table()
    {
    	return $this->belongsTo(Table::class);
    }
	public function orders()
	{
		return $this->hasMany(Order::class);
	}
}
