import { NTag } from 'naive-ui';
import { BasicColumn } from '@/components/Table';
export interface ListData {
  id: string;
  name: string;
  avatar: string;
  address: string;
  beginTime: string;
  endTime: string;
  date: string;
}
export enum ClientType {
  Enterprise,
  Personage,
  ThreeWay,
}
export interface ClientList {
  id: number;
  clientType: ClientType;
  name: string;
  street: string;
  city: string;
  province: string;
  zipCode: string;
  clientAgent: ClientAgent;
  tFN: string;
  bankTitle: string;
  bankAccount: string;
  billingTelephone: string;
  contactNumber: string;
  email: string;
  fax: string;
}
export interface ClientAgent {
  name: string;
  phoneNumber: string;
}
export const ClientTypeHelper = {
  clientTypeMapper: new Map([
    [ClientType.Enterprise, '企业'],
    [ClientType.Personage, '个人'],
    [ClientType.ThreeWay, '其他'],
  ]),
  getDesc: (type: ClientType) => ClientTypeHelper.clientTypeMapper.get(type),
};
// export const columns: BasicColumn<ListData>[] = [
//   {
//     title: 'id',
//     key: 'id',
//     width: 100,
//   },
//   {
//     title: '名称',
//     key: 'name',
//     width: 100,
//   },
//   {
//     title: '头像',
//     key: 'avatar',
//     width: 100,
//     render(row) {
//       return h(NAvatar, {
//         size: 48,
//         src: row.avatar,
//       });
//     },
//   },
//   {
//     title: '地址',
//     key: 'address',
//     auth: ['basic_list'], // 同时根据权限控制是否显示
//     ifShow: (_column) => {
//       return true; // 根据业务控制是否显示
//     },
//     width: 150,
//   },
//   {
//     title: '开始日期',
//     key: 'beginTime',
//     width: 160,
//   },
//   {
//     title: '结束日期',
//     key: 'endTime',
//     width: 160,
//   },
//   {
//     title: '创建时间',
//     key: 'date',
//     width: 100,
//   },
// ];

export const columns: BasicColumn<ClientList>[] = [
  {
    title: '序号',
    key: 'id',
    width: 100,
    align: 'center',
  },
  {
    title: '客户名称',
    key: 'name',
    align: 'center',
    width: 150,
  },
  {
    title: '客户类型',
    key: 'clientType',
    align: 'center',
    width: 100,
    render(row) {
      return (
        <NTag
          bordered
          round
          size="medium"
          type={
            row.clientType === ClientType.Enterprise
              ? 'success'
              : row.clientType === ClientType.Personage
              ? 'info'
              : 'default'
          }
        >
          {{ default: () => ClientTypeHelper.getDesc(row.clientType) }}
        </NTag>
      );
      // return h(NTag, {
      //   default() {
      //     return ClientTypeHelper.getDesc(row.clientType);
      //   },
      //   size: 'small',
      //   //         size: 48,
      //   //         src: row.avatar,
      // });
    },
  },
  {
    title: '客户地址',
    align: 'center',
    key: 'address',
    render(row) {
      return `${row.province} ${row.city} ${row.street}；邮编：${row.zipCode}`;
    },
    width: 150,
  },
  {
    align: 'center',
    title: '代理联系人',
    key: 'clientAgentName',
    width: 150,
    render(row) {
      return row.clientAgent.name;
    },
  },
  {
    align: 'center',
    title: '代理联系方式',
    key: 'clientAgentPhoneNumber',
    width: 150,
    render(row) {
      return row.clientAgent.phoneNumber;
    },
  },
  {
    align: 'center',
    title: '客户税号',
    key: 'tFN',
    width: 150,
  },
  {
    align: 'center',
    title: '客户银行抬头',
    key: 'bankTitle',
    width: 150,
  },
  {
    align: 'center',
    title: '客户银行账号',
    key: 'bankAccount',
    width: 150,
  },
  {
    align: 'center',
    title: '开票电话',
    key: 'billingTelephone',
    width: 150,
  },
  {
    align: 'center',
    title: '联系电话',
    key: 'contactNumber',
    width: 150,
  },
  {
    align: 'center',
    title: '客户邮箱',
    key: 'email',
    width: 150,
  },
  {
    align: 'center',
    title: '客户传真',
    key: 'fax',
    width: 150,
  },
];
