<template>
<div class="Shopindex">
	<header class="header">
		<div class="header-return">
		    <!-- <a href="../Home/Index.html"></a> -->
			<router-link to="/"></router-link>
		</div>
		
		<div class="search_box">
			<input id="search" placeholder="请输入你要找的商品">
			<i class="clear-keyword"></i>
		</div>
		
		<div class="header-btn">
		<!-- 	<a href="ShopCart.html" class="header-shopcart"> -->
		<router-link to="/ShopCart" class="header-shopcart">
			<i>12</i>
		</router-link>
				
			<!-- </a> -->
		</div>
	</header>
	
	<!--筛选-->
	<div class="sort">
		<div class="sort-bar">
			<ul>
				<li id="openSort" class="active">
					<span>综合</span>
					<i></i>
					
					<div class="sort-box">
						<div class="sort-option">
							<ul>
								<li class="active">综合</li>
	
								<li>价格从低到高</li>
	
								<li>价格从高到低</li>
	
								<li>最新上架</li>
							</ul>
						</div>
					</div>
				</li>
				
				<li>
					<span>销量</span>
				</li>
				
				<li>
					<span>评价</span>
				</li>
			</ul>
		</div>
		
		<div class="sort-catalog">
			<a href="ProductCatalog.html">
				<i></i>
				<span>分类</span>
			</a>
		</div>
	</div>
	
	<section class="container shop-container">
		<div class="goods">
	        <div class="goods-box">
	            <a href="ProductDetails.html">
	                <div class="goods-img">
	                    <img src="../assets/Theme/img/p1.jpg">
	                </div>
	                
	                <h3>斜跨女包单肩斜挎包女学生韩版女包小包包2018新款春季潮时尚简约小包链条包</h3>
	                
	                <div class="goods-info">
	                    <div class="goods-price fl">
	                        <i>¥</i><b>99</b>
	                    </div>
	                    
	                    <div class="goods-sale fr">
	                        销量<span>999</span>件
	                    </div>
	                </div>
	            </a>
	        </div>
	        
	        <div class="goods-box">
	            <a href="ProductDetails.html">
	                <div class="goods-img">
	                    <img src="../assets/Theme/img/p2.jpg">
	                </div>
	                
	                <h3>双肩包女韩版学院风新款百搭休闲pu背包书包女学生双肩背包复古</h3>
	                
	                <div class="goods-info">
	                    <div class="goods-price fl">
	                        <i>¥</i><b>99</b>
	                    </div>
	                    
	                    <div class="goods-sale fr">
	                        销量<span>999</span>件
	                    </div>
	                </div>
	            </a>
	        </div>
	        
	        <div class="goods-box">
	            <a href="ProductDetails.html">
	                <div class="goods-img">
	                    <img src="../assets/Theme/img/p3.jpg">
	                </div>
	                
	                <h3>韩版百搭小清新包包日韩复古原宿学院风小方包</h3>
	                
	                <div class="goods-info">
	                    <div class="goods-price fl">
	                        <i>¥</i><b>99</b>
	                    </div>
	                    
	                    <div class="goods-sale fr">
	                        销量<span>999</span>件
	                    </div>
	                </div>
	            </a>
	        </div>
	        
	        <div class="goods-box">
	            <a href="ProductDetails.html">
	                <div class="goods-img">
	                    <img src="../assets/Theme/img/p1.jpg">
	                </div>
	                
	                <h3>斜跨女包单肩斜挎包女学生韩版女包小包包2018新款春季潮时尚简约小包链条包</h3>
	                
	                <div class="goods-info">
	                    <div class="goods-price fl">
	                        <i>¥</i><b>99</b>
	                    </div>
	                    
	                    <div class="goods-sale fr">
	                        销量<span>999</span>件
	                    </div>
	                </div>
	            </a>
	        </div>
	        
	        <div class="goods-box">
	            <a href="ProductDetails.html">
	                <div class="goods-img">
	                    <img src="../assets/Theme/img/p2.jpg">
	                </div>
	                
	                <h3>斜跨女包单肩斜挎包女学生韩版女包小包包2018新款春季潮时尚简约小包链条包</h3>
	                
	                <div class="goods-info">
	                    <div class="goods-price fl">
	                        <i>¥</i><b>99</b>
	                    </div>
	                    
	                    <div class="goods-sale fr">
	                        销量<span>999</span>件
	                    </div>
	                </div>
	            </a>
	        </div>
	        
	        <div class="goods-box">
	            <a href="ProductDetails.html">
	                <div class="goods-img">
	                    <img src="../assets/Theme/img/p3.jpg">
	                </div>
	                
	                <h3>斜跨女包单肩斜挎包女学生韩版女包小包包2018新款春季潮时尚简约小包链条包</h3>
	                
	                <div class="goods-info">
	                    <div class="goods-price fl">
	                        <i>¥</i><b>99</b>
	                    </div>
	                    
	                    <div class="goods-sale fr">
	                        销量<span>999</span>件
	                    </div>
	                </div>
	            </a>
	        </div>
			
			<div class="load-more">
				<a href="">点击加载更多</a>
			</div>
			
			<!--<div class="load-no-more">
				<span>没有更多了</span>
			</div>-->
	    </div>
	</section>
	</div>
	</template>
	<!-- // <script src="../../Theme/js/jquery-1.11.2.min.js"></script> -->
	<!--//<script src="../assets/Theme/js/main.js"></script>-->
	
	<script>
		import $ from "../assets/Theme/js/jquery-1.11.2.min.js"
		$(function(){
			
			//搜索框清除
			$('#search').on('input',function(){
				 
				if(!($('#search').val()=='')){
					$('.clear-keyword').show();
				}else{
					$('.clear-keyword').hide();
				}
				 
			});
			
			$('.clear-keyword').click(function(){
				$('#search').val('');
				$(this).hide();
			});
			
			
			//筛选
			$('.sort-bar li').click(function(){
				$(this).addClass('active').siblings().removeClass('active');
				
				if( $(this).attr('id')=='openSort'){
					$(this).toggleClass('open');
					$('body').css({'width':'100%','height':'100%','overflow':'hidden'});
				}
				else{
					$('#openSort').removeClass('open');
					$('body').css({'width':'auto','height':'auto','overflow':'auto'});
				}
				
			});
			
			$('.sort-bar li .sort-box').click(function(){
				$('#openSort').removeClass('open');
				$('body').css({'width':'auto','height':'auto','overflow':'auto'});
			});
			
			
			//$('#openSort').click(function(){
	//			$(this).addClass('open');
	//			$('.sort-box').show();
	//			
	//			$('body').css({'width':'100%','height':'100%','overflow':'hidden'});
	//		});
			
		})
		export default{}
	</script>


<script>
</script>

<style>
</style>
