import { http } from '@/utils/http/axios';

const controller = 'product';
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

export function create(params) {
  return http.request({
    url: `/${controller}`,
    method: 'post',
    params,
  });
}

export function update(params) {
  return http.request({
    url: `/${controller}/${params.id}`,
    method: 'put',
    params,
  });
}

export function remove(id) {
  return http.request({
    url: `/client/${id}`,
    method: 'delete',
  });
}
