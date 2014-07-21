<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login extends CI_Controller {
	
	public function __construct()
	    {
	        parent::__construct();
	    }
	    
	public function index(){
		$this->load->library('form_validation');
		$this->form_validation->set_error_delimiters('<a class="red-12Size">','</a>');
		$this->form_validation->set_rules('name','用户名','required|xss_clean|callback_check_name');
		$this->form_validation->set_rules('passw','密码','required|xss_clean|callback_check_pw');
		$this->form_validation->set_rules('chkcode','验证码','required|xss_clean|callback_check_cc');
		
		$this->form_validation->set_message('check_name','用户名错误');
		$this->form_validation->set_message('check_pw','密码错误');
		$this->form_validation->set_message('required','%s不能为空');
		
		if($this->form_validation->run() == FALSE){//验证失败
			$this->load->view('admin/login-page');
		}else{
			
			$session['is_login'] = TRUE;//登录成功
			$session['login_name'] = $this->input->post('name');
			
			$this->session->set_userdata($session);
			//$this->load->view('admin/backstageCenter');
			//$this->load->view('admin/information-manage');
			redirect('admin/maginfo');
			
		}
	}
	
	public function check_name(){
		return $message =  $this->Loginchk->chk_name();
	}
	
	public function check_pw(){
		return $message =  $this->Loginchk->chk_pw();
	}
	
	public function check_cc(){
		
	}
	
	public function make_cc(){
		echo '';
	}
}