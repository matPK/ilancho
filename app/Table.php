<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Table extends Model
{
    //
    public function customer()
    {
    	return $this->hasOne(Customer::class);
    }
}
