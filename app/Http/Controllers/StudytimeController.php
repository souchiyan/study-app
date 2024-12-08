<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\StudyTime;
class StudytimeController extends Controller
{
    public function index(StudyTime $count)
    {
        return Inertia::render('Times/index', ["counts" => $count->get()]);
    }
    public function count()
    {
        return Inertia::render('Times/count');
    }
    public function store(Request $request, StudyTime $count)
    {
        $input = $request->all();
        $count->fill($input)->save();
    }
    // public function store(Request $request, StudyTime $count)
    // {
    //     $validated = $request->validate([
    //         'subject' => 'required|string|max:50',
    //         'start_time' => 'required|date_format:Y-m-d H:i:s',
    //         'end_time' => 'required|date_format:Y-m-d H:i:s',
    //         'duration' => 'required|numeric|min:0',
    //     ]);

    //     $count->fill($validated)->save();

    //     return redirect()->route('Times/index');
    // }

}
