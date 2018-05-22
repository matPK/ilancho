<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    //
    public function employees()
    {
    	return $this->hasMany(Employee::class);
    }
	public function kitchen()
	{
		return $this->hasOne(Kitchen::class);
	}
	public function cashier()
	{
		return $this->hasOne(Cashier::class);
	}
}
