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
        'folder_id'
    ];

    public function notes() 
    {
        return $this->hasMany(Note::class, 'folder_id');
    }

    public function parents()
    {
        return $this->belongsTo(Folder::class, 'folder_id');
    }

    public function childrens()
    {
        return $this->hasMany(Folder::class, 'folder_id');
    }
}
