<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Http\Requests\StoreTaskRequest;
use App\Services\DoublyLinkedList;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    protected $taskList;

    public function __construct(DoublyLinkedList $taskList)
    {
        $this->taskList = $taskList; // Assign the value of $taskList with the object of DoublyLinkedList 
    }
    
    // A method to display the page
    public function index() {

        $currTask = $this->taskList->getHead(); // Getting the node value then store it onto the currTask

        return Inertia::render('Task', ['tasks' => $currTask]); // Render the page 'Task' with the value of the currTask 
    }
    
    // A method to save the input into database
    public function store(StoreTaskRequest $request)
    {
        $this->taskList->add(Task::create($request->validated())); 
    }

    public function next() {
        $currTask = $this->taskList->getNext(); // Getting the next node value then store it onto the currTask

        return Inertia::render('Task', ['tasks' => $currTask]); // Render the page 'Task' with the value of the currTask 
    }

    public function prev() {
        $currTask = $this->taskList->getPrev(); // Getting the prev node value then store it onto the currTask

        return Inertia::render('Task', ['tasks' => $currTask]); // Render the page 'Task' with the value of the currTask 
    }

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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
