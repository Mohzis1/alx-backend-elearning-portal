<?php

namespace App\Console\Commands;

use App\Services\Base\BaseService;
use App\Services\User\UserService;
use Illuminate\Console\Command;

class WeeklySchedule extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'schedule:weekly';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Schedule commands once a week';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    protected UserService $user;
    public function __construct(UserService $user)
    {
        parent::__construct();
        $this->user = $user;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $count = 0;
        $selectedUsers = $this->user->selectedUsersWithAssessments()->doesntHave('course_assessments')->get();
        foreach ($selectedUsers as $user) {
            if($count < 3){
                $emailData = [
                    'name' => $user->first_name . ' ' . $user->last_name,
                    'email' => $user->email,
                ];
                BaseService::sendEmailGeneral(
                    $emailData,
                    'emails.schedule.users-not-started-program',
                    'BRACE | You have not started a course on our portal yet',
                    $emailData['email'],
                    $emailData['name'],
                );
                $count++;
            }
        }
        $this->info('Reminder emails ran successfully');
        \Log::info("Unverified email reminder notification");

//        $selectedUsers->each(function ($user) use ($count) {
//            if($count < 3) {
//                $user->whereDoesntHave('course_assessments', function () use ($user) {
//                    $emailData = [
//                        'name' => $user->first_name . ' ' . $user->last_name,
//                        'email' => $user->first_name . ' ' . $user->last_name,
//                    ];
//                    BaseService::sendEmailGeneral(
//                        $emailData,
//                        'emails.schedule.users-not-started-program',
//                        'BRACE | You have not started a course on our portal yet',
//                        $emailData['email'],
//                        $emailData['name'],
//                    );
//                });
//                $count++;
//            }
//        });
    }
}
