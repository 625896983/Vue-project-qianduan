<template>
	<div class="login">
		<div id="black">
			<div>
			<h1>登录成功</h1>
			<h2>即将跳转首页</h2>
			</div>
		</div>
		<div class="language">
			<div class="header-return">
			    <router-link to="/"></router-link>
			</div>
			<span class="language-box">
				<i class="language-chn"></i>
			</span>
			
			<div class="choose-lang">
				<div class="choose-lang-box">
					<div class="choose-lang-btn">
						<i class="language-chn"></i>
						<span>中文</span>
					</div>
	
					<div class="choose-lang-btn">
						<i class="language-en"></i>
						<span>English</span>
					</div>
				</div>
				
			</div>
		</div>
		
		<div class="login-form">
			<form action="../Home/Index.html" method="get">
				<h1 class="login-logo">
					<img src="../assets/Theme/images/logo.png">
				</h1>
				
				<div class="login-form-group">
					<label class="icon-phone">账号</label>
	
					<div class="input-group">
						<input placeholder="请输入账号" v-model="username">
						<i class="clear-keyword"></i>
					</div>
				</div>
				
				<div class="login-form-group">
					<label class="icon-pw">登录密码</label>
	
					<div class="input-group">
						<input type="password" placeholder="请输入登录密码" v-model="password">
						<i class="clear-keyword"></i>
					</div>
				</div>
				
			<!-- 	<div class="login-form-group">
					<label class="icon-code">验证码</label>
	
					<div class="input-group form-code">
						<input placeholder="请输入图中的字符">
						<i class="clear-keyword"></i>
						
						<img src="../assets/Theme/img/ValidateImage.jpg">
					</div>
				</div> -->
				
				<div class="login-submit">
					<button type="button" @click='log'>登录</button>
				</div>
				
				<div class="login-links">
					<router-link to="/Register" class="login-links-1">立即注册</router-link>
					<!-- <a href="../Register/Register.html" class="login-links-1">立即注册</a> -->
					<!-- <a href="FindPW.html" class="login-links-2">忘记密码？</a> -->
				</div>
			</form>
		</div>
	</div>
	
</template>

<script>
	import $ from "../assets/Theme/js/jquery-1.11.2.min.js";
	import {getCookie,setCookie,removeCookie} from "../assets/Theme/js/cookie.js";
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	import axios from 'axios';
	// import Home from '../views/Home.vue'
	
	Vue.use(VueRouter)
	export default{
		data(){
			return{
				username:'',
				password:''
			}
		},
		methods:{
			log(){
				let params = new URLSearchParams();
				params.append('username', this.username)
				params.append('password', this.password)
				axios({
				  url: '/api/login',
				  method: 'post',
				  data: params,
				 
				}).then(
				  res => {
				    if(res.data.err==0){
				      //种token,跳转user
					  
				      window.localStorage.setItem('token',res.data.token);
					  window.localStorage.setItem('username',res.data.data.username);
					
					this.$store.commit('change',this.username)
				
					console.log(1)
				      black.style.display="flex"
				      setTimeout(()=>{
				      this.$router.push("/")
				      },1500)
				    }else{
				      alert(res.data.msg)
				    }
				  }
				)
				
			},
			

		},
		mounted(){
			$(function(){
				$('.language-box').click(function(){
					$('.choose-lang').fadeIn();
				});
				
				$('.choose-lang').click(function(){
					 $(this).fadeOut();
				});
			});
		}
	}
</script>

<style>
	#black{height: 100%;width:100%;background: rgba(0,0,0,0.3);position:absolute;z-index: 10;display: none;justify-content: center;align-items: center;}
	#black>div{background: white;text-align: center;} 
	#black {color: orange;}
</style>
