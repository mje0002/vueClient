
<template>
  <div class="app"> 
    Hello World matt! The whole team is viewing MOre
  </div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'AppStart',
		data: () => ({
			count: 0
		}),
		watch: {
			foo: function (val, oldVal) {
				console.log('new: %s, old: %s', val, oldVal)
			}
		}
	});
</script>

<style scoped type="sass">
	.app-container{
		min-width: 550px;
		height: calc(100vh - 70px);
		margin-top: 70px;
		overflow-x: auto;
	}
	.center {
		text-align: center;
	}
	.app-logo {
		height: 80px;
	}
	.app-header {
		background-color: #222;
		padding: 20px;
		color: white;
	}
	.app-intro {
		font-size: large;
	}
	.app{
		overflow: hidden;
		height: 100vh;
		background: lightgray;
	}
</style>
