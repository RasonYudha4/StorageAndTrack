<?php

namespace App\Services;

use App\Models\Task;

class Node
{
    public $data;
    public $next;
    public $prev;

    public function __construct($data)
    {
        $this->data = $data;
        $this->next = null;
        $this->prev = null;
    }
}

class DoublyLinkedList
{
    // A modifier for head and tail
    private $head;
    private $tail;
    private $node;

    // Assigning the value to the modifier during class contructing
    public function __construct()
    {
        $this->head = null;
        $this->tail = null;
        $this->node = new Node(Task::all());
    }

    public function add($task) {
        // Create a new node with the task data
        $this->node = new Node($task);
    
        // If the head node is note empty, set the head and tail to the new node
        if (!$this->head) {
            $this->head = $newNode;
            $this->tail = $newNode;
        } else {
            // else add the new node to the end of the list
            $this->tail->next = $newNode;
            $newNode->prev = $this->tail;
            $this->tail = $newNode;
        }
    }

    public function getNext($node)
    {
        return $node->next // Check if the next node exist
        ? $node->next->data  // If it is, then get the data of the next node
        : null; // If not then return null
    }

    public function getPrev($node)
    {
        return $node->prev  // Check if the previous node exist
        ? $node->prev->data  // If it is, then get the data of the previous node
        : null; // If not then return null
    }

    public function getHead()
    {
        return $this->head; // Return the current head that is stored on the $head valiable
    }
}