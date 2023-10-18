<?php

namespace App\Services\Auth;

use App\Services\Base\BaseService;
use App\Services\Brace\DiagnosticToolService;
use App\Services\User\UserService;
use Illuminate\Support\Facades\Hash;

class RegisterService
{
    protected UserService $user;
    protected DiagnosticToolService $diagnostic;
    public function __construct(UserService $user, DiagnosticToolService $diagnostic){
        $this->user = $user;
        $this->diagnostic = $diagnostic;
    }

    public function createUser($request): array
    {
        $input = $request->all();
        $input['password'] = Hash::make($input['password']);
        $input['selected'] = 1;
        $user = $this->user->user()->create($input);

        if($user){
            $this->diagnostic->userDiagnosticStatus()->create([
               'user_id' => $user->id,
               'current_question_id' => 0,
                'is_completed' => 1,
            ]);
        }

        // Send welcome and otp emails8
        $otp = BaseService::randomCharacters(10, '0123456789ABCDEFGHIJ');

        //  $this->sendWelcomeEmail($user, $emailContent);
        //  $this->sendOtpEmail($user, $otp);

        // Return user
        return [
            'success' => true,
            'user' => $user,
            'message' => 'User registered successfully'
        ];
    }

    private function sendWelcomeEmail($createdUser, String $emailContent): void
    {
        $user = [
            'name' => $createdUser->name,
            'email' => $createdUser->email,
        ];

        BaseService::sendEmailGeneral(
            $user,
            $emailContent,
            'Welcome to Pet Me',
            $user['email'],
            $user['name']
        );
    }

    public function sendOtpEmail($user, $otp): void
    {
        $data = [
            'name' => $user->name,
            'email' => $user->email,
            'otp' => $otp,
        ];

        BaseService::sendEmailGeneral(
            $data,
            'emails.general.send-otp',
            'OTP | Account Activation',
            $data['email'],
            $data['name']
        );
    }

    public function submitOtpAndActivateAccount($request, $queryBuilder): array
    {
        $user = $queryBuilder->where('verification_token', $request->otp)->first();
        if($user){
            if($user->token_used === 1){
                return [
                    'success' => false,
                    'message' => 'Token used, generate another.',
                ];
            }
            $user->status = 1;
            $user->token_used = 1;
            $user->save();

            // Get Token
            $token = $user->createToken($user->email)->plainTextToken;

            return [
                'success' => true,
                'user' => $user,
                'token' => $token,
                'message' => 'Account activated',
            ];
        }
        return [
            'success' => false,
            'message' => 'Incorrect OTP, try again',
        ];
    }
}
