<?php 
class Loginchk extends CI_Model{
	
	function Mtest(){
		parent::__construct();
	}
	
	public function chk_name(){
		$this->db->where('admin_name',$this->input->post('name'));
		$query = $this->db->get('admin');
		if($query->num_rows() > 0){
			return TRUE;
		}else{
			return FALSE;
		}
	}
	
	public function chk_pw(){
		$this->db->where('admin_pw',$this->input->post('passw'));
		$query = $this->db->get('admin');
		if($query->num_rows() > 0){
			return TRUE;
		}else{
			return FALSE;
		}
	}
	
	public function chk_cc(){
		
	}
}