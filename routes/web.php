<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::resources([
	'cashiers' => 'CashierController',
	'customers' => 'CustomerController',
	'employees' => 'EmployeeController',
	'kitchens' => 'KitchenController',
	'orders' => 'OrderController',
	'products' => 'ProductController',
	'products_category' => 'ProductCategoryController',
	'restaurants' => 'RestaurantController',
	'tables' => 'TableController',
]);

Route::get('/kitchens/{kitchen}/orders', 'KitchenOrderController@index')->name('kitchens.orders.index');
Route::post('/kitchens/{kitchen}/orders', 'KitchenOrderController@store')->name('kitchens.orders.store');

Route::get('/customers/{customer}/orders', 'CustomerOrderController@index')->name('customers.orders.index');
Route::post('/customers/{customer}/orders', 'CustomerOrderController@store')->name('customers.orders.store');

Route::get('/', 'HomeController@index')->name('home');
