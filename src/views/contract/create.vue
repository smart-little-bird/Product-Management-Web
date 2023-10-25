<template>
  <div>
    <n-space v-show="loading" vertical :align="'center'">
      <n-spin size="large" />
    </n-space>
    <n-form
      :model="command"
      ref="contractFormRef"
      label-placement="left"
      :label-width="'auto'"
      :rules="rules"
      v-show="!loading"
    >
      <n-card
        :bordered="false"
        class="mt-5 mb-5 proCard"
        size="small"
        :segmented="{ content: true }"
        v-if="!isEdit"
      >
        <n-form-item label="目标客户" path="clientId" v-if="!isEdit">
          <n-select
            style="width: 200px"
            v-model:value="command.clientId"
            placeholder="请选择客户"
            :options="selectClientOptions"
            :loading="loadingClient"
            clearable
            remote
          />
          <n-button quaternary type="info" @click="handleGoToClientCreate">
            客户未创建？请点击前往创建客户
          </n-button>
        </n-form-item>
        <n-form-item label="是否含税" path="isCombineFax" v-if="!isEdit">
          <n-switch
            v-model:value="command.isCombineFax"
            :checked-value="true"
            :unchecked-value="false"
          >
            <template #checked> 是 </template>
            <template #unchecked> 否 </template>
          </n-switch>
        </n-form-item>
        <n-form-item label="交货日期" path="contractShippingInfo.shipDateTime" v-if="!isEdit">
          <n-date-picker
            v-model:formatted-value="command.contractShippingInfo.shipDateTime"
            type="date"
            value-format="yyyy-MM-dd"
            clearable
          />
        </n-form-item>
        <n-form-item label="交货方式" path="contractShippingInfo.shipType" v-if="!isEdit">
          <n-switch
            checked-value="快递"
            unchecked-value="物流"
            v-model:value="command.contractShippingInfo.shipType"
          >
            <template #checked> 快递 </template>
            <template #unchecked> 物流 </template>
          </n-switch>
        </n-form-item>
        <n-form-item
          label="物流承担方"
          path="contractShippingInfo.logisticsUndertaker"
          v-if="!isEdit"
        >
          <n-input
            style="width: 200px"
            placeholder="请输入物流承担方"
            v-model:value="command.contractShippingInfo.logisticsUndertaker"
          />
        </n-form-item>
        <n-form-item label="支付方式" path="contractPayMethod.paymentType" v-if="!isEdit">
          <n-select
            style="width: 200px"
            v-model:value="command.contractPayMethod.paymentType"
            placeholder="选择支付方式"
            :options="selectPaymentTypeOptions"
            clearable
          />
        </n-form-item>
        <n-form-item label="支付百分比" path="contractPayMethod.payPercents" v-if="!isEdit">
          <n-dynamic-input
            v-model:value="command.contractPayMethod.payPercents"
            placeholder="请输入"
            :min="1"
            :max="3"
          >
            <template #default="{ index }">
              <n-input-number
                v-model:value="command.contractPayMethod.payPercents[index]"
                :show-button="false"
                style="width: 200px"
              />
            </template>
          </n-dynamic-input>
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
          :dataSource="command.contractItems"
          :actionColumn="actionColumn"
          :scroll-x="1090"
          :pagination="false"
          :showToolBar="false"
        >
          <template #tableTitle>
            <n-button type="primary" @click="showItemFormMadal">
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
    <n-card
      :bordered="false"
      class="mt-5 proCard"
      size="small"
      :segmented="{ content: true }"
      v-show="!loading"
    >
      <n-space justify="center">
        <n-button type="default" @click="goBack"> 返回 </n-button>
        <n-button type="success" @click="submitForm"> 提交 </n-button>
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
      <contractItemForm :item="contractItem" />
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
  import { reactive, ref, h, onMounted, computed } from 'vue';
  import { getList as getClientList } from '@/api/client';
  import { get, create, update } from '@/api/contract';
  import { useRoute, useRouter } from 'vue-router';
  import { contractItemColumns, ContractItem, CreateContractCommand, PaymentType } from './datas';
  import { TableAction, BasicTable } from '@/components/Table';
  import contractItemForm from './contract-item-form.vue';
  import { PlusOutlined } from '@vicons/antd';
  import { FormItemRule, FormRules, SelectOption, useDialog, useMessage } from 'naive-ui';
  const route = useRoute();
  const router = useRouter();
  const message = useMessage();
  const dialog = useDialog();
  const { contractId } = route.query;
  const { clientId } = route.query;
  const isEdit = computed(() => contractId !== undefined);
  const loadingClient = ref(true);
  const loading = ref(isEdit.value ? true : false);
  const showCreateContractItemModal = ref(false);

  const selectClientOptions = ref<SelectOption[]>([]);
  const selectPaymentTypeOptions = ref<SelectOption[]>([
    { label: '无定金', value: 0 },
    { label: '有定金', value: 1 },
    { label: '全款', value: 2 },
  ]);
  const contractItem = ref({} as ContractItem);
  const contractFormRef = ref();
  const command = ref<CreateContractCommand>({
    clientId: Number.isNaN(Number(route.query.clientId)) ? undefined : Number(route.query.clientId),
    isCombineFax: true,
    contractPayMethod: {
      paymentType: PaymentType.NoDeposit,
      payPercents: [],
    },
    contractShippingInfo: {
      shipType: '快递',
      logisticsUndertaker: '',
      shipDateTime: new Date().toLocaleDateString().replaceAll('/', '-'),
    },
    contractItems: [],
  });
  const rules: FormRules = {
    clientId: {
      required: true,
      type: 'number',
      trigger: ['blur', 'change'],
      message: '请选择客户',
    },
    contractShippingInfo: {
      logisticsUndertaker: {
        required: true,
        trigger: ['blur', 'input'],
        message: '请输入物流承担方',
      },
      shipDateTime: {
        //type: 'number',
        required: true,
        trigger: ['blur', 'change'],
        message: '请输入交货时间',
      },
    },
    contractPayMethod: {
      paymentType: {
        required: true,
        type: 'number',
        trigger: ['blur', 'change'],
        message: '请选择支付方式',
      },
      payPercents: {
        trigger: ['blur', 'change'],
        validator(_rule: FormItemRule, value: string[]) {
          if (!value) {
            return new Error('需要填写数字');
          }

          if (value.filter((v) => !/^\d*$/.test(v)).length > 0) {
            return new Error('应该为整数');
          }
          return true;
        },
      },
    },
    entryCriteria: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入入级描述',
    },
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
              command.value.contractItems = command.value.contractItems.filter(
                (p) => p.productId != record.productId
              );
            },
          },
        ],
      });
    },
  });
  const fetchClient = () => {
    if (selectClientOptions.value.length > 0) {
      loadingClient.value = false;
      return;
    }
    getClientList().then((d) => {
      selectClientOptions.value.length = 0;
      d.forEach((e) => {
        if (clientId && clientId == e.id) {
          selectClientOptions.value.push({ label: e.name, value: e.id, selected: true });
        } else {
          selectClientOptions.value.push({ label: e.name, value: e.id });
        }
      });
      loadingClient.value = false;
    });
  };
  const fetchContract = () => {
    get(contractId).then((d) => {
      command.value.id = d.id;
      command.value.contractItems = d.contractContextDetailDtos;
      loading.value = false;
    });
  };
  const goBack = () => {
    console.log('点击了返回合同列表页');
    router.push({ name: 'contract-list' });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if (!isEdit.value) {
      contractFormRef.value.validate(async (errors) => {
        if (!errors) {
          if (!command.value.contractItems || command.value.contractItems.length < 1) {
            message.error('请添加至少一条合同项');
            return;
          }
          dialog.info({
            title: '提示',
            content: `确认提交吗?`,
            positiveText: '确定',
            negativeText: '取消',
            onPositiveClick: async () => {
              if (isEdit.value) {
                await update(command.value.id, command.value.contractItems);
              } else {
                await create(command.value);
              }
              message.success('操作成功');
              setTimeout(() => {
                router.push({ name: 'contract-list' });
              }, 2000);
            },
            onNegativeClick: () => {},
          });
        } else {
          message.error('请填写完整信息');
        }
      });
    }
  };
  const showItemFormMadal = () => {
    showCreateContractItemModal.value = true;
    contractItem.value = {} as ContractItem;
  };
  const addContractItem = () => {
    console.log(contractItem.value);
    command.value.contractItems.push({ ...contractItem.value });
    showCreateContractItemModal.value = false;
  };
  const handleGoToClientCreate = () => {
    router.push({ name: 'client-list', query: { showCreate: 1 } });
  };
  onMounted(() => {
    if (isEdit.value) {
      fetchContract();
    } else {
      fetchClient();
    }
  });
</script>

<style lang="less" scoped></style>
