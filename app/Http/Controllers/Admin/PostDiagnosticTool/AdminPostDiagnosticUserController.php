<?php

namespace App\Http\Controllers\Admin\PostDiagnosticTool;

use App\Http\Controllers\Controller;
use App\Services\Base\BaseService;
use App\Services\PostDiagnosticTool\PostDiagnosticUserService;
use Illuminate\Http\Request;

class AdminPostDiagnosticUserController extends Controller
{
    protected PostDiagnosticUserService $diagnosticUser;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(PostDiagnosticUserService $diagnosticUser){
        $this->diagnosticUser = $diagnosticUser;
    }

    public function index(): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $this->diagnosticUser->userWithRelations()
                ->has('user')->latest()->paginate(12);
            return response()->json([
                'success' => true,
                'total' => $data->total(),
                'users' => $data,
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function search(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $users = $this->diagnosticUser->searchUsers($request);
            return response()->json([
                'success' => true,
                'users' => $users['users'],
                'total' => $users['total'],
                'search_values' => $users['search_values'],
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

    public function export(){
        try {
            $response = $this->diagnosticUser->exportUsers();

        } catch (\Exception $e) {
            $response = response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ]);
        }
        return $response;
    }

    public function delete($id): \Illuminate\Http\JsonResponse
    {
        try {
            $this->diagnosticUser->deleteUserWithAnswers($id);
            return response()->json([
                'success' => true,
                'message' => "User deleted successfully"
            ]);

        } catch (\Exception $e) {
            return BaseService::tryCatchException($e);
        }
    }

}
