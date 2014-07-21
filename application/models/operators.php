<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Operators extends CI_Model{
	
	function Mtest(){
		parent::__construct();
	}
	
	public function insert($data){
		$this->db->insert('post_info', $data);
	} 
	
	public function delete($date,$time){
		$time = $date.' '.$time;
		$this->db->delete('post_info',array('time' => $time));
		return TRUE;
	}
	
	public function delall($str){
		//$this->db->from('post_info');
		//$this->db->where_in('time',$str);
		//$this->db->delete();
		$sql = "DELETE FROM post_info WHERE time IN(${str})";
		$this->db->query($sql);
	}
	
	public function update($name,$area,$type,$time){
			//$name = urldecode($name);
			//$area = urldecode($area);
			//$type = urldecode($type);
		//$time = $date.' '.$time;
		$data = array(
               'addressee' => $name,
               'area' => $area,
               'type' => $type
            );
		
		$this->db->where('time',$time);
		$this->db->update('post_info',$data);
		return TRUE;
	}
}