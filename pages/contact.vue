<template>
	<div id="contact-wrapper">
		<form id="form" action="">
			<div class="form-field">
				<label for="firstName">First name: </label>
				<input type="text" name="firstName">
			</div>
			<div class="form-field">
				<label for="lastName">Last name: </label>
				<input type="text" name="lastName">
			</div>
			<div class="form-field">
				<label for="email">E-mail: </label>
				<input type="text" name="email">
			</div>
			<div class="form-field">
				<label for="message">Message: </label>
				<input id="form-textarea" type="textarea" required name="message" placeholder="Your message here...">
			</div>
			<div class="form-field" id="form-submit">
				<input type="submit" value="Submit">
			</div>
		</form>
		<ContactLinks />
		<div id="maps-container">
			<div class="map-div">
				<!-- DISABLED UNTIL READY BECAUSE GOOGLE TRACKING -->
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.617850296743!2d-118.12530538426554!3d33.79636538067633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd31e5f35cc3bd%3A0xf5c1f814916d2b10!2sDeli+News+Pizza!5e0!3m2!1sen!2sus!4v1547668574255" class="map" frameborder="0" style="border:0" allowfullscreen></iframe>
			</div>
			<div class="map-div">
				<!-- DISABLED UNTIL READY BECAUSE GOOGLE TRACKING -->
				<iframe src="https://www.google.com/maps/embed?pb=!4v1547672553108!6m8!1m7!1sCAoSLEFGMVFpcE8wc3hGMHFCeWJwMlZhcVc5UWpLYmpEMkhEeFh1remtmWHVlLWRY!2m2!1d33.79635306960918!2d-118.123086899939!3f84.32!4f-3.319999999999993!5f0.5361725491303937" class="map" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
			</div>
		</div>
	</div>
</template>

<script>
import ContactLinks from '@/components/ContactLinks'
export default {
	name: '',
	components: {
		ContactLinks
	},
	data() {
		return {
			phone: "(562) 598-2123",
			email: "Delinewspizza2@gmail.com"
		}
	}
}
</script>

<style lang="sass">
#wrapper
#contact-wrapper
	@include pageWrapper
	flex-direction: column
	color: black
	padding: 0.5rem
	border-radius: 0.25rem
	background: var(--theme-itemWhite)
	#form
		@include flexCenter
		align-items: stretch
		width: 100%
		padding: 1rem
		margin: 1rem auto
		max-width: 60rem
		border-radius: 0.5rem
		background: var(--theme-whiteBG)
		box-shadow: 0 0 0.5rem 0.25rem rgba(black, 0.1)
		.form-field
			@include flexCenter
			flex: 1
			padding: 0.5rem
			min-width: 100%
			@media (min-width: 37.5rem)
				min-width: 30%
			label
				width: 100%
				padding: 0.25rem
			input
				padding: 0.5rem
				width: 100%
				border-radius: 0.5rem
				border: 0.15rem solid rgba(black, 0.15)
			#form-textarea
				flex: 1
				min-width: 100%
				max-width: 60rem
				min-height: 3rem
		#form-submit
			min-width: 100%
			input
				max-width: 20rem
				cursor: pointer
				border-radius: 0.5rem
				background: darken(white, 15)
				border: 0.15rem solid rgba(black, 0.05)
				&:hover
					background: darken(white, 20)
	#maps-container
		@include flexCenter
		justify-content: space-around
		margin: 1rem
		@media (min-width: 37.5rem)
			margin: 2rem
		.map-div
			@include flexCenter
			min-width: 100%
			flex: 1
			margin: 0.5rem
			@media (min-width: 60rem)
				min-width: 40%
			.map
				border-radius: 0.5rem
				box-shadow: var(--theme-boxShadow)
				width: 100%
				height: 450px

</style>
