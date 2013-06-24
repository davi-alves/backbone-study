<?php

class Task extends Eloquent {
    protected $fillable = array('title', 'completed');

    public static $rules = array();
    public $timestamps = false;
}
