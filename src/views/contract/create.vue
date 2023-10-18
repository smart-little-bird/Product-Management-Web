<template>
  <div>
    <n-form
      :model="createContractCommand"
      ref="contractFormRef"
      label-placement="left"
      :label-width="'auto'"
    >
      <n-card
        :bordered="false"
        class="mt-5 mb-5 proCard"
        size="small"
        :segmented="{ content: true }"
      >
        <n-form-item label="目标客户" path="clientId">
          <n-select
            style="width: 200px"
            v-model:value="createContractCommand.clientId"
            placeholder="选择客户"
            :options="selectClientOptions"
            :loading="loadingClient"
            clearable
            remote
          />
          <!-- @search="handleSearch" -->
          <n-button quaternary type="info" @click="handleGoToClientCreate">
            客户未创建？请点击前往创建客户
          </n-button>
        </n-form-item>

        <!-- <n-form-item label="产品描述" path="description">
          <n-input placeholder="产品描述" v-model:value="productInfo.description" />
        </n-form-item> -->
        <n-form-item label="是否含税" path="isCombineFax">
          <n-switch @model="createContractCommand.isCombineFax" />
        </n-form-item>
        <n-form-item label="交货日期" path="isCombineFax">
          <n-date-picker
            @model="createContractCommand.contractShippingInfo?.shipDateTime"
            type="datetime"
            clearable
          />
        </n-form-item>
        <n-form-item label="交货方式" path="isCombineFax">
          <n-input
            placeholder="交货方式"
            @model="createContractCommand.contractShippingInfo?.shipType"
          />
        </n-form-item>
        <n-form-item label="物流承担方" path="logisticsUndertaker">
          <n-input
            placeholder="物流承担方"
            @model="createContractCommand.contractShippingInfo?.logisticsUndertaker"
          />
        </n-form-item>
      </n-card>
      <n-card :bordered="false" class="mt-5 proCard" size="small" :segmented="{ content: true }">
        <n-space justify="center" v-if="!loadingProduct">
          <n-spin size="large" />
        </n-space>
        <n-form-item label="选择产品" path="product" size="large" v-if="loadingProduct">
          <n-checkbox-group :value="selectProducts">
            <n-grid :x-gap="48" :y-gap="48" :cols="8">
              <n-gi v-for="p in selectProductCheckboxs" :key="p.value">
                <n-checkbox size="large" :value="p.value" :label="p.label" />
              </n-gi>
            </n-grid>
          </n-checkbox-group>
          <!-- @search="handleSearch" -->
        </n-form-item>
        <!-- <n-form-item label="产品描述" path="description">
          <n-input placeholder="产品描述" v-model:value="productInfo.description" />
        </n-form-item> -->
      </n-card>
    </n-form>
    <n-card :bordered="false" class="mt-5 proCard" size="small" :segmented="{ content: true }">
      <n-space justify="center">
        <n-button type="default" @click="goBack"> 返回 </n-button>
        <n-button type="success" @click="goBack"> 提交 </n-button>
      </n-space>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { getList as getClientList } from '@/api/client';
  import { getList as getProductList } from '@/api/product';
  import { SelectOption } from 'naive-ui/lib/select';
  import { useRouter } from 'vue-router';
  import { CreateContractCommand } from './datas';
  const loadingClient = ref(true);
  const loadingProduct = ref(false);
  const createContractCommand = reactive<CreateContractCommand>({} as CreateContractCommand);
  const selectClientOptions = ref<SelectOption[]>([]);
  const selectProductCheckboxs = ref<{ label: string; value: number }[]>([]);
  const selectProducts = ref<[]>([]);
  const router = useRouter();
  const contractFormRef = ref(null);
  const fetchClient = () => {
    if (selectClientOptions.value.length > 0) {
      loadingClient.value = false;
      return;
    }
    getClientList().then((d) => {
      selectClientOptions.value.length = 0;
      d.forEach((e) => {
        selectClientOptions.value.push({ label: e.name, value: e.id });
      });
      loadingClient.value = false;
    });
  };
  const fetchProduct = () => {
    if (selectProductCheckboxs.value.length > 0) {
      loadingProduct.value = true;
      return;
    }
    getProductList().then((d) => {
      selectProductCheckboxs.value.length = 0;
      d.forEach((e) => {
        selectProductCheckboxs.value.push({ label: e.description, value: e.id });
      });
      loadingProduct.value = true;
    });
  };
  const goBack = () => {
    console.log('点击了返回合同列表页');
    router.push({ name: 'contract-list' });
  };
  const handleGoToClientCreate = () => {
    router.push({ name: 'client-list', query: { showCreate: 1 } });
  };
  fetchClient();
  fetchProduct();
</script>

<style lang="less" scoped></style>
