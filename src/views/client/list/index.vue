<template>
  <n-card :bordered="false" class="proCard">
    <BasicTable
      :columns="columns"
      :request="loadDataTable"
      :row-key="(row:ClientList) => row.id"
      ref="actionRef"
      :actionColumn="actionColumn"
      @update:checked-row-keys="onCheckedRow"
      :scroll-x="1090"
    >
      <template #tableTitle>
        <n-button type="primary" @click="addTable">
          <template #icon>
            <n-icon>
              <PlusOutlined />
            </n-icon>
          </template>
          新建客户
        </n-button>
      </template>

      <template #toolbar>
        <!-- <n-button type="primary" @click="reloadTable">刷新数据</n-button> -->
      </template>
    </BasicTable>

    <n-modal
      v-model:show="showModal"
      :show-icon="false"
      preset="card"
      size="huge"
      style="width: 800px"
      title="新建"
    >
      <n-form
        :model="formParams"
        :rules="rules"
        ref="formRef"
        label-placement="left"
        :label-width="'auto'"
        class="py-4"
      >
        <n-form-item label="客户Id" path="id" hidden v-show="false">
          <n-input placeholder="请输入客户Id" readonly v-model:value="formParams.id" hidden />
        </n-form-item>
        <n-form-item label="客户名称" path="name">
          <n-input placeholder="请输入客户名称" v-model:value="formParams.name" />
        </n-form-item>
        <n-form-item label="客户类型" path="clientType">
          <n-select
            v-model:value="formParams.clientType"
            placeholder="请选择客户类型"
            :options="clientTypeSelectOptions"
          />
        </n-form-item>
        <n-form-item label="地址" path="city">
          <n-space justify="space-between" :inline="true" :align="'end'" :wrap="true">
            <n-cascader
              style="min-width: 200px; max-width: 200px"
              :show-path="true"
              v-model:value="formParams.city"
              placeholder="选择省市"
              :options="addressSelectOptions"
              :check-strategy="'child'"
              @update:value="handleAddressValue"
            />
            <n-input placeholder="请输入街道" v-model:value="formParams.street" />
            <n-input placeholder="请输入邮编" v-model:value="formParams.zipCode" />
          </n-space>
        </n-form-item>
        <n-form-item label="代理人信息" path="clientAgent">
          <n-space justify="space-between" :wrap="true">
            <n-input placeholder="请输入代理人名称" v-model:value="formParams.clientAgent.name" />
            <n-input
              placeholder="请输入代理人联系方式"
              v-model:value="formParams.clientAgent.phoneNumber"
            />
          </n-space>
        </n-form-item>
        <n-form-item label="客户税号" path="tFN">
          <n-input placeholder="请输入客户开票电话" v-model:value="formParams.tFN" />
        </n-form-item>
        <n-form-item label="银行信息" path="bank">
          <n-space justify="space-between" :wrap="true">
            <n-input placeholder="请输入客户银行抬头" v-model:value="formParams.bankTitle" />
            <n-input placeholder="请输入客户银行账号" v-model:value="formParams.bankAccount" />
            <n-input placeholder="请输入客户开票电话" v-model:value="formParams.billingTelephone" />
          </n-space>
        </n-form-item>
        <n-form-item label="联系方式" path="contact">
          <n-space justify="space-between" :wrap="true">
            <n-input placeholder="请输入客户联系电话" v-model:value="formParams.contactNumber" />
            <n-input placeholder="请输入客户邮箱" v-model:value="formParams.email" />
            <n-input placeholder="请输入客户传真" v-model:value="formParams.fax" />
          </n-space>
        </n-form-item>
      </n-form>

      <template #footer>
        <n-space justify="center">
          <n-button @click="() => (showModal = false)">取消</n-button>
          <n-button type="info" :loading="formBtnLoading" @click="confirmForm">确定</n-button>
        </n-space>
      </template>
    </n-modal>
  </n-card>
</template>

<script lang="ts" setup>
  import { h, reactive, ref, computed } from 'vue';
  import { BasicTable, TableAction } from '@/components/Table';
  // import { FormSchema } from '@/components/Form/index';
  import { getTableList } from '@/api/table/list';
  import { columns, ClientList, ClientTypeHelper } from './columns';
  import { PlusOutlined } from '@vicons/antd';
  import { useRouter } from 'vue-router';
  import { type FormRules } from 'naive-ui';
  import address from './address';

  const clientTypeSelectOptions = computed(() =>
    Array.from(ClientTypeHelper.clientTypeMapper.keys()).map((k) => ({
      label: ClientTypeHelper.getDesc(k),
      value: k,
    }))
  );
  const addressSelectOptions = computed(() =>
    address.map((addr) => ({
      value: addr.name,
      label: addr.name,
      children: addr.children.map((caddr) => ({ value: caddr.name, label: caddr.name })),
    }))
  );
  const rules: FormRules = {
    name: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入名称',
    },
    address: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入地址',
    },
    date: {
      type: 'number',
      required: true,
      trigger: ['blur', 'change'],
      message: '请选择日期',
    },
  };

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
  const formRef: any = ref(null);
  const actionRef = ref();

  const showModal = ref(false);
  const formBtnLoading = ref(false);
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
  const handleAddressValue = (value, option, pathValues) => {
    console.log(value, option, pathValues);
    formParams.province = pathValues[0].value;
  };
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
            label: '删除',
            onClick: handleDelete.bind(null, record),
            // 根据业务控制是否显示 isShow 和 auth 是并且关系
            ifShow: () => {
              return false;
            },
            // 根据权限控制是否显示: 有权限，会显示，支持多个
            auth: ['basic_list'],
          },
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
        ],
        dropDownActions: [
          {
            label: '启用',
            key: 'enabled',
            // 根据业务控制是否显示: 非enable状态的不显示启用按钮
            ifShow: () => {
              return true;
            },
          },
          {
            label: '禁用',
            key: 'disabled',
            ifShow: () => {
              return true;
            },
          },
        ],
        select: (key) => {
          window['$message'].info(`您点击了，${key} 按钮`);
        },
      });
    },
  });

  // const [register, { getFieldsValue }] = useForm({
  //   gridProps: { cols: '1 s:1 m:2 l:3 xl:4 2xl:4' },
  //   labelWidth: 80,
  //   schemas,
  // });

  function addTable() {
    showModal.value = true;
  }

  const loadDataTable = async (res) => {
    return await getTableList({ ...res });
  };

  function onCheckedRow(rowKeys) {
    console.log(rowKeys);
  }

  // function reloadTable() {
  //   actionRef.value.reload();
  // }

  function confirmForm(e) {
    e.preventDefault();
    formBtnLoading.value = true;
    formRef.value.validate((errors) => {
      if (!errors) {
        window['$message'].success('新建成功');
        setTimeout(() => {
          showModal.value = false;
          // reloadTable();
        });
      } else {
        window['$message'].error('请填写完整信息');
      }
      formBtnLoading.value = false;
    });
  }

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
