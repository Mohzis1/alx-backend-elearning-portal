<?php

namespace App\Exports\Admin\User;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class AdminUserAssessmentExport implements FromCollection, ShouldAutoSize, WithHeadings, WithMapping
{
    protected $input;
    protected $users;
    public function __construct($input, $users){
        $this->input = $input;
        $this->users = $users;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection(): \Illuminate\Support\Collection
    {
        $input = [];
        // if $this->input array has items, iterate
        // else ignore it
        if(count($this->input) > 0){
            foreach($this->input as $key => $value){
                if(!empty($value)){
                    $input[$key] = $value;
                }
            }
        }

        $users = $this->users->where(function($query) use ($input){
                $query->when(!empty($input['search_value']), static function($q) use($input){
                    $q->where('first_name', 'like' , '%'. $input['search_value'] .'%')
                        ->orWhere('last_name', 'like' , '%'. $input['search_value'] .'%')
                        ->orWhere('email', 'like' , '%'. $input['search_value'] .'%');
                });

                })->when(!empty($input['started_module']), static function ($q) use($input){
                    return $q->wherehas('module_assessments', static function ($q2) use($input){
                        $q2->where([
                            ['brace_module_id', '=', $input['started_module']],
                            ['status', '=', 0],
                        ]);
                    });

                })->when(!empty($input['not_started_module']), function ($q) use($input){
                    return $q->whereDoesntHave('module_assessments', function ($q2) use ($input) {
                        $q2->where('brace_module_id', $input['not_started_module']);
                    });

            })->when(!empty($input['completed_module']), static function ($q) use($input){
                return $q->wherehas('module_assessments', static function ($q2) use($input){
                    $q2->where([
                        ['brace_module_id', $input['completed_module']],
                        ['status', 1],
                    ]);
                });

            })->when(!empty($input['program_status']), static function ($q) use($input){
                if($input['program_status'] === "started"){
                    return $q->has('course_assessments');
                }
                if($input['program_status'] === "not-started"){
                    return $q->doesntHave('course_assessments');
                }
                return false;
            })->get();

        return $users;
    }

    public function headings(): array
    {
        return [
            'Name',
            'Email',
            'Mobile',
            'Gender',
        ];
    }

    public function map($users): array
    {
        return [
            $users->first_name.' '.$users->last_name,
            $users->email,
            $users->mobile,
            $users->gender,
        ];
    }
}
