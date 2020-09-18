<template>
	<div id="foot-wrapper">
		<section id="contact">
			<p class="contact-item">&copy; 2020</p>
		</section>
	</div>
</template>

<script>
export default {
	name: 'Foot'
}
</script>

<style lang="sass">
#foot-wrapper
	padding: 0.25rem
	margin: 0 auto
	animation: fadeIn 0.3s
	max-width: 80rem
	@include flexCenter
	flex-direction: column
	text-align: center
	border-radius: 0.5rem 0.5rem 0 0
	transition: all 0.3s
	#contact
		@include flexCenter
		margin: 0.25rem
		width: 100%
		.contact-item
			@include flexCenter
			width: auto
			margin: 0.25rem 0.5rem
			.contact-item-email
				width: auto
				text-decoration: none
				margin: 0 0.25rem
</style>
