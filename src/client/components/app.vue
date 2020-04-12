
<template>
    <div class="app">
		<sui-menu 
			:inverted="true"
			:visible="isVisible"
			fixed
		>
		    <sui-menu-item>
				<sui-image :src="`/public/logo-vue.png`" spaced="right" size="mini" />
				<strong>
					Vue Welcome
					<small>
					<em>1.0.0</em>
					</small>
				</strong>
			</sui-menu-item>
			<router-link is="sui-menu-item" to="/"> Intro</router-link>
			<router-link is="sui-menu-item" to="/ReadMe"> ReadMe</router-link>

		</sui-menu>
		<sui-container class="app-container" fluid>
			<router-view></router-view>
		</sui-container>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class App extends Vue {
	isVisible = true
}
</script>

<style scoped lang="scss">
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
}
</style>
