export interface Contract {
  clientId: string;
  isCombineFax: boolean;
  clientName: string;
  phone: string;
  bankAccount: string;
  street: string;
  city: string;
  province: string;
  contractItems: ContractItem[];
  contractPayMethod: ContractPayMethod;
  contractShippingInfo: ContractShippingInfo;
}
export interface ContractItem {
  productName: string;
  material: string;
  unit: string;
  unitPrice: string;
  amount: number;
  isIndependent: boolean;
  productId: number;
}

export interface ContractShippingInfo {
  shipDateTime: string;
  shipType: string;
  logisticsUndertaker: string;
}

export interface ContractPayMethod {
  paymentType: PaymentType;
  payPercents: number[];
}

export enum PaymentType {
  NoDeposit,
  Deposit,
  PayFull,
}
