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
						<div class="dropdown">
							<button class="btn dropdown-toggle rounded-0 border-secondary bg-mydark py-3" type="button" id="select" data-bs-toggle="dropdown" aria-expanded="false">
								<span>All Movie </span>       
							</button>
							<!-- dropdown menu  -->
							<ul class="dropdown-menu" aria-labelledby="select">
								<!-- creo i dropdown-item ciclando gli oggetti nell'array 'mediaCategories' del file store  -->
								<li v-for="(item,index) in store.mediaCategories" :key="index" class="px-2">
									<a class="dropdown-item" href="#">{{item.name}}</a>
								</li>
							</ul>
						</div>
						<!-- input  -->
						<input type="text" class="border-secondary p-3 bg-mydark" placeholder="Search ...">
						<!-- button  -->
						<button class="py-3 px-4" id="search">Search</button>
					</div>
				</div>
			</div>
		</section>
		<!-- NAVBAR  -->
		<nav class="my-container">
			<div class="my-row-between align-items-center">
				<ul>
					<!-- ciclo gli item del menu  -->
					<li v-for="(item,index) in arraynav" :key="index" class="nav-item">
						<a href="#">
							<h4>
								{{ item.title }}
								<!-- visualizzo l'arrow solo se l'item ha un dropdwon al suo interno  -->
								<i v-if="item.dropdownList" class="fa-solid fa-caret-down"></i>
							</h4>
						</a>
						<!-- DROPDOWN, visualizzo il menu solo se la proprietà 'dropdown' dell'item risulta vera  -->
						<div v-if="item.dropdown" class="first-dropdown dropdown-menu bg-mydark p-3">
							<ul class="list-column my-3">
								<!-- ciclo i dropdown-item nell'array della proprietà 'dropdownList' presente negli item del menu -->
								<li v-for="(link,index) in item.dropdownList" :key="index">
									<a href="#">
										{{ link.label }}
										<!-- visualizzo l'arrow solo se esiste un ulteriore dropdown menu  -->
										<span v-if="link.shopMenu" class="arrow">&rsaquo;</span>
									</a> 
									<!-- visualizzo il secondo dropdown se esiste la proprietà 'shopmenu' nell'ultimo oggetto ciclato  -->
									<div v-if="link.shopMenu" class="second-dropdown dropdown-menu bg-mydark p-3">
										<ul class="list-column">
											<!-- ciclo gli ultimi item nello shopMenu  -->
											<li v-for="(item,index) in link.shopMenu" :key="index">
												<a href="#">{{ item }}</a>
											</li>
										</ul>
									</div>
								</li>					
							</ul>
						</div>
					</li>
				</ul>
				<div id="cart" class="ms-3">
					<i class="fa-solid fa-basket-shopping"></i>
					<span class="green-dot bg-mygreen">0</span>
					<!-- dropdown -->
					<div class="dropdown-menu">
						No products in the cart.
					</div>
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
				// SEARCHBAR 
				.dropdown{
					display: inline-block;
					#select{
						padding-left: 2.5rem;
						transition: 0;
						&:focus{
							outline: 1px solid $green-primary;
						}
						span{
							color: rgb(160,160,160);
							&::after{
								content: '';
								width: .8rem;
								display: inline-block;
							}
						}
					}
				}
				input{
					outline: none;
					caret-color: $green-primary;
					width: 250px;
					border-left: none;
				}
				#search{
					border: none;
					background-color: $green-primary;
				}
				
			}
		}
		// NAVBAR 
		nav{
			ul{	
				li.nav-item{
					position: relative;
					&:hover{
						.first-dropdown{
							display: block;
						}
					}
					h4{
						font-size: 1.2rem;
						padding: 2rem 2.5rem 2rem 0;
						margin-bottom: 0;
						i{
							font-size: 1.2rem;
							position: relative;
						}
					}		
					// dropdown
					.first-dropdown{
						top: 70%;
						left: -1rem;
						li{
							position: relative;
							line-height: 3rem;
							&:hover{
								.second-dropdown{
									display: block;
								}
							}
							
							span.arrow{
								position: absolute;
								right: 1px;
								font-size: 1.25rem;
							}
							.second-dropdown{
								top: 0;
								left: 100%;
							}
						}
					}
				}
			}
			#cart{
				position: relative;
				cursor: pointer;
				.green-dot{
					position: absolute;
					top: -12px;
					left: 7px;
					display: inline-block;
					height: 1.2rem;
					width: 1.2rem;
					font-size: .75rem;
					border-radius: 50%;
					text-align: center;
					line-height: 1.2rem;	
				}
				&:hover{
					.dropdown-menu{
						display: block;
						padding: 35px;
						width: 320px;
						right: -1rem;
						top: 50px;
					}
				}
			}
		}
	}
  
</style>