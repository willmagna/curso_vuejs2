<template>
	<v-app>
		<d-navigation />
		<d-toolbar />
		<d-content />
		<d-footer />
	</v-app>
</template>

<script>
import Navigation from './Navigation.vue';
import ToolbarVue from './Toolbar.vue';
import Content from './Content.vue';
import Footer from './Footer.vue';

export default {
	components: {
		"d-navigation": Navigation,
		"d-footer": Footer,
		"d-toolbar": ToolbarVue,
		"d-content": Content,
	},
	data() {
		return {
		}
	}
}
</script>
