<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\User\UserProfileResource;
use App\Services\Base\BaseService;
use App\Services\Module\ModuleAssessmentService;
use App\Services\Module\ModuleService;
use App\Services\User\UserService;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminUserController extends Controller
{
    protected UserService $user;
    protected ModuleAssessmentService $assessment;
    protected ModuleService $module;

    public function __construct(
        UserService $user,
        ModuleAssessmentService $assessment,
        ModuleService $module
    ){
        $this->user = $user;
        $this->assessment = $assessment;
        $this->module = $module;
    }

    public function index(): \Illuminate\Http\JsonResponse
    {
        try {
            $users = $this->user->selectedUsersWithAssessments()->has('module_assessments')->paginate(12);
            $countNotStarted = $this->user->selectedUsers()->doesntHave('course_assessments')->count();
            $modules = $this->module->braceModule()->orderBy('sort')->get();
            return response()->json([
                'success' => true,
                'users' => UserProfileResource::collection($users)->response()->getData(true),
                'count_users_not_started' => $countNotStarted,
                'modules' => $modules,
                'total' => $users->total(),
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function search(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $this->assessment->searchUserAssessments($request);
            return response()->json($data, Response::HTTP_OK);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function export($form)
    {
        try {
            return $this->assessment->exportUserAssessments($form);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }
}
