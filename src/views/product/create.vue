<template>
  <div>
    <n-card :bordered="false" class="mt-4 proCard" size="small" :segmented="{ content: true }">
      <n-form
        :model="productInfo"
        ref="productFormRef"
        label-placement="left"
        :label-width="'auto'"
        inline
        :rules="rules"
        class="py-4"
      >
        <n-form-item label="客户Id" path="id" hidden v-show="false">
          <n-input-number
            clearable
            :disabled="isEdit"
            placeholder="客户Id"
            readonly
            v-model:value="productInfo.id"
            hidden
          />
        </n-form-item>
        <n-form-item label="产品描述" path="description">
          <n-input
            :disabled="isEdit"
            clearable
            placeholder="产品描述"
            v-model:value="productInfo.description"
          />
        </n-form-item>
        <n-form-item label="入级描述" path="entryCriteria">
          <n-input
            :disabled="isEdit"
            clearable
            placeholder="入级描述"
            v-model:value="productInfo.entryCriteria"
          />
        </n-form-item>
      </n-form>
    </n-card>
    <n-card :bordered="false" class="mt-4 proCard" size="small" :segmented="{ content: true }">
      <BasicTable
        :columns="productItemColumns"
        :row-key="(row: ProductItem) => row.id"
        ref="actionRef"
        :dataSource="productInfo.productListItemDtos"
        :actionColumn="actionColumn"
        :scroll-x="1090"
        :pagination="false"
        :showToolBar="false"
      >
        <template #tableTitle>
          <n-button type="primary" @click="showProductItemModal">
            <template #icon>
              <n-icon>
                <PlusOutlined />
              </n-icon>
            </template>
            添加产品明细
          </n-button>
        </template>
      </BasicTable>
    </n-card>
    <n-modal
      v-model:show="showCreateProductItemModal"
      :show-icon="false"
      preset="card"
      size="huge"
      style="width: 800px"
      title="新建产品明细"
    >
      <product-item-form :item="productItemInfo" />
      <template #footer>
        <n-space justify="center">
          <n-button @click="cancelAddProductItem">取消</n-button>
          <n-button type="info" @click="addProductItem">确定</n-button>
        </n-space>
      </template>
    </n-modal>

    <n-card :bordered="false" class="mt-4 proCard" size="small" :segmented="{ content: true }">
      <n-space justify="center">
        <n-button type="default" @click="goBack"> 返回 </n-button>
        <n-button type="success" @click="submitForm"> 提交 </n-button>
      </n-space>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref, h, onMounted, computed } from 'vue';
  import { PlusOutlined } from '@vicons/antd';
  import productItemForm from './product-item-form.vue';
  import { useRouter, useRoute } from 'vue-router';
  import { ProductItem, productItemColumns } from './datas';
  import { TableAction, BasicTable } from '@/components/Table';
  import { FormRules, useDialog, useMessage } from 'naive-ui';
  import { create, getList, update } from '@/api/product';

  const router = useRouter();
  const route = useRoute();
  const message = useMessage();
  const dialog = useDialog();
  const productId = route.query.productId;
  const isEdit = computed(() => productId !== undefined);
  const productFormRef = ref();
  const showCreateProductItemModal = ref(false);
  const productItemInfo = ref({} as ProductItem);
  const rules: FormRules = {
    description: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入产品描述',
    },
    entryCriteria: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入入级描述',
    },
  };
  const actionColumn = reactive({
    width: 200,
    title: '操作',
    key: 'action',
    fixed: 'right',
    align: 'center',
    render(record) {
      console.log(record);
      return h(TableAction as any, {
        style: 'button',
        actions: [
          {
            label: '删除',
            onClick: () => {
              productInfo.value.productListItemDtos = productInfo.value.productListItemDtos.filter(
                (d) => d.id != record.id
              );
            },
            ifShow: true,
          },
        ],
      });
    },
  });
  let productInfoOrigin = {
    id: null,
    description: null,
    entryCriteria: null,
    productListItemDtos: [] as ProductItem[],
  };
  const productInfo = ref({ ...productInfoOrigin });
  const goBack = () => {
    console.log('点击了返回产品列表页');
    router.push({ name: 'product-list' });
  };
  const showProductItemModal = () => {
    showCreateProductItemModal.value = true;
    productItemInfo.value = {} as ProductItem;
  };
  const cancelAddProductItem = () => {
    showCreateProductItemModal.value = false;
  };
  const addProductItem = () => {
    productInfo.value.productListItemDtos.push(productItemInfo.value);
    showCreateProductItemModal.value = false;
  };
  const submitForm = (e) => {
    e.preventDefault();
    showCreateProductItemModal.value = false;
    productFormRef.value.validate(async (errors) => {
      if (!errors) {
        if (
          !productInfo.value.productListItemDtos ||
          productInfo.value.productListItemDtos.length < 1
        ) {
          message.error('请添加产品项');
          return;
        }
        dialog.info({
          title: '提示',
          content: `确认提交吗?`,
          positiveText: '确定',
          negativeText: '取消',
          onPositiveClick: async () => {
            if (isEdit.value) {
              await update(productInfo.value);
            } else {
              await create(productInfo.value);
            }
            message.success(isEdit.value ? '编辑成功' : '新建成功');
            setTimeout(() => {
              router.push({ name: 'product-list' });
            }, 2000);
          },
          onNegativeClick: () => {},
        });
      } else {
        message.error('操作失败');
      }
    });
  };
  onMounted(() => {
    getList().then((d) => {
      productInfoOrigin = d.filter((_) => _.id == productId)[0]??productInfoOrigin;
      productInfo.value = { ...productInfoOrigin };
      console.log(productInfo.value);
    });
  });
</script>

<style lang="less" scoped></style>
