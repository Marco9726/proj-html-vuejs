<script>
	import CardNews from './CardNews.vue';
	import CardBigNews from './CardBigNews.vue';
	import { store } from '../store';
	export default {
		components:{
			CardNews,
			CardBigNews
		},
		data(){
			return{
				store
			}
		},
		
	}
</script>

<template>
	<div class="my-row-between" id="news">
		<div id="big-news">
			<!-- componente CardBigNews  -->
			<CardBigNews />
		</div>
		<div id="grid" class="my-row-between flex-wrap align-content-between">
			<!-- ciclo i restanti 4 post e li inserisco nella griglia  -->
			<CardNews v-for="(item,index) in store.posts.slice(1,5)" :key="index" :card="item"/>
		</div>
	</div>
</template>

<style lang="scss">
	@use '../scss/generals.scss' as *;

	#big-news,
	#grid{
		width: calc(100% / 2 - 1.2rem);
	}
	
</style>