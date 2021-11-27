
<template>
  <div class="app-header">
    <router-link to="/home">
      Home
    </router-link>
    <router-link to="/example/tester">
      Tester Example
    </router-link>
    <router-link to="/example/creator">
      Creator Example
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped type="sass" lang="scss">
.app-header {
  background-color: #222;
  padding: 20px;
  color: white;

  a {
    padding: 0px 5px 0px 5px;
  }
}
</style>
