export interface PropertyAuditParameter {
  id: number | null;
  pageNumber: number;
  pageSize: number;
}

export interface FundParameter {
  name: string;
  note: string;
  currency: string;
  alias: string;
  targetRaise: number | string;
  isActive: boolean;
  isUpcoming: boolean;
}

export interface UserParameter {
  pageNumber: number;
  pageSize: number;
  filter: string | null;
  roleName: string | null;
}

export interface LockParameter {
  email: string;
  lockUntil: Date;
}
