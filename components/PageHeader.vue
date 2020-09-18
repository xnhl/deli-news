<template>
	<div class="section-title">
		<nuxt-link class="section-title-back" :to="`/${slug}`">
			<img class="section-title-back-icon" src="@/static/icons/arrow.svg" alt="back">
		</nuxt-link>
		<nuxt-link class="section-title-text" :to="`/${slug}`" v-text="title"></nuxt-link>
		<div class="section-title-sort" @click="sortAZ" v-if="sortable && tools">
			<img class="section-title-sort-icon" src="@/static/icons/sort.svg" alt="sort">
		</div>
		<div class="section-title-sort" @click="vimeoSort" v-if="sortable && isVimeo">
			<img class="section-title-sort-icon" src="@/static/icons/sort.svg" alt="sort">
		</div>
		<div class="section-title-sort" @click="showSort" v-if="sortable && (media || quotes || articles || isYoutube) && !isVimeo">
			<img class="section-title-sort-icon" src="@/static/icons/sort.svg" alt="sort">
		</div>
	</div>
</template>

<script>
export default {
	name: 'PageHeader',
	props: {
		title: String,
		slug: String,
		sortable: null,
		media: null,
		tools: null,
		quotes: null,
		articles: null,
		isVimeo: null,
		isYoutube: null
	},
	data() {
		return {
			sortalpha: 1,
			sortVimeo: 0
		}
	},
	methods: {
		showSort: function() {
			if (this.quotes) {
				const sort = document.getElementById('quotes-sort-wrapper')
				if (sort.classList.contains('hide')) {
					sort.classList.remove('hide')
				} else sort.classList.add('hide')
			} else if (this.media && !this.isYoutube) {
				const sort = document.getElementById('media-sort-wrapper')
				if (sort.classList.contains('hide')) {
					sort.classList.remove('hide')
				} else sort.classList.add('hide')
			} else if (this.articles) {
				const sort = document.getElementById('articles-sort-wrapper')
				if (sort.classList.contains('hide')) {
					sort.classList.remove('hide')
				} else sort.classList.add('hide')
			} else if (this.isYoutube) {
				const sort = document.getElementById('youtube-sort-wrapper')
				if (sort.classList.contains('hide')) {
					sort.classList.remove('hide')
				} else sort.classList.add('hide')
			}
		},
		sortAZ: function(e) {
			window.scrollTo(0, 0)
			var each, container
			if (e.target.classList.contains('section-title-sort')) {
				container = e.target.parentNode.nextElementSibling
				each = [...e.target.parentNode.nextElementSibling.children]
			} else if (e.target.classList.contains('section-title-sort-icon')) {
				container = e.target.parentNode.parentNode.nextElementSibling
				each = [...e.target.parentNode.parentNode.nextElementSibling.children]
			}
			each.sort((a, b) => {
				let nameA = a.children[1].textContent.replace("'", "").toLowerCase()
				let nameB = b.children[1].textContent.replace("'", "").toLowerCase()
				return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
			})
			if (this.sortalpha % 2 === 0) {
				var reversed = each.reverse()
				each = reversed
			}
			each.forEach(tool => {
				container.appendChild(tool)
			})
			this.sortalpha++
		},
		vimeoSort: function() {
			let container = document.getElementsByClassName("media-container")[0]
			let vimeos = [...container.children]
			let sorted = vimeos.sort((a, b) => {
				let aa = a.dataset.title.replace(/[^a-z0-9]/gi, "")
				let bb = b.dataset.title.replace(/[^a-z0-9]/gi, "")
				return aa < bb ? 1 : aa > bb ? -1 : 0
			})
			if (this.sortVimeo % 2 === 0) {
				var reversed = sorted.reverse()
				sorted = reversed
			}
			sorted.forEach(vimeo => {
				container.appendChild(vimeo)
			})
			this.sortVimeo++
		}
	}
}
</script>

<style lang="sass">
.section-title
	border-radius: 0.5rem 0.5rem 0 0
	position: sticky
	top: $headerOffset
	z-index: 7
	@include flexCenter
	text-decoration: none
	cursor: pointer
	background: $itemWhite
	box-shadow: $boxShadow
	.section-title-text
		font-size: $headerSize
		text-decoration: none
		flex: 1
		color: $black
		padding: 0.5rem
		max-width: 75%
		margin: 0 auto
		text-align: center
	.section-title-back
		position: absolute
		left: 0
		text-decoration: none
		margin-left: 0.5rem
		.section-title-back-icon
			height: 1rem
			width: 1rem
			padding: 0.5rem
			box-sizing: content-box
	.section-title-sort
		position: absolute
		right: 0
		z-index: 5
		margin-right: 0.5rem
		.section-title-sort-icon
			height: 1rem
			width: 1rem
			padding: 0.5rem
			box-sizing: content-box
</style>
