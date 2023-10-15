<template>
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
      <n-input @model="productItemInfo.unitPrice" placeholder="单价" />
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
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { ProductTypeHelper, ProductItem } from './datas';
  const props = defineProps<{ item: ProductItem }>();
  const productItemInfo = props.item;
  // const productItemInfo = reactive({
  //   id: null,
  //   productType: null,
  //   name: null,
  //   specifications: null,
  //   amount: null,
  //   unitPrice: null,
  //   unit: null,
  //   material: null,
  //   technicalRequirements: null,
  //   remark: null,
  // });
  const productTypeSelectOptions = computed(() => {
    return Array.from(ProductTypeHelper.productTypeMapper.keys()).map((k) => ({
      label: String(ProductTypeHelper.getDesc(k)),
      value: String(k),
    }));
  });
</script>

<style lang="less" scoped></style>
