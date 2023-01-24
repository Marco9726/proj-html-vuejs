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
	socialIcons: [
		"fa-brands fa-facebook-f",
		"fa-brands fa-twitter",
		"fa-brands fa-linkedin-in",
		"fa-brands fa-instagram"
	]

})