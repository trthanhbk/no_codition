<?php

class TimeWelcomeTest extends PHPUnit_Framework_TestCase{

	private function _processTest($input, $expected){
		// Thuc thi
		$timeWelcome = new TimeWelcome();
		$actual = $timeWelcome->process($input);

		// So sanh
		$this->assertEquals($expected, $actual);
	}

	public function testAm(){
		$this->_processTest("Am", "Chao buoi sang");
	}

	public function testPm(){
		$this->_processTest("Pm", "Chao buoi chieu");
	}	
}