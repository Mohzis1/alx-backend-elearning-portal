<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostDiagnosticQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_diagnostic_questions', static function (Blueprint $table) {
            $table->id()->index();
            $table->unsignedBigInteger('post_diagnostic_question_category_id');
            $table->text('question');
            $table->string('type');
            $table->integer('sort')->default(0);
            $table->boolean('conditional')->default(0);
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
        Schema::dropIfExists('post_diagnostic_questions');
    }
}
