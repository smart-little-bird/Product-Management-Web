import { BasicColumn } from '@/components/Table';
import { NTag } from 'naive-ui';

export interface CreateContractCommand {
  id?: number;
  clientId?: number;
  isCombineFax: boolean;
  contractItems: ContractItem[];
  contractPayMethod: ContractPayMethod;
  contractShippingInfo: ContractShippingInfo;
}
export interface ContractItem {
  productName: string;
  material: string;
  unit: string;
  unitPrice: number;
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

export const contractItemColumns: BasicColumn<ContractItem>[] = [
  {
    title: '序号',
    key: 'productId',
    width: '5%',
    align: 'center',
    ifShow: false,
  },
  {
    title: '产品名称',
    key: 'productName',
    align: 'center',
    width: '10%',
  },
  {
    title: '是否独立产品',
    key: 'isIndependent',
    align: 'center',
    width: '10%',
    render(row) {
      return (
        <NTag bordered round size="medium" type={row.isIndependent ? 'success' : 'default'}>
          {{ default: () => (row.isIndependent ? '是' : '否') }}
        </NTag>
      );
    },
  },
  {
    title: '材质',
    key: 'material',
    align: 'center',
    width: '10%',
  },
  {
    title: '单价',
    key: 'unitPrice',
    align: 'center',
    width: '10%',
  },
  {
    title: '单位',
    key: 'unit',
    align: 'center',
    width: '10%',
  },
  {
    title: '总计',
    key: 'amount',
    align: 'center',
    width: '10%',
  },
];
