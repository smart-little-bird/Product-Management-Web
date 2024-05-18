<template>
    <vue-office-pdf :src="pdf"/>
  </template>
  
  <script lang="ts" setup>
  import VueOfficePdf from '@vue-office/pdf'
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  debugger
  const contractId = route.query.contractId;
  const pdf=`/StaticFiles/${contractId}.pdf`;
  </script>
  <style lang="less" scoped></style>
  