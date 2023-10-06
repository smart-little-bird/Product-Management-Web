import { http } from '@/utils/http/axios';

const controller = 'contract';

export function create(params) {
  return http.request({
    url: `/${controller}`,
    method: 'post',
    params,
  });
}
