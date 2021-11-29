// import { Store } from 'vuex'
import { Store } from '@/client/store/store'

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store
  }
}
