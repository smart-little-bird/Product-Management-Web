import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { OptionsSharp } from '@vicons/ionicons5';
import { renderIcon } from '@/utils/index';

/**
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.keepAlive 缓存该路由
 * @param meta.sort 排序越小越排前
 *
 * */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/contract',
    name: 'Contract',
    redirect: '/contract/list',
    component: Layout,
    meta: {
      title: '合同管理',
      icon: renderIcon(OptionsSharp),
      sort: 3,
    },
    children: [
      {
        path: 'list',
        name: 'contract_list',
        meta: {
          title: '合同信息',
        },
        component: () => import('@/views/contract/list/index.vue'),
      },
      {
        path: 'create',
        name: 'contract_create',
        meta: {
          title: '新建合同',
        },
        component: () => import('@/views/contract/create/index.vue'),
      },
    ],
  },
];

export default routes;
