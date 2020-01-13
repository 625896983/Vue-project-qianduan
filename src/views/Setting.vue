<template>
	<div class='Setting' id='Setting'>
		<div id="black">
			<div>
			<h1>注销成功</h1>
			<h2>即将返回首页</h2>
			</div>
		</div>
		<header class="header">
			<div class="header-return">
			    <router-link to="/"></router-link>
			</div>
			
			<div class="logo">设置</div>
		</header>
		
		<section class="container">
			<div class="setting-menu setting-photo" @click="showtab('#photo')">
				<div class="setting-img">
					<img src="../assets/Theme/images/member.png">
				</div>
		
				<h1>账号:{{this.$store.state.account}}</h1>
				
				<div class="user-level">
					<h3>信用</h3>
					<i></i>
					<i></i>
					<i></i>
					<i></i>
					<i></i>
				</div>
		
				<span>更换头像</span>
			</div>
			
			<div class="setting-menu">
				<!-- <a href="SettingName.html" class="setting-menu-1"> -->
					<a href="" class="setting-menu-1">
					<i></i>
					<h3>用户名</h3>
					
					<span>{{this.$store.state.account}}</span>
				</a>
		
				<a href="javascript:void();" @click="showpop('#lang');" class="setting-menu-2">
					<i></i>
					<h3>多语言</h3>
					
					<span>中文</span>
				</a>
			</div>
			<div class="clr"></div>
			
			<div class="setting-menu">
				<!-- <a href="../Wallet/MyBankcard.html" class="setting-menu-3"> -->
					<a href="" class="setting-menu-3">
					<i></i>
					<h3>我的银行卡</h3>
					
					<span>3张</span>
				</a>
		
				<!-- <a href="../Wallet/MyAssets.html" class="setting-menu-4"> -->
					<a href="" class="setting-menu-4">
					<i></i>
					<h3>我的资产</h3>
				</a>
			</div>
			<div class="clr"></div>
			
			<div class="setting-menu">
				<!-- <a href="SettingPW.html" class="setting-menu-5"> -->
					<a href="" class="setting-menu-5">
					<i></i>
					<h3>登录密码</h3>
					
					<span>保护中</span>
				</a>
		
				<!-- <a href="SettingPayPW.html" class="setting-menu-6"> -->
					<a href="" class="setting-menu-6">
					<i></i>
					<h3>支付密码</h3>
					
					<span>保护中</span>
				</a>
			</div>
			<div class="clr"></div>
			
			<div class="setting-menu">
				<!--没有开店铺的时候显示这个-->
				<!--<a href="ApplyShop.html" class="setting-menu-9">
					<i></i>
					<h3>我的店铺</h3>
				</a>-->
				
				<!-- <a href="ShopInfo.html" class="setting-menu-9"> -->
					<a href="" class="setting-menu-9">
					<i></i>
					<h3>我的店铺</h3>
				</a>
				
				<!-- <a href="ShopProduct.html" class="setting-menu-16"> -->
					<a href="" class="setting-menu-16">
					<i></i>
					<h3>产品管理</h3>
				</a>
				
				<!-- <a href="ShopOrder.html" class="setting-menu-17"> -->
					<a href="" class="setting-menu-17">
					<i></i>
					<h3>店铺订单</h3>
				</a>
			</div>
			<div class="clr"></div>
			
			<div class="setting-menu">
				<!-- <a href="../Shop/MyOrder.html" class="setting-menu-10"> -->
					<a href="" class="setting-menu-10">
					<i></i>
					<h3>我买到的宝贝</h3>
				</a>
		
				<!-- <a href="MyAddress.html" class="setting-menu-11"> -->
					<a href="" class="setting-menu-11">
					<i></i>
					<h3>收货地址管理</h3>
				</a>
			</div>
			<div class="clr"></div>
			
			<div class="setting-menu">
				<!-- <a href="../Article/Announce.html" class="setting-menu-7"> -->
					<a href="" class="setting-menu-7">
					<i></i>
					<h3>公告</h3>
					
					<em class="remind"></em>
				</a>
		
				<!-- <a href="MyMessage.html" class="setting-menu-8"> -->
					<a href="" class="setting-menu-8">
					<i></i>
					<h3>系统消息</h3>
				</a>
			</div>
			<div class="clr"></div>
		
			<div class="setting-menu">
				<!-- <a href="FeedBack.html" class="setting-menu-12"> -->
					<a href="" class="setting-menu-12">
					<i></i>
					<h3>投诉建议</h3>
				</a>
		
				<!-- <a href="Share.html" class="setting-menu-13"> -->
					<a href="" class="setting-menu-13">
					<i></i>
					<h3>分享</h3>
				</a>
		
				<a href="" class="setting-menu-14">
					<i></i>
					<h3>版本</h3>
					
					<span>1.2.2<em class="new-version">新版本</em></span>
					
				</a>
		
				<!-- <a href="../Article/ArticleDetails.html" class="setting-menu-15"> -->
					<a href="" class="setting-menu-15">
					<i></i>
					<h3>关于</h3>
				</a>
			</div>
			<div class="clr"></div>
			
			<div class="logout">
				<!-- <a href="../Login/Login.html">退出登录</a> -->
				<a @click="logout" style="cursor: pointer;">退出登录</a>
			</div>
		</section>
		
		<!--修改头像弹窗-->
		<div id="photo" class="slide-warp"  style="z-index: 10000; display: none; bottom: -100%;">
		    <div class="slide-box">
		        <ul>    
					<li>
						<a href="javascript:;">手机拍照</a>
					</li>
		
					<li>
						<a href="javascript:;">相册选择图片</a>
					</li>
				</ul>
				
				<ul>
					<li class="cancle">
						<a href="javascript:;" @click="hidetab('#photo');">取消</a>
					</li>
		        </ul>
		    </div>
		</div>
			
		<!--选择语言弹窗-->
		<div id="lang" class="popup">
		    <div class="popup-box">
		        <div class="popup-box-title">选择语言</div>
		        
		        <div class="popup-box-content">
		            <form>
		                <div class="choose-list">
		                    <ul>
		                        <li>
		                            <input type="radio">
		                            <label>English</label>
		                        </li>
		                        
		                        <li>
		                            <input type="radio">
		                            <label>简体中文</label>
		                        </li>
		                    </ul>
		                </div>
		            </form>
		        </div>
		        
		        <div class="popup-submit">
		            <button class="cancle-btn">取消</button>
					<button type="submit" class="confirm-btn">确认</button>
		        </div>
		    </div>
		</div>
		
		
	</div>
