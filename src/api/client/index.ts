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

export function create(params) {
  return http.request({
    url: '/client',
    method: 'post',
    params,
  });
}

export function remove(id) {
  return http.request({
    url: `/client/${id}`,
    method: 'delete',
  });
}
