import { Random } from 'mockjs';
import { resultSuccess, resultPageSuccess, doCustomTimes } from '../_util';
import { range } from 'lodash';
const contractList = (pageSize) => {
  const result: any[] = [];
  doCustomTimes(pageSize, () => {
    result.push({
      contractId: '@integer(10,999999)',
      contractNo: '@integer(10,999999)',
      clientName: '@ctitle()',
      shipType: '快递',
      totalPrice: '@integer(10,999999)',
      shipDateTime: '@integer(10,999999)',
    });
  });
  return result;
};
export default [
  //表格数据列表
  {
    url: '/api/contract',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { page, pageSize } = query;
      debugger;
      const list = contractList(Number(pageSize));
      return resultPageSuccess(Number(page), Number(pageSize), list);
    },
  },
  {
    url: '/api/contract/:id',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { page, pageSize } = query;
      debugger;
      const list = contractList(Number(pageSize));
      return resultPageSuccess(Number(page), Number(pageSize), list);
    },
  },
  {
    url: '/api/contract',
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
];
