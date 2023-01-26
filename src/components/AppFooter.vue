<script>
	import { store } from '../store'
	export default {
		props:{
			objectCategories: Object,
			objectInformation: Object
		},
		data(){
			return{
				store
			}
		}
	}
</script>

<template>
	<footer>
		<section id="background">
			<div id="layover" class="w-100 h-100">
				<div class="my-container">
					<div class="my-row-between">
						<div class="col-3 pe-4">
							<div class="title">	
								<h5>About Us</h5>
							</div>
							<p>Mauris malesuada arcu eu posuere eleifen. Ut egestas tortor at leo egestas tincidunt. Nam tincidunt metus tristique tristique viverra. Mauris erat ante, egestas vitae dapibus seds.</p>
							<ul id="social-dots">
							<!-- ciclo le icone nell'array presente nel file store-->
								<li v-for="(item,index) in store.socialIcons" :key="index">
									<a href="#" :class="item"></a>
								</li>
								<li>
									<a href="#" class="fa-brands fa-pinterest"></a>
								</li>
							</ul>
						</div>
						 <div class="col-3 px-3">
							<div class="title">	
								<h5>{{ objectCategories.title }}</h5>
							</div>
							<ul class="list-column">
								<!-- ciclo gli item nella lista presente in objectCategories -->
								<li v-for="(item,index) in objectCategories.list" :key="index">
									<a href="#" class="font-md">{{ item }}</a>
								</li>
							</ul>
						</div>
						<div class="col-3 px-3">
							<div class="title">	
								<h5>{{ objectInformation.title }}</h5>
							</div>
							<ul class="list-column">
								<!-- ciclo gli item nella lista presente in objectInformation -->
								<li v-for="(item,index) in objectInformation.list" :key="index">
									<a href="#" class="font-md">{{ item }}</a>
								</li>
							</ul>
						</div>
						<div class="col-3 ps-4">
							<div class="title">	
								<h5>Recent Posts</h5>
							</div>
							<ul class="list-column">
								<!-- ciclo i primi 3 oggetti dell'array 'posts' presente nel file 'store' -->
								<li v-for="(item,index) in store.posts.slice(0,3)" :key="index">
									<div class="my-row-between">
										<img :src="item.image" :alt="item.title">
										<div class="info pt-1 ps-3">
											<a href="#" class="mb-1">{{ item.title }}</a>
											<span>{{ item.date }}</span>
										</div>
									</div>
								</li>
							</ul>
						</div> 
					</div>
				</div>
			</div>
		</section>
		<div class="my-container" id="last-container">
			<div class="my-row-between">
				<div class="col-left">
					<ul>
						<li><a href="#" class="font-md">Tram and Conditions </a></li>
						<li><a href="#" class="font-md">Policy</a></li>
						<li><a href="#" class="font-md">About</a></li>
					</ul>
				</div>
				<div class="col-right">
					&copy;2020<span class="color-green">&commat;Themepul</span> All Rights Reserved.
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss">
	@use '../scss/generals.scss' as *;
	@use '../scss/partials/variables' as *;

	footer{
		#background{
			background-image: url('../../public/img/ft-bg.jpg');
			background-size: cover;
			#layover{
				background-color: $secondary; opacity: .92; 
				background-position: center;
				padding: 70px 0;
				.title{
					position: relative;
					margin-bottom: 2.25rem;
					h5::after{
						content: "";
						width: 33px;
						height: 2px;
						background: #fff;
						position: absolute;
						left: 0;
						bottom: -5px;
					}
				}
				ul.list-column{
					li{
						margin-bottom: 1.75rem;
					}
				}
				#social-dots{
					width: 80%;
					a{
						height: 2.5rem;
						width: 2.5rem;
						border-radius: 50%;
						text-align: center;
						line-height: 2.5rem;
						&.fa-facebook-f{
							background-color: $facebook;
						}
						&.fa-twitter{
							background-color: $twitter;
						}
						&.fa-linkedin-in{
							background-color: $linkedin;
						}
						&.fa-instagram{
							background-color: rgb(194,45,41);
						}
						&.fa-pinterest{
							background-color: rgb(175,11,27);
						}
					}
				}
				img{
					height: 80px;
					width: 86px;
				}
				.info{
					a{
						font-weight: 500;
						line-height: 26px;
						display: block;
					}
				}
			}
		}

		#last-container{
			.my-row-between{
				align-items: center;
				height: 4.25rem;
				ul{
					li{
						padding-right: 1.5rem;;
					}
				}
			}
		}
	}
	
</style>