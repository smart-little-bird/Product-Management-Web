import { http } from '@/utils/http/axios';

//获取table
export function getPagedList(params) {
  return http.request({
    url: '/client',
    method: 'get',
    params,
  });
}

export function getList() {
  return http.request({
    url: '/client/simple',
    method: 'get',
  });
}

export async function create(params) {
  return await http.request(
    {
      url: '/client',
      method: 'post',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

export function remove(id) {
  return http.request({
    url: `/client/${id}`,
    method: 'delete',
  });
}
