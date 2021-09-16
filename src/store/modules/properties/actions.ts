import { ActionTree, ActionContext } from "vuex";

import { RootState } from "@/store";

import { State } from "./state";
import { Mutations } from "./mutations";
// import { AuthMutationTypes } from "../types/mutation-types";
import { PropertyActionTypes } from "@/types/store/action.types";
import { PropertyMutationTypes } from "@/types/store/mutation.types";
import { Location, PropertyOptionValues } from "@/api/property.service";

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
  [PropertyActionTypes.FETCH_PROPERTY_CLASSIFICATIONS](
    { commit }: AugmentedActionContext,
    payload: null
  ): void;
  [PropertyActionTypes.FETCH_PROPERTY_TYPES](
    { commit }: AugmentedActionContext,
    payload: null
  ): void;
  [PropertyActionTypes.FETCH_PROPERTY_FUNDS](
    { commit }: AugmentedActionContext,
    payload: null
  ): void;
  [PropertyActionTypes.FETCH_PROPERTY_SELLINGBANKS](
    { commit }: AugmentedActionContext,
    payload: null
  ): void;
  [PropertyActionTypes.FETCH_COUNTRIES](
    { commit }: AugmentedActionContext,
    payload: null
  ): void;
  [PropertyActionTypes.FETCH_STATES](
    { commit }: AugmentedActionContext,
    payload: string
  ): void;
  [PropertyActionTypes.FETCH_CITIES](
    { commit }: AugmentedActionContext,
    payload: string
  ): void;
  [PropertyActionTypes.FETCH_STATUS](
    { commit }: AugmentedActionContext,
    payload: null
  ): void;
  [PropertyActionTypes.FETCH_AMENITIES](
    { commit }: AugmentedActionContext,
    payload: null
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [PropertyActionTypes.FETCH_AMENITIES]({ commit }) {
    return new Promise((resolve, reject) => {
      PropertyOptionValues.amenities()
        .then((res) => {
          commit(PropertyMutationTypes.SET_AMENITIES, res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  [PropertyActionTypes.FETCH_PROPERTY_CLASSIFICATIONS]({ commit }) {
    return new Promise((resolve, reject) => {
      PropertyOptionValues.propertyClassification()
        .then((res) => {
          commit(PropertyMutationTypes.SET_PROPERTY_CLASSIFICATIONS, res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  [PropertyActionTypes.FETCH_PROPERTY_TYPES]({ commit }) {
    return new Promise((resolve, reject) => {
      PropertyOptionValues.propertyType()
        .then((res) => {
          commit(PropertyMutationTypes.SET_PROPERTY_TYPES, res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  [PropertyActionTypes.FETCH_PROPERTY_FUNDS]({ commit }) {
    return new Promise((resolve, reject) => {
      PropertyOptionValues.fund()
        .then((res) => {
          commit(PropertyMutationTypes.SET_PROPERTY_FUNDS, res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  [PropertyActionTypes.FETCH_PROPERTY_SELLINGBANKS]({ commit }) {
    return new Promise((resolve, reject) => {
      PropertyOptionValues.sellingBank()
        .then((res) => {
          commit(PropertyMutationTypes.SET_PROPERTY_SELLINGBANKS, res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  [PropertyActionTypes.FETCH_COUNTRIES]({ commit }) {
    return new Promise((resolve, reject) => {
      Location.getCountry()
        .then((res) => {
          commit(PropertyMutationTypes.SET_COUNTRIES, res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  [PropertyActionTypes.FETCH_STATES]({ commit }, payload: string) {
    return new Promise((resolve, reject) => {
      Location.getState(payload)
        .then((res) => {
          commit(PropertyMutationTypes.SET_STATES, res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  [PropertyActionTypes.FETCH_CITIES]({ commit }, payload: string) {
    return new Promise((resolve, reject) => {
      Location.getCity(payload)
        .then((res) => {
          commit(PropertyMutationTypes.SET_CITIES, res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  [PropertyActionTypes.FETCH_STATUS]({ commit }) {
    return new Promise((resolve, reject) => {
      PropertyOptionValues.status()
        .then((res) => {
          commit(PropertyMutationTypes.SET_STATUS, res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
