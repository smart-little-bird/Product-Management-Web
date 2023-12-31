<template>
  <n-form
    ref="contractItemFormRef"
    :label-width="'auto'"
    label-placement="left"
    :model="contractItemInfo"
    :rules="rules"
  >
    <n-space vertical>
      <n-form-item label="产品" path="productId">
        <n-select
          v-model:value="contractItemInfo.productId"
          placeholder="请选择产品"
          clearable
          remote
          @update:value="handleProductUpdateValue"
          :options="selectProductOptions"
          :loading="loadingProduct"
          size="small"
        />
      </n-form-item>
      <n-form-item label="是否独立产品" path="isIndependent">
        <n-switch
          v-model:value="contractItemInfo.isIndependent"
          :unchecked-value="false"
          :checked-value="true"
        >
          <template #checked> 是 </template>
          <template #unchecked> 否 </template>
        </n-switch>
      </n-form-item>
      <n-form-item label="材料型号" path="material">
        <n-input v-model:value="contractItemInfo.material" placeholder="材料型号" />
      </n-form-item>
      <n-form-item label="数量" path="amount">
        <n-input-number
          clearable
          style="width: 100%"
          :show-button="false"
          v-model:value="contractItemInfo.amount"
          placeholder="数量"
        />
      </n-form-item>
      <n-form-item label="单价" path="unitPrice">
        <n-input-number
          :show-button="false"
          style="width: 100%"
          clearable
          v-model:value="contractItemInfo.unitPrice"
          placeholder="单价"
        />
      </n-form-item>
      <n-form-item label="单位" path="unit">
        <n-input v-model:value="contractItemInfo.unit" placeholder="单位" />
      </n-form-item>
    </n-space>
  </n-form>
</template>

<script lang="ts" setup>
  import { computed, ref, onMounted, reactive } from 'vue';
  import { ContractItem } from './datas';
  import { getList as getProductList } from '@/api/product';
  import { FormRules, SelectOption } from 'naive-ui';
  import { ProductList } from '../product/datas';
  const props = defineProps<{ item: ContractItem }>();
  const contractItemInfo = props.item;
  // const contractItemInfo = ref<Partial<ContractItem>>({});
  const loadingProduct = ref(true);
  const products = reactive([] as ProductList[]);
  const selectProductOptions = computed(() =>
    products.map((d) => ({ label: d.description, value: d.id }))
  );
  const rules: FormRules = {
    productId: {
      required: true,
      type: 'number',
      trigger: ['blur', 'change'],
      message: '请选择产品',
    },
    amount: {
      required: true,
      type: 'number',
      trigger: ['blur', 'input'],
      message: '请输入数量',
    },
    unitPrice: {
      required: true,
      type: 'number',
      trigger: ['blur', 'input'],
      message: '请输入单价',
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
  };
  const fetchProduct = () => {
    if (selectProductOptions.value.length > 0) {
      loadingProduct.value = false;
      return;
    }
    getProductList().then((d) => {
      products.length = 0;
      d.forEach((e) => {
        products.push({ ...e });
      });
      loadingProduct.value = false;
    });
  };
  const handleProductUpdateValue = (value: number, _: SelectOption) => {
    contractItemInfo.productName = products.filter((d) => d.id == value)[0].description;
  };
  onMounted(() => {
    fetchProduct();
  });
</script>

<style lang="less" scoped></style>
