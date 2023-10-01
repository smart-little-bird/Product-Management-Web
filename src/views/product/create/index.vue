<template>
  <div>
    <n-card :bordered="false" class="proCard mt-4" size="small" :segmented="{ content: true }">
      <n-form
        :model="formParams"
        :rules="rules"
        ref="formRef"
        label-placement="left"
        :label-width="'auto'"
        class="py-4"
      >
        <n-form-item label="客户Id" path="id" hidden v-show="false">
          <n-input placeholder="请输入客户Id" readonly v-model:value="formParams.id" hidden />
        </n-form-item>
        <n-form-item label="产品描述" path="description">
          <n-input placeholder="请输入产品描述" v-model:value="formParams.description" />
        </n-form-item>
        <n-form-item label="入级描述" path="entryCriteria">
          <n-input placeholder="请输入入级描述" v-model:value="formParams.entryCriteria" />
        </n-form-item>
      </n-form>
    </n-card>
    <n-card :bordered="false" class="proCard mt-4" size="small" :segmented="{ content: true }">
      <n-space justify="center">
        <n-button type="primary" @click="goBack"> 返回 </n-button>
      </n-space>
    </n-card>
  </div>
</template>

<script>
  import { defineComponent, reactive } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    setup() {
      // todo : 产品详情页
      const router = useRouter();
      const goBack = () => {
        console.log('点击了返回产品列表页');
        router.push({ name: 'product-list' });
      };
      const formParams = reactive({
        id: null,
        description: null,
        entryCriteria: null,
      });
      return { goBack, formParams };
    },
  });
</script>

<style lang="less" scoped></style>
