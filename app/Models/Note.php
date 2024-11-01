<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;
use MongoDB\Laravel\Relations\BelongsTo;

class Note extends Model
{
    use HasFactory;
    
    protected $collections = 'notes';

    protected $fillable = [
        'title',
        'desc',
        'folder_id',
    ];

    public function folder()
    {
        return $this->belongsTo(Folder::class, 'folder_id');
    }

}
