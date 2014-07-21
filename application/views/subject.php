
       <div id="subject">
       <div id="bigBox">
            <img src=" static/images/corner-1.png" alt="" />
            <div id="bigBox-borderTop"></div>
            <img src=" static/images/corner-2.png" alt="" />
            <div id="bigBox-borderLeft"></div>
            <div id="smallBox">
            	<!--网站主体头部-->
            	<div id="title">
                    <div class="xuhao">序号</div>
                    <div class="shoujian">收件人</div>
                    <div class="xiaoqu">校区</div>
                    <div class="leixing">类型</div>
                    <div class="daojianriqi" style="margin-right:0;">到件日期</div>
                </div>
                <!--网站主体内容部分-->
                <div id="bigTable">
                	<div id="bigTable-borderTop"></div>
                    <div id="bigTable-borderLeft"></div>
                    <!--网站主体内容的列表-->
                    <div id="smallTable">
                        <?php
                        	$count = 0;
                        	$all_page = ceil($all_page);
                        	$per_page_count = $this->Get_total_rows->get_per_page();//每页数量
                        	$cur_page;
                        	$first_num = ($cur_page - 1) * $per_page_count;
                        	if( ! empty($rows)){
	                        	foreach ($rows as $row) {
		                        	  echo '<ul>';
		                              echo '<li class="xuhao">'.($first_num + $count + 1).'</li>';
		                              echo '<li class="shoujian">'.$row->addressee.'</li>';
		                              echo '<li class="xiaoqu">'.$row->area.'</li>';
		                              echo '<li class="leixing">'.$row->type.'</li>';
		                              echo '<li class="daojianriqi">'.$row->time.'</li>';
		                        	  echo '</ul>';			
		                        	  ++$count;					
								}
                        	}
                        	if ($count < $per_page_count)
		                    {
		                        for ($i = $count; $i < $per_page_count; ++$i)
		                        {
		                            echo '<ul><li class="xuhao"></li><li class="shoujian"></li><li class="xiaoqu"></li><li class="leixing"></li><li class="daojianriqi"></li></ur>';
		                        }
		                    }
							
                        ?>
                    </div>
                    <div id="bigTable-borderRight"></div>
                    <div id="bigTable-borderBottom"></div>
                </div>
                <!--网站主体底部-->
                <?php
                	$current_url  = current_url();            	
                	if($type == 'index'){
                		$n = 3;
                		$current_url = site_url().'/display/'.$type;//拼接当前url片段
		                	
                	}else {
                		$n = 4;
                		$current_url = site_url().'/display/'.$type.'/'.$this->uri->segment(3);//拼接当前url片段
                	}
                	 if($this->uri->segment($n) == FALSE){//第1页
			                	 $pre_pages = $current_url;//第1页的上页不变
			                	 $next_pages = $current_url.'/'.($cur_page+1);//下页页码加1
		                	 }else if($this->uri->segment($n) == $all_page){//最后1页
		                	 	 $pre_pages = $current_url.'/'.($cur_page-1);
			                	 $next_pages = $current_url.'/'.($cur_page);
		                	 }else{//中间页
		                	 	 $pre_pages = $current_url.'/'.($cur_page-1);
			                	 $next_pages = $current_url.'/'.($cur_page+1);
		                	 }
                ?>
                <div class="page" id="page">
                	<a id="arrow_first" class="csssprite" href="
<?php 
	if($pre_pages == "http://post.ecjtu.net/index.php/display/index/0"){
		$pre_pages = "http://post.ecjtu.net/index.php/display/index/1";
	}
	echo $pre_pages;
?>
" onmousemove="style.backgroundPosition='-150px -398px';" onmouseout="style.backgroundPosition='-150px -316px';">
                    </a>
                     <?php echo  $this->data['page']; ?>
                    <a id="arrow_last" class="csssprite" onmousemove="style.backgroundPosition='-150px -357px';" 
                    	onmouseout="style.backgroundPosition='-150px -280px';" href="<?php echo  $next_pages;?>">
                    </a>
             	</div>
            </div>
            <?php if(@$this->pageconf['total_rows']<20){echo '<script type="text/javascript">document.getElementById("page").style.display="none";</script>';} ?>
            <div id="bigBox-borderRight"></div>
          	<img src=" static/images/corner-3.gif" style="_margin-left:-720px;" alt="" />
            <div id="bigBox-borderBottom"></div>
            <img src=" static/images/corner-4.gif" style="_margin-top:-4px;" alt="" />
       </div>
       <!--网站主体右侧导航部分-->
       <div id="nav">
       		<div id="south-north">
                <a href="index.php/display/byArea/南区">
                	<div id="South" class="csssprite"></div>
                </a>
                <a href="index.php/display/byArea/北区">
                	<div id="North" class="csssprite"></div> 
                </a>
            </div>
            <div id="crumb">
                <a href="index.php/display/byType/包裹" class="csssprite" id="parcel"></a>
                <a href="index.php/display/byType/挂号信" class="csssprite" id="letter"></a>
                <a href="index.php/display/byType/印刷品" class="csssprite" id="print"></a>
                <a href="index.php/display/byType/汇款单" class="csssprite" id="bill"></a>
                <a href="index.php/display/byType/退件" class="csssprite" id="cancel"></a>
            </div>
	<script type="text/javascript" src="static/js/navs.js"></script>	
       </div>
</div>
