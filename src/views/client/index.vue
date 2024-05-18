<template>
  <n-card :bordered="false" class="proCard">
    <BasicTable
      :columns="columns"
      :request="loadDataTable"
      :row-key="(row:ClientList) => row.id"
      ref="actionRef"
      :actionColumn="actionColumn"
      @update:checked-row-keys="onCheckedRow"
      :scroll-x="1440"
    >
      <template #tableTitle>
        <n-space>
          <n-button type="primary" @click="addClient">
            <template #icon>
              <n-icon>
                <PlusOutlined />
              </n-icon>
            </template>
            新建客户
          </n-button>
          <n-upload hidden>
            <n-button type="success">
              <template #icon>
                <n-icon>
                  <PlusCircleOutlined />
                </n-icon> </template
              >导入客户</n-button
            >
          </n-upload>
        </n-space>
      </template>

      <template #toolbar> </template>
    </BasicTable>
    <n-modal
      style="max-width: 40%"
      preset="card"
      title="客户详情"
      size="huge"
      v-model:show="showDetailModal"
    >
      <info :client="showDetailClient.client" />
    </n-modal>
    <n-modal
      v-model:show="showModal"
      :show-icon="false"
      preset="card"
      size="huge"
      style="max-width: 40%"
      title="新建"
    >
      <n-form
        :model="formParams"
        :rules="rules"
        ref="formRef"
        label-placement="top"
        :label-width="'auto'"
        class="py-4"
      >
        <n-form-item label="客户Id" path="id" v-show="false">
          <n-input placeholder="请输入客户Id" readonly v-model:value="formParams.id" hidden />
        </n-form-item>
        <n-space justify="start" inline>
          <n-form-item label="客户名称" path="name">
            <n-input
              style="width: 200px"
              placeholder="请输入客户名称"
              v-model:value="formParams.name"
            />
          </n-form-item>
          <n-form-item label="客户类型" path="clientType">
            <n-select
              style="width: 200px"
              v-model:value="formParams.clientType"
              placeholder="请选择客户类型"
              :options="clientTypeSelectOptions"
            />
          </n-form-item>
          <n-form-item label="地址" path="city">
            <n-cascader
              style="width: 200px"
              :show-path="true"
              v-model:value="formParams.city"
              placeholder="选择省市"
              :options="addressSelectOptions"
              :check-strategy="'child'"
              @update:value="handleAddressValue"
            />
          </n-form-item>
          <n-form-item label="街道" path="street">
            <n-input
              style="width: 200px"
              placeholder="请输入街道"
              v-model:value="formParams.street"
            />
          </n-form-item>
          <n-form-item label="邮编" path="zipCode">
            <n-input
              :show-button="false"
              style="width: 200px"
              placeholder="请输入邮编"
              v-model:value="formParams.zipCode"
            />
          </n-form-item>
          <n-form-item label="代理人名称" path="clientAgent.name">
            <n-input
              style="width: 200px"
              placeholder="请输入代理人名称"
              v-model:value="formParams.clientAgent.name"
            />
          </n-form-item>
          <n-form-item label="代理人联系电话" path="clientAgent.phoneNumber">
            <n-input
              :show-button="false"
              style="width: 200px"
              placeholder="请输入代理人联系电话"
              v-model:value="formParams.clientAgent.phoneNumber"
            />
          </n-form-item>
          <n-form-item label="银行抬头" path="bankTitle">
            <n-input
              style="width: 200px"
              placeholder="请输入客户银行抬头"
              v-model:value="formParams.bankTitle"
            />
          </n-form-item>
          <n-form-item label="银行账号" path="bankAccount">
            <n-input
              :show-button="false"
              style="width: 200px"
              placeholder="请输入客户银行账号"
              v-model:value="formParams.bankAccount"
            />
          </n-form-item>
          <n-form-item label="客户税号" path="tfn">
            <n-input
              style="width: 200px"
              placeholder="请输入客户税号"
              v-model:value="formParams.tfn"
            />
          </n-form-item>
          <n-form-item label="开票电话" path="billingTelephone">
            <n-input
              :show-button="false"
              style="width: 200px"
              placeholder="请输入客户开票电话"
              v-model:value="formParams.billingTelephone"
            />
          </n-form-item>
          <n-form-item label="客户传真" path="fax">
            <n-input
              style="width: 200px"
              placeholder="请输入客户传真"
              v-model:value="formParams.fax"
            />
          </n-form-item>
          <n-form-item label="联系电话" path="contactNumber">
            <n-input
              :show-button="false"
              style="width: 200px"
              placeholder="请输入客户联系电话"
              v-model:value="formParams.contactNumber"
            />
          </n-form-item>
          <n-form-item label="客户邮箱" path="email">
            <n-input
              style="width: 200px"
              placeholder="请输入客户邮箱"
              v-model:value="formParams.email"
            />
          </n-form-item>
        </n-space>
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
  import { h, reactive, ref, computed, toRaw, onMounted } from 'vue';
  import { BasicTable, TableAction } from '@/components/Table';
  import { getPagedList, create, remove } from '@/api/client/index';
  import { columns, ClientList, ClientTypeHelper } from './datas';
  import { PlusOutlined, PlusCircleOutlined } from '@vicons/antd';
  import { useRouter } from 'vue-router';
  import { type FormRules } from 'naive-ui';
  import address from './address';
  import info from './info.vue';
  import { useDialog, useMessage } from 'naive-ui/lib';
  import { useRoute } from 'vue-router';

  const router = useRouter();
  const route = useRoute();
  const { showCreate } = route.query;
  const formRef: any = ref(null);
  const actionRef = ref();
  const showDetailModal = ref(false);
  const showDetailClient = reactive({ client: {} as ClientList });
  const showModal = ref(false);
  const formBtnLoading = ref(false);
  const dialog = useDialog();
  const message = useMessage();
  const initialFormValue = {
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
    tfn: null,
    bankTitle: null,
    bankAccount: null,
    billingTelephone: null,
    contactNumber: null,
    email: null,
    fax: null,
  };
  const formParams = ref({ ...initialFormValue });
  const rules: FormRules = {
    name: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入客户名称',
    },
    clientType: {
      required: true,
      type: 'number',
      trigger: ['blur', 'change'],
      message: '请选择客户类型',
    },
    province: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请选择客户所在省份',
    },
    city: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请选择客户所在城市',
    },
    street: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入客户详细地址',
    },
    zipCode: {
      required: true,
      // type: 'number',
      trigger: ['blur', 'change'],
      message: '请输入客户邮编',
    },
    clientAgent: {
      name: {
        required: true,
        trigger: ['blur', 'input'],
        message: '请输入代理联系人',
      },
      phoneNumber: {
        // type: 'number',
        required: true,
        trigger: ['blur', 'input'],
        message: '请输入代理联系电话',
      },
    },
    tfn: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入客户税号',
    },
    bankTitle: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入客户银行抬头',
    },
    bankAccount: {
      // type: 'number',
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入客户银行账号',
    },
    billingTelephone: {
      // type: 'number',
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入开票电话',
    },
    contactNumber: {
      // type: 'number',
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入客户联系电话',
    },
    email: {
      type: 'email',
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入客户邮箱',
    },
    fax: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入客户传真',
    },
  };
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
  const handleAddressValue = (value, option, pathValues) => {
    console.log(value, option, pathValues);
    formParams.value.province = pathValues[0].value;
  };
  const actionColumn = reactive({
    width: '15%',
    title: '操作',
    key: 'action',
    fixed: 'right',
    align: 'center',
    render(record) {
      return h(TableAction as any, {
        actions: [
          {
            label: '详情',
            onClick: handleShowDetail.bind(null, record),
          },
          {
            label: '创建合同',
            onClick: handleCreateContract.bind(null, record),
          },
          {
            label: '删除',
            type: 'error',
            onClick: handleDelete.bind(null, record),
          },
        ],
      });
    },
  });

  function addClient() {
    formParams.value = { ...initialFormValue };
    showModal.value = true;
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

  async function confirmForm(e) {
    e.preventDefault();
    formBtnLoading.value = true;
    formRef.value.validate(async (errors) => {
      if (!errors) {
        await create(formParams.value);
        window['$message'].success('新建成功');
        showModal.value = false;
        actionRef.value.reload();
        // });
      } else {
        window['$message'].error('请填写完整信息');
      }
      formBtnLoading.value = false;
    });
    formBtnLoading.value = false;
  }

  function handleShowDetail(record: Recordable) {
    console.log('点击了查看详情', record);
    showDetailModal.value = true;
    showDetailClient.client = toRaw(record) as ClientList;
  }
  function handleCreateContract(record: Recordable) {
    router.push({ name: 'contract-create', query: { clientId: record.id } });
  }

  function handleDelete(record: Recordable) {
    dialog.error({
      title: '提示',
      content: `您想删除 【${record.name}】`,
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        remove(record.id).then(() => {
          message.success('删除成功');
          actionRef.value.reload();
        });
      },
      onNegativeClick: () => {},
    });
  }


  onMounted(() => {
    showModal.value = Number(showCreate) == 1;
  });
  console.log(route);
</script>

<style lang="less" scoped></style>
