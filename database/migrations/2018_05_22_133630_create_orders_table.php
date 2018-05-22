<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('kitchen_id');
            $table->unsignedInteger('product_id');
            $table->unsignedInteger('customer_id');

            $table->unsignedTinyInteger('status')->default(0)
                ->comment('0 = Feito, 1 = Recebido, 2 = Em Preparo, 3 = A Caminho, 4 = Entregue, 255 = Cancelado');
            $table->unsignedInteger('quantity')->default(1);
            $table->text('observations');

            $table->foreign('kitchen_id')
                ->references('id')->on('kitchens')->onDelete('cascade');
            $table->foreign('product_id')
                ->references('id')->on('products')->onDelete('cascade');
            $table->foreign('customer_id')
                ->references('id')->on('customers')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
