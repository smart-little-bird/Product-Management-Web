<template>
  <div>
    <!-- <div class="n-layout-page-header">
      <n-card :bordered="false" title="客户详情" />
    </div> -->
    <!-- <n-card :bordered="false" class="mt-4 proCard" size="small" :segmented="{ content: true }"> -->
    <n-descriptions :columns="2" label-placement="left">
      <!-- <n-descriptions-item>
          <template #label>客户名称</template>
          啊俊
        </n-descriptions-item> -->
      <n-descriptions-item label="客户名称">{{ client?.name }}</n-descriptions-item>
      <n-descriptions-item label="客户类型">
        <n-tag size="small" :type="clientTypeTagType"> {{ clientTypeDesc }}</n-tag>
      </n-descriptions-item>
      <n-descriptions-item label="客户地址">{{ clientAddress }}</n-descriptions-item>
      <n-descriptions-item label="客户邮编">{{ client.zipCode }}</n-descriptions-item>
      <n-descriptions-item label="代理联系人">{{ client.clientAgent.name }}</n-descriptions-item>
      <n-descriptions-item label="代理联系方式">{{
        client.clientAgent.phoneNumber
      }}</n-descriptions-item>
      <n-descriptions-item label="客户银行抬头">{{ client.bankTitle }}</n-descriptions-item>
      <n-descriptions-item label="客户银行账号">{{ client.bankAccount }}</n-descriptions-item>
      <n-descriptions-item label="客户税号">{{ client.tFN }}</n-descriptions-item>
      <n-descriptions-item label="开票电话">{{ client.billingTelephone }}</n-descriptions-item>
      <n-descriptions-item label="联系方式"
        >{{ client.contactNumber }} / {{ client.email }}</n-descriptions-item
      >
      <n-descriptions-item label="客户传真">{{ client.fax }}</n-descriptions-item>
    </n-descriptions>
    <!-- </n-card> -->
    <!-- <n-card :bordered="false" class="mt-4 proCard" size="small" :segmented="{ content: true }">
      <n-space justify="center">
        <n-button type="primary" @click="goBack"> 返回 </n-button>
      </n-space>
    </n-card> -->
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { ClientType, ClientTypeHelper, ClientList } from './columns';
  const props = defineProps<{ client: ClientList }>();
  const client = props.client;
  const clientTypeDesc = computed(() => ClientTypeHelper.getDesc(client.clientType));
  const clientTypeTagType = computed(() =>
    client.clientType === ClientType.Enterprise
      ? 'success'
      : client.clientType === ClientType.Personage
      ? 'info'
      : 'default'
  );
  const clientAddress = computed(() => `${client.province} ${client.city} ${client.street}`);
</script>

<style lang="less" scoped></style>
