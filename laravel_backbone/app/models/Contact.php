<?php

class Contact extends Eloquent {
    protected $fillable = array('first_name', 'last_name', 'email_address', 'description');

    public static $rules = array();
    public $timestamps = false;
}
