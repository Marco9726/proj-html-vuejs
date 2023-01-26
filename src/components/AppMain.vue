<script>
	import AppJumbotron from './AppJumbotron.vue';
	import CardMovieList from './CardMovieList.vue';
	import CardNewsList from './CardNewsList.vue';
	import { store } from '../store';
	export default {
		components:{
			AppJumbotron,
			CardMovieList,
			CardNewsList
		},
		data(){
			return{
				store,
				pathBase: '../../public/img/',
				newMovies: [
					{
						title: 'Quisque auctor Movie in Strack',
						finalPath: '2-300x300.jpg',
						views: 953,
						date: 'Febrary 12, 2016',
						time: '2.30.00'
					},
					{
						title: 'New Movie Quisque in Strack',
						finalPath: '5-300x300.jpg',
						views: 722,
						date: 'Febrary 12, 2016',
						time: '2.30.00'
					},
					{
						title: 'Movie Action Garila English',
						finalPath: '3-300x300.jpg',
						views: 364,
						date: 'Febrary 12, 2016',
						time: '2.30.00'
					},
					{
						title: 'Action Garila English Movie',
						finalPath: '3-1-300x300.jpg',
						views: 296,
						date: 'Febrary 12, 2016',
						time: '2.30.00'
					},
					{
						title: 'Donec English Action movie',
						finalPath: '2-1-300x300.jpg',
						views: 481,
						date: 'Febrary 12, 2016',
						time: '2.30.00'
					},
					{
						title: 'English Action movie in Strack',
						finalPath: '4-1-300x300.jpg',
						views: 277,
						date: 'Febrary 12, 2016',
						time: '2.30.00'
					},
					{
						title: 'Movie Auctor Quisque in Strack',
						finalPath: '6-300x300.jpg',
						views: 300,
						date: 'Febrary 12, 2016',
						time: '2.30.00'
					},
					{
						title: 'auctor Movie Quisque in Strack',
						finalPath: '5-300x300.jpg',
						views: 343,
						date: 'Febrary 12, 2016',
						time: '2.30.00'
					},
					{
						title: 'Donec Movie Quisque in Strack',
						finalPath: '2-300x300.jpg',
						views: 361,
						date: 'Febrary 12, 2016',
						time: '2.30.00'
					},
					{
						title: 'New Movie Quisque in Strack',
						finalPath: '1-2-300x300.jpg',
						views: 503,
						date: 'Febrary 12, 2016',
						time: '2.30.00'
					}
				]
			}
		}
	}
</script>

<template>
	<main>
		<AppJumbotron />
		<!-- PRIMA SECTION  -->
		<section>
			<div class="my-container">
				<div class="section-header">
					<h3>Movie Playlist</h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
				</div>
				<div class="my-row-between">
					<!-- video youtube  -->
					<div id="yt-container" class="col-8 pe-4">
						<iframe class="w-100" height="545" src="https://www.youtube.com/embed/BP0k4SdquG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					</div>
					<!-- lista movies con slider verticale  -->
					<div id="movie-list" class="col-4 ps-3">
						<div id="movie-list-header" class="py-3">
							<h5>New Movie</h5>
							<span>Plying 24</span>
						</div>
						<div id="movie-list-main" class="pb-5">
							<ul class="list-column">
								<!-- ciclo gli oggetti movies dell'array newMovies  -->
								<li v-for="(item,index) in newMovies" :key="index" class="mt-4">
									<div class="my-row-between">
										<div class="movie-cover img-fluid">
											<img :src="pathBase + item.finalPath" :alt="item.title" class="img-fluid">
										</div>
										<div class="movie-info ps-3">
												<a href="#">
													<h5>
														{{ item.title }}
													</h5>
												</a>
											<h6>{{ item.views }} views</h6>
											<div class="my-row-between">
												<span>{{ item.date }}</span>
												<span>{{ item.time }}</span>
											</div>
										</div>
									</div>
								</li>
							</ul>				
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- SECONDA SECTTION  -->
		<section id="coming-soon">
			<div id="bg-layover" class="w-100 h-100">
				<div id="coming-info" class="text-center">
					<h3 class="color-green">COMING SOON MOVIE</h3>
					<h2>MAX STILL</h2>
					<div id="actors" class="py-3">
						<h3 class="mb-4">JON PLAYER <span class="color-green">&amp; </span>EMILY ROSE</h3>
						<h5>THE COUNTDOWN IS FINISHED!</h5>
					</div>
				</div>
			</div>
		</section>
		<!-- TERZA SECTION MOVIE CARDS  -->
		<section id="movie-cards">
			<div class="my-container">
				<div class="section-header">
					<h3>New Movie</h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
				</div>
				<nav class="w-50">
					<ul>
						<li v-for="(item,index) in store.mediaCategories" :key="index">
							<a href="#">{{ item.name }}</a>
						</li>
					</ul>
				</nav>
				<!-- importo la lista movie come componete  -->
				<CardMovieList />	
			</div>
		</section>
		<!-- QUARTA SECTION NEWS  -->
		<section id="news">
			<div class="my-container">
				<div class="section-header">
					<h3>Latest News</h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
				</div>
				<!-- importo la lista news come componente -->
				<CardNewsList />
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
	@use '../scss/generals.scss' as *;
	@use '../scss/partials/variables' as *;

	// prima section video e slider 
	section{
		margin-top: 85px;
		.section-header{
			p{
				font-size: 16px;
				font-weight: 300;
				margin-bottom: 0;
			}
		}
		#movie-list{
			#movie-list-header,
			#movie-list-main{
				background-color: $secondary;
				padding-left: 1.25rem;
				padding-right: 1.25rem;
			}
			#movie-list-main{
				margin-top: 1px;
				max-height: 480px;
				overflow-y: scroll;

				ul{
					li{
						.movie-cover{
							width: 30%;
						}
						.movie-info{
							h6{
								font-size: 13px;
							}
						}
					}
				}
			}	
		}
	}
	// seconda section coming-soon 
	section#coming-soon{
		height: 80vh;
		background-image: url('../../public/img/coming-bg.jpg');
		background-size: cover;
		background-position: center;
		position: relative;
		#bg-layover{
			background-color: rgba(15,24,40, 0.5);

			#coming-info{
				width: 25%;
				position: absolute;
				bottom: 50%;
				left: 50%;
				transform: translateY(50%);
				h2{
					font-size: 5rem;
					font-weight: 300;
				}

				#actors{
					background-color: rgb(15,24,40);
					span{
						font-size: 25px;
					}
				}
			}
		}
	}
	// terza section movie cards 
	section#movie-cards{
		nav{
			margin-bottom: 75px;
			ul{
				li{
					a{
						font-size: 18px;
					}
				}
			}
		}
	}
	
</style>