<template>
	<div id="contact-links">
		<div class="contact-button-section">
			<p @click="copy" alt="call" class="contact-button phone" :data-content="phone" v-text="`Phone: ${phone}`"></p>
			<!-- <a href="tel:+15625982123" alt="call" class="contact-button phone" v-text="`Phone: ${phone}`"></a> -->
			<p @click="copy" alt="e-mail" class="contact-button email" :data-content="email" v-text="`E-mail: ${email}`"></p>
			<!-- <a href="mailto:Delinewspizza2@gmail.com" alt="e-mail" class="contact-button email">{{ email }}</a> -->
		</div>
		<div class="contact-button-section">
			<a href="https://facebook.com/delinewspizza" class="contact-button facebook">
				<img src="/img/social/facebook.svg" alt="facebook" class="contact-button-icon">
			</a>
			<a href="https://twitter.com/delinewspizza" class="contact-button twitter">
				<img src="/img/social/twitter.svg" alt="twitter" class="contact-button-icon">
			</a>
			<a href="https://instagram.com/delinewspizza" class="contact-button instagram">
				<img src="/img/social/instagram.svg" alt="instagram" class="contact-button-icon">
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ContactLinks',
	data() {
		return {
			phone: "(562) 598-2123",
			email: "Delinewspizza2@gmail.com"
		}
	},
	methods: {
		copy: function(e) {
			const copy = require('copy-text-to-clipboard')
			copy(e.target.dataset.content)
		}
	}
}
</script>

<style lang="sass">
#contact-links
	margin-top: 2rem
	.contact-button-section
		@include flexCenter
		align-items: stretch
		.contact-button
			@include flexCenter
			color: white
			text-decoration: none
			border-radius: 0.5rem
			width: auto
			font-size: 1.1rem
			text-align: center
			margin: 0.1rem
			cursor: pointer
			padding: 0.5rem
			transition: all 0.3s
			.contact-button-icon
				margin: 0 auto
				height: 1.5rem
				width: 3rem
				transition: all 0.1s
		.facebook
			background: #3B5998
			&:hover
				background: lighten(#3B5998, 5)
				.contact-button-icon
					transform: scale(1.25)
		.twitter
			background: #1DA1F2
			&:hover
				background: lighten(#1DA1F2, 5)
				.contact-button-icon
					transform: scale(1.25)
		.instagram
			background: #E4405F
			&:hover
				background: lighten(#E4405F, 5)
				.contact-button-icon
					transform: scale(1.25)
		.phone
			color: $black
		.email
			color: $black
</style>
