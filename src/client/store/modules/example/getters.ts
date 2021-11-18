import * as Vuex from 'vuex';
import { Example } from '@/client/models/Example.model'
import { RootState } from '@/client/store/store';

import { State } from './state';

/**
 * The getters object definition
 */
export type Getters = {
  profile(state: State): Example['profileData'];
  roles(state: State): Example['rolesData'];
  isClient(state: State): boolean;
  isAdmin(state: State): boolean;
}

/**
 * Getters object definition implementation
 */
export const getters: Vuex.GetterTree<State, RootState> & Getters = {
  profile: (state) => state.profileData,
  roles: (state) => state.rolesData,
  isClient: (state) => state.profileData.name === 'client',
  isAdmin: (state) => state.profileData.name === 'admin',
};
