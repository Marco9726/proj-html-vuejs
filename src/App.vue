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
					dropdown: true,
					dropdownList: [
						{ label: 'Home' },
						{ label: 'Home 2' },
						{ label: 'Home 3' },
						{ label: 'Home 4' },
						{ label: 'Home 5' },
						{ label: 'Home 6' }
					]
				},
				{
					title: 'Celebrity',
					dropdown: true,
					dropdownList: [
						{ label: 'Celebrity' },
						{ label: 'Celebrity Single'}
					]
				},
				{
					title: 'Movie',
					dropdown: true,
					dropdownList: [
						{ label: 'Movie Post' },
						{ label: 'Top Rate Movie' },
						{ label: 'Movie Category' },
						{ label: 'Single Movie '}
					]
				},
				{
					title: 'Page',
					dropdown: true,
					dropdownList: [
						{ label: 'Pricing Table' },
						{ label: 'Call To Action' },
						{ label: 'My Account' },
						{ label: 'Cart' },
						{ label: 'Checkout' },
						{ label: 'Wishlist' },
					]
				},
				{
					title: 'Shop',
					dropdown: true,
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
					dropdown: false,
					type: 'link'
				},
				{
					title: 'Contact Us',
					dropdown: false,
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