<script>
	export default {
		data(){
			return{
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
		<div class="my-container" id="top-container">
			<div class="my-row-between">
				<div class="col-left ">
					<div class="my-row-between">
						<div>
							<i class="fa-regular fa-envelope me-1"></i>
							<span>Superhit Top Movie </span>
							<b class="color-green">** King Star **</b>
						</div>
						
						<ul>
							<li v-for="(item,index) in socialIcons" :key="index">
								<a href="#">
									<i :class="item"></i>
								</a>
							</li>
						</ul> 
						
					</div>
				</div>
				<div class="col-right">
					<a id="login" href="#">
						<i class="fa-solid fa-lock me-1"></i>
						<span>Login</span> 
					</a>
				</div>
			</div>
		</div>
		<hr class="border-grey">
	
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
						line-height: 20px;
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
	}


  
  
</style>