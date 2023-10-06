<template>
  <div>
    <n-card :bordered="false" class="proCard mt-4" size="small" :segmented="{ content: true }">
      <n-form
        :model="productInfo"
        ref="productFormRef"
        label-placement="left"
        :label-width="'auto'"
        inline
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
    <n-card :bordered="false" class="proCard mt-4" size="small" :segmented="{ content: true }">
      <n-space>
      <n-data-table
        :columns="productItemColumns"
        :data="productItemInfos"
        :pagination="false"
        :bordered="false"
      />
    </n-space>
      <!-- <BasicTable
        :columns="productItemColumns"
        :row-key="(row: ProductItem) => row.id"
        ref="actionRef"
        :dataSource="productItemInfos"
        :actionColumn="actionColumn"
        :scroll-x="1090"
        :pagination="false"
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
      </BasicTable> -->
      <n-space justify="center">
        <n-button type="info" size="large" @click="showProductItemModal"> 添加产品明细 </n-button>
      </n-space>
    </n-card>
    <n-modal
      v-model:show="showCreateProductItemModal"
      :show-icon="false"
      preset="card"
      size="huge"
      style="width: 800px"
      title="新建产品明细"
    >
      <n-form
        ref="productItemFormRef"
        :label-width="'auto'"
        label-placement="left"
        :model="productItemInfo"
      >
        <n-form-item label="产品类型" path="productType">
          <n-select
            v-model:value="productItemInfo.productType"
            placeholder="产品类型"
            :options="productTypeSelectOptions"
            size="small"
          />
        </n-form-item>
        <n-form-item label="名称" path="name">
          <n-input v-model:value="productItemInfo.name" placeholder="输入名称" />
        </n-form-item>
        <n-form-item label="规格型号" path="specifications">
          <n-input v-model:value="productItemInfo.specifications" placeholder="规格型号" />
        </n-form-item>
        <n-form-item label="数量" path="amount">
          <n-input v-model:value="productItemInfo.amount" placeholder="数量" />
        </n-form-item>
        <n-form-item label="单价" path="unitPrice">
          <n-input v-model:value="productItemInfo.unitPrice" placeholder="单价" />
        </n-form-item>
        <n-form-item label="单位" path="unit">
          <n-input v-model:value="productItemInfo.unit" placeholder="单位" />
        </n-form-item>
        <n-form-item label="材料型号" path="material">
          <n-input v-model:value="productItemInfo.material" placeholder="材料型号" />
        </n-form-item>
        <n-form-item label="技术要求" path="technicalRequirements">
          <n-input v-model:value="productItemInfo.technicalRequirements" placeholder="技术要求" />
        </n-form-item>
        <n-form-item label="备注" path="remark">
          <n-input v-model:value="productItemInfo.remark" placeholder="备注" />
        </n-form-item>
      </n-form>
      <template #footer>
        <n-space justify="center">
          <n-button @click="() => (showCreateProductItemModal = false)">取消</n-button>
          <n-button type="info" @click="addProductItem">确定</n-button>
        </n-space>
      </template>
    </n-modal>

    <n-card :bordered="false" class="proCard mt-4" size="small" :segmented="{ content: true }">
      <n-space justify="center">
        <n-button type="default" @click="goBack"> 返回 </n-button>
        <n-button type="success" @click="goBack"> 提交 </n-button>
      </n-space>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, computed, ref, h } from 'vue';
  // import { PlusOutlined } from '@vicons/antd';
  import { useRouter } from 'vue-router';
  import { ProductTypeHelper, ProductItem, productItemColumns } from '../list/columns';
  import { TableAction } from '@/components/Table';
  // export default defineComponent({
  // setup() {
  // todo : 产品详情页
  const router = useRouter();
  const showCreateProductItemModal = ref(false);
  const productItemInfos = reactive([] as Partial<ProductItem>[]);
  const productItemInfo = reactive({
    id: null,
    productType: null,
    name: null,
    specifications: null,
    amount: null,
    unitPrice: null,
    unit: null,
    material: null,
    technicalRequirements: null,
    remark: null,
  });
  const goBack = () => {
    console.log('点击了返回产品列表页');
    router.push({ name: 'product-list' });
  };
  const showProductItemModal = () => {
    showCreateProductItemModal.value = true;
  };
  const addProductItem = () => {
    productItemInfos.push(productItemInfo);
    showCreateProductItemModal.value = false;
  };
  const actionColumn = reactive({
    width: 200,
    title: '操作',
    key: 'action',
    fixed: 'right',
    align: 'center',
    render(record: Recordable) {
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
            // 根据权限控制是否显示: 有权限，会显示，支持多个
            auth: ['basic_list'],
          },
        ],
      });
    },
  });
  const productInfo = reactive({
    id: null,
    description: null,
    entryCriteria: null,
  });
  const productTypeSelectOptions = computed(() => {
    return Array.from(ProductTypeHelper.productTypeMapper.keys()).map((k) => ({
      label: ProductTypeHelper.getDesc(k),
      value: k,
    }));
  });
  // return {
  //   goBack,
  //   addProductItem,
  //   productInfo,
  //   productItemInfos,
  //   ProductItem,
  //   productItemInfo,
  //   productTypeSelectOptions,
  //   showCreateProductItemModal,
  // };
  // },
  // });
</script>

<style lang="less" scoped></style>
