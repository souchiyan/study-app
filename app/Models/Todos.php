<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todos extends Model
{
    use HasFactory;
    protected $fillable = [
        "title",
        "description",
        "due_date",
        // "is_completed"
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
