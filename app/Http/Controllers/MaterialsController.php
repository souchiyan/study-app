<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Materials;

class MaterialsController extends Controller
{
    public function index(Materials $materials)
    {
        return Inertia::render('Materials/index', ['materials' => $materials->get()]);
    }
    public function show(Materials $materials)
    {
        return Inertia::render('Materials/Show', ['material' => $materials]);

    }
    public function create()
    {
        return Inertia::render('Materials/create');
    }
    public function store(Request $request, Materials $materials)
    {
        $input = $request->all();
        $materials->fill($input)->save();
        return redirect("/material/" . $materials->id);

    }
    public function edit(Materials $materials)
    {
        return Inertia::render("Materials/Edit", ["materials" => $materials]);

    }
    public function update(Request $request, Materials $materials)
    {
        $input = $request->all();
        $materials->fill($input)->save();
        return redirect("/material/" . $materials->id);

    }
    public function delete(Materials $materials)
    {
        $materials -> delete(); 
        return redirect("/material" );

    }
}
