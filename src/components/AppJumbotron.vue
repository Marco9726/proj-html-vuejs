<script>
	export default {
		data(){
			return{
				silderFlag: true
			}
		},
		computed:{
			// funzione per restituire il path dell'immagine in base alla flag
			sliderImg(){
				const imgPath = '../../public/img/slider.jpg'
				if(this.silderFlag == true ){
					return imgPath
				}
				else{
					return '../../public/img/slider-2.jpg'
				}
			}
		},
		methods: {
			// metodo per alternare la flag
			changeImg(){
				if(this.silderFlag){
					this.silderFlag = false
				}
				else{
					this.silderFlag = true
				}
			}
		},
	}
</script>

<template>
	<div id="jumbotron">
		<img :src="sliderImg" alt="slider-image" class="img-fluid h-100">
		<div class="arrow-slider left rounded-circle" @click="changeImg()"> <!--cambio l'immagine al click sull'arrow-->
			<i class="fa-brands fa-vuejs"></i>
		</div>
		<div class="arrow-slider right rounded-circle" @click="changeImg()"> <!--cambio l'immagine al click sull'arrow-->
			<i class="fa-brands fa-vuejs"></i>
		</div>
		<div id="slider-content" class="text-center">
			<h5>Welcome To Our Movie Site</h5>
			<h2>OUR SPECIAL <span class="color-green">MOVIES</span></h2>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industrioy. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown</p>
			<button class="rounded-pill bg-mygreen">
				Read More
			</button>
		</div>
	</div>
</template>

<style lang="scss">
	@use '../scss/generals.scss' as *;

	#jumbotron{
		height: 93vh;
		position: relative;
		img{
			object-fit: cover;
			cursor: pointer;
		}
		&:hover{
			.arrow-slider{
				display: block;
			}
		}
		.arrow-slider{
			display: none;
			position: absolute;
			bottom: 50%;
			height: 3rem;
			width: 3rem;
			text-align: center;
			cursor: pointer;
			&:hover{
				background-color: rgba(0,0,0,0.8);
			}
			&.left{
				transform: translateY(+50%) rotate(90deg);
				left: 2rem;
			}
			&.right{
				transform: translateY(+50%) rotate(-90deg);
				right: 2rem;
			}
			i{
				font-size: 2rem;
				line-height: 3rem;
			}
		}
		#slider-content{
			width: 30%;
			position: absolute;
			top: 30%;
			right: 25%;
			h2,
			h2 span{
				font-size: 3.5rem;
				font-weight: 300;
				letter-spacing: -3px;
			}
			button{
				padding: .65rem 2rem;
			}
		}
		
	}
	
</style>