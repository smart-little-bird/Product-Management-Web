import { http } from '@/utils/http/axios';

const controller = 'client';

//获取table
export function getPagedList(params) {
  return http
    .request({
      url: `/${controller}`,
      method: 'get',
      params,
    })
    .then((data) => {
      return {
        list: data?.clientListDtos,
        page: data?.page?.pageIndex,
        pageSize: data?.page?.pageSize,
        total: data?.page?.total,
        pageCount: data?.clientListDtos?.length,
      };
    });
}

export function getList() {
  return http.request({
    url: `/${controller}/simple`,
    method: 'get',
  });
}

export async function create(createClientCommand) {
  return await http.request(
    {
      url: `/${controller}`,
      method: 'post',
      params: createClientCommand,
    }
    // {
    //   isTransformResponse: false,
    // }
  );
}

export function remove(id) {
  return http.request({
    url: `/${controller}/${id}`,
    method: 'delete',
  });
}
