import { Random } from 'mockjs';
import { resultSuccess } from '../_util';

export default [
  //表格数据列表
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
