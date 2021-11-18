import { ActionTree, ActionContext } from 'vuex';

import { RootState } from '@/client/store/store';
import { State } from './state';
import { Mutations } from './mutations';
import { ExampleMutationTypes } from './mutation-types';
import { ExampleActionTypes } from './action-types';

/**
 * This is needed to define access to the commit object that Vuex has, this is the object
 * that is how mutations AKA commits occur. Because it must be defined for each Mutation set
 * we have to define it in each actions file.
 */
type AugmentedActionContext = {
    commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

/**
 * Used define which Actions are exposed to the store
 */
export interface Actions {
    [ExampleActionTypes.FETCH_EXAMPLE]({ commit }: AugmentedActionContext, someId: string): Promise<boolean>;
}

/**
 * This is where the implementation of the Actions occur.
 */
export const actions: ActionTree<State, RootState> & Actions = {
    async [ExampleActionTypes.FETCH_EXAMPLE]({ commit }, someId: string) {
        return new Promise(() => {
            setTimeout(() => {
                console.debug('FETCH_DOCUMENTS', someId);
                commit(ExampleMutationTypes.SET_DATA, ['client', 'admin']);
                return true;
            }, 500);
        });
    },
};
