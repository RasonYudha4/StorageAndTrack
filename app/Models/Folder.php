<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Folder extends Model
{
    use HasFactory;

    protected $collection = 'folders';

    protected $fillable = [
        'title',
        'parent_id'
    ];

    public function notes() 
    {
        return $this->hasMany(Note::class, 'folder_id');
    }

    public function parent()
    {
        return $this->belongsTo(Folder::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Folder::class, 'parent_id');
    }
}
