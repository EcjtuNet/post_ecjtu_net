<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Select extends CI_Model {
	private  $per_page_count;
	function Mtest(){  
        parent::__construct();
        $this->per_page_count = 4;
        $this->load->database('post');  
    }
	
	public function selall($page = '1'){//默认函数获取所有记录
		$page = intval($page);
        if ($page <= 0)
        {
            $page = 1;
        }
		$query = $this->db->from('post_info');
		$query = $this->db->limit($this->Get_total_rows->get_per_page(), $this->Get_total_rows->get_per_page() * ($page - 1));
		$query = $this->db->order_by('info_id','desc');
		$query = $this->db->get();
		
		$rows = $query->result();
		return $rows;
	} 
	
	public function selbyname($name = '',$page = '1'){//按姓名搜索
		
		$page = intval($page);
        if ($page <= 0)
        {
            $page = 1;
        }
		$query = $this->db->where('addressee' , $name);
		$query = $this->db->limit($this->Get_total_rows->get_per_page(), $this->Get_total_rows->get_per_page() * ($page - 1));
		$query = $this->db->order_by('info_id','desc');
		$query = $this->db->get('post_info');
		$rows = $query->result();
		return $rows;
	}
	
	public function selbyarea($area = '',$page = '1'){//按区域搜索
		
		$page = intval($page);
        if ($page <= 0)
        {
            $page = 1;
        }
        $query = $this->db->from('post_info');
		$query = $this->db->where('area' , $area);
		$query = $this->db->limit($this->Get_total_rows->get_per_page(), $this->Get_total_rows->get_per_page() * ($page - 1));
		$query = $this->db->order_by('info_id','desc');
		$query = $this->db->get();
		$rows = $query->result();
		return $rows;
		
	}
	
	public function selbytype($type = '',$page = '1'){//按类型搜索
		
		$page = intval($page);
        if ($page <= 0)
        {
            $page = 1;
        }
		$query = $this->db->where('type' , $type);
		$query = $this->db->limit($this->Get_total_rows->get_per_page(), $this->Get_total_rows->get_per_page() * ($page - 1));
		$query = $this->db->order_by('info_id','desc');
		$query = $this->db->get('post_info');
		$rows = $query->result();
		return $rows;
	}
	
	public function selall_bkg($page = '1'){//默认函数获取所有记录
		$page = intval($page);
        if ($page <= 0)
        {
            $page = 1;
        }
		$query = $this->db->from('post_info');
		$query = $this->db->limit(17, 17 * ($page - 1));
		$query = $this->db->order_by('info_id','desc');
		$query = $this->db->get();
		
		$rows = $query->result();
		return $rows;
	} 
	
}