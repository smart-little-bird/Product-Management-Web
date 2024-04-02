import { http } from '@/utils/http/axios';

const controller = 'employee';


//获取table
export async function getList() {
  // var myCars= [];
   var response = await http.request({
    url: `/${controller}`,
    method: 'get',
  });
  return response;
}

// export async function create(createEmployeeCommand:CreateEmployeeCommand) {
//   return await http.request(
//     {
//       url: `/${controller}`,
//       method: 'post',
//       params: createEmployeeCommand,
//     }
//   );
// }

export function remove(id) {
  return http.request({
    url: `/${controller}/${id}`,
    method: 'delete',
  });
}