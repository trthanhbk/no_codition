<?php 

class TimeWelcome {

	public function process($input){
		if ($input == "Am"){
			return "Chao buoi sang";
		}
		if ($input == "Pm"){
			return "Chao buoi chieu";
		}
	}
}