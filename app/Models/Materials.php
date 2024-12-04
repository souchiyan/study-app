<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Materials extends Model
{
    use HasFactory;
    protected $fillable = [
        "title",
        "description",
        "file_path",
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
