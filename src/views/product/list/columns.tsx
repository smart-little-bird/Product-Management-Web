import { NTag } from 'naive-ui';
import { BasicColumn } from '@/components/Table';

export interface ProductList {
  id: number;
  description: string;
  entryCriteria: string;
  productItemDtos: ProductItem[];
}
export enum ProductType {
  Shafting,
  RudderSystem,
  Standard,
  NonStandard,
}
export const ProductTypeHelper = {
  productTypeMapper: new Map([
    [ProductType.Shafting, '轴系'],
    [ProductType.RudderSystem, '舵系'],
    [ProductType.Standard, '标准件'],
    [ProductType.NonStandard, '非标件'],
  ]),
  getDesc: (type: ProductType) => ProductTypeHelper.productTypeMapper.get(type),
};

export interface ProductItem {
  id: number;
  productType: ProductType;
  name: string;
  specifications: string;
  amount: string;
  unitPrice: number;
  unit: string;
  material: string;
  technicalRequirements: string;
  remark: string;
  totalPrice: number;
}
export interface ListData {
  id: string;
  name: string;
  avatar: string;
  address: string;
  beginTime: string;
  endTime: string;
  date: string;
}

export const columns: BasicColumn<ProductList>[] = [
  {
    title: '序号',
    key: 'id',
    width: 100,
    align: 'center',
  },
  {
    title: '产品描述',
    key: 'description',
    align: 'center',
    width: 150,
  },
  {
    title: '入级描述',
    key: 'entryCriteria',
    align: 'center',
    width: 100,
  },
];
