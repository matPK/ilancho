<?php

use Faker\Generator as Faker;
use Faker\Provider as Provider;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Employee::class, function (Faker $faker) {
	$faker->addProvider(new Provider\pt_BR\Person($faker));
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'cpf' => $faker->unique()->cpf(false),
        'restaurant_id' => $faker->numberBetween(1, 3),//number of seeded restaurants
        'password' => Hash::make('123456'),
        'remember_token' => str_random(10),
    ];
});
