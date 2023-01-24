<script>
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue';
  export default {
    components: {
      AppHeader,
		AppFooter
    },
	 data(){
		return{
			// HEADER 
			navbar: [
				{
					title: 'Home',
					type: 'Dropdwon',
					dropdownList: [
						'Home',
						'Home',
						'Home',
						'Home',
						'Home',
						'Home'
					]
				},
				{
					title: 'Celebrity',
					type: 'Dropdwon',
					dropdownList: [
						'Celebrity',
						'Celebrity Single'
					]
				},
				{
					title: 'Movie',
					type: 'Dropdwon',
					dropdownList: [
						'Movie Post',
						'Top Rate Movie',
						'Movie Category',
						'Single Movie'
					]
				},
				{
					title: 'Page',
					type: 'Dropdwon',
					dropdownList: [
						'Pricing Table',
						'Call To Action',
						'My Account',
						'Cart',
						'Checkout',
						'Wishlist',
					]
				},
				{
					title: 'Shop',
					type: 'Dropdwon',
					dropdownList: [
						{
							label: 'Shop Sidebar',
							shopMenu: [
								'Grid View',
								'Last View'
							]
						},
						{
							label: 'No Sidebar',
							shopMenu: [
								'Grid View',
								'Last View'
							]
						}
					]

				},
				{
					title: 'Blog',
					type: 'link'
				},
				{
					title: 'Contact Us',
					type: 'link'
				}
			],
			//FOOTER
			categories: {
				title: 'Movie Category',
				list: [
					'English New Movie',
					'Hindi All Movie',
					'Latest Tamil Movie',
					'New Top Rating Movie',
					'Hornn New Movie',
					'Animation New Movie'
				]
			},
			information: {
				title: 'Information',
				list: [
					'Youtube Video Post',
					'Actor Information',
					'New Promotion',
					'Latest Movie In English',
					'Latest Flim Product',
					'Video New Video'
				]
			}
			
		}
	 }
  }
</script>

<template>
	<!-- passo l'array della navbar come prop all'header  -->
  <AppHeader :arraynav="navbar" />
  <!-- passo gli oggetti 'categories' e 'information' come props al footer  -->
  <AppFooter :objectCategories="categories" :objectInformation="information" />
</template>

<style lang="scss">
  @use './scss/generals.scss' as *;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  
</style>