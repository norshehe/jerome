import { MutationTree } from "vuex";

// import { UserDocuments, Count } from "@/@types";

import { State } from "./state";
import { InvestorMutationTypes } from "@/types/store/mutation.types";

import {
  ClientFundsResponse,
  ProfileResponse,
} from "@/types/api/response.types";

export type Mutations<S = State> = {
  [InvestorMutationTypes.SET_INVESTOR_PROFILE](
    state: S,
    payload: ProfileResponse[]
  ): void;
  [InvestorMutationTypes.SET_INVESTOR_FUND](
    state: S,
    payload: ClientFundsResponse[]
  ): void;
  [InvestorMutationTypes.SET_PROFILE_ID](state: S, payload: number): void;
  [InvestorMutationTypes.SET_CLIENT_LOADING](state: S, payload: boolean): void;
};
export const mutations: MutationTree<State> & Mutations = {
  [InvestorMutationTypes.SET_INVESTOR_PROFILE](
    state,
    payload: ProfileResponse[]
  ) {
    state.profiles = payload;
  },
  [InvestorMutationTypes.SET_INVESTOR_FUND](
    state,
    payload: ClientFundsResponse[]
  ) {
    state.clientFunds = payload;
  },
  [InvestorMutationTypes.SET_PROFILE_ID](state, payload: number) {
    state.profileId = payload;
  },
  [InvestorMutationTypes.SET_CLIENT_LOADING](state, payload: boolean) {
    state.loading = payload;
  },
};
