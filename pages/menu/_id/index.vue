<template>
	<div id="wrapper">
		<div class="menu-section-container">
			<p class="menu-section-title" :data-sectiontitle="this.info.menutitle" v-text="this.info.title"></p>
			<hr class="menu-section-divider">
			<p class="menu-section-subtitle" v-if="this.info.subtitle" v-text="this.info.subtitle"></p>
			<div class="subsection-wrapper" v-for="(type, i) in this.info.sections" :key="i">
				<p class="subsection-title">{{type.title}}</p>
				<hr class="menu-section-divider">
				<p class="subsection-subtitle" v-if="type.subtitle" v-text="type.subtitle"></p>
				<div class="subsection-content-wrapper">
					<div class="subsection-item" v-for="(item, i) in type.items" :key="i">
						<p class="subsection-item-title" v-text="item.title"></p>
						<p class="subsection-item-subtitle" v-if="item.subtitle" v-text="item.subtitle"></p>
						<p class="subsection-item-price" v-if="item.price" v-text="item.price"></p>
						<div class="subsection-item-options-wrapper" v-if="item.options.length">
							<div class="subsection-item-option-wrapper" v-for="(option, i) in item.options" :key="i">
								<div class="subsection-item-option">
									<p class="subsection-item-option-title" v-if="item.options && option.title" v-text="option.title"></p>
								</div>
								<div class="subsection-item-option">
									<p class="subsection-item-option-price" v-if="item.options && option.price" v-text="option.price"></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="adjacent">
			<nuxt-link class="adjacent-link prev" v-if="prev !== null" :to="`/menu/${prev.slug}`">
				<img class="adjacent-link-icon" src="/icons/arrow.svg" alt="">
				<p class="adjacent-link-title" v-text="prev.title"></p>
			</nuxt-link>
			<div class="adjacent-link prev spacer" v-if="prev == null"></div>
			<nuxt-link class="adjacent-link next" v-if="next !== null" :to="`/menu/${next.slug}`">
				<p class="adjacent-link-title" v-text="next.title"></p>
				<img class="adjacent-link-icon" src="/icons/arrow.svg" alt="">
			</nuxt-link>
			<div class="adjacent-link next spacer" v-if="next == null"></div>
		</div>
	</div>
</template>

<script>
import menuData from '@/assets/menuData'
export default {
	name: '',
	data() {
		return {
			info: Object,
			next: null,
			prev: null
		}
	},
	created() {
		let menuLen = menuData.length;
		for (let i = 0; i < menuLen; i++) {
			let slug = menuData[i].menutitle;
			if (slug === this.$route.params.id) {
				this.info = menuData[i];
				this.next = menuData[i+1] && menuData[i+1] !== null ? {
					title: menuData[i+1].title,
					slug: menuData[i+1].menutitle
				} : !menuData[i+1] || menuData[i+1] == null ? {
					title: menuData[0].title,
					slug: menuData[0].menutitle
				} : null
				this.prev = menuData[i-1] && menuData[i-1] !== null ? {
					title: menuData[i-1].title,
					slug: menuData[i-1].menutitle
				} : !menuData[i-1] || menuData[i-1] == null ? {
					title: menuData[menuLen-1].title,
					slug: menuData[menuLen-1].menutitle
				} : null
			}
		}
	}
}
</script>

<style lang="sass">
#wrapper
	@include pageWrapper
	.menu-section-container
		animation: fadeIn 0.5s ease-in-out
		border: 1rem solid rgba(red, 0.25)
		border-style: double
		border-radius: 0.5rem
		color: black
		margin: 0 auto 2rem auto
		padding: 0.25rem
		position: relative
		background: darken(white, 7.5)
		.menu-section-divider
			background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(100, 200, 100, 0.75), rgba(0, 0, 0, 0))
			width: 85%
			border: 0
			height: 1px
			margin: 0 auto
		.menu-section-title
			width: 100%
			position: sticky
			top: 1.8rem
			z-index: 2
			text-align: center
			font-size: 1.25rem
			background: darken(white, 7.5)
			padding: 0.75rem
			margin: 0.5rem auto
			&.nav-hiding
				top: -1px
		.menu-section-subtitle
			text-align: center
			font-size: 1.25rem
			padding: 0
			with: 100%
			margin: 1rem auto
		.subsection-wrapper
			@include flexCenter
			flex-direction: column
			padding: 1rem
			margin: 0
			position: relative
			border-radius: 0.25rem
			.menu-section-divider
				background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(100, 200, 100, 0.75), rgba(0, 0, 0, 0))
				width: 85%
				border: 0
				height: 1px
				margin: 0 auto
			.subsection-title
				width: 100%
				position: sticky
				top: 4rem
				text-align: center
				font-size: 1.1rem
				padding: 0.5rem
				margin: 0.5rem auto
				background: darken(white, 7.5)
				&.nav-hiding
					top: 2rem
			.subsection-subtitle
				text-align: center
				max-width: 37.5rem
				font-size: 1.1rem
				padding: 0
				margin: 1rem auto
			.subsection-content-wrapper
				@include flexCenter
				min-width: 100%
				align-items: stretch
				justify-content: space-around
				.subsection-item
					@include flexCenter
					flex-direction: column
					padding: 0.5rem
					margin: 0.5rem
					flex: 1
					box-shadow: $boxShadowLight
					cursor: pointer
					min-width: 100%
					border-radius: 0.5rem
					border: 0.1rem solid rgba(green, 0.1)
					@media (min-width: 37.5rem)
						min-width: 40%
					@media (min-width: 79rem)
						min-width: 30%
					&:hover
						box-shadow: $boxShadowHover
					.subsection-item-title
						@include flexCenter
						text-align: center
						font-size: 1.1rem
						padding: 0.25rem
						align-self: flex-start
						margin: 0.5rem auto
					.subsection-item-subtitle
						@include flexCenter
						text-align: center
						max-width: 40rem
						margin: 0 auto 0.5rem auto
					.subsection-item-price
						@include flexCenter
						text-align: center
					.subsection-item-options-wrapper
						@include flexCenter
						margin: 0.15rem auto
						flex: auto
						min-width: 100%
						.subsection-item-option-wrapper
							@include flexCenter
							min-width: 40%
							margin: 0.25rem
							flex: 1
							.subsection-item-option
								width: auto
								margin: auto 0.2rem
								@include flexCenter
								.subsection-item-option-title
									text-align: center
									width: auto
								.subsection-item-option-price
									text-align: center
									width: auto
	.adjacent
		margin-top: 2rem
		@include flexCenter
		align-items: stretch
		justify-content: space-between
		.adjacent-link
			flex: 1
			max-width: 20rem
			padding: 0.5rem
			margin: 0 0.5rem
			border-radius: 0.25rem
			@include flexCenter
			flex-wrap: nowrap
			justify-content: flex-start
			background: var(--theme-itemWhite)
			text-decoration: none
			box-shadow: var(--theme-boxShadowLight)
			@media (min-width: 30rem)
				padding: 1rem
			&:hover
				box-shadow: var(--theme-boxShadowHover)
			&.next
				justify-content: flex-end
				.adjacent-link-icon
					transform: rotate(180deg)
			&.spacer
				background: transparent
				box-shadow: none
				&:hover
					box-shadow: none
			.adjacent-link-icon
				padding: 0.33rem
				cursor: pointer
				height: 1rem
				width: 1rem
				opacity: 0.5
				box-sizing: content-box
				filter: var(--theme-icon)
			.adjacent-link-title
				padding: 0.5rem
				@include flexCenter
				text-decoration: none
				@media (min-width: 30rem)
					font-size: 1.1rem
</style>
