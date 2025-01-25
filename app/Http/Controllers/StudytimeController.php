<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Studytime;
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
        return redirect('/time');
    }

    public function delete(StudyTime $count)
    {
        $count->delete();
        return redirect('/time');

    }


}
