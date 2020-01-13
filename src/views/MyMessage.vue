<template>
  <div class="MyMessage">
   <header class="header">
   	<div class="header-return">
   	    <!-- <a href="javascript:history.go(-1);"></a> -->
		<router-link to="/"></router-link>
   	</div>
   	
   	<div class="logo">系统消息</div>
   </header>
   
   <section class="container">
   	<div class="no-content">
   		<i></i>
   		<p>暂无内容</p>
   	</div>
   	
   	<div class="article-box">
   		<a href="" class="article-list">
   			<h3>消息标题</h3>
   			<p>2018-6-27 20:51:42</p>
   			<em class="remind"></em>
   		</a>
   		
   		<a href="" class="article-list">
   			<h3>消息标题</h3>
   			<p>2018-6-27 11:16:52</p>
   			<em class="remind"></em>
   		</a>
   		
   		<a href="" class="article-list">
   			<h3>消息标题</h3>
   			<p>2018-6-27 11:16:52</p>
   		</a>
   		
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
