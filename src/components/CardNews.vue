<script>
	export default {
		props:{
			card: Object
		}
	}
</script>

<template>
	<div class="my-card card-news">
		<img :src="card.image" :alt="card.title" class="w-100">
		<div class="label bottom-label left-label">
			<h6 class="m-0">Details</h6>
		</div>
		<div class="title px-4">
			<h5>{{ card.title }} </h5>
		</div>
		<div class="share">
			<h6>Share</h6>
		</div>
	</div>
</template>

<style lang="scss">
	@use '../scss/generals.scss' as *;

	.card-news{
		width: calc(100% / 2 - 1.2rem);
		height: calc(100% / 2 - 1.2rem);

		.title{
			top: 50%;
			h5{
				font-size: 16px;
				line-height: 1.75rem;
			}
		}
		.share{
			bottom: 2.5rem;
			right: 2.5rem;
		}
	}
	
</style>