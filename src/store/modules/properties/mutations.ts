import { MutationTree } from "vuex";

// import { UserDocuments, Count } from "@/@types";

import { State } from "./state";
import { PropertyMutationTypes } from "@/types/store/mutation.types";
import { OptionValueResponse } from "@/types/api/response.types";

export type Mutations<S = State> = {
  [PropertyMutationTypes.SET_PROPERTY_CLASSIFICATIONS](
    state: S,
    payload: OptionValueResponse[]
  ): void;
  [PropertyMutationTypes.SET_PROPERTY_TYPES](
    state: S,
    payload: OptionValueResponse[]
  ): void;
  [PropertyMutationTypes.SET_PROPERTY_FUNDS](
    state: S,
    payload: OptionValueResponse[]
  ): void;
  [PropertyMutationTypes.SET_PROPERTY_SELLINGBANKS](
    state: S,
    payload: OptionValueResponse[]
  ): void;
  [PropertyMutationTypes.SET_COUNTRIES](
    state: S,
    payload: OptionValueResponse[]
  ): void;
  [PropertyMutationTypes.SET_STATES](
    state: S,
    payload: OptionValueResponse[]
  ): void;
  [PropertyMutationTypes.SET_CITIES](
    state: S,
    payload: OptionValueResponse[]
  ): void;
  [PropertyMutationTypes.SET_STATUS](
    state: S,
    payload: OptionValueResponse[]
  ): void;
  [PropertyMutationTypes.SET_AMENITIES](
    state: S,
    payload: OptionValueResponse[]
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [PropertyMutationTypes.SET_PROPERTY_CLASSIFICATIONS](
    state,
    payload: OptionValueResponse[]
  ) {
    state.optionValues.propertyClassification = payload;
  },
  [PropertyMutationTypes.SET_AMENITIES](state, payload: OptionValueResponse[]) {
    state.optionValues.amenities = payload;
  },
  [PropertyMutationTypes.SET_PROPERTY_TYPES](
    state,
    payload: OptionValueResponse[]
  ) {
    state.optionValues.propertyType = payload;
  },
  [PropertyMutationTypes.SET_PROPERTY_FUNDS](
    state,
    payload: OptionValueResponse[]
  ) {
    state.optionValues.fund = payload;
  },
  [PropertyMutationTypes.SET_PROPERTY_SELLINGBANKS](
    state,
    payload: OptionValueResponse[]
  ) {
    state.optionValues.sellingBank = payload;
  },
  [PropertyMutationTypes.SET_COUNTRIES](state, payload: OptionValueResponse[]) {
    state.optionValues.country = payload;
  },
  [PropertyMutationTypes.SET_STATES](state, payload: OptionValueResponse[]) {
    state.optionValues.state = payload;
  },
  [PropertyMutationTypes.SET_CITIES](state, payload: OptionValueResponse[]) {
    state.optionValues.city = payload;
  },
  [PropertyMutationTypes.SET_STATUS](state, payload: OptionValueResponse[]) {
    state.optionValues.status = payload;
  },
};
