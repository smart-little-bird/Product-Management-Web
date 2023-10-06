import { Random } from 'mockjs';
import { resultSuccess, resultPageSuccess, doCustomTimes } from '../_util';
import { range } from 'lodash';

const productList = (pageSize) => {
  const result: any[] = [];
  doCustomTimes(pageSize, () => {
    result.push({
      id: '@integer(10,999999)',
      description: '@ctitle()',
      entryCriteria: '@ctitle()',
      productItemDtos: range(1, 10).map((i) => ({
        id: i,
        name: '@cname()',
        productType: Random.integer(0, 3),
        specifications: '@cname()',
        amount: Random.integer(1, 9999),
        unitPrice: Random.integer(1, 9999),
        unit: '¥',
        material: '@ctitle()',
        technicalRequirements: '@ctitle()',
        remark: '@ctitle()',
      })),
    });
  });
  return result;
};

export default [
  //表格数据列表
  {
    url: '/api/product',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { page, pageSize } = query;
      debugger;
      const list = productList(Number(pageSize));
      return resultPageSuccess(Number(page), Number(pageSize), list);
    },
  },
  {
    url: '/api/product',
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
    url: '/api/product',
    timeout: 1000,
    method: 'post',
    response: ({ params }) => {
      return resultSuccess(
        {
          data: Random.integer(10, 9999),
        },
        { code: 200 }
      );
    },
  },
  {
    url: '/api/product',
    timeout: 1000,
    method: 'put',
    response: ({ params }) => {
      return resultSuccess(
        {
          data: Random.integer(10, 9999),
        },
        { code: 200 }
      );
    },
  },
  {
    url: '/api/product',
    timeout: 1000,
    method: 'delete',
    response: ({ params }) => {
      return resultSuccess({}, { code: 200 });
    },
  },
];
