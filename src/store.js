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
	],
	posts: [
		{
			title: 'Actor The Concept Movie High Concept Theory see',
			image: "../../public/img/blog-570x570.jpg",
			date: 'April 14, 2020'
		},
		{
			title: 'Consequat Nam Lectus Nibh Aucibus It Has Turpis',
			image: "../../public/img/blog2-570x570.jpg",
			date: 'April 14, 2020'
		},
		{
			title: 'Nam Lectus Nibh Consequat Aucibus Turpis',
			image: "../../public/img/blog3-570x570.jpg",
			date: 'April 14, 2020'
		},
		{
			title: 'Bring Me The Head Of Alfredo Garcia Best Movie In English 2020',
			image: "../../public/img/blog4-570x570.jpg",
			date: 'April 14, 2020'
		},
		{
			title: 'Pump Action Interaction English Action Movie (2020 New)',
			image: "../../public/img/blog5-570x570.jpg",
			date: 'April 14, 2020'
		},
	]

})