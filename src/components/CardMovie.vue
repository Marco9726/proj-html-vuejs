<script>
	export default {
		props:{
			card: Object
		},
		data(){
			return{
				pathBase: "../../public/img/"
			}
		}
	}
</script>

<template>
	<div class="my-card movie-card">
		<img :src="pathBase + card.finalPath" :alt="card.title" class="w-100 h-100">
		<div class="rating">
			<a href="#"><i class="fa-solid fa-star color-green me-2"></i></a><span>{{ card.stars }}/10</span>
		</div>
		<div class="card-title">
			<h3>{{ card.title }}</h3>
			<h5 class="me-2">Category:</h5> <h6>{{ card.category }}</h6>
		</div>
		<div class="label bottom-label left-label">
			<h6 class="m-0">Details</h6>
		</div>
		<div class="label bottom-label right-label">
			<h6 class="m-0">{{ card.views }} Views</h6>
		</div>
		
	</div>
</template>

<style lang="scss">
	@use '../scss/generals.scss' as *;

	.movie-card{
		width: calc(100% / 3 - 1.5rem);
		margin-bottom: 2.25rem;
		.rating{
			top: 2.5rem;
			right: 1.25rem;
			.fa-star{
				position: relative;
				bottom: 1px;
				font-size: .8rem;
			}
		}
		.card-title{
			left: 2rem;
			bottom: 90px;
			h5,
			h6{
				display: inline-block;
			}
		}
	}
	
</style>