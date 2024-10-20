<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;
use MongoDB\Laravel\Relations\BelongsTo;

class Note extends Model
{
    use HasFactory;

    protected $collections = 'notes';

    public function user() : BelongsTo 
    {
        return $this->belongsTo(User::class);
    }
}
