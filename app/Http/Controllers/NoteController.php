<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFolderRequest;
use App\Http\Requests\StoreNoteRequest;
use App\Models\Folder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Note;

class NoteController extends Controller
{
    // A method to display the page
    public function index()
    {
        // Fetch all notes
        $notes = Note::all();
        // Fetch all folders
        $folders = Folder::all();
        // Build a tree structure
        $tree = $this->buildTree($notes);
        $formattedFolders = $folders->map(function ($folder) {
            return [
                'id' => (string) $folder->_id, // Convert ObjectId to string
                'title' => $folder->title,
                'folder_id' => $folder->folder_id,
                'created_at' => $folder->created_at,
                'updated_at' => $folder->updated_at,
            ];
        });
        return Inertia::render('Note', ['tree' => $tree, 'folders' => $formattedFolders, 'notes' => $notes]); // Return the tree structure as JSON
    }
    // A method to create a tree that takes the value of the notes and parentId
    private function buildTree($notes, $parentId = null)
    {
        $branch = []; // A placeholder to store the tree branch
        foreach ($notes as $note) {
            // Checks if the value of the current note's parent_id is the same as the assigned parentId
            if ($note->parent_id == $parentId) {
                // If true then turn the current node id as the parentId for the next child
                $children = $this->buildTree($notes, $note->_id);
                // For everytime there's a child node assign the child node of the note into added node
                if ($children) {
                    $note->children = $children; // Add children to the note
                }
                $branch[] = $note; // Add the note to the branch
            }
        }
        return $branch; // Return the constructed branch
    }
    // A method to save the input into database
    public function store(StoreNoteRequest $request)
    {
        Note::create(
            $request->validated()
        );
    }

    public function folderStore(StoreFolderRequest $request) 
    {
        Folder::create(
            $request->validated()
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $note = Note::findOrFail($id);
        $note->delete();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }
}
