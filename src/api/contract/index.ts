import { http } from '@/utils/http/axios';

const controller = 'contract';

export function create(params) {
  return http.request({
    url: `/${controller}`,
    method: 'post',
    params,
  });
}

export function update(id, params) {
  return http.request({
    url: `/${controller}/${id}`,
    method: 'post',
    params,
  });
}

export function getPagedList(params) {
  return http
    .request({
      url: `/${controller}`,
      method: 'get',
      params,
    })
    .then((data) => {
      return {
        list: data?.contractListDtos,
        page: data?.page?.pageIndex,
        pageSize: data?.page?.pageSize,
        total: data?.page?.total,
        pageCount: data?.contractListDtos?.length,
      };
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
    method: 'patch',
  });
}
