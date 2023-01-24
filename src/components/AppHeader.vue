<script>
	import { store } from '../store'
	export default {
		props:{
			arraynav: Array
		},
		data(){
			return{
				store
			}
		}       
	}
</script>

<template>
	<header>
		<!-- PRIMO CONTAINER  -->
		<div class="my-container" id="top-container">
			<!-- row  -->
			<div class="my-row-between">
				<!-- sx  -->
				<div class="col-left ">
					<div class="my-row-between">
						<div class="pe-3">
							<i class="fa-regular fa-envelope me-1"></i>
							<span>Superhit Top Movie </span>
							<b class="color-green">** King Star **</b>
						</div>					
						<ul>
							<!-- ciclo le icone nell'array presente nel file store-->
							<li v-for="(item,index) in store.socialIcons" :key="index">
								<a href="#">
									<i :class="item"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa-brands fa-google-plus-g"></i>
								</a>
							</li>
						</ul> 				
					</div>
				</div>
				<!-- dx  -->
				<div class="col-right">
					<a id="login" href="#">
						<i class="fa-solid fa-lock me-1"></i>
						<span>Login</span> 
					</a>
				</div>
			</div>
		</div>
		<!-- CONTAINER CENTRALE  -->
		<section>
			<div class="my-container py-3">
				<!-- row  -->
				<div class="my-row-between mb-4">
					<div id="logo">
						<img src="../../public/img/cropped-logo.png" alt="logo">
					</div>
					<!-- searchbar  -->
					<div id="searchbar" class="mt-4">
						<!-- select  -->
						<input type="text" class="border-secondary p-3" placeholder="Search ...">
						<button class="py-3 px-4">Search</button>
					</div>
				</div>
			</div>
		</section>
		<!-- NAVBAR  -->
		<nav class="my-container">
			<div class="my-row-between align-items-center">
				<ul>
					<!-- ciclo gli item del menu  -->
					<li v-for="(item,index) in arraynav" :key="index">
						<a href="#">
							<h4>
								{{ item.title }}
								<!-- visualizzo l'arrow solo se l'item ha un dropdwon al suo interno  -->
								<i v-if="item.dropdownList" class="fa-solid fa-caret-down"></i>
							</h4>
						</a>

					</li>
				</ul>
				<div id="cart">
					<i class="fa-solid fa-basket-shopping"></i>
					<span class="green-dot">0</span>
				</div>
			</div>
		</nav>
	
	</header>
</template>

<style lang="scss">
  	@use '../scss/generals.scss' as *;
	@use '../scss/partials/variables' as *;

	header{
		#top-container{
			.my-row-between{
				align-items: center;
				height: 4rem;
				.col-left{
					ul{
						i{
							margin-left: 1rem;
							&.fa-facebook-f{
								color: $facebook;
							}
							&.fa-twitter{
								color: $twitter;
							}
							&.fa-linkedin-in{
								color: $linkedin
							}
							&.fa-instagram{
								color: red;
							}
							&.fa-google-plus-g{
								color: rgb(255, 106, 0);
							}
						}
					}
				}
				.col-right{
					#login{
						i{
							font-size: .8rem;
						}
						span{
							vertical-align:middle;
						}
					}
				}
			}		
		}

		section{
			border-top: $border-secondary;
			border-bottom: $border-secondary;
			.my-row-between{

				// select{
				// 	background-color: $dark;
				// 	color: rgb(152, 152, 152);
					
				// }
				input{
					background-color: $dark;
					outline: none;
					caret-color: $green-primary;
					width: 250px;
				}
				button{
					border: none;
					background-color: $green-primary;
				}
			}
		}

		nav{
			ul{			
				h4{
					font-size: 1.2rem;
					padding: 2rem 2.5rem 2rem 0;
					margin-bottom: 0;
					i{
						font-size: 1.2rem;
						position: relative;
					}
				}		
			}
			#cart{
				position: relative;
				.green-dot{
					position: absolute;
					top: -12px;
					left: 7px;
					display: inline-block;
					height: 1.2rem;
					width: 1.2rem;
					background-color: $green-primary;
					font-size: .75rem;
					border-radius: 50%;
					text-align: center;
					line-height: 1.2rem;
				}
			}
		}
	}
  
</style>