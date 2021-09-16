import { ActionTree, ActionContext } from "vuex";

import { RootState } from "@/store";

import { AuthStateTypes, State } from "./state";
import { Mutations } from "./mutations";
// import { AuthMutationTypes } from "../types/mutation-types";
import { AuthActionTypes } from "@/types/store/action.types";
import ApiService from "@/api/api.service";
import { AuthMutationTypes } from "@/types/store/mutation.types";
import { AxiosResponse } from "axios";
import jwtService from "@/common/jwt.service";
import { Auth } from "@/api/auth.service";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1]
  ): ReturnType<Actions[K]>;
} & Omit<ActionContext<State, RootState>, "commit"> &
  Omit<ActionContext<State, RootState>, "dispatch">;

export interface Actions {
  [AuthActionTypes.CHECK_AUTH](
    { commit }: AugmentedActionContext,
    payload: null // Obsolete in here but left as an example
  ): void;
  [AuthActionTypes.LOGIN](
    { commit }: AugmentedActionContext,
    payload: Record<string, string> // Obsolete in here but left as an example
  ): Promise<unknown>;
  [AuthActionTypes.GOOGLE_LOGIN](
    { commit }: AugmentedActionContext,
    payload: string // Obsolete in here but left as an example
  ): Promise<unknown>;
  [AuthActionTypes.LOGOUT]({
    commit,
  }: AugmentedActionContext): Promise<unknown>;
  [AuthActionTypes.REFRESH](
    { commit }: AugmentedActionContext,
    payload: null // Obsolete in here but left as an example
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [AuthActionTypes.CHECK_AUTH]({ commit }) {
    if (jwtService.getToken()) {
      ApiService.setHeader();
      return new Promise((resolve, reject) => {
        Auth.me()
          .then((res) => {
            commit(AuthMutationTypes.SET_USER, res);
            resolve(res);
          })
          .catch((err) => {
            commit(AuthMutationTypes.PURGE_AUTH, null);
            reject(err);
          });
      });
    } else {
      commit(AuthMutationTypes.PURGE_AUTH, null);
    }
  },
  [AuthActionTypes.LOGIN]({ commit }, payload: Record<string, string>) {
    return new Promise((resolve, reject) => {
      Auth.login({
        username: payload.username,
        password: payload.password,
      })
        .then((res: AxiosResponse): void => {
          const payload: AuthStateTypes = res.data;
          commit(AuthMutationTypes.SET_AUTH, payload);
          ApiService.setHeader();
          resolve(payload);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  [AuthActionTypes.GOOGLE_LOGIN]({ commit }, payload: string) {
    return new Promise((resolve, reject) => {
      Auth.googleAuth(payload)
        .then((res: AxiosResponse): void => {
          const payload: AuthStateTypes = res.data;
          commit(AuthMutationTypes.SET_AUTH, payload);
          ApiService.setHeader();
          resolve(payload);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  [AuthActionTypes.REFRESH]({ commit }) {
    return new Promise((resolve, reject) => {
      ApiService.setCredentials();
      Auth.refresh()
        .then(async (res: AxiosResponse) => {
          const payload: AuthStateTypes = res.data;
          commit(AuthMutationTypes.SET_AUTH, payload);
          ApiService.setHeader();
          resolve(res);
        })
        .catch((err) => {
          commit(AuthMutationTypes.PURGE_AUTH, null);
          reject(err);
        });
    });
  },
  [AuthActionTypes.LOGOUT]({ commit }) {
    return new Promise((resolve, reject) => {
      ApiService.setCredentials();
      commit(AuthMutationTypes.SET_GLOBAL_LOADING, true);
      Auth.logout()
        .then((res: AxiosResponse): void => {
          commit(AuthMutationTypes.PURGE_AUTH);
          resolve(res);
          commit(AuthMutationTypes.SET_GLOBAL_LOADING, false);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
