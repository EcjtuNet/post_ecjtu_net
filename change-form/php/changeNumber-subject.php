<!--后台信息修改页主体-->
<div id="changeNum_subject">
    <div class="up-down">
        <div><img alt="" src="../images/corner-1.png" /></div>
        <div class="shadeTop"></div>
        <div><img alt="" src="../images/corner-2.png" /></div>
    </div>
    <div id="changeNum_content">
        <div class="changeNum-left"></div>
        <div id="changeNum_noshade">
            <div class="noshadeHead">账号信息修改</div>
            <div class="changeNum_user">
                <a>用户名：</a>
                <input class="uername-box" style="*margin-left:-32px;" type="text" />
            </div>
            <div class="changeNum_password">
                <a>密码：</a>
                <input class="password-box" style="*margin-left:-64px;" type="text" />
                <a id="changePassword_a" href="#">修改密码</a>
                <script type="text/javascript" src="../js/change-password.js"></script>
            </div>
            <div class="changeNum_connect">
                <a>联系电话：</a>
                <input class="uername-box" type="text" onclick="if(this.value=='18720071234'){this.value='';}" onblur="if (value ==''){value='18720071234'};" value="18720071234" />
            </div>
            <div class="changeNum_connect">
                <a>联系邮箱：</a>
                <input class="password-box" type="text" onclick="if(this.value=='1234abcd@qq.com'){this.value='';}" onblur="if (value ==''){value='1234abcd@qq.com'};" value="1234abcd@qq.com" />
            </div>
            <input id="save-image" type="image" src="../image_backstage/images_changeNumber/save.png" />
            <!--修改密码-->
            <div id="change-password">
                <div class="changePassword_upDown">
                    <div><img alt="" src="../images/corner-1.png" /></div>
                    <div class="changePassword-top"></div>
                    <div><img alt="" src="../images/corner-2.png" /></div>
                </div>
                <div id="changePassword_subject">
                    <div class="changePassword-left"></div>
                    <div id="changePassword_content">
                        <div id="changePassword_head">修改密码</div>
                        <div class="presentPassword">
                            当前密码：
                            <input type="text" class="changePassword_box" />
                        </div>
                        <div class="newPassword">
                            新密码：
                            <input type="text" class="changePassword_box" />
                        </div>
                        <div class="surePassword">
                            确认新密码：
                            <input type="text" class="changePassword_box" />
                        </div>
                        <div class="newPassword">
                            验证码：
                            <input type="text" class="changePassword_box" />
                        </div>
                        <div class="gery-12Size">请输入图中字符，不区分大小写</div>
                        <div class="check_content">
                            <div class="check_image"><img alt="验证码" src="../site/image.php" /></div>
                            <a href="../site/changeNumber.php" class="blue-12Size"> 看不清，换一张</a>
                        </div>
                        <input id="sure-image" type="image" src="../image_backstage/images_changeNumber/sure.png" />
                    </div>
                    <div class="changePassword-right"></div>
                </div>
                <div class="changePassword_upDown">
                    <div><img alt="" src="../images/corner-3.gif" /></div>
                    <div class="changePassword-bottom"></div>
                    <div><img alt="" src="../images/corner-4.gif" /></div>
                </div>
            </div>
        </div>    
        <div class="changeNum-right"></div>
    </div>
    <div class="up-down">
        <div><img alt="" src="../images/corner-3.gif" /></div>
        <div class="shadeBotttom"></div>
        <div><img alt="" src="../images/corner-4.gif" /></div>
    </div>
</div>