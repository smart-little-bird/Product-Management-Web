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
            <n-button type="primary" @click="addContract">
              <template #icon>
                <n-icon>
                  <PlusOutlined />
                </n-icon>
              </template>
              新建合同
            </n-button>
          </n-space>
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
      <info :contractId="showDetailContractId" />
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
  import { h, reactive, ref } from 'vue';
  import { BasicTable, TableAction } from '@/components/Table';
  import { getPagedList, down } from '@/api/contract/index';
  import { ContractList, contractColumns } from './datas';
  import { useRouter } from 'vue-router';
  import { PlusOutlined } from '@vicons/antd';
  import info from './info.vue';
  import { useDialog, useMessage } from 'naive-ui';

  const router = useRouter();
  const actionRef = ref();
  const message = useMessage();
  const dialog = useDialog();
  const showDetailModal = ref(false);
  const showDetailContractId = ref(0);

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
            label: '编辑',
            onClick: handleEdit.bind(null, record),
          },
          {
            label: '完成',
            type: 'success',
            onClick: handleDown.bind(null, record),
          },
        ],
      });
    },
  });

  function addContract() {
    router.push({ name: 'contract-create' });
  }

  const loadDataTable = async (res) => {
    return await getPagedList({ ...res });
  };

  function onCheckedRow(rowKeys) {
    console.log(rowKeys);
  }

  function handleShowDetail(record: Recordable) {
    console.log('点击了查看详情', record);
    showDetailModal.value = true;
    showDetailContractId.value = record.id;
  }
  function handleEdit(record: Recordable) {
    router.push({ name: 'contract-create', query: { contractId: record.id } });
  }

  function handleDown(record: Recordable) {
    console.log('点击了删除', record);
    dialog.info({
      title: '提示',
      content: `确认完成吗?`,
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: async () => {
        await down(record.id);
        message.success('操作成功');
        actionRef.value.reload();
      },
      onNegativeClick: () => {},
    });
  }
</script>

<style lang="less" scoped></style>
