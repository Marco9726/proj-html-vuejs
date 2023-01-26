<script>
	export default {
		
	}
</script>

<template>
	<div id="form" class="my-container">
		<div class="form-group text-center w-100">
			<input class="rounded-pill bg-mygreen" type="text" placeholder="First Name" name="FirstName">
			<input class="mx-4 rounded-pill bg-mygreen" type="text" placeholder="Last Name" name="LastName"> 
			<input class="rounded-pill bg-mygreen" type="email" placeholder="Email Address" name="Email"> <br>
			<input id="send" class="rounded-pill bg-mydark text-center d-block mx-auto" type="send" placeholder="Subscribe"> 
		</div>
	</div>
</template>

<style lang="scss">
	@use '../scss/generals.scss' as *;

	#form{
		background-image: url('../../public/img/form-bg-1.png');
		background-repeat: no-repeat;
		height: 400px;
		margin-top: 150px;
		position: relative;
		bottom: 50px;
		.form-group{
			position: absolute;
			top: 25%;
			input{
				padding: 1rem 1.5rem;
				&::placeholder{
					color: white;
				}
			}
			input:not(#send){
				width: 25%;
				border: 1px solid white;
				outline: none;
				margin-bottom: 3rem;
				&:focus{
					border: 2px solid rgba(255,255,255,0.4);
				}
			}
			input#send{
				width: 12.5%;
				cursor: pointer;
				&::placeholder{
					font-weight: 700;
				}
			}
		}
	}
	
</style>