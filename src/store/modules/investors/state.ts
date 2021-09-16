import {
  ClientFundsResponse,
  ProfileResponse,
} from "@/types/api/response.types";

export interface InvestorStateTypes {
  profiles: ProfileResponse[];
  clientFunds: ClientFundsResponse[];
  profileId: number | null;
  loading: boolean;
}

export const state: InvestorStateTypes = {
  profiles: [],
  clientFunds: [],
  profileId: null,
  loading: false,
};

export type State = typeof state;
