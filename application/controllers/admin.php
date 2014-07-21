<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Admin extends CI_Controller {
	
	public function __construct()
	{
		parent::__construct();
	}
	
	public function index(){//如果session验证通过。则显示后台中心，如未通过，则显示login页面
		if($this->session->userdata('is_login')){
			$this->load->view('admin/backstageCenter');
		}else{
			$this->load->view('admin/login-page');
		}
	}
	
	public function _chginfo(){//修改账号信息页面
		if(!($this->session->userdata('is_login'))){
			$this->load->view('admin/login-page');
		}
		$this->load->view('admin/changeinfo');
	}
	
	public function maginfo($page = '1'){//编辑邮包信息页面
		if(!($this->session->userdata('is_login'))){
			$this->load->view('admin/login-page');
		}
		//--------------------------------insert------------------------
		/*if($this->input->post('addressee') == ''){
			$this->form_validation->set_rules('addressee','收件人','required|xss_clean');
			$this->form_validation->set_rules('campus','收件地区','required|xss_clean');
			$this->form_validation->set_rules('selectType','收件类型','required|xss_clean');
			
			if($this->form_validation->run() == TRUE){
					echo $this->data['addressee'] = $this->input->post('addressee');
					echo $this->data['area'] = $this->input->post('campus');
					echo $this->data['type'] = $this->input->post('selectType');
					echo $this->Operators->insert($this->data);
				}
		}
		*/
		//-------------------------------- over ------------------------
		
		$data['rows'] = $this->Select->selall_bkg($page);//取数据
		$data['cur_page'] = $page;
		$data['perpage'] = 17;
		//--------------------   分页        -----------------
		$this->pageconf['base_url'] = base_url().'/post/index.php/display/index/';
		$this->pageconf['total_rows'] = $this->Get_total_rows->get_all_rows();
		$this->_pagination();
		//--------------------   结束       ------------------
		$this->load->view('admin/information-manage',$data);//默认加载所有记录
	}
	
	public function insertinfo(){//添加邮包信息
			$this->form_validation->set_rules('addressee','收件人','required|xss_clean');
			$this->form_validation->set_rules('campus','收件地区','required|xss_clean');
			$this->form_validation->set_rules('selectType','收件类型','required|xss_clean');
			
			if($this->form_validation->run() == TRUE){
					$this->data['addressee'] = $this->input->post('addressee');
					$this->data['area'] = $this->input->post('campus');
					$this->data['type'] = $this->input->post('selectType');
					$this->Operators->insert($this->data);
				}
				
			$this->maginfo();
	}
	
	public function _pagination(){
		
		$this->pageconf['full_tag_open'] = '<div class="listPage">';
		$this->pageconf['full_tag_close'] = '</div>';
		$this->pageconf['cur_tag_open'] = '<a id="grey">';
		$this->pageconf['cur_tag_close'] = '</a>';
		$this->pageconf['next_link'] = '下一页';
		$this->pageconf['prev_link'] = '上一页';
		$this->pageconf['first_link'] = '首页';
		$this->pageconf['last_link'] = '末页';
		$this->pageconf['uri_segment'] = 3;	
		$this->pageconf['base_url'] = base_url().'/index.php/admin/maginfo/';
		$this->pageconf['per_page'] = 17;
		$data['perpage'] = $this->Get_total_rows->get_per_page();
		$this->pageconf['use_page_numbers'] = TRUE;
		$this->pagination->initialize($this->pageconf); 
		$this->data['page'] = $this->pagination->create_links();
	}
	
	public function delete($date,$time){//单个数据删除，根据时间“日期+时间”判断
		
		$this->Operators->delete($date,$time);	
		$this->maginfo();
	}
	
	public function delall(){//删除复选框所选记录//value = true；
		
	if(!empty($_POST['info_id']))
		{
			//print_r($_POST['info_id']);
		    $str = implode("','",$_POST['info_id']);
		    $str = "'".$str."'";
		    //$sql = "DELETE FROM post_info WHERE time IN(${str})";
		    $this->Operators->delall($str);
		    $this->maginfo();
		}
	}
	
	public function upd($name,$area,$type,$time){//单个数据更新$name,$area,$type,$date,$time
			//$name = urldecode($name);
			//$area = urldecode($area);
			//$type = urldecode($type);
			//$this->maginfo();
		$this->Operators->update($name,$area,$type,$time);	
		$this->maginfo();
	}
	
	public function logout(){
		$this->session->sess_destroy();
		redirect('');
	}
	
	public function relog(){
		$this->session->sess_destroy();
		$this->index();
	}
	
	public function dis(){
		$post = $this->input->post();
		//echo $post['addressee'];
		//echo $post['area'];
		//echo $post['type'];
		$this->upd($post['addressee'],$post['area'],$post['type'],$post['time']);
	}
}
