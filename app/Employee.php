<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    //
    public function restaurant()
    {
    	return $this->belongsTo(Restaurant::class);
    }
}
