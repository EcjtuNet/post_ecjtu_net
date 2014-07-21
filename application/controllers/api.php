<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

include('display.php');
class Api extends Display {
        public function __construct()
	{
        	parent::__construct();
	}

	public function show()
	{
		echo json_encode($this->show_data);
	}
}
