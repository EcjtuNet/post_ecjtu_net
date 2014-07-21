<!--信息管理页主体-->
<div id="add">
    <div class="up-down">
        <div><img alt="" src="static/images/corner-1.png" /></div>
        <div class="shadeTop"></div>
        <div><img alt="" src="static/images/corner-2.png" /></div>
    </div>
    <div class="addSubject">
        <div class="shadeLeft"></div>
        <div id="noShade">
        	<?php echo form_open('admin/insertinfo')?>
            <div class="noshadeHead">添加信息</div>
            <div class="shoujian-text">
                <a>*</a>收件人
                <input type="text" style="height:27px; width:143px;" name="addressee" onchange="" />
            </div>
            <div class="xiaoquSelect">
                <a>*</a>校区
                <select name="campus" style="height:28px; width:71px; font-size:14px; padding:5px; cursor:pointer;">
                    <option value="南区">南区</option>
                    <option value="北区">北区</option>
                </select>
            </div>
            <div class="xiaoquSelect">
                <a>*</a>类型
                <select name="selectType" style="height:28px; width:77px; font-size:14px; padding:5px; cursor:pointer;">
                    <option value="包裹">包裹</option>
                    <option value="挂号信">挂号信</option>
                    <option value="印刷品">印刷品</option>
                    <option value="汇款单">汇款单</option>
                    <option value="退件">退件</option>
                </select>
            </div>
            <input type="submit" style="margin:120px 15px auto auto; width:86px; height:27px; background:url(static/image_backstage/informationAdmin/add.png) no-repeat; border:none 0px #000;"  value="" />
            </form>
        </div>
        <div class="shadeRight"></div>
    </div>
    <div class="up-down">
        <div><img alt="" src="static/images/corner-3.gif" /></div>
        <div class="shadeBotttom"></div>
        <div><img alt="" src="static/images/corner-4.gif" /></div>
    </div>
</div>
<div id="nowList">
    <div class="up-down">
        <div><img alt="" src="static/images/corner-1.png" /></div>
        <div class="listTop"></div>
        <div><img alt="" src="static/images/corner-2.png" /></div>
    </div>
    <div class="listSubject">
        <div class="listLeft"></div>
        <div id="listContent">
            <div class="noshadeHead">当前信息列表</div>
            <div id="listHead">
                <div class="xuhao">序号</div>
                <div class="shoujianren">收件人</div>
                <div class="xiaoqu">校区</div>
                <div class="leixing">类型</div>
                <div class="daojian">到件日期</div>
                <div class="caozuo">操作</div>
            </div>
            <?php echo form_open('admin/delall');?>
            <?php
                $count = 0;
                $per_page_count = $this->Get_total_rows->get_per_page();//每页数量
                $cur_page;
                $first_num = ($cur_page - 1) * $per_page_count;
                if( ! empty($rows)){
	                 foreach ($rows as $row) {
	                 	echo '<div class="ulList">';
	                    echo '<input class="ulList_box" id="get_uname" type="checkbox" name="info_id[]" value="'.$row->time.'" />';
	                    echo '<div class="num">'.($first_num + $count + 1).'</div>';
	                    echo '<div class="change-list">';
	                        echo '<input type="text" class="shoujianren" value="'.$row->addressee.'" name="addresser"  />';
	                        echo '<select name="campus" class="xiaoqu">';
	                        echo '<option selected="selected" value="'.$row->area.'">'.$row->area.'</option>';
	                            echo '<option value="南区">南区</option>';
	                            echo '<option value="北区">北区</option>';
	                        echo '</select>';
	                        echo '<select name="selectType" id="type_id" class="leixing" >';
	                        	echo '<option selected="selected" value="'.$row->type.'">'.$row->type.'</option>';
	                            echo '<option value="印刷品">印刷品</option>';
	                            echo '<option value="挂号信">挂号信</option>';
	                            echo '<option value="包裹">包裹</option>';
	                            echo '<option value="汇款单">汇款单</option>';
	                            echo '<option value="退件">退件</option>';
	                        echo '</select>';
	                    echo '</div>';
	                    echo '<div class="daojian">'.$row->time.'</div>';
	                    echo '<div class="caozuo">';
	                        echo '<a class="delete" href="index.php/admin/delete/'.substr($row->time,0,10).'/'.substr($row->time,11,8).'">删除</a>';
			                echo '<a class="edit"  href="index.php/admin/dis">提交</a>';//index.php/admin/upd/'.$row->addressee.'/'.$row->area.'/'.$row->type.'/'.substr($row->time,0,10).'/'.substr($row->time,11,8).'
	                    echo '</div>';
	                	echo '</div>';
	                	++$count;				
					}
               }
							
            ?>
            <div id="listFoot">
                <!-- <div class="listPage">
                    <a href="#">上一页</a>
                    <a id="grey"href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a>...</a>
                    <a href="#">8</a>
                    <a href="#">9</a>
                	</div>
                 -->
                 <?php echo $this->data['page']; ?>
                <div id="submitImage">
                	
                    <!-- <input type="image" src="static/image_backstage/informationAdmin/delete.png" />  -->
                    <input type="submit" name="delall" style="background:url(static/image_backstage/informationAdmin/delete.png) no-repeat; width:75px; height:25px; border:none 0px #fff;" value="" />
                    <!-- <input type="image" src="static/image_backstage/informationAdmin/sure_2.png" /> 
                    <input type="submit" name="save" style="background:url(static/image_backstage/informationAdmin/sure_2.png) no-repeat; width:75px; height:25px; border:none 0px #fff;" value="" />
                     -->
                    </form>
                </div>
            </div> 
        </div>
        <div class="listRight"></div>
    </div>
    <div class="up-down">
        <div><img alt="" src="static/images/corner-3.gif" /></div>
        <div class="listBotttom"></div>
        <div><img alt="" src="static/images/corner-4.gif" /></div>
    </div>
</div>