</template>
 <script>
	import $ from "../assets/Theme/js/jquery-1.11.2.min.js";
	
	
	export default {
		data(){
			return{
				nickname:''
			}
		},
	
		
			methods:{
				
			showtab:function(id){
				$(id).css("display","block");
				$(id).animate({bottom:"0"}, 200);
			},
				hidetab:function (id){
					$(id).css("display","none");
					$(id).animate({bottom:"-100%"}, 200);
				},
				showpop:function (id){
					$(id).fadeIn();
				
					var h = ($(window).height() - $(id).children('.popup-box').height())/2;
					$(id).children('.popup-box').css('margin-top',h);
				},
				logout:function(){
					window.localStorage.removeItem('token');
					window.localStorage.removeItem('username');
					this.$store.commit('change','未登录')
					var h = ($(window).height() - $('#black').height());
				
					$('#black').css({'display':'flex','top':h+'px'});
					
					setTimeout(()=>{
					this.$router.push("/")
					},1000)
				}
			},
			mounted(){
				// let token = window.localStorage.getItem('token');
				// // let cookiename = window.localStorage.getItem('username');
				// if(token){
					
				
				// 	this.nickname=cookiename;
					
				// 		}
      $('.cancle-btn').click(function(){
      	$('.popup').fadeOut();
      });
      
      
      //Tab控制选项卡	
      $('.tab-item span').mouseover(function () {
      	//下划线初始位置
      	$('.lava').css({left:$('.tab-item span:first').position()['left']});
      
      	//下划线滚动
      	$('.lava').stop().animate({left:$(this).position()['left']}, {duration:200});
      
      	//改变颜色
      	$(this).addClass('active').siblings().removeClass("active");
      
      	//内容切换
      	$('.tab-content').stop().animate({left:$(this).position()['left'] * (-2)}, {duration:200});
      });
      
      $('.tab-title-s span').mouseover(function () {
      	//下划线初始位置
      	$('.lava').css({left:$('.tab-title-s span:first').position()['left']});
      
      	//下划线滚动
      	$('.lava').stop().animate({left:$(this).position()['left']}, {duration:200});
      
      	//改变颜色
      	$(this).addClass('active').siblings().removeClass("active");
      
      	//内容切换
      	$('.tab-content').stop().animate({left:$(this).position()['left'] * (-3)}, {duration:200});
      });
      

    }
		
	}
</script>
<style scoped>
	html,body{height: 100%;width:100%;}
	#black{height: 100%;width:100%;background: rgba(0,0,0,0.3);position:fixed;z-index: 10;display: none;justify-content: center;align-items: center;}
	#black>div{background: white;text-align: center;} 
	#black {color: orange;}
	
</style>

<!-- <script src="../assets/Theme/js/jquery-1.11.2.min.js"></script> 
<script src="../assets/Theme/js/main.js"></script> -->
