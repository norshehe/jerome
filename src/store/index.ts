import { createStore, createLogger } from "vuex";

import {
  store as auth,
  AuthStore,
  State as AuthState,
} from "@/store/modules/auth";

import {
  store as property,
  PropertyStore,
  State as PropertyState,
} from "@/store/modules/properties";
import {
  store as investor,
  InvestorStore,
  State as InvestorState,
} from "./modules/investors";

export type RootState = {
  auth: AuthState;
  property: PropertyState;
  investor: InvestorState;
};

export type Store = AuthStore<Pick<RootState, "auth">> &
  PropertyStore<Pick<RootState, "property">> &
  InvestorStore<Pick<RootState, "investor">>;

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];

// Plug in session storage based persistence
// plugins.push(createPersistedState({ storage: window.sessionStorage }));

export const store = createStore({
  plugins,
  modules: {
    auth,
    property,
    investor,
  },
});

export function useStore(): Store {
  return store as Store;
}
