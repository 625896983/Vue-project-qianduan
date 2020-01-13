<template>
	<div class="Register">
		<div id="black">
			<div>
			<h1>注册成功</h1>
			<h2>即将跳转登录界面</h2>
			</div>
		</div>
		<header class="header">
			<div class="header-return">
				<router-link to="/Login"></router-link>
			    <!-- <a href="javascript:history.go(-1);"></a> -->
			</div>
			
			<div class="logo">注册</div>
		</header>
		
		<section class="container">
			<div class="register">
				<div class="form-widget">
					<form action="../Home/Home.html" method="get">
						<div class="form-box">
							<!-- <div class="form-group">
								<label class="form-label">邀请码</label>
		
								<div class="form-control">
									<input placeholder="请输入邀请码">
								</div>
							</div> -->
		
							<div class="form-group">
								<label class="form-label">帐&nbsp;&nbsp;号</label>
		
								<div class="form-control">
									<input placeholder="请输入1-6位账号" id="regacount" v-model="username">
								</div>
							</div>
		
							<!-- <div class="form-group">
								<label class="form-label">手机号码</label>
		
								<div class="form-control form-phone">
									<span>+86</span>
									<input placeholder="您的手机号码">
								</div>
							</div> -->
		
							<div class="form-group">
								<label class="form-label">登录密码</label>
		
								<div class="form-control">
									<input type="password" placeholder="请输入6~16位数字加字母"  id="regpass1" v-model="password">
								</div>
							</div>
							<div class="form-group">
								<label class="form-label">重复密码</label>
									
								<div class="form-control">
									<input type="password" placeholder="重复输入密码"  id="regpass2" >
								</div>
							</div>
		
						<!-- 	<div class="form-group">
								<label class="form-label">支付密码</label>
		
								<div class="form-cont 
									<input type="password" placeholder="请输入6位数字支付密码">
								</div>
							</div> -->
		
							<!-- <div class="form-group">
								<label class="form-label">验证码</label>
		
								<div class="form-control form-getcode">
									<input placeholder="填写验证码">
									<button>获取验证码</button>
								</div>
							</div> -->
						</div>
		
						<div class="form-submit">
							<button type="button" class="form-submit-btn" id="sure" @click='reg'>确定</button>
						</div>
						
					</form>
			
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	import axios from 'axios';
	// import Home from '../views/Home.vue'
	
	Vue.use(VueRouter)
	export default{
		data(){
			return{
				username: '',
				password: '',
			
			}
		},
		methods:{
			reg(){
				var reg1=/^\S{1,6}$/;
				var reg2=/^[A-Za-z0-9]{6,16}$/;
				var err1=""
				var err2=""
				var err3=""
				var black=document.getElementById("black")
				var regacount=document.getElementById("regacount")
				var regpass1=document.getElementById("regpass1")
				var regpass2=document.getElementById("regpass2")
				var sure=document.getElementById("sure")
				
				if(!reg1.test(regacount.value)){
					err1="账号长度不符或包含空字符"
				}else{err1=""}	
						
				if(!reg2.test(regpass1.value)){
					err2="密码格式不正确"
				}else{err2=""}	
				if(regpass1.value!=regpass2.value){
					err3="两次密码输入不一致"
				}else{err3=""}	
				if(err1||err2||err3){
					var Err=" "+err1+" "+err2+" "+err3;
					alert(Err)
				}else{
					let formData = new FormData();
					console.log(this.username)
					console.log(this.password)
					formData.append('username',this.username)
					formData.append('password',this.password)
					
					
					
					axios({
					  url: '/api/reg',
					  method: 'post',
					  data: formData
					}).then(
					  res => {
						 
					    if(res.data.err==0){
					      console.log(res.data);
					    black.style.display="flex"
					    setTimeout(()=>{
					    this.$router.push("/Login")
					    },1500)
					    }else{
							 alert(res.data.msg)
					   
						  
					    }
					  }
					)
						
						
					
					
					
				}
			}
		},
		mounted(){
			
  
	}
	}
	
</script>

<style>
	#black{height: 100%;width:100%;background: rgba(0,0,0,0.3);position:absolute;z-index: 10;display: none;justify-content: center;align-items: center;}
	#black>div{background: white;text-align: center;} 
	#black {color: orange;}

</style>
