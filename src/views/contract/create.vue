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
            placeholder="请选择客户"
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
          <n-switch
            v-model:value="createContractCommand.isCombineFax"
            checked-value="true"
            unchecked-value="false"
          >
            <template #checked> 是 </template>
            <template #unchecked> 否 </template>
          </n-switch>
        </n-form-item>
        <n-form-item label="交货日期" path="contractShippingInfo.shipDateTime">
          <n-date-picker
            v-model="createContractCommand.contractShippingInfo.shipDateTime"
            type="datetime"
            clearable
          />
        </n-form-item>
        <n-form-item label="交货方式" path="contractShippingInfo.shipType">
          <n-switch
            checked-value="快递"
            unchecked-value="物流"
            v-model:value="createContractCommand.contractShippingInfo.shipType"
          >
            <template #checked> 快递 </template>
            <template #unchecked> 物流 </template>
          </n-switch>
        </n-form-item>
        <n-form-item label="物流承担方" path="contractShippingInfo.logisticsUndertaker">
          <n-input
            style="width: 200px"
            placeholder="请输入物流承担方"
            v-model="createContractCommand.contractShippingInfo.logisticsUndertaker"
          />
        </n-form-item>
        <n-form-item label="支付方式" path="paymentType">
          <n-select
            style="width: 200px"
            v-model:value="createContractCommand.contractPayMethod.paymentType"
            placeholder="选择支付方式"
            :options="selectPaymentTypeOptions"
            clearable
          />
        </n-form-item>
        <n-form-item label="支付百分比" path="payPercents">
          <n-space inline>
            <n-input
              style="width: 80px"
              v-for="(payPercent, index) in createContractCommand.contractPayMethod.payPercents"
              :key="index"
              v-model="createContractCommand.contractPayMethod.payPercents[index]"
            />
            <n-button
              quaternary
              type="info"
              @click="() => createContractCommand.contractPayMethod.payPercents.push(0)"
            >
              添加
            </n-button>
          </n-space>
        </n-form-item>
      </n-card>
      <n-card
        :bordered="false"
        class="mt-5 mb-5 proCard"
        size="small"
        :segmented="{ content: true }"
      >
        <BasicTable
          :columns="contractItemColumns"
          :row-key="(row: ContractItem) => row.productId"
          ref="actionRef"
          :dataSource="selectProducts"
          :actionColumn="actionColumn"
          :scroll-x="1090"
          :pagination="false"
          :showToolBar="false"
        >
          <!-- <template #toolbar v-if="false">
          <h1>111</h1>
        </template> -->
          <template #tableTitle>
            <n-button type="primary" @click="() => (showCreateContractItemModal = true)">
              <template #icon>
                <n-icon>
                  <PlusOutlined />
                </n-icon>
              </template>
              添加合同明细
            </n-button>
          </template>
        </BasicTable>
      </n-card>
    </n-form>
    <n-card :bordered="false" class="mt-5 proCard" size="small" :segmented="{ content: true }">
      <n-space justify="center">
        <n-button type="default" @click="goBack"> 返回 </n-button>
        <n-button type="success" @click="goBack"> 提交 </n-button>
      </n-space>
    </n-card>
    <n-modal
      v-model:show="showCreateContractItemModal"
      :show-icon="false"
      preset="card"
      size="huge"
      style="width: 800px"
      title="新建合同明细"
    >
      <contractItemForm />
      <template #footer>
        <n-space justify="center">
          <n-button @click="() => (showCreateContractItemModal = false)">取消</n-button>
          <n-button type="info" @click="addContractItem">确定</n-button>
        </n-space>
      </template>
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref, h, onMounted } from 'vue';
  import { getList as getClientList } from '@/api/client';
  import { getList as getProductList } from '@/api/product';
  import { SelectOption } from 'naive-ui/lib/select';
  import { useRoute, useRouter } from 'vue-router';
  import { contractItemColumns, ContractItem, CreateContractCommand, PaymentType } from './datas';
  import { TableAction, BasicTable } from '@/components/Table';
  import contractItemForm from './contract-item-form.vue';
  import { PlusOutlined } from '@vicons/antd';
  const route = useRoute();
  const loadingClient = ref(true);
  const loadingProduct = ref(false);
  const showCreateContractItemModal = ref(false);
  const createContractCommand = reactive<CreateContractCommand>({
    clientId: Number.isNaN(Number(route.query.clientId)) ? undefined : Number(route.query.clientId),
    isCombineFax: true,
    contractPayMethod: {
      paymentType: PaymentType.NoDeposit,
      payPercents: [],
    },
    contractShippingInfo: {
      shipType: '快递',
      logisticsUndertaker: '',
      shipDateTime: '',
    },
    contractItems: [],
  });
  const selectClientOptions = ref<SelectOption[]>([]);
  const selectPaymentTypeOptions = ref<SelectOption[]>([
    { label: '无定金', value: 0 },
    { label: '有定金', value: 1 },
    { label: '全款', value: 2 },
  ]);
  // const paymentTypeMap = [
  //   { label: '无定金', value: 0 },
  //   { label: '有定金', value: 1 },
  //   { label: '全款', value: 2 },
  // ];
  const selectProductCheckboxs = ref<{ label: string; value: number }[]>([]);
  const selectProducts = ref<ContractItem[]>([]);
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
  const actionColumn = reactive({
    width: '15%',
    title: '操作',
    key: 'action',
    fixed: 'right',
    align: 'center',
    render(record) {
      return h(TableAction as any, {
        actions: [
          {
            label: '删除',
            onClick: () => {
              selectProducts.value = selectProducts.value.filter(
                (p) => p.productId != record.productId
              );
            },
          },
        ],
      });
    },
  });

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
  const addContractItem = () => {};
  const handleGoToClientCreate = () => {
    router.push({ name: 'client-list', query: { showCreate: 1 } });
  };
  onMounted(() => {
    fetchClient();
    fetchProduct();
    // if (route.query.clientId) {
    //   createContractCommand.clientId = route.query.clientId as string;
    // }
  });
</script>

<style lang="less" scoped></style>
