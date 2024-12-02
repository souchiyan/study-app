<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todos;
use Inertia\Inertia;

class TodosController extends Controller
{
    public function index(Todos $todo)
    {
        return Inertia::render("Todo/TodoList", ["todos" => $todo->get()]);
    }

    public function create()
    {
        return Inertia::render("Todo/TodoCreate");
    }
    public function store(Request $request, Todos $todo)
    {
        $input = $request->all();
        $todo->fill($input)->save();
        return redirect('/todo');

    }
    public function edit(Todos $todo)
    {
        return Inertia::render("Todo/Edit", ["todo" => $todo]);
    }
    public function update(Request $request, Todos $todo)
    {
        $input = $request->all();
        $todo->fill($input)->save();
        return redirect('/todo');

    }
    public function delete(Todos $todo)
    {
        $todo->delete();
        return redirect('/todo');

    }
}
