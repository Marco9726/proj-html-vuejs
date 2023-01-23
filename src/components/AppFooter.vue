<script>
	export default {
		
	}
</script>
<template>
	<footer>
		<section id="background">
			<div id="layover" class="w-100 h-100"></div>
		</section>
		<div class="my-container" id="last-container">
			<div class="my-row-between">
				<div class="col-left">
					<ul>
						<li><a href="#">Tram and Conditions </a></li>
						<li><a href="#">Policy</a></li>
						<li><a href="#">About</a></li>
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
			background-image: url('../assets/img/ft-bg.jpg');
			#layover{
				background-color: $secondary; opacity: .92; ;
			}
		}
		#last-container{
			.my-row-between{
				align-items: center;
				height: 4rem;
				ul{
					li{
						padding-right: 1.5rem;
					}
				}
				a,
				.col-right{
					font-size: 1.15rem;
				}
			}
		}

	}
	
</style>