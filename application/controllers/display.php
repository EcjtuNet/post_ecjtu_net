<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Display extends CI_Controller {
	public function __construct(){
        parent::__construct();
        $this->load->helper(array('url','form'));
        $this->load->library('form_validation');	
    }
	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function show()
	{
		$this->load->view('site', $this->show_data);
	}
	public function index($page = '1')//首页
	{
		$data['rows'] = $this->Select->selall($page);//取数据
		$data['cur_page']= $page;
		$data['type'] = 'index';
		$data['all_page'] = ceil($this->Get_total_rows->get_all_rows()/$this->Get_total_rows->get_per_page());
		// $data['all_page'];
		//--------------------   分页        -----------------
		$this->pageconf['base_url'] = base_url().'/index.php/display/index/';
		$this->pageconf['total_rows'] = $this->Get_total_rows->get_all_rows();
		$this->_pagination();
		//--------------------   结束       ------------------
		$this->show_data = $data;
		$this->show();
		
	}
	
	public function getName(){//取得要搜索的姓名
		echo $this->input->post('query');
	}
	
	public function byName($name = '',$page = '1'){//按姓名搜索
		
	        $name = $this->input->post('input_name');	
		$name = $this->security->xss_clean($name);
		$data['rows'] = $this->Select->selbyname($name,$page);
		$data['cur_page'] = $page; 
		$data['type'] = 'getName';
		$data['all_page'] = ceil($this->Get_total_rows->get_names_rows($name)/$this->Get_total_rows->get_per_page());
		//--------------------   分页        -----------------
		$this->pageconf['uri_segment'] = 4;
		$this->pageconf['base_url'] = base_url().'/index.php/display/byName/'.$name.'/';
		$this->pageconf['total_rows'] = $this->Get_total_rows->get_names_rows($name);
		$this->_pagination();
		//--------------------   结束       ------------------
		if($this->pageconf['total_rows']==0){
			$name = $this->input->post('input_name');
			$data['rows'] = $this->Select->selall($page);//取数据
			$data['cur_page']= $page;
			$data['type'] = 'index';
			$data['all_page'] = ceil($this->Get_total_rows->get_all_rows()/$this->Get_total_rows->get_per_page());
			$data['all_page'];
		//--------------------   分页        -----------------
			$this->pageconf['base_url'] = base_url().'/index.php/display/index/';
			$this->pageconf['total_rows'] = $this->Get_total_rows->get_all_rows();
			$this->_pagination();
		//--------------------   结束       ------------------
			$data['error']=1;	
		}
		$this->show_data = $data;
		$this->show();
	}
	
	public function byArea($area = '', $page = '1'){//按区域搜索	
		$area = $this->security->xss_clean($area);
		$data['rows'] = $this->Select->selbyarea($area,$page);
		$data['cur_page'] = $page;
		$data['type'] = 'byArea';
		$data['all_page'] = ceil($this->Get_total_rows->get_area_rows($area)/$this->Get_total_rows->get_per_page());
		//--------------------   分页        -----------------
		$this->pageconf['uri_segment'] = 4;	
		$this->pageconf['base_url'] = base_url().'/index.php/display/byArea/'.$area.'/';
		$this->pageconf['total_rows'] = $this->Get_total_rows->get_area_rows($area);
		$this->_pagination();
		//--------------------   结束       ------------------
		$this->show_data = $data;
		$this->show();
	}
	
	public function byType($type = '', $page = '1'){//按类型搜索
		
		$type = $this->security->xss_clean($type);
		$data['rows'] = $this->Select->selbytype($type,$page);
		$data['cur_page'] = $page;
		$data['type'] = 'byType';
		$data['all_page'] = ceil($this->Get_total_rows->get_names_rows($type)/$this->Get_total_rows->get_per_page());
		//--------------------   分页        -----------------
		$this->pageconf['uri_segment'] = 4;	
		$this->pageconf['base_url'] = base_url().'/index.php/display/byType/'.$type.'/';
		$this->pageconf['total_rows'] = $this->Get_total_rows->get_type_rows($type);
		$this->_pagination();
		//--------------------   结束       ------------------
		$this->show_data = $data;
		$this->show();
	}
	
	public function _pagination(){
		
		//-------------------------    分页样式             -----------------------
		$this->pageconf['full_tag_open'] = '<div id="no_arrow">';
		$this->pageconf['full_tag_close'] = '</div>';
		/*
		$this->pageconf['prev_tag_open'] = '<div id="arrow_first" class="arrow" onmousemove="style.background="url( static/images/last-2.gif)";" onmouseout="style.background="url( static/images/last.png)";">';
		$this->pageconf['prev_tag_open'] = '</div>';
		
		$this->pageconf['next_tag_open'] = '<div id="arrow_last" class="arrow" onmousemove="style.background="url( static/images/next-2.gif)";" 
                    	onmouseout="style.background="url( static/images/next.png)";">';
		$this->pageconf['next_tag_open'] = '</div>';
		*/
		$this->pageconf['cur_tag_open'] = '<a id="now-page">';
		$this->pageconf['cur_tag_close'] = '</a>';
		
		//$this->pageconf['num_tag_open'] = '';
		//$this->pageconf['num_tag_open'] = '';
		
		$this->pageconf['next_link'] = '';
		$this->pageconf['prev_link'] = '';
		$this->pageconf['first_link'] = '...';
		$this->pageconf['first_tag_open'] = '<a style="color:#613101;">';
		$this->pageconf['first_tag_close'] = '</a>';
		$this->pageconf['last_link'] = '...';
		$this->pageconf['last_tag_open'] = '<a style="color:#613101;">';
		$this->pageconf['last_tag_close'] = '</a>';
		$this->pageconf['num_links'] = 3;
		//-------------------------    分页样式over -----------------------
		$this->pageconf['per_page'] = $this->Get_total_rows->get_per_page();
		$data['perpage'] = $this->Get_total_rows->get_per_page();
		$this->pageconf['use_page_numbers'] = TRUE;
		$this->pagination->initialize($this->pageconf); 
		$this->data['page'] = $this->pagination->create_links();
	}	
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
