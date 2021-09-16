import { MutationTree } from "vuex";

import { State } from "./state";
import { AuthMutationTypes } from "@/types/store/mutation.types";
import jwtService from "@/common/jwt.service";
import router from "@/router";
import { AuthResponse, UserResponse } from "@/types/api/response.types";

export type Mutations<S = State> = {
  [AuthMutationTypes.SET_USER](state: S, payload: UserResponse): void;
  [AuthMutationTypes.SET_AUTH](state: S, payload: AuthResponse): void;
  [AuthMutationTypes.PURGE_AUTH](state: S, payload: null): void;
  [AuthMutationTypes.SET_GLOBAL_LOADING](state: S, status: boolean): void;
  [AuthMutationTypes.SET_MOUNT](state: S, status: boolean): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [AuthMutationTypes.SET_USER](state, payload: UserResponse) {
    state.user = payload;
    state.isAuthenticated = true;
  },
  [AuthMutationTypes.SET_GLOBAL_LOADING](state, status: boolean) {
    state.loading = status;
  },
  [AuthMutationTypes.SET_MOUNT](state, status: boolean) {
    state.mount = status;
  },
  [AuthMutationTypes.SET_AUTH](state, payload: AuthResponse) {
    jwtService.saveToken(payload.token);
    state.user = payload.user;
    state.isAuthenticated = true;
  },
  [AuthMutationTypes.PURGE_AUTH](state) {
    state.isAuthenticated = false;
    jwtService.destroyToken();
    router.push({ name: "Login" });
  },
};
