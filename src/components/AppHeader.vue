<script>
	import { store } from '../store'
	export default {
		data(){
			return{
				store,
				socialIcons: [
				"fa-brands fa-facebook-f",
				"fa-brands fa-twitter",
				"fa-brands fa-linkedin-in",
				"fa-brands fa-instagram",
				"fa-brands fa-google-plus-g"
				]
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
						<div>
							<i class="fa-regular fa-envelope me-1"></i>
							<span>Superhit Top Movie </span>
							<b class="color-green">** King Star **</b>
						</div>					
						<ul>
							<!-- ciclo le icone  -->
							<li v-for="(item,index) in socialIcons" :key="index">
								<a href="#">
									<i :class="item"></i>
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
						<img src="../assets/img/cropped-logo.png" alt="logo">
					</div>
					<!-- searchbar  -->
					<div id="searchbar" class="mt-4">
						<!-- <select name="select" id="select" class="text-center border-secondary">ciao
							<option v-for="(item,index) in store.mediaCategories" :key="index" :value="item.name">
								{{ item.name }}
							</option>
							
						</select> -->
						<input type="text" class="border-secondary p-3" placeholder="Search ...">
						<button class="py-3 px-4">Search</button>
					</div>
				</div>
			</div>
		</section>
	
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
				}
				button{
					border: none;
					background-color: $green-primary;
				}
			}
		}
	}


  
  
</style>