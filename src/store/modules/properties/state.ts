import { OptionValueResponse } from "@/types/api/response.types";

export interface PropertyStateTypes {
  optionValues: {
    [key: string]: any;
    propertyClassification: OptionValueResponse[];
    propertyType: OptionValueResponse[];
    fund: OptionValueResponse[];
    country: OptionValueResponse[];
    state: OptionValueResponse[];
    city: OptionValueResponse[];
    sellingBank: OptionValueResponse[];
    amenities: OptionValueResponse[];
    status: OptionValueResponse[];
  };
}

export const state: PropertyStateTypes = {
  optionValues: {
    propertyClassification: [],
    propertyType: [],
    fund: [],
    country: [],
    state: [],
    city: [],
    sellingBank: [],
    amenities: [],
    status: [],
  },
};

export type State = typeof state;
