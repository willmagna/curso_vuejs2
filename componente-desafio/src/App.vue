<template>
	<v-app>
		<d-navigation />
		<d-toolbar />
		<v-content>
			<d-carousel />
		</v-content>
		<d-footer />
	</v-app>
</template>

<script>
import Navigation from './Navigation.vue';
import ToolbarVue from './Toolbar.vue';
import Carousel from './Carousel.vue';
import Footer from './Footer.vue';

export default {
	components: {
		"d-navigation": Navigation,
		"d-footer": Footer,
		"d-toolbar": ToolbarVue,
		"d-carousel": Carousel,
	},
	data() {
		return {
		}
	}
}
</script>
