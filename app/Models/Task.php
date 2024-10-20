<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;
use MongoDB\Laravel\Relations\BelongsTo;

class Task extends Model
{
    use HasFactory;

    protected $collections = 'tasks';

    public function user() : BelongsTo 
    {
        return $this->belongsTo(User::class);
    }
}
