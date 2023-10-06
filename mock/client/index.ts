import { Random } from 'mockjs';
import { resultSuccess, resultPageSuccess, doCustomTimes } from '../_util';

const clientList = (pageSize) => {
  const result: any[] = [];
  doCustomTimes(pageSize, () => {
    result.push({
      id: '@integer(10,999999)',
      clientType: Random.integer(0, 2),
      name: '@cname()',
      street: '@county()',
      city: '@city()',
      province: '@province()',
      zipCode: '@zip()',
      clientAgent: { name: '@cname()', phoneNumber: '@string("number", 11, 11 )' },
      tFN: '@string()',
      bankTitle: '@ctitle()',
      bankAccount: '@ctitle()',
      billingTelephone: '@string("number", 11, 11)',
      contactNumber: '@string("number", 11, 11 )',
      email: '@email()',
      fax: '@string("number", 14, 21 )',
    });
  });
  return result;
};

export default [
  //表格数据列表
  {
    url: '/api/client',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      console.log(query);
      const { page, pageSize } = query;
      const list = clientList(Number(pageSize));
      console.log(list);
      return resultPageSuccess(Number(page), Number(pageSize), list);
    },
  },
  {
    url: '/api/client',
    timeout: 1000,
    method: 'post',
    response: ({ params }) => {
      return resultSuccess(
        {
          data: Random.integer(10, 9999),
        },
        { code: 201 }
      );
    },
  },
  {
    url: '/api/client',
    timeout: 1000,
    method: 'delete',
    response: ({ params }) => {
      return resultSuccess({}, { code: 200 });
    },
  },
  {
    url: '/api/client/simple',
    timeout: 1000,
    method: 'get',
    response: ({ params }) => {
      return resultSuccess(clientList(30), { code: 200 });
    },
  },
];
