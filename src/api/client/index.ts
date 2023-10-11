import { http } from '@/utils/http/axios';

const controller = 'client';

//获取table
export function getPagedList(params) {
  return http.request({
    url: `/${controller}`,
    method: 'get',
    params,
  });
}

export function getList() {
  return http.request({
    url: `/${controller}/simple`,
    method: 'get',
  });
}

export async function create(params) {
  return await http.request(
    {
      url: `/${controller}`,
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
    url: `/${controller}/${id}`,
    method: 'delete',
  });
}
