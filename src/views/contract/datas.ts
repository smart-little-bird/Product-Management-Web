import { BasicColumn } from '@/components/Table';

export interface CreateContractCommand {
  id: number;
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
export interface ContractDetail {
  id: number;
  contractNo: string;
  phone: string;
  clientName: string;
  shipDateTime: string;
  shipType: string;
  percents: number[];
  technologyStandard: string;
  faxContext: FaxContext;
  contractContextDetailDtos: ContractItem[];
}
export interface FaxContext {
  isCombineFax: boolean;
  taxRate: string;
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

export interface ContractList {
  contractId: number;
  contractNo: string;
  clientName: string;
  shipDateTime: string;
  shipType: string;
  totalPrice: number;
}

export const contractColumns: BasicColumn<ContractList>[] = [
  {
    title: '序号',
    key: 'contractId',
    width: '5%',
    align: 'center',
    ifShow: false,
  },
  {
    title: '合同号',
    key: 'contractNo',
    align: 'center',
    width: '15%',
  },
  {
    title: '客户名称',
    key: 'clientName',
    align: 'center',
    width: '15%',
  },
  {
    title: '交货类型',
    key: 'shipType',
    align: 'center',
    width: '10%',
  },
  {
    title: '交货时间',
    key: 'shipDateTime',
    align: 'center',
    width: '15%',
  },
  {
    title: '总价',
    key: 'totalPrice',
    align: 'center',
    width: '10%',
  },
];
