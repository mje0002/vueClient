import * as Vuex from 'vuex';
import { Example } from '@/client/models/Example.model'
import { State } from './state';
import { ExampleMutationTypes } from './mutation-types';

/**
 * Mutation Object definition
 */
export type Mutations<S = State> = {
    [ExampleMutationTypes.SET_DATA](state: S, payload: Example["rolesData"]): void;
    [ExampleMutationTypes.UPDATE_DATA](state: S, payload: Example["rolesData"]): void;
}

/**
 * Mutation Definition implementation
 */
export const mutations: Vuex.MutationTree<State> & Mutations = {
    [ExampleMutationTypes.SET_DATA](state: State, roles: Example["rolesData"]) {
        state.rolesData = roles;
    },
    [ExampleMutationTypes.UPDATE_DATA](state: State, roles: Example["rolesData"]) {
        state.rolesData = roles;
    },
};
