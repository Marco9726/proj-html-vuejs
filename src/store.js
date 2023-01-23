import { reactive } from 'vue';

export const store = reactive({
	mediaCategories: [
		{
			name: 'All'
		},
		{
			name: 'Coming Soon'
		},
		{
			name: 'Latest Movie'
		},
		{
			name: 'Top Rating'
		},
		{
			name: 'TV Series'
		}
	],
	menu: [
		{
			name: 'Home',
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
			name: 'Celebrity',
			type: 'Dropdwon',
			dropdownList: [
				'Celebrity',
				'Celebrity Single'
			]
		},
		{
			name: 'Movie',
			type: 'Dropdwon',
			dropdownList: [
				'Movie Post',
				'Top Rate Movie',
				'Movie Category',
				'Single Movie'
			]
		},
		{
			name: 'Page',
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
			name: 'Shop',
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
			name: 'Blog',
			type: 'link'
		},
		{
			name: 'Contact Us',
			type: 'link'
		}
	]
})