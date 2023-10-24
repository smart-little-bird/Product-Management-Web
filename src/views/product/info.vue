<template>
  <div>
    <n-descriptions :columns="1" label-placement="left">
      <n-descriptions-item label="产品描述">{{ product.description }}</n-descriptions-item>
      <n-descriptions-item label="入级描述">{{ product.entryCriteria }}</n-descriptions-item>
    </n-descriptions>
    <n-card :bordered="false" size="small" :segmented="{ content: true }">
      <BasicTable
        :columns="productItemColumns"
        :row-key="(row: ProductItem) => row.id"
        ref="actionRef"
        :dataSource="product.productListItemDtos"
        :scroll-x="1090"
        :pagination="false"
        :showToolBar="false"
      />
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { ProductItem, ProductList, productItemColumns } from './datas';
  import { BasicTable } from '@/components/Table';
  const props = defineProps<{ product: ProductList }>();
  const product = props.product;
</script>

<style lang="less" scoped></style>
