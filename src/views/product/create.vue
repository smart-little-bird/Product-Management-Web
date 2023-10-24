<template>
  <div>
    <n-card :bordered="false" class="mt-4 proCard" size="small" :segmented="{ content: true }">
      <n-form
        :model="productInfo"
        ref="productFormRef"
        label-placement="left"
        :label-width="'auto'"
        inline
        :rules="rules"
        class="py-4"
      >
        <n-form-item label="客户Id" path="id" hidden v-show="false">
          <n-input placeholder="客户Id" readonly v-model:value="productInfo.id" hidden />
        </n-form-item>
        <n-form-item label="产品描述" path="description">
          <n-input placeholder="产品描述" v-model:value="productInfo.description" />
        </n-form-item>
        <n-form-item label="入级描述" path="entryCriteria">
          <n-input placeholder="入级描述" v-model:value="productInfo.entryCriteria" />
        </n-form-item>
      </n-form>
    </n-card>
    <n-card :bordered="false" class="mt-4 proCard" size="small" :segmented="{ content: true }">
      <BasicTable
        :columns="productItemColumns"
        :row-key="(row: ProductItem) => row.id"
        ref="actionRef"
        :dataSource="productItemInfos"
        :actionColumn="actionColumn"
        :scroll-x="1090"
        :pagination="false"
        :showToolBar="false"
      >
        <template #tableTitle>
          <n-button type="primary" @click="showProductItemModal">
            <template #icon>
              <n-icon>
                <PlusOutlined />
              </n-icon>
            </template>
            添加产品明细
          </n-button>
        </template>
      </BasicTable>
    </n-card>
    <n-modal
      v-model:show="showCreateProductItemModal"
      :show-icon="false"
      preset="card"
      size="huge"
      style="width: 800px"
      title="新建产品明细"
    >
      <product-item-form :item="productItemInfo" />
      <template #footer>
        <n-space justify="center">
          <n-button @click="() => (showCreateProductItemModal = false)">取消</n-button>
          <n-button type="info" @click="addProductItem">确定</n-button>
        </n-space>
      </template>
    </n-modal>

    <n-card :bordered="false" class="mt-4 proCard" size="small" :segmented="{ content: true }">
      <n-space justify="center">
        <n-button type="default" @click="goBack"> 返回 </n-button>
        <n-button type="success" @click="goBack"> 提交 </n-button>
      </n-space>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref, h } from 'vue';
  import { PlusOutlined } from '@vicons/antd';
  import productItemForm from './product-item-form.vue';
  import { useRouter } from 'vue-router';
  import { ProductItem, productItemColumns } from './datas';
  import { TableAction, BasicTable } from '@/components/Table';
  import { FormRules } from 'naive-ui';
  const router = useRouter();
  const actionRef = ref();
  const showCreateProductItemModal = ref(false);
  const productItemInfos = reactive([] as ProductItem[]);
  const productItemInfo = reactive({} as ProductItem);
  // TODO: 加验证
  const rules: FormRules = {
    description: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入产品描述',
    },
    entryCriteria: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入入级描述',
    },
  };
  const goBack = () => {
    console.log('点击了返回产品列表页');
    router.push({ name: 'product-list' });
  };
  const showProductItemModal = () => {
    showCreateProductItemModal.value = true;
  };
  const addProductItem = () => {
    // productItemInfo.id = productItemInfos.length + 1;
    productItemInfos.push(productItemInfo);
    showCreateProductItemModal.value = false;
  };
  const actionColumn = reactive({
    width: 200,
    title: '操作',
    key: 'action',
    fixed: 'right',
    align: 'center',
    render(record) {
      console.log(record);
      return h(TableAction as any, {
        style: 'button',
        actions: [
          {
            label: '删除',
            onClick: () => {},
            // 根据业务控制是否显示 isShow 和 auth 是并且关系
            ifShow: () => {
              return true;
            },
          },
        ],
      });
    },
  });
  const productInfo = reactive({
    id: null,
    description: null,
    entryCriteria: null,
    productItemDtos: [] as ProductItem[],
  });
</script>

<style lang="less" scoped></style>
