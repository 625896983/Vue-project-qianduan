<template>
	<div class="ShopCart">
		<header class="header">
			<div class="header-return">
				<!-- <a href="javascript:history.go(-1);"></a> -->
				<router-link to="/ShopIndex"></router-link>
			</div>
		
			<div class="logo">
				购物车<span>(4)</span>
			</div>
		</header>
		
		<section class="container shopcart-container">
			<div class="shopcart">
				<div class="shopcart-store">
					<div class="select-item">
						<input type="checkbox">
					</div>
					<a href="ShopStore.html" class="order-shop fl">店铺名字</a>
				</div>
				
				<div class="shopcart-list">
					<div class="select-item">
						<input type="checkbox">
					</div>
		
					<img src="../assets/Theme/img/p1.jpg">
		
					<div class="shopcart-info">
						<a href="">金龙鱼 食用油 葵花籽食用调和油5L</a>
						<p>¥19.9</p>
		
						<div class="choose-num">
							<a href=""><i class="minus-num"></i></a>
							<input value="1">
							<a href=""><i class="plus-num"></i></a>
						</div>
					</div>
					
					<div class="shopcart-delect">删除</div>
				</div>
				
				<div class="shopcart-list">
					<div class="select-item">
						<input type="checkbox">
					</div>
		
					<img src="../assets/Theme/img/p3.jpg">
		
					<div class="shopcart-info">
						<a href="">新良原味面包粉 烘焙原料 面包机专用粉 高筋面粉 2.5kg</a>
						<p>¥19.9</p>
		
						<div class="choose-num">
							<a href=""><i class="minus-num"></i></a>
							<input value="1">
							<a href=""><i class="plus-num"></i></a>
						</div>
					</div>
					
					<div class="shopcart-delect">删除</div>
				</div>
			</div>
		
			<div class="shopcart">
				<div class="shopcart-store">
					<div class="select-item">
						<input type="checkbox">
					</div>
					<a href="ShopStore.html" class="order-shop fl">店铺名字</a>
				</div>
				
				<div class="shopcart-list">
					<div class="select-item">
						<input type="checkbox">
					</div>
		
					<img src="../assets/Theme/img/pic_2-1.jpg">
		
					<div class="shopcart-info">
						<a href="">李锦记 锦珍生抽 非转基因酿造酱油 调味调料 1.65L</a>
						<p>¥19.9</p>
		
						<div class="choose-num">
							<a href=""><i class="minus-num"></i></a>
							<input value="1">
							<a href=""><i class="plus-num"></i></a>
						</div>
					</div>
					
					<div class="shopcart-delect">删除</div>
				</div>
				
				<div class="shopcart-list">
					<div class="select-item">
						<input type="checkbox">
					</div>
		
					<img src="../assets/Theme/img/pic_2-3.jpg">
		
					<div class="shopcart-info">
						<a href="">金龙鱼 食用油 葵花籽食用调和油5L</a>
						<p>¥19.9</p>
		
						<div class="choose-num">
							<a href=""><i class="minus-num"></i></a>
							<input value="1">
							<a href=""><i class="plus-num"></i></a>
						</div>
					</div>
					
					<div class="shopcart-delect">删除</div>
				</div>
				
				<div class="shopcart-list">
					<div class="select-item">
						<input type="checkbox" >
					</div>
		
					<img src="../assets/Theme/img/pic_2-2.jpg">
		
					<div class="shopcart-info">
						<a href="">金龙鱼 食用油 葵花籽食用调和油5L</a>
						<p>¥19.9</p>
		
						<div class="choose-num">
							<a href=""><i class="minus-num"></i></a>
							<input value="1">
							<a href=""><i class="plus-num"></i></a>
						</div>
					</div>
					
					<div class="shopcart-delect">删除</div>
				</div>
			</div>
		
			<div class="shopcart">
				<div class="shopcart-store">
					<div class="select-item">
						<input type="checkbox">
					</div>
					<a href="ShopStore.html" class="order-shop fl">店铺名字</a>
				</div>
				<div class="shopcart-list">
					<div class="select-item">
						<input type="checkbox" >
					</div>
		
					<img src="../assets/Theme/img/p1.jpg">
		
					<div class="shopcart-info">
						<a href="">金龙鱼 食用油 葵花籽食用调和油5L</a>
						<p>¥19.9</p>
		
						<div class="choose-num">
							<a href=""><i class="minus-num"></i></a>
							<input value="1">
							<a href=""><i class="plus-num"></i></a>
						</div>
					</div>
					
					<div class="shopcart-delect">删除</div>
				</div>
			</div>
		</section>
		
		<div class="shopcart-toolbar">
			<div class="select-all">
				<div class="select-box">
					<input type="checkbox">
					<p>全选</p>
				</div>
			</div>
		
			<div class="shopcart-sumbit">
				<div class="shopcart-summary">
					<b>总计：</b><span>¥17699.00</span>
				</div>
		
				<a href="ConfirmOrder.Html" class="shopcart-submit-btn">去结算<span>(3)</span></a>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>
