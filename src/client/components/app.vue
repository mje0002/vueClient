
<template>
    <div class="app">
        <div class="app-header">
            <img src="/public/logo-vue.png" class="app-logo" alt="logo" />
            <h2>Welcome to Vue</h2>
        </div>
        <p class="app-intro">
            To get started, edit
            <code>src/components/app/app.vue</code> and save to reload.
        </p>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

export default class App extends Vue {
}
</script>

<style scoped lang="scss">
.app {
    text-align: center;
}
.app-logo {
    height: 80px;
}
.app-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
}
.app-intro {
    font-size: large;
}
</style>
