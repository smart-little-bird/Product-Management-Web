import { Random } from 'mockjs';
import { resultSuccess, doCustomTimes } from '../_util';

const tableList = (pageSize) => {
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
      tfn: '@string()',
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
    url: '/api/table/list',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 10, name } = query;
      const list = tableList(Number(pageSize));
      //并非真实，只是为了模拟搜索结果
      const count = name ? 30 : 60;
      return resultSuccess({
        page: Number(page),
        pageSize: Number(pageSize),
        pageCount: count,
        itemCount: count * Number(pageSize),
        list,
      });
    },
  },
];
