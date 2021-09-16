import {
  AttachmentType,
  PropertyFormTypes,
  PropertyPrivateFormTypes,
} from "../others/types";

export interface GetPropertyParameter {
  fundId: number | null;
  filter: string | null;
  pageNumber: number | null;
  pageSize: number | null;
  IsPublished: null | boolean;
  IsFeatured: null | boolean;
  sortBy: null | string;
  isAscending: null | boolean;
}

export interface GetInvestorParameter {
  filter: string | null;
  pageNumber: number;
  pageSize: number;
  sortBy: string;
  isAscending: boolean;
}

export interface AssignFundPayload {
  investorId: number | null;
  fundTypeId: number | null;
}

export interface GetFundsParameter {
  filter: string | null;
  pageNumber: number;
  pageSize: number;
}

export interface PropertyPayload {
  [key: string]: any;
  sortOrder: number;
  id: number;
  name: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
  zipCode: number;
  latitude: number;
  longitude: number;
  propertyStatusId: number;
  sellingPrice: number | string;
  lotArea: number;
  floorArea: number;
  fundId: number;
  propertyClassificationId: number;
  propertyTypeId: number;
  leaseRatePerMonth: number;
  isFeatured: boolean;
  isPublished: boolean;
  sellingBankId: number;
  soldDate: string;
  soldPrice: number;
  leasedDate: string;
  leasedPrice: number;
}

export interface PropertyPostPayload {
  public: PropertyFormTypes;
  private: PropertyPrivateFormTypes;
}

export interface ChangeStatusPayload {
  id: number;
  propertyStatusId: number;
  amount: number;
}

export interface AppraisalPayload {
  propertyId: number;
  appraisalDate: string;
  appraisalValue: number;
}

export interface AddFundPayload {
  investorFundId: number | null;
  amount: number | null | string;
  dateSubmitted: Date | null;
  files: AttachmentType[];
}

export interface AddInvestorPayload {
  [key: string]: any;
  logo: string | null;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  entityName: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  preferredCurrency: string;
}

export interface DividendsPayload {
  id: number | null;
  pageNumber: number;
  pageSize: number;
}

export interface POCPayload {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
}

export interface AddUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: string;
}

export interface ChangePasswordPayload {
  currentPassword: string;
  password: string;
  confirmPassword: string;
}

export interface ResetPasswordPayload {
  userId: string;
  password: string;
  confirmPassword: string;
  token: string;
}

export interface GeneratePDFPayload {
  content: string;
  pdfSize: string;
  orientation: string;
  pageWidth: number;
  pdfName: string;
}
