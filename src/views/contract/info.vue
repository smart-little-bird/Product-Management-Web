<template>
  <div>
    <n-space v-show="loading" vertical :align="'center'">
      <n-spin size="large" />
    </n-space>

    <div v-show="!loading">
      <n-descriptions :columns="3" label-placement="left">
        <n-descriptions-item label="合同号">{{ contractDetail.contractNo }}</n-descriptions-item>
        <n-descriptions-item label="客户名">{{ contractDetail.clientName }}</n-descriptions-item>
        <n-descriptions-item label="客户手机">{{ contractDetail.phone }}</n-descriptions-item>
        <n-descriptions-item label="运输方式">{{ contractDetail.shipType }}</n-descriptions-item>
        <n-descriptions-item label="运输时间">{{
          contractDetail.shipDateTime
        }}</n-descriptions-item>
        <n-descriptions-item label="支付比例">{{
          contractDetail.percents?.join(',')
        }}</n-descriptions-item>
        <n-descriptions-item label="技术标准">{{
          contractDetail.technologyStandard
        }}</n-descriptions-item>
        <n-descriptions-item label="是否计税">
          <n-tag>{{ contractDetail.faxContext?.isCombineFax ? '是' : '否' }}</n-tag>
        </n-descriptions-item>
        <n-descriptions-item label="税率">
          {{ contractDetail.faxContext?.taxRate }}
        </n-descriptions-item>
      </n-descriptions>
      <n-card :bordered="false" size="small" :segmented="{ content: true }">
        <BasicTable
          :columns="contractItemColumns"
          :row-key="(row: ContractItem) => row.productId"
          ref="actionRef"
          :dataSource="contractDetail.contractContextDetailDtos"
          :scroll-x="1090"
          :pagination="false"
          :showToolBar="false"
        />
      </n-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { contractItemColumns, ContractItem, ContractDetail } from './datas';
  import { BasicTable } from '@/components/Table';
  import { get } from '@/api/contract';
  import { onMounted, ref } from 'vue';
  const loading = ref(true);
  const props = defineProps<{ contractId: number }>();
  const contractId = props.contractId;
  const contractDetail = ref({} as ContractDetail);
  const fetchContractDetail = (id) => {
    get(id).then((d) => {
      contractDetail.value = d;
      loading.value = false;
    });
  };
  onMounted(() => {
    fetchContractDetail(contractId);
  });
</script>

<style lang="less" scoped></style>
