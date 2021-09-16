import { GetterTree } from "vuex";

import { RootState } from "@/store";

import { State, AuthStateTypes } from "./state";
import { UserResponse } from "@/types/api/response.types";

export type Getters = {
  currentUser(state: AuthStateTypes): UserResponse;
  isAuthenticated(state: AuthStateTypes): boolean;
  userState(state: AuthStateTypes): boolean;
  loading(state: AuthStateTypes): boolean;
  mount(state: AuthStateTypes): boolean;
};

export const getters: GetterTree<State, RootState> & Getters = {
  currentUser: (state) => state.user,
  isAuthenticated: (state) => state.isAuthenticated,
  userState(state) {
    return Object.keys(state.user).length > 0;
  },
  loading(state) {
    return state.loading;
  },
  mount(state) {
    return state.mount;
  },
};
