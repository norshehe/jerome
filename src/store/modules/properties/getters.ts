import { GetterTree } from "vuex";

import { RootState } from "@/store";

import { State, PropertyStateTypes } from "./state";

export type Getters = {
  optionValues(state: PropertyStateTypes): PropertyStateTypes["optionValues"];
};

export const getters: GetterTree<State, RootState> & Getters = {
  optionValues: (state) => state.optionValues,
};
