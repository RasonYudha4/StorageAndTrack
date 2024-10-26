<?php

namespace App\Services;

use App\Models\Plan;

class PlanQueue
{
    public function enqueue(array $data)
    {
        // Create a new plan and save it to the database
        return Plan::create($data);
    }

    public function dequeue()
    {
        // Get the first plan in the queue (oldest one)
        $plan = Plan::orderBy('created_at', 'asc')->first();

        if ($plan) {
            // Delete the plan from the database
            $plan->delete();
        }

        return $plan;
    }

    public function all()
    {
        // Get all plans in the queue
        return Plan::orderBy('created_at', 'asc')->get();
    }
}