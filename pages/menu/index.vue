<template>
	<div id="menu-wrapper">
		<div id="main-wrapper">
			<div id="main-menu">
				<nuxt-link class="main-menu-section" v-for="(section, i) in menu" :key="i" :to="`/menu/${section.menutitle}`">
					<p class="menu-section-title" v-text="section.title"></p>
					<div class="menu-section-image-wrapper">
						<img class="menu-section-image" :src="`/img/new/300/${section.image}`" alt="meal">
					</div>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
import menu from '@/assets/menuData'
export default {
	name: '',
	data() {
		return {
			menu
		}
	}
}
</script>

<style lang="sass">
#menu-wrapper
	@include pageWrapper
	color: black
	padding: 0.5rem
	background: var(--theme-itemWhite)
	border-radius: 0.25rem
	#main-wrapper
		width: 100%
		margin: 0 auto
		max-width: 80rem
		.back-button
			position: fixed
			cursor: pointer
			bottom: 2rem
			left: 1.25rem
			.back-img
				box-shadow: 0 0 0.5rem 0.25rem rgba(black, 0.05)
				background: rgba(red, 0.2)
				padding: 0.25rem
				border-radius: 50%
				width: 2rem
				margin: 0.25rem
				height: 2rem
				opacity: 0.75
				@include flexCenter
				position: sticky
				z-index: 2
		#main-menu
			@include flexCenter
			align-items: stretch
			border-radius: 0.5rem
			padding: 0.5rem
			animation: $pageFade
			.main-menu-section
				@include flexCenter
				flex-direction: column
				justify-content: space-between
				flex: 1
				margin: 0.15rem
				border-radius: 0.25rem
				text-decoration: none
				color: $black
				padding: 0.5rem
				min-width: 100%
				font-size: 1.1rem
				background: darken(white, 5)
				box-shadow: 0
				&:hover
					box-shadow: $boxShadow
				@media (min-width: 34rem)
					min-width: 40%
					font-size: 1.25rem
				@media (min-width: 50rem)
					min-width: 30%
					font-size: 1.5rem
				.menu-section-title
					@include flexCenter
					padding: 0.5rem
					font-size: 1.1rem
				.menu-section-image-wrapper
					@include flexCenter
					flex: 1
					min-height: 190px
					animation: $pageFade
					padding: 0.5rem
					.menu-section-image
						box-sizing: content-box
						border-radius: 0.25rem
</style>
