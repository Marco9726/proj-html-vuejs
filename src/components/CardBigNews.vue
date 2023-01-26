<script>
	import { store } from '../store';
	export default {
			data(){
				return{
					store
				}
			}
		}
</script>

<template>
	<div id="big-card" class="my-card">
		<!-- utilizzo il primo ogetto dell'array posts nella 'big-card' -->
		<img :src="store.posts[0].image" :alt="store.posts[0].title" class="w-100">
		<div class="label bottom-label left-label">
			<h6 class="m-0">Details</h6>
		</div>
		<div class="title">
			<h3>{{ store.posts[0].title }}</h3>
		</div>
		<div id="sub-info">
			<ul>
				<li>moviestar</li>
				<li class="mx-2">0 Comment</li>
				<li>Share</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss">
	@use '../scss/generals.scss' as *;

	#big-card{
		.title{
			padding: 2rem;
			bottom: 70px;
			border-bottom: .5px solid black;
		}
		#sub-info{
			right: 2rem;
			bottom: 2rem;
			ul{
				li:not(:first-child){
					font-weight: 700;
				}
			}
		}	
	}
	
</style>