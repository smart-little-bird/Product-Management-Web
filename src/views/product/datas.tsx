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
  amount: number;
  unitPrice: number;
  unit: string;
  material: string;
  technicalRequirements: string;
  remark: string;
  totalPrice: number;
}

export const columns: BasicColumn<ProductList>[] = [
  {
    title: '序号',
    key: 'id',
    width: 100,
    align: 'center',
    ifShow: false,
  },
  {
    title: '产品描述',
    key: 'description',
    align: 'center',
    width: '40%',
  },
  {
    title: '入级描述',
    key: 'entryCriteria',
    align: 'center',
    width: '40%',
  },
];
const getProductTypeTagType = (productType: ProductType) => {
  let tagType: 'default' | 'success' | 'info' | 'warning' | 'error' | 'primary' | undefined =
    undefined;
  switch (productType) {
    case ProductType.Shafting:
      tagType = 'success';
      break;
    case ProductType.RudderSystem:
      tagType = 'info';
      break;
    case ProductType.NonStandard:
      tagType = 'warning';
      break;
    default:
      tagType = 'default';
      break;
  }
  return tagType;
};

export const productItemColumns: BasicColumn<ProductItem>[] = [
  {
    title: '序号',
    key: 'id',
    width: '5%',
    align: 'center',
    ifShow: false,
  },
  {
    title: '名称',
    key: 'name',
    align: 'center',
    width: '10%',
  },
  {
    title: '类型',
    key: 'productType',
    align: 'center',
    width: '5%',
    render(row) {
      return (
        <NTag bordered round size="medium" type={getProductTypeTagType(row.productType)}>
          {{ default: () => ProductTypeHelper.getDesc(row.productType) }}
        </NTag>
      );
    },
  },
  {
    title: '规格',
    key: 'specifications',
    align: 'center',
    width: '5%',
  },
  {
    title: '数量',
    key: 'amount',
    align: 'center',
    width: '5%',
  },
  {
    title: '单价',
    key: 'unitPrice',
    align: 'center',
    width: '5%',
  },
  {
    title: '单位',
    key: 'unit',
    align: 'center',
    width: '5%',
  },
  {
    title: '材质',
    key: 'material',
    align: 'center',
    width: '5%',
  },
  {
    title: '技术要求',
    key: 'technicalRequirements',
    align: 'center',
    width: '10%',
  },
  {
    title: '备注',
    key: 'remark',
    align: 'center',
    width: '15%',
  },
];
