
<template>
  <div class="app">
    Hello World Example!
    <ul>
      <li>Webpack 4</li>
      <li>eslint 7</li>
      <ul>
        <li>eslint-typescript/parser 5</li>
        <li>vue-eslint-parser 7</li>
      </ul>
      <li>Vue3</li>
      <li>TypeScript 4</li>
      <li>Vuex 4</li>
    </ul>
    <h3>Vuex + TS Example</h3>
    <h2>User Roles</h2>
    <ul
      v-for="(r, idx) in roles"
      :key="idx"
    >
      <li>
        <b>{{ r }}</b>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import type { Example } from "@/client/models/Example.model";
import { useStore } from "@/client/store/store";
import { ExampleActionTypes } from "@/client/store/modules/example/action-types";

export default defineComponent({
  name: "AppStart",
  setup() {
    var store = useStore();

    const roles = computed<Example["rolesData"]>(() => {
      return store.getters["example/roles"];
    });

    onMounted(async () => {
      await store.dispatch(`example/${ExampleActionTypes.FETCH_EXAMPLE}`, "1");
    });

    return {
      roles,
    };
  },
});
</script>

<style scoped type="sass">
.app-container {
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
.app {
  overflow: hidden;
  height: 100vh;
  background: lightgray;
}
</style>
