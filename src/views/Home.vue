<template>
  <div class='home'>
  <div class="user-top">
  	<div class="header user-header">
  		<div class="header-msg">
			<router-link to="/MyMessage"></router-link>
  			<!-- <a href="../User/MyMessage.html"></a> -->
  		</div>
  		
  		<div class="header-setting">
			<router-link to="/Setting"></router-link>
  			<!-- <a href="../User/Setting.html"></a> -->
  		</div>
  	</div>
  	
  	<div class="user-info">
  		<!-- <a href="../User/Setting.html"> -->
		<a>
  			<div class="user-photo">
  				<img src="../assets/Theme/images/member.png">
  			</div>
  
  			<h3>{{this.$store.state.account}}</h3>
  
  			<!-- <div class="user-level">
  				<i></i>
  				<i></i>
  				<i></i>
  				<i></i>
  			</div> -->
  		</a>
  	</div>
  	
  	<div class="user-wallet">
  	    <ul>
  			<li>
  				<a href="../Wallet/AccountRecord.html">
  					<h3>{{money}}</h3>
  					<span>余额</span>					
  				</a>
  			</li>
  
  			<li>
  				<a href="../Wallet/PointRecord.html">
  					<h3>{{jifen}}</h3>	
  					<span>积分</span>				
  				</a>
  			</li>
  		</ul>
  	</div>
  </div>
  
  <div class="user-container">
  	<div class="index-panel">
  		<div class="main-menu">
  			<ul>
  				<li>
  					<a href="../Transfer/TransferIn.html">
  						<i class="icon-transferin"></i>
  						<span>转入</span>
  					</a>
  				</li>
  				<li>
  					<a href="../Transfer/TransferOut.html">
  						<i class="icon-transferout"></i>
  						<span>转出</span>
  					</a>
  				</li>
  				<li>
  					<a href="../Trade/Buy.html">
  						<i class="icon-buy"></i>
  						<span>买入</span>
  					</a>
  				</li>
  				<li>
  					<a href="../Trade/Sell.html">
  						<i class="icon-sell"></i>
  						<span>卖出</span>
  					</a>
  				</li>
  			</ul>
  		</div>
  	</div>
  	<div class="clr"></div>
  	
  	<div class="index-panel">
  		<div class="index-announce">
  			<div class="announce-box">
  				<ul>
  					<li>
  						<a href=""><span>08-24</span>标题标题</a>
  					</li>
  					
  					<li>
  						<a href=""><span>08-22</span>公告标题公告的标题公告的标题哎哎哎</a>
  					</li>
  
  					<li>
  						<a href=""><span>08-20</span>USDT即将上市，敬请期待</a>
  					</li>
  
  					<li>
  						<a href=""><span>08-08</span>网站正式上线运营</a>
  					</li>
  				</ul>
  			</div>
  			
  			<a href="../Article/Announce.html" class="announce-more">更多</a>
  		</div>
  		
  		<div class="index-menu">
  			<ul>
  				<li class="no-open">
  					<a href="javascript:;" class="index-menu-1">
  						<i></i>
  						<span>ZFC游戏</span>
  					</a>
  				</li>
  				
  				<li class="no-open">
  					<a href="javascript:;" class="index-menu-2">
  						<i></i>
  						<span>ZFC社区</span>
  					</a>
  				</li>
  				
  				<li class="no-open">
  					<a href="javascript:;" class="index-menu-3">
  						<i></i>
  						<span>ZFC贷</span>
  					</a>
  				</li>
  			</ul>
  		</div>
  	</div>
  </div>
  
  <div class="nav">
  	<ul>
  		<li>
  			<!-- <a href="../Wallet/DigitalAssets.html" class="nav-assets"> -->
				<router-link  to="/DigitalAssets"  class="nav-assets">
				<i></i>
				<span>资产</span>	
				</router-link>
  				
  			
  		</li>
  		<li>
  			<a href="" class="scan-btn">
  				<i></i>
  				<!--<span>扫码转账</span>-->
  			</a>
  		</li>
  		<li>
  			<!-- <a href="../Shop/ShopIndex.html" class="nav-shop"> -->
				<span class="nav-shop shangcheng" style="cursor: pointer;">
  				<i></i>
  				<span>商城</span>
				</span>
  		</li>
  	</ul>
  </div>
  
  <!--暂未开放弹窗-->
  <div class="popup" id='none'>
      <div class="popup-box coming-soon">
          <div class="popup-box-content">
              <div class="coming-soon-content">
  				<img src="../assets/Theme/images/coming_soon.png">
  				<p>此功能暂未开放，敬请期待</p>
  			</div>
          </div>
          
          <div class="popup-submit">
  			<button type="submit" class="confirm-btn">确认</button>
          </div>
      </div>
  </div>
  </div>
  </template>
  
  
 
  <script>
	  import $ from "../assets/Theme/js/jquery-1.11.2.min.js"
	 
	  export default{
		  data(){
			  return{
				  // nickname:'未登录',
				  money:'???',
				  jifen:'???'
			  }
		  },
		  mounted(){
			 let token = window.localStorage.getItem('token');
			 // let cookiename = window.localStorage.getItem('username');
			 if(token ){
				 
				// this.nickname=cookiename;
				this.money='0';
				this.jifen='0'
			 }
			 $('.nav-shop.shangcheng').click(function(){
				 $('#none').css('display','block')
			 })
			 $(function() {
			 		
			 		 //公告轮播
			 		var adtimer;
			 		var wrap = $(".announce-box ul");
			 		var len = $(".announce-box ul li").length;
			 		if(len>1){
			 			$(".announce-box").hover(function(){
			 					clearInterval(adtimer);
			 				},
			 				function(){
			 					adtimer = setInterval(function(){
			 						var first = wrap.find("li:first");
			 						var HEIGHT = first.height();
			 						first.animate({
			 							marginTop:-HEIGHT+'px'
			 						},500,function(){
			 							first.css('marginTop',0).appendTo(wrap);
			 						})
			 					},2500)
			 				}).trigger('mouseleave');
			 		}
			 		
			 		//var num = 0;
			 //		var width = 0;
			 //		var length = $('.announce-box ul li').length;
			 //
			 //		for(var i=0; i<length; i++){
			 //			width += $('.announce-box ul li').eq(i).width();
			 //		}
			 //		
			 //		function goLeft() {
			 //
			 //			if (num == -parseInt(width)) {
			 //				num = 0;
			 //			}
			 //			num -= 1;
			 //			$(".announce-box ul").css({
			 //				marginLeft: num
			 //			})
			 //		}
			 //		
			 //		//设置滚动速度
			 //		var timer = setInterval(goLeft, 30);
			 //		
			 //		//设置鼠标经过时滚动停止
			 //		$(".announce-box ul").hover(function() {
			 //			clearInterval(timer);
			 //		},
			 //		function() {
			 //			timer = setInterval(goLeft, 30);
			 //		});
			 		
			 		//顶部滚动效果
			 		//$(window).scroll(function(){
			 //			
			 //			if ($(window).scrollTop() >= 20){
			 //				$("#fixedBg").addClass('user-header-fixed');
			 //			}
			 //			else{
			 //				$("#fixedBg").removeClass('user-header-fixed');
			 //			}
			 //		});
			 
			 	});
			 
			 	
			 	//暂未开放
			 	$(function(){
			 		$('.no-open').click(function(){
			 			$('.popup').fadeIn();	
			 			
			 			var h = ($(window).height() - $('.popup-box').height())/2;
			 			$('.popup-box').css('margin-top',h);
			 		});	
			 		
			 		$('.confirm-btn').click(function(){
			 			$('.popup').fadeOut();				  
			 		});
			 	}); 
		  }
	  }
  
	// import '../assets/Theme/css/base.css';
	// import '../assets/Theme/css/user.css'; 
	
  </script>
   <!-- <style scoped>
	 @import '../assets/Theme/css/base.css'; 
	 @import '../assets/Theme/css/user.css'; 
  </style> -->
  
  <!-- <link href="../assets/Theme/css/base.css" rel="stylesheet">
  <link href="../assets/Theme/css/user.css" rel="stylesheet"> -->


