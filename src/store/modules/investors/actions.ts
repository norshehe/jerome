import { ActionTree, ActionContext } from "vuex";

import { RootState } from "@/store";

import { State } from "./state";
import { Mutations } from "./mutations";
// import { AuthMutationTypes } from "../types/mutation-types";
import { InvestorActionTypes } from "@/types/store/action.types";
import { InvestorMutationTypes } from "@/types/store/mutation.types";
import { ClientInvestor } from "@/api/client.service";

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
  [InvestorActionTypes.FETCH_INVESTOR_PROFILE](
    { commit }: AugmentedActionContext,
    payload: null
  ): void;
  [InvestorActionTypes.FETCH_INVESTOR_FUNDS](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [InvestorActionTypes.FETCH_INVESTOR_PROFILE]({ commit }) {
    return new Promise((resolve, reject) => {
      ClientInvestor.profiles()
        .then((res) => {
          commit(InvestorMutationTypes.SET_INVESTOR_PROFILE, res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  [InvestorActionTypes.FETCH_INVESTOR_FUNDS]({ commit }, id) {
    return new Promise((resolve, reject) => {
      ClientInvestor.funds(id)
        .then((res) => {
          commit(InvestorMutationTypes.SET_INVESTOR_FUND, res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
