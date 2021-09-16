import { AttachmentType, FileListTypes } from "../others/types";

export interface UserResponse {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: string;
  isVerified: boolean;
}

export interface AuthResponse {
  token: string;
  user: UserResponse;
  roles: string;
}

export interface ItemApiResponse<T> {
  items: Array<T>;
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface SearchAddressResponse {
  results: Array<SearchAddressResult>;
  status: string;
}

export interface SearchAddressResult {
  address_components: Array<{
    long_name: string;
    short_name: string;
    types: string[];
  }>;
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

export interface PropertyListResponse {
  [key: string]: any;
  id: number;
  imageCount: number;
  sortOrder: number;
  name: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  sellingPrice: number;
  lotArea: number;
  floorArea: number;
  fundId: number;
  fundName: string;
  isPublished: boolean;
  isFeatured: boolean;
  propertyClassificationId: number;
  propertyClassification: string;
  propertyTypeId: number;
  propertyType: string;
  sellingPricePerLotSqm: number;
  sellingPricePerFloorSqm: number;
  leaseRatePerMonth: number;
  edit: boolean;
  loading: boolean;
}

export interface PropertyShowResponse {
  id: number;
  public: {
    [key: string]: any;
    name: string;
    url: string;
    pageTitle: string;
    description: string;
    pageDescription: string;
    publishedDate: string;
    isPublished: boolean;
    isFeatured: boolean;
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    latitude: number;
    longitude: number;
    subdivision: string;
    polygonPoints: Array<{ lat: number; lng: number }>;
    withinSubdivision: boolean;
    propertyClassificationId: number;
    propertyTypeId: number;
    lotArea: number;
    floorArea: number;
    sellingPrice: number;
    leaseRatePerMonth: number;
    withStructure: boolean;
    propertyAmenities: string[];
    propertyImages: FileListTypes[];
  };
  private: {
    [key: string]: any;
    acquisitionDate: string;
    acquisitionPrice: number;
    zonalValue: number;
    fundId: number;
    forConsolidation: boolean;
    internalRateOfReturn: number;
    moneyMultiple: number;
    netInvestorProfit: number;
    sellingBankId: number;
    propertyStatusId: number;
    soldPrice: number;
    leasedPrice: number;
    propertyCases: string[];
  };
  propertyAppraisalValues: AppraisalValueResponse[];
  created: string;
  createdBy: string;
  lastModified: string;
  lastModifiedBy: string;
  isActive: boolean;
  isDeleted: boolean;
}

export interface AppraisalValueResponse {
  propertyId: number;
  appraisalDate: string;
  appraisalValue: number;
}

export interface FundListResponse {
  id: number;
  name: string;
  note: string;
  created: string;
  createdBy: null;
  lastModified: null;
  lastModifiedBy: null;
  isActive: true;
}

export interface OptionValueResponse {
  value: number | string;
  label: string;
  colorCode: string | null;
}

export interface AmenitiesResponse {
  id: number;
  name: string;
  iconLink: string;
  isDeleted: boolean;
}

export interface InvestorResponse {
  [key: string]: any;
  id: number;
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
  isActive: boolean;
  created: string;
  createdBy: string;
  totalCommitments: number;
  totalDividends: number;
  totalInvestments: number;
  investorFunds: InvestorFunds[];
  edit: boolean;
  loading: boolean;
}

export interface SearchProfileResponse {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  middleName: string;
  userId: string;
}

export interface InvestorFunds {
  fundType: string;
  fundTypeId: number;
  id: number;
  investorId: number;
  totalCommitments: number;
  totalDividends: number;
  totalInvestments: number;
}

export interface InvestorShowResponse {
  [key: string]: any;
  city: string;
  country: string;
  created: string;
  createdBy: string;
  email: string;
  entityName: string;
  firstName: string;
  id: number;
  investorFunds: InvestorFunds[];
  isActive: boolean;
  isDeleted: boolean;
  lastModified: string;
  lastModifiedBy: string;
  lastName: string;
  line1: string;
  line2: string;
  logo: string;
  middleName: string;
  preferredCurrency: string;
  state: string;
  totalCommitments: number;
  totalDividends: number;
  totalInvestments: number;
  zipCode: string;
}

export interface FundAssignResponse {
  id: number;
  investorFundId: number;
  investorFund: string;
  amount: number;
  dateSubmitted: string | Date;
  files: AttachmentType[];
  created: string;
  createdBy: string;
  lastModified: string;
  lastModifiedBy: string;
  isActive: boolean;
  isDeleted: boolean;
  type: string;
}

export interface InvestorNotesResponse {
  id: number;
  content: string;
  created: string;
  createdBy: string;
  lastModified: string;
  lastModifiedBy: string;
  isActive: boolean;
  isDeleted: boolean;
}

export interface POCResponse {
  id: number;
  investorId: number;
  investor: string;
  profileId: number;
  profilePicture: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  userId: string;
  profileTag: number;
  profileTagValue: string;
  withAccount: boolean;
  created: string;
  createdBy: string;
  lastModified: string;
  lastModifiedBy: string;
  isActive: boolean;
  isDeleted: boolean;
}

export interface PropertyAuditResponse {
  id: number;
  userId: string;
  type: string;
  tableName: string;
  dateTime: string;
  oldValues: {
    [key: string]: any;
    LastModified: string;
    PropertyStatusId: number;
    SoldDate: string;
  };
  newValues: {
    [key: string]: any;
    LastModified: string;
    PropertyStatusId: number;
    SoldDate: string;
  };
  affectedColumns: string[];
  primaryKey: {
    Id: number;
  };
}

export interface FundResponse {
  id: number;
  name: string;
  note: string;
  alias: string;
  targetRaise: number;
  created: string;
  createdBy: string;
  lastModified: string;
  lastModifiedBy: string;
  isUpcoming: boolean;
  isActive: boolean;
}

export interface ProfileResponse {
  id: number;
  entityName: string;
  profileTag: string;
  preferredCurrency: string;
}

export interface ClientFundsResponse {
  id: number;
  investorId: number;
  fundTypeId: number;
  fundAlias: string;
  fundType: string;
  totalCommitments: number;
  totalInvestments: number;
  totalDividends: number;
}

export interface FundPerformanceResponse {
  performanceByMonth: Array<{
    month: string;
    year: number;
    dividend: number;
    investment: number;
    commitment: number;
  }>;
  ytd: {
    dividend: number;
    investment: number;
    commitment: number;
  };
}

export interface MetricsByType {
  count: number;
  type: string;
  color: string;
}

export interface MetricsByStatus {
  propertyCount: number;
  status: string;
}

export interface PropertyFeedResponse {
  dateAdded: string;
  description: string;
  feedType: string;
  leaseRatePerMonth: number;
  leasedPrice: number;
  propertyId: number;
  propertyImages: Array<{ imageLink: string }>;
  propertyName: string;
  propertyStatus: string;
  sellingPrice: number;
  soldPrice: number;
  reasonForAcquisition: string;
  subject: string;
}

export interface UserReponse {
  id: string;
  profilePicture: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  isVerified: boolean;
  isLocked: boolean;
  role: string;
}

export interface MutationResponse {
  succeeded: boolean;
  errors: string[];
}

export interface CSVImportResponse {
  succeeded: boolean;
  total: number;
  uploaded: number;
  errors: string[];
}

export interface ByFundPropertyResponse {
  city: string;
  country: string;
  description: string;
  floorArea: number;
  id: number;
  isFeatured: boolean;
  isPublished: boolean;
  latitude: number;
  leaseRatePerMonth: number;
  line1: string;
  line2: string;
  longitude: number;
  lotArea: number;
  name: string;
  ogImage: string;
  fund: string;
  pageDescription: string;
  pageTitle: string;
  polygonPoints: Array<{ lat: number; lng: number }>;
  propertyAmenities: string[];
  propertyClassification: string;
  propertyImages: Array<FileListTypes>;
  propertyStatus: string;
  propertyType: string;
  publishedDate: string;
  sellingPrice: number;
  state: string;
  subdivision: string;
  url: string;
  withStructure: boolean;
  withinSubdivision: boolean;
}
