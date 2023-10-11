import { http } from '@/utils/http/axios';

const controller = 'contract';

export function create(params) {
  return http.request({
    url: `/${controller}`,
    method: 'post',
    params,
  });
}

export function getPagedList(params) {
  return http.request({
    url: `/${controller}`,
    method: 'get',
    params,
  });
}

export function get(id) {
  return http.request({
    url: `/${controller}/${id}`,
    method: 'get',
  });
}

export function down(id) {
  return http.request({
    url: `/${controller}/${id}`,
    method: 'put',
  });
}
