<template>
	<div id="navigation-wrapper">
		<div id="nav-list">
			<nuxt-link class="navigation-item home" to="/" active-class="active" exact>
				<img class="navigation-item-icon" src="/icons/home.svg" alt="home">
			</nuxt-link>
			<nuxt-link class="navigation-item" to="/menu" active-class="active">
				<p class="navigation-item-text" v-text="`Menu`"></p>
			</nuxt-link>
			<nuxt-link class="navigation-item" to="/contact" active-class="active">
				<p class="navigation-item-text" v-text="`Contact`"></p>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import menu from '@/assets/menuData'
export default {
	name: 'Navigation',
	data() {
		return {
			menu,
			scroll_old: 0,
			scroll_new: 0
		}
	},
	methods: {
		handleScroll: function() {
			let titles = [...document.getElementsByClassName("menu-section-title")];
			let subtitles = [...document.getElementsByClassName("subsection-title")];
			let y = window.scrollY;
			this.scroll_new = y;
			let nav_wrapper = document.getElementById("navigation-wrapper");
			if (this.scroll_new > this.scroll_old) {
				nav_wrapper.classList.add("nav-hidden");
				this.scroll_old = y
				for (let title of titles) {
					title.classList.add("nav-hiding")
				}
				for (let subtitle of subtitles) {
					subtitle.classList.add("nav-hiding")
				}
			} else if (this.scroll_new < this.scroll_old) {
				nav_wrapper.classList.remove("nav-hidden");
				this.scroll_old = y
				for (let title of titles) {
					title.classList.remove("nav-hiding")
				}
				for (let subtitle of subtitles) {
					subtitle.classList.remove("nav-hiding")
				}
			}
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	}
}
</script>

<style lang="sass">
#navigation-wrapper
	position: fixed
	min-width: 100%
	display: flex
	margin: 0 auto
	z-index: 10
	top: -0.1rem
	transition: $transition
	&.nav-hidden
		top: -3rem
	#nav-list
		flex: 1
		@include flexCenter
		justify-content: flex-start
		margin: 0 auto
		max-width: 80rem
		overflow: hidden
		border-radius: 0 0 0.25rem 0.25rem
		background: $itemWhite
		box-shadow: $boxShadow
		.navigation-item
			@include flexCenter
			width: auto
			color: $black
			padding: 0.5rem
			text-decoration: none
			transition: all 0.3s
			&:hover
				box-shadow: $boxShadowHover
				.navigation-item-list
					opacity: 1
			&.active
				box-shadow: $boxShadowHover
			&.home
				width: auto
				flex: 0
			.navigation-item-text
				margin-left: 0.25rem
				transition: all 0.3s
				@media (max-width: 33rem)
					font-size: 0.9rem
			.navigation-item-icon
				height: 1rem
				width: 1rem
</style>
