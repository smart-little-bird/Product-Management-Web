<template>
  <n-card :bordered="false" class="proCard">
    <BasicTable
      :columns="columns"
      :request="loadDataTable"
      :row-key="(row:ProductList) => row.id"
      ref="actionRef"
      :actionColumn="actionColumn"
      @update:checked-row-keys="onCheckedRow"
      :scroll-x="1090"
    >
      <template #tableTitle>
        <n-button type="primary" @click="addProduct">
          <template #icon>
            <n-icon>
              <PlusOutlined />
            </n-icon>
          </template>
          新建产品
        </n-button>
      </template>

      <template #toolbar>
        <!-- <n-button type="primary" @click="reloadTable">刷新数据</n-button> -->
      </template>
    </BasicTable>
  </n-card>
</template>

<script lang="ts" setup>
  import { h, reactive, ref } from 'vue';
  import { BasicTable, TableAction } from '@/components/Table';
  // import { FormSchema } from '@/components/Form/index';
  // import { getTableList } from '@/api/table/list';
  import { getPagedList } from '@/api/product/index';
  import { columns, ProductList } from './columns';
  import { PlusOutlined } from '@vicons/antd';
  import { useRouter } from 'vue-router';

  // const schemas: FormSchema[] = [
  //   {
  //     field: 'name',
  //     labelMessage: '这是一个提示',
  //     component: 'NInput',
  //     label: '姓名',
  //     componentProps: {
  //       placeholder: '请输入姓名',
  //       onInput: (e: any) => {
  //         console.log(e);
  //       },
  //     },
  //     rules: [{ required: true, message: '请输入姓名', trigger: ['blur'] }],
  //   },
  //   {
  //     field: 'mobile',
  //     component: 'NInputNumber',
  //     label: '手机',
  //     componentProps: {
  //       placeholder: '请输入手机号码',
  //       showButton: false,
  //       onInput: (e: any) => {
  //         console.log(e);
  //       },
  //     },
  //   },
  //   {
  //     field: 'type',
  //     component: 'NSelect',
  //     label: '类型',
  //     componentProps: {
  //       placeholder: '请选择类型',
  //       options: [
  //         {
  //           label: '舒适性',
  //           value: 1,
  //         },
  //         {
  //           label: '经济性',
  //           value: 2,
  //         },
  //       ],
  //       onUpdateValue: (e: any) => {
  //         console.log(e);
  //       },
  //     },
  //   },
  //   {
  //     field: 'makeDate',
  //     component: 'NDatePicker',
  //     label: '预约时间',
  //     defaultValue: 1183135260000,
  //     componentProps: {
  //       type: 'date',
  //       clearable: true,
  //       onUpdateValue: (e: any) => {
  //         console.log(e);
  //       },
  //     },
  //   },
  //   {
  //     field: 'makeTime',
  //     component: 'NTimePicker',
  //     label: '停留时间',
  //     componentProps: {
  //       clearable: true,
  //       onUpdateValue: (e: any) => {
  //         console.log(e);
  //       },
  //     },
  //   },
  //   {
  //     field: 'status',
  //     label: '状态',
  //     //插槽
  //     slot: 'statusSlot',
  //   },
  //   {
  //     field: 'makeProject',
  //     component: 'NCheckbox',
  //     label: '预约项目',
  //     componentProps: {
  //       placeholder: '请选择预约项目',
  //       options: [
  //         {
  //           label: '种牙',
  //           value: 1,
  //         },
  //         {
  //           label: '补牙',
  //           value: 2,
  //         },
  //         {
  //           label: '根管',
  //           value: 3,
  //         },
  //       ],
  //       onUpdateChecked: (e: any) => {
  //         console.log(e);
  //       },
  //     },
  //   },
  //   {
  //     field: 'makeSource',
  //     component: 'NRadioGroup',
  //     label: '来源',
  //     componentProps: {
  //       options: [
  //         {
  //           label: '网上',
  //           value: 1,
  //         },
  //         {
  //           label: '门店',
  //           value: 2,
  //         },
  //       ],
  //       onUpdateChecked: (e: any) => {
  //         console.log(e);
  //       },
  //     },
  //   },
  // ];

  const router = useRouter();
  // const formRef: any = ref(null);
  const actionRef = ref();

  const showModal = ref(false);
  // const formBtnLoading = ref(false);
  // todo: 检验
  const formParams = reactive({
    id: null,
    name: '',
    clientType: null,
    date: null,
    province: null,
    city: null,
    street: null,
    zipCode: null,
    clientAgent: {
      name: null,
      phoneNumber: null,
    },
    tFN: null,
    bankTitle: null,
    bankAccount: null,
    billingTelephone: null,
    contactNumber: null,
    email: null,
    fax: null,
  });

  const actionColumn = reactive({
    width: 200,
    title: '操作',
    key: 'action',
    fixed: 'right',
    align: 'center',
    render(record) {
      return h(TableAction as any, {
        style: 'button',
        actions: [
        {
            label: '详情',
            onClick: handleShowDetail.bind(null, record),
            ifShow: () => {
              return true;
            },
            auth: ['basic_list'],
          },
          {
            label: '编辑',
            onClick: handleEdit.bind(null, record),
            ifShow: () => {
              return true;
            },
            auth: ['basic_list'],
          },
          {
            label: '删除',
            onClick: handleDelete.bind(null, record),
            // 根据业务控制是否显示 isShow 和 auth 是并且关系
            ifShow: () => {
              return true;
            },
            // 根据权限控制是否显示: 有权限，会显示，支持多个
            auth: ['basic_list'],
          },
        ],
        // dropDownActions: [
        //   {
        //     label: '启用',
        //     key: 'enabled',
        //     // 根据业务控制是否显示: 非enable状态的不显示启用按钮
        //     ifShow: () => {
        //       return true;
        //     },
        //   },
        //   {
        //     label: '禁用',
        //     key: 'disabled',
        //     ifShow: () => {
        //       return true;
        //     },
        //   },
        // ],
        // select: (key) => {
        //   window['$message'].info(`您点击了，${key} 按钮`);
        // },
      });
    },
  });

  // const [register, { getFieldsValue }] = useForm({
  //   gridProps: { cols: '1 s:1 m:2 l:3 xl:4 2xl:4' },
  //   labelWidth: 80,
  //   schemas,
  // });

  function addProduct() {
    // showModal.value = true;
    router.push({ name: 'product-create' });
  }

  const loadDataTable = async (res) => {
    return await getPagedList({ ...res });
  };

  function onCheckedRow(rowKeys) {
    console.log(rowKeys);
  }

  // function reloadTable() {
  //   actionRef.value.reload();
  // }

  // function confirmForm(e) {
  //   e.preventDefault();
  //   formBtnLoading.value = true;
  //   formRef.value.validate((errors) => {
  //     if (!errors) {
  //       window['$message'].success('新建成功');
  //       setTimeout(() => {
  //         showModal.value = false;
  //         // reloadTable();
  //       });
  //     } else {
  //       window['$message'].error('请填写完整信息');
  //     }
  //     formBtnLoading.value = false;
  //   });
  // }

  function handleShowDetail(record: Recordable) {
    console.log('点击了查看详情', record);
    router.push({ name: 'client-detail', params: { id: record.id } });
  }
  function handleEdit(record: Recordable) {
    console.log('点击了编辑', record);
    showModal.value = true;
    formParams.id = record.id;
    // todo: formParams 赋值
  }

  function handleDelete(record: Recordable) {
    console.log('点击了删除', record);
    window['$message'].info('点击了删除');
  }

  // function handleSubmit(values: Recordable) {
  //   console.log(values);
  //   reloadTable();
  // }

  // function handleReset(values: Recordable) {
  //   console.log(values);
  // }
</script>

<style lang="less" scoped></style>
