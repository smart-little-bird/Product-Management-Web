<template>
  <n-form
    ref="productItemFormRef"
    :label-width="'auto'"
    label-placement="left"
    :model="productItemInfo"
    :rules="rules"
  >
    <n-space vertical>
      <n-form-item label="产品类型" path="productType">
        <n-select
          v-model:value="productItemInfo.productType"
          placeholder="产品类型"
          clearable
          :options="productTypeSelectOptions"
          size="small"
        />
      </n-form-item>
      <n-form-item label="名称" path="name">
        <n-input clearable v-model:value="productItemInfo.name" placeholder="输入名称" />
      </n-form-item>
      <n-form-item label="规格型号" path="specifications">
        <n-input clearable v-model:value="productItemInfo.specifications" placeholder="规格型号" />
      </n-form-item>
      <n-form-item label="数量" path="amount">
        <n-input-number
          style="width: 100%"
          :show-button="false"
          clearable
          v-model:value="productItemInfo.amount"
          placeholder="数量"
        />
      </n-form-item>
      <n-form-item label="单价" path="unitPrice">
        <n-input-number
          style="width: 100%"
          :show-button="false"
          clearable
          v-model:value="productItemInfo.unitPrice"
          placeholder="单价"
        />
      </n-form-item>
      <n-form-item label="单位" path="unit">
        <n-input clearable v-model:value="productItemInfo.unit" placeholder="单位" />
      </n-form-item>
      <n-form-item label="材料型号" path="material">
        <n-input clearable v-model:value="productItemInfo.material" placeholder="材料型号" />
      </n-form-item>
      <n-form-item label="技术要求" path="technicalRequirements">
        <n-input
          clearable
          v-model:value="productItemInfo.technicalRequirements"
          placeholder="技术要求"
        />
      </n-form-item>
      <n-form-item label="备注" path="remark">
        <n-input clearable v-model:value="productItemInfo.remark" placeholder="备注" />
      </n-form-item>
    </n-space>
  </n-form>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { ProductTypeHelper, ProductItem } from './datas';
  import { FormRules } from 'naive-ui/lib/form';
  const props = defineProps<{ item: ProductItem }>();
  const productItemInfo = props.item;
  const rules: FormRules = {
    productType: {
      required: true,
      type: 'number',
      trigger: ['blur', 'change'],
      message: '请选择产品类型',
    },
    name: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入名称',
    },
    specifications: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入规格型号',
    },
    amount: {
      required: true,
      type: 'number',
      trigger: ['blur', 'input'],
    },
    unitPrice: {
      required: true,
      type: 'number',
      trigger: ['blur', 'input'],
    },
    unit: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入单位',
    },
    material: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入材料型号',
    },
    technicalRequirements: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入技术要求',
    },
  };
  const productTypeSelectOptions = computed(() => {
    return Array.from(ProductTypeHelper.productTypeMapper.keys()).map((k) => ({
      label: String(ProductTypeHelper.getDesc(k)),
      value: k,
    }));
  });
</script>

<style lang="less" scoped></style>
