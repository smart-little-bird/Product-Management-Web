<template>
  <div>
    <n-card :bordered="false" class="proCard">
      <BasicTable
        :columns="contractColumns"
        :request="loadDataTable"
        :row-key="(row: ContractList) => row.contractId"
        ref="actionRef"
        :actionColumn="actionColumn"
        @update:checked-row-keys="onCheckedRow"
        :scroll-x="1090"
      >
        <template #tableTitle>
          <n-space>
            <n-button type="primary" @click="addProduct">
              <template #icon>
                <n-icon>
                  <PlusOutlined />
                </n-icon>
              </template>
              新建合同
            </n-button>
          </n-space>
        </template>

        <template #toolbar>
          <!-- <n-button type="primary" @click="reloadTable">刷新数据</n-button> -->
        </template>
      </BasicTable>
    </n-card>
    <n-modal
      style="max-width: 70%"
      preset="card"
      title="产品详情"
      size="huge"
      v-model:show="showDetailModal"
    >
      <info :product="showDetailProduct.product" />
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
  import { h, reactive, ref, toRaw } from 'vue';
  import { BasicTable, TableAction } from '@/components/Table';
  import { getPagedList } from '@/api/contract/index';
  import { ContractList, contractColumns } from './datas';
  import { useRouter } from 'vue-router';
  import { PlusOutlined } from '@vicons/antd';
  // import info from './info.vue';

  const router = useRouter();
  const actionRef = ref();

  const showModal = ref(false);
  const showDetailModal = ref(false);
  const showDetailProduct = reactive({ product: {} as ContractList });
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
    tfn: null,
    bankTitle: null,
    bankAccount: null,
    billingTelephone: null,
    contactNumber: null,
    email: null,
    fax: null,
  });

  const actionColumn = reactive({
    width: '20%',
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
          },
          {
            label: '完成',
            type: 'success',
            onClick: handleDelete.bind(null, record),
          },
        ],
      });
    },
  });

  function addProduct() {
    // showModal.value = true;
    router.push({ name: 'contract-create' });
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
    showDetailModal.value = true;
    showDetailProduct.product = toRaw(record) as ProductList;
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
