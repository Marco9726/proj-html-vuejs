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
	]
})