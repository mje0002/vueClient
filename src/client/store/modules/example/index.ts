import * as Vuex from 'vuex';
import { Namespaced } from '@/client/store/@types'
// TODO: How to surpass cyclical dependency linting errors cleanly?
import { RootState } from '@/client/store/store';
import { State, state } from './state';
import { getters, Getters } from './getters';
import { mutations, Mutations } from './mutations';
import { actions, Actions } from './actions';

export type { State };
/**
 * This allows for dispatch and Namespace Modules to work correctly
 * with in the vuex/ts eco-system
 */
type NamespacedMutations = Namespaced<Actions, 'example'>;
type NamespacedGetters = Namespaced<Getters, 'example'>;

/**
 * Type definition for the example module / store.
 */
export type ExampleStore<S = State> = Omit<Vuex.Store<S>, 'getters' | 'commit' | 'dispatch'>
    & {
        commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
            key: K,
            payload: P,
            options?: Vuex.CommitOptions
        ): ReturnType<Mutations[K]>;
    } & {
        dispatch<K extends keyof NamespacedMutations>(
            key: K,
            payload: Parameters<NamespacedMutations[K]>[1],
            options?: Vuex.DispatchOptions
        ): ReturnType<NamespacedMutations[K]>;
    } & {
        getters: {
            [K in keyof NamespacedGetters]: ReturnType<NamespacedGetters[K]>
        };
    };

/**
 * This is the module setup and implementation for the 
 * example module
 */
export const module: Vuex.Module<State, RootState> = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
};
