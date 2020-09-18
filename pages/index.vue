<template>
	<div id="home-wrapper">
		<div id="home-banner">
			<img id="home-banner-image" src="/img/banner/3.jpg" alt="">
		</div>
		<div id="intro-container">
			<div id="intro">
				<p class="intro-para" v-for="(line, i) in intro" :key="i">{{ line }}</p>
			</div>
			<p id="hours" v-text="`Hours: ${hours}`"></p>
			<p id="address" v-text="`Address: ${address}`"></p>
		</div>
		<ContactLinks />
		<div id="home-gallery">
			<div class="home-gallery-image-wrapper" v-for="(img, i) in images" :key="i">
				<img class="home-gallery-image lazy" src="" :data-lazysrc="img" alt="meal">
			</div>
		</div>
	</div>
</template>

<script>
import ContactLinks from '@/components/ContactLinks'
export default {
	components: {
		ContactLinks
	},
	data() {
		return {
			intro: [
				"For over 25 years Deli News has served delicious Italian lunch and dinner to the families of East Long Beach and the students of Cal State Long Beach. The friendly nature of this parlor aided by easy parking in the Los Altos Shopping Center has fit in seamlessly to residents' lifestyles ranging from fast-paced on-the-go ordering to long sit-down afternoons inside the restaurant or on its outdoor patio. After a change in ownership in 2012, Deli News Pizza became reinforced with an updated interior, brand new furniture, TVs, and savory new menu items.",
				"Customers have first and foremost always responded to the prices. A family of four can easily spend under $25 with plenty to go around. The famous medium pizzas are plenty big and under $7. Over the years, the deli has become a neighborhood spot and the long-time employees recognize many customers by name. Stop in and enjoy the atmosphere. Service is fast, so don't be afraid of the line out the door! Deli News Pizza is the perfect place to meet up with friends or co-workers as the food and price will never disappoint."
			],
			hours: "Monday - Friday 10am - 9pm, Saturday 11am - 9pm, Sunday 11am - 8pm",
			address: "5555 Stearns Street Suite 104, Long Beach, CA 90815",
			images: [
				"/img/aboutgallery/300/5.jpg",
				"/img/aboutgallery/300/3.jpg",
				"/img/aboutgallery/300/2.jpg",
				"/img/aboutgallery/300/4.jpg",
				"/img/aboutgallery/300/7.jpg",
				"/img/aboutgallery/300/6.jpg",
				"/img/aboutgallery/300/1.jpg",
				"/img/aboutgallery/300/8.jpg",
				"/img/aboutgallery/300/9.jpg"
			]
		}
	},
	methods: {
		copy: function(e) {
			const copy = require('copy-text-to-clipboard')
			copy(e.target.dataset.content)
		}
	},
	mounted() {
		var lazyloadImages = document.querySelectorAll('.lazy')
		var imageObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					var image = entry.target
					image.src = image.dataset.lazysrc
					image.classList.remove('lazy')
					imageObserver.unobserve(image)
				}
			})
		})
		lazyloadImages.forEach((image) => {
			imageObserver.observe(image)
		})
	}
}
</script>

<style lang="sass">
#home-wrapper
	@include pageWrapper
	color: black
	padding: 0.5rem
	background: var(--theme-itemWhite)
	border-radius: 0.25rem
	#home-banner
		margin: 0 auto
		min-height: 400px
		#home-banner-image
			border-radius: 0.5rem
			width: 100%
			height: auto
			animation: $pageFade
	#intro-container
		margin: 0 auto
		padding: 1rem
		border-radius: 0.5rem
		#intro
			margin: 1rem auto
			text-indent: 1rem
			line-height: 1.25rem
			.intro-para
				margin: 0.5rem
				line-height: 1.25rem
				text-align: left
				text-indent: 1rem
				@media (min-width: 30rem)
					font-size: 1.1rem
		#hours, #address
			margin: 0.5rem auto
			text-align: center
			@media (min-width: 30rem)
				font-size: 1.1rem
			.larger
	#home-gallery
		@include flexCenter
		padding: 0.5rem
		margin-top: 1rem
		justify-content: space-around
		border-radius: 0.5rem
		.home-gallery-image-wrapper
			@include flexCenter
			margin: 0.5rem
			padding: 0.5rem
			flex: 1
			width: 100%
			border-radius: 0.25rem
			@media (min-width: 37.5rem)
				width: 40%
			@media (min-width: 60rem)
				width: 30%
				max-width: 60%
			&:hover
				box-shadow: $boxShadow
			.home-gallery-image
				box-sizing: content-box
				border-radius: 0.25rem
</style>
