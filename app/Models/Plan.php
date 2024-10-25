<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;
use MongoDB\Laravel\Relations\BelongsTo;

class Plan extends Model
{
    use HasFactory;

    protected $collection = 'plans';

    protected $fillable = [
        'title',
        'user_id'
    ];

    public function user() : BelongsTo 
    {
        return $this->belongsTo(User::class);
    }
}
