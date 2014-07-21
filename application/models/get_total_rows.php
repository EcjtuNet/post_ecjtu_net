<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Get_total_rows extends CI_Model {
	
	function Mtest(){  
        parent::__construct();
        $this->load->database('post'); 
    }
	
	public function get_all_rows(){//默认函数获取所有记录数
		
		$query = $this->db->get('post_info');
		$rows = $query->num_rows();
		return $rows;
	} 
	public function get_names_rows($name = ''){//取得总记录数
		$query = $this->db->where('addressee' , $name);
		$query = $this->db->get('post_info');
		$rows = $query->num_rows();
		return $rows;
	}
	
	public function get_area_rows($area = ''){//按区域搜索总记录数
		
		$query = $this->db->where('area' , $area);
		$query = $this->db->get('post_info');
		$rows = $query->num_rows();
		return $rows;
		
	}
	
	public function get_type_rows($type = ''){//按类型搜索总记录数
		
		$query = $this->db->where('type' , $type);
		$query = $this->db->get('post_info');
		$rows = $query->num_rows();
		return $rows;
	}
	
	public function get_per_page(){
		return 19;
	}
}