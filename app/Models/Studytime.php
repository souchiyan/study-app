<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Studytime extends Model
{
    use HasFactory;

    protected $fillable = [
        "subject",
        "start_time",
        "end_time",
        "duration",
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
