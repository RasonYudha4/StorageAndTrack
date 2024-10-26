<?php

namespace App\Services;

class Node {
    public $data;
    public $next;
    public $prev;

    public function __construct($data) {
        $this->data = $data;
        $this->next = null;
        $this->prev = null;
    }
}

class DoublyLinkedList {
    private $head;
    private $tail;
    private $current;

    public function __construct() {
        $this->head = null;
        $this->tail = null;
        $this->current = null;
    }

    public function append($data) {
        $newNode = new Node($data);
        if (!$this->head) {
            $this->head = $newNode;
            $this->tail = $newNode;
            $this->current = $newNode;
        } else {
            $this->tail->next = $newNode;
            $newNode->prev = $this->tail;
            $this->tail = $newNode;
        }
    }

    public function getCurrent() {
        return $this->current ? $this->current->data : null;
    }

    public function next() {
        if ($this->current && $this->current->next) {
            $this->current = $this->current->next;
        }
    }

    public function prev() {
        if ($this->current && $this->current->prev) {
            $this->current = $this->current->prev;
        }
    }

    public function reset() {
        $this->current = $this->head;
    }
}