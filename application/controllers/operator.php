<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/*
class Operator extends CI_Controller {
	
	public function __construct()
	    {
	        parent::__construct();
	    }
	    
	public function index($page = '1')//默认加载所有数据
	{
		$data['rows'] = $this->Select->selall($page);//取数据
		$data['cur_page']= $page;
		//--------------------   分页        -----------------
		$this->pageconf['base_url'] = 'http://localhost/post/index.php/display/index/';
		$this->pageconf['total_rows'] = $this->Get_total_rows->get_all_rows();
		$this->_pagination();
		//--------------------   结束       ------------------
		$this->load->view('site',$data);//默认加载所有记录
		
	}
	
public function _pagination(){
		
		//-------------------------    分页样式             -----------------------
		//$this->pageconf['full_tag_open'] = '<div id="no_arrow">';
		//$this->pageconf['full_tag_close'] = '</div>';
		/*
		$this->pageconf['prev_tag_open'] = '<div id="arrow_first" class="arrow" onmousemove="style.background="url( static/images/last-2.gif)";" onmouseout="style.background="url( static/images/last.png)";">';
		$this->pageconf['prev_tag_open'] = '</div>';
		
		$this->pageconf['next_tag_open'] = '<div id="arrow_last" class="arrow" onmousemove="style.background="url( static/images/next-2.gif)";" 
                    	onmouseout="style.background="url( static/images/next.png)";">';
		$this->pageconf['next_tag_open'] = '</div>';
		*/
		//$this->pageconf['cur_tag_open'] = '<a id="now-page">';
		//$this->pageconf['cur_tag_open'] = '</a>';
		
		//$this->pageconf['num_tag_open'] = '';
		//$this->pageconf['num_tag_open'] = '';
		/*
		$this->pageconf['next_link'] = '';
		$this->pageconf['prev_link'] = '';
		$this->pageconf['first_link'] = '...';
		$this->pageconf['first_tag_open'] = '<a style="color:#613101;">';
		$this->pageconf['first_tag_close'] = '</a>';
		$this->pageconf['last_link'] = '...';
		$this->pageconf['last_tag_open'] = '<a style="color:#613101;">';
		$this->pageconf['last_tag_close'] = '</a>';
		//-------------------------    分页样式over -----------------------
		$this->pageconf['per_page'] = $this->Get_total_rows->get_per_page();
		$data['perpage'] = $this->Get_total_rows->get_per_page();
		$this->pageconf['use_page_numbers'] = TRUE;
		$this->pagination->initialize($this->pageconf); 
		$this->data['page'] = $this->pagination->create_links();
	}
	    
	public function insert(){
		$this->form_validation->set_rules('addressee','收件人','required|xss_clean');
		$this->form_validation->set_rules('campus','收件地区','required|xss_clean');
		$this->form_validation->set_rules('selectType','收件类型','required|xss_clean');
		
		if($this->form_validation->run() == FALSE){
			}else{
				$this->data['addressee'] = $this->input->post('addressee');
				$this->data['area'] = $this->input->post('campus');
				$this->data['type'] = $this->input->post('selectType');
				$this->Operators->insert($this->data);
			}
			
		$this->load->view('admin/information-manage');
	}
	
}*/