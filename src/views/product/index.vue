<template>
  <div>
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
          <n-space>
            <n-button type="primary" @click="addProduct">
              <template #icon>
                <n-icon>
                  <PlusOutlined />
                </n-icon>
              </template>
              新建产品
            </n-button>
            <n-upload hidden>
              <n-button type="success">
                <template #icon>
                  <n-icon>
                    <PlusCircleOutlined />
                  </n-icon> </template
                >导入产品</n-button
              >
            </n-upload>
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
      <info :product="showDetailProduct.product" />
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
  import { h, reactive, ref, toRaw } from 'vue';
  import { BasicTable, TableAction } from '@/components/Table';
  import { getPagedList } from '@/api/product/index';
  import { columns, ProductList } from './datas';
  import { PlusOutlined, PlusCircleOutlined } from '@vicons/antd';
  import { useRouter } from 'vue-router';
  import info from './info.vue';
  import { remove } from '@/api/product';
  import { useDialog, useMessage } from 'naive-ui';
  const router = useRouter();
  const actionRef = ref();
  const dialog = useDialog();
  const message = useMessage();
  const showDetailModal = ref(false);
  const showDetailProduct = reactive({ product: {} as ProductList });
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
            label: '删除',
            type: 'error',
            onClick: handleDelete.bind(null, record),
          },
        ],
      });
    },
  });

  function addProduct() {
    router.push({ name: 'product-create' });
  }

  const loadDataTable = async (res) => {
    return await getPagedList({ ...res });
  };

  function onCheckedRow(rowKeys) {
    console.log(rowKeys);
  }

  function handleShowDetail(record: Recordable) {
    showDetailModal.value = true;
    showDetailProduct.product = toRaw(record) as ProductList;
  }
  function handleEdit(record: Recordable) {
    router.push({ name: 'product-create', query: { productId: record.id } });
  }

  function handleDelete(record: Recordable) {
    dialog.error({
      title: '提示',
      content: `您想删除 【${record.description}】`,
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
</script>

<style lang="less" scoped></style>
