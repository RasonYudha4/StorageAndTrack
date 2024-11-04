<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Models\Task;
use App\Services\DoublyLinkedList;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    protected $taskList;

    public function __construct()
    {
        $this->taskList = new DoublyLinkedList();
        $this->loadTasks();
    }

    // Load tasks from the database into the doubly linked list
    protected function loadTasks()
    {
        $tasks = Task::all(); // Fetch all tasks from the database

        // Create a mapping of task IDs to task objects
        $taskMap = $tasks->keyBy('_id'); // Assuming '_id' is the MongoDB ID

        // Append tasks to the doubly linked list
        foreach ($tasks as $task) {
            $this->taskList->append($task);
        }

        // Set up the next and previous links
        foreach ($tasks as $task) {
            if ($task->next) {
                $nextTask = $taskMap->get($task->next);
                if ($nextTask) {
                    $task->next = $nextTask; // Link to the next task
                }
            }
            if ($task->prev) {
                $prevTask = $taskMap->get($task->prev);
                if ($prevTask) {
                    $task->prev = $prevTask; // Link to the previous task
                }
            }
        }
    }

    // Display the current task
    public function index()
    {
        $this->taskList->reset(); // Reset to the head of the list
        $currentTask = $this->taskList->getCurrent();
        $nextTask = $this->taskList->next(); 
        $prevTask = $this->taskList->prev();
        return inertia('Task', [
            'task' => $currentTask,
            'next' => $nextTask,
            'prev' => $prevTask,
        ]);
    }

    // Store a new task
    public function store(StoreTaskRequest $request)
    {
        // Create the new task
        $task = Task::create($request->validated());

        // Get the current last task in the linked list
        $lastTask = $this->taskList->getLast(); // Assuming you have a method to get the last task

        if ($lastTask) {
            // Set the `prev` of the new task to the last task's ID
            $task->prev = $lastTask;

            // Update the `next` of the last task to the new task's ID
            $lastTask->next = $task;

            // Save the updated last task
            $lastTask;
        }

        // Append the new task to the linked list
        $this->taskList->append($task);

        dd($this->taskList);

        return redirect()->route('task.index');
    }

    // Delete a task
    public function destroy(Request $request)
    {
        $taskId = $request->input('id');
        $task = Task::find($taskId);

        if ($task) {
            $task->delete();
            // Optionally, you can remove the task from the linked list here
        }

        return redirect()->route('task.index');
    }
}