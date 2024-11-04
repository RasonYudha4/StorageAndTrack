<?php

namespace App\Http\Controllers;

use App\Services\PlanQueue;
use Illuminate\Http\Request;
use App\Http\Requests\StorePlanRequest;
use Inertia\Inertia;
use Redirect;

class PlanController extends Controller
{
    protected $planQueue;

    public function __construct(PlanQueue $planQueue)
    {
        $this->planQueue = $planQueue;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $plans = $this->planQueue->all();
        return Inertia::render('Plan', ['plans' => $plans]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePlanRequest  $request)
    {
        $plan = $this->planQueue->enqueue($request->validated());

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
    public function destroy()
{
    // Call the dequeue method to remove the oldest plan
    $plan = $this->planQueue->dequeue();

    // Optionally, you can add a flash message to indicate success
    if ($plan) {
        // You can add a success message here if needed
        session()->flash('message', 'Plan deleted successfully.');
    } else {
        // Handle the case where there are no plans to delete
        session()->flash('message', 'No plans to delete.');
    }

    return Redirect::route('plan.index');
}
}
