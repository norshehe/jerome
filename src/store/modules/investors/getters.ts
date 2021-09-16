import { GetterTree } from "vuex";

import { RootState } from "@/store";

import { State, InvestorStateTypes } from "./state";

export type Getters = {
  profiles(state: InvestorStateTypes): InvestorStateTypes["profiles"];
  clientFunds(state: InvestorStateTypes): InvestorStateTypes["clientFunds"];
  profileId(state: InvestorStateTypes): InvestorStateTypes["profileId"];
  clientLoading(state: InvestorStateTypes): InvestorStateTypes["loading"];
};

export const getters: GetterTree<State, RootState> & Getters = {
  profiles: (state) => state.profiles,
  clientFunds: (state) => state.clientFunds,
  profileId: (state) => state.profileId,
  clientLoading: (state) => state.loading,
};
