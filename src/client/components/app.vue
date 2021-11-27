
<template>
  <div class="app">
    <Header />
    <router-view class="app-container" />
  </div>
</template>

<script lang="ts">
import type { Component } from "vue";
import { defineComponent } from "vue";
import Header from "@/client/components/header.vue";

export default defineComponent({
  name: "AppStart",
  components: {
    'Header': Header as Component
  },
});
</script>

<style scoped type="sass">
.app-container {
  min-width: 550px;
  height: calc(100vh - 70px);
  overflow-x: auto;
}
.center {
  text-align: center;
}
.app-logo {
  height: 80px;
}
.app-intro {
  font-size: large;
}
.app {
  overflow: hidden;
  height: calc(100vh - 16px);
  background: lightgray;
}
</style>
