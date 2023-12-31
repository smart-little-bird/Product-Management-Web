import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { PeopleSharp } from '@vicons/ionicons5';
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
    path: '/client',
    name: 'Client',
    redirect: '/client/list',
    component: Layout,
    meta: {
      // title: '客户管理',
      icon: renderIcon(PeopleSharp),
      sort: 1,
    },
    children: [
      {
        path: 'list',
        name: 'client-list',
        meta: {
          title: '客户信息',
        },
        component: () => import('@/views/client/index.vue'),
      },
      {
        path: 'client-detail/:id?',
        name: 'client-detail',
        meta: {
          title: '客户详情',
          hidden: true,
          activeMenu: 'client-list',
        },
        component: () => import('@/views/client/detail/index.vue'),
      },
    ],
  },
];

export default routes;
