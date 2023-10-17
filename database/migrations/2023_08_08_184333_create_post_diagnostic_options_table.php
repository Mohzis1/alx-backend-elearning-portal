<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostDiagnosticOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_diagnostic_options', static function (Blueprint $table) {
            $table->id()->index();
            $table->unsignedBigInteger('post_diagnostic_question_category_id');
            $table->unsignedBigInteger('post_diagnostic_question_id');
            $table->string('option');
            $table->string('sort')->default(0);
            $table->string('hide_questions')->nullable();
            $table->tinyInteger('conditional')->default(0);
            $table->string('condition_type')->nullable();
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
        Schema::dropIfExists('post_diagnostic_options');
    }
}
