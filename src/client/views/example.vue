
<template>
  <div class="exampleSample">
    <h3>Vuex + TS Example for {{ who }}</h3>
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
  name: "Sample",
  props: {
    who: { type: String, required: true },
  },
  setup() {
    var store = useStore();

    const roles = computed<Example["rolesData"]>(() => {
      return store.getters["example/roles"];
    });

    onMounted(async () => {
      await store.dispatch(`example/${ExampleActionTypes.FETCH_EXAMPLE}`, "1");
    });

    return {
      roles
    };
  },
});
</script>

<style scoped type="sass">
</style>
