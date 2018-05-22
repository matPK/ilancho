<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    	factory(App\Restaurant::class, 3)->create();
	    factory(App\Employee::class, 50)->create();
    }
}
