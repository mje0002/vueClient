import * as Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// TODO: How to surpass cyclical dependency linting errors cleanly?
import { module as example, ExampleStore, State as ExampleState } from '@/client/store/modules/example';

export type RootState = {
  example: ExampleState;
};

export type Store = ExampleStore<Pick<RootState, 'example'>>;

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [Vuex.createLogger({})] : [];

// Plug in session storage based persistence
plugins.push(createPersistedState({ storage: window.sessionStorage }));

/**
 * This is were we define the store and its scope/ modules
 * the modules name (example). Must match the string defined for the Namespace
 * and the Pick. 
 */
export const store = Vuex.createStore({
  strict: true,
  plugins,
  modules: {
    example
  },
});

export function useStore(): Store {
  return store as Store;
}
