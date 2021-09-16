import { ByFundPropertyResponse } from "../api/response.types";

export interface PropertyFormTypes {
  [key: string]: any;
  name: string | null;
  description: string | null;
  pageDescription: string | null;
  line1: string | null;
  line2: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zipCode: string | null;
  latitude: number | null;
  longitude: number | null;
  subdivision: string | null;
  withinSubdivision: boolean | null;
  propertyClassificationId: number | null;
  propertyTypeId: number | null;
  lotArea: number | null;
  floorArea: number | null;
  polygonPoints: Array<{ lat: number; lng: number }> | null;
  sellingPrice: number | null | string;
  leaseRatePerMonth: number | null | string;
  propertyStatusId: number | null;
  numberOfBedRooms: number | null;
  withStructure: boolean | null;
  propertyAmenities: string[] | [];
  propertyImages: FileListTypes[] | [];
  keyFeatures: Array<{ icon: string; name: string }> | [];
}

export interface PropertyPrivateFormTypes {
  [key: string]: any;
  id: number | null;
  acquisitionDate: string | null;
  acquisitionPrice: number | null;
  zonalValue: number | null;
  fundId: number | null;
  forConsolidation: boolean | null;
  internalRateOfReturn: number | null;
  moneyMultiple: number | null;
  netInvestorProfit: number | null;
  sellingBankId: number | null;
  soldDate: string | null;
  leasedDate: string | null;
  soldPrice: number | null;
  rentalYield: number | null;
  leasedPrice: number | null;
  reasonForAcquisition: string | null;
  propertyCases: string[] | [];
}

export interface FileListResponseTypes {
  name: string;
  url: string;
  response: UploadResponse;
}

export interface FileListTypes {
  id: number;
  name: string;
  imageLink: string;
  isThumbNail: boolean;
}

export interface AttachmentType {
  name: string;
  filePath: string;
  fileType: string;
  fileSize: number;
}

export interface UploadResponse {
  name: string;
  filePath: string;
  fileSize: number;
  fileType: string;
}

export interface SideMenuType {
  title: string;
  name: string;
  svg: string;
  isSubOpen: boolean;
  isInvestor: boolean;
  subMenu: Array<{ title: string; name: string; id: number | null }>;
}

export interface TransactionType {
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

export interface SideBarType {
  name: string;
  icon: string;
  current: boolean;
  children: Array<SiderBarChildrenType>;
}

export interface SiderBarChildrenType {
  current: boolean;
  name: string;
  href: string;
}

export interface UpcomingFundTypes {
  [key: string]: ByFundPropertyResponse[];
}
