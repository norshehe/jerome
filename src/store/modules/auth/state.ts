import { UserResponse } from "@/types/api/response.types";

export interface AuthStateTypes {
  isAuthenticated: boolean;
  user: UserResponse;
  loading: boolean;
  mount: boolean;
}

export const state: AuthStateTypes = {
  isAuthenticated: true,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
    isVerified: false,
  },
  loading: false,
  mount: false,
};

export type State = typeof state;
