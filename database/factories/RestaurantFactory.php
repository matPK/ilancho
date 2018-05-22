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

$factory->define(App\Restaurant::class, function (Faker $faker) {
	$faker->addProvider(new Provider\pt_BR\Company($faker));
	$faker->addProvider(new Provider\en_US\Company($faker));
    return [
        'cnpj' => $faker->unique()->cnpj(false),
        'fantasy_name' => $faker->company,
    ];
});
