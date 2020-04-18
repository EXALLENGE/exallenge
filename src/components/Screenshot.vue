<template>
<div id="screenshot">
	<h1>{{ message }}</h1>
	<button @click="clickedButton">Click Me!</button>
</div>
</template>

<style scoped>
</style>

<script>
import Vue from "vue";

var screenshot = new Vue({
	el: '#screenshot',
	data: {
		message: 'Hello World!'
	},
	methods: {
		clickedButton: function() {
			console.log(this.$refs); // eslint-disable-line no-console
		}
	}
})

export default screenshot;
</script>