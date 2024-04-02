import { BasicColumn } from '@/components/Table';




export interface ContractItem {
  productName: string;
  material: string;
  unit: string;
  unitPrice: number;
  amount: number;
  isIndependent: boolean;
  productId: number;
}


export enum PaymentType {
  NoDeposit,
  Deposit,
  PayFull,
}

export interface EmployeeList {
  employeeId: string;
  employeeName: string;
  gender: string;
  age: number;
  phone: string;
  idCardNo: string;
  employeeType: string;
  workingYear: number
}

export const employeeColumns: BasicColumn<EmployeeList>[] = [
  {
    title: '职员ID',
    key: 'employeeId',
    width: '5%',
    align: 'center',
    ifShow: true,
  },
  {
    title: '职员工种',
    key: 'employeeType',
    align: 'center',
    width: '15%',
  },
  {
    title: '职员名称',
    key: 'employeeName',
    align: 'center',
    width: '15%',
  },
  {
    title: '职员年龄',
    key: 'age',
    align: 'center',
    width: '10%',
  },
  {
    title: '职员性别',
    key: 'gender',
    align: 'center',
    width: '15%',
  },
  {
    title: '职员身份证',
    key: 'idCardNo',
    align: 'center',
    width: '10%',
  },
  {
    title: '工作年限',
    key: 'workingYear',
    align: 'center',
    width: '10%',
  },
];

