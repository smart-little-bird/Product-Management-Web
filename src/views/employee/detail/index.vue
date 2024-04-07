<template>
    <n-radio-group
      v-model:value="size"
      name="left-size"
      style="margin-bottom: 12px"
    >
      <n-radio-button value="small">
        小
      </n-radio-button>
      <n-radio-button value="medium">
        中
      </n-radio-button>
      <n-radio-button value="large">
        大
      </n-radio-button>
    </n-radio-group>
    <n-form
      ref="formRef"
      :model="model"
      :rules="rules"
      label-placement="left"
      label-width="auto"
      require-mark-placement="right-hanging"
      :size="size"
      :style="{
        maxWidth: '640px'
      }"
    >
      <n-form-item label="职员姓名" path="employeeName">
        <n-input v-model:value="model.employeeName" placeholder="Input" />
      </n-form-item>
      <n-form-item label="职员工种" path="employeeType">
        <n-radio-group v-model:value="model.employeeType" name="radiogroup1">
          <n-space>
            <n-radio value="普车">
              普车
            </n-radio>
            <n-radio value="数控">
              数控
            </n-radio>
            <n-radio value="钳工">
              钳工
            </n-radio>
            <n-radio value="焊工">
              焊工
            </n-radio>
            <n-radio value="铣工">
              铣工
            </n-radio>
            <n-radio value="质检">
              质检
            </n-radio>
            <n-radio value="后勤">
              后勤
            </n-radio>
          </n-space>
        </n-radio-group>
      </n-form-item>
      <n-form-item label="职员技能" path="multipleSelectValue">
        <n-select
          v-model:value="model.multipleSelectValue"
          placeholder="Select"
          :options="generalSkills"
          multiple
        />
      </n-form-item>
      <n-form-item label="入职时间" path="datetimeValue">
        <n-date-picker v-model:value="model.datetimeValue" type="datetime" />
      </n-form-item>
      <n-form-item label="性别" path="switchValue">
        <n-switch v-model:value="model.switchValue" />
      </n-form-item>

      <n-form-item label="工作年限" path="workingYear">
        <n-input-number v-model:value="model.inputNumberValue" />
      </n-form-item>
      <n-form-item label="Time Picker" path="timePickerValue">
        <n-time-picker v-model:value="model.timePickerValue" />
      </n-form-item>
      <n-form-item label="Slider" path="sliderValue">
        <n-slider v-model:value="model.sliderValue" :step="5" />
      </n-form-item>
      <n-form-item label="Transfer" path="transferValue">
        <n-transfer
          v-model:value="model.transferValue"
          :options="generalOptions"
        />
      </n-form-item>
      <n-form-item label="Nested Path" :show-feedback="false">
        <n-grid :cols="2" :x-gap="24">
          <n-form-item-gi path="nestedValue.path1">
            <n-input
              v-model:value="model.nestedValue.path1"
              placeholder="Nested Path 1"
            />
          </n-form-item-gi>
          <n-form-item-gi path="nestedValue.path2">
            <n-select
              v-model:value="model.nestedValue.path2"
              placeholder="Nested Path 2"
              :options="generalOptions"
            />
          </n-form-item-gi>
        </n-grid>
      </n-form-item>
      <div style="display: flex; justify-content: flex-end">
        <n-button round type="primary" @click="handleValidateButtonClick">
          验证
        </n-button>
      </div>
    </n-form>
  
    <pre>{{ JSON.stringify(model, null, 2) }}
  </pre>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  import { useMessage } from "naive-ui";
  
  export default defineComponent({
    setup() {
      const formRef = ref(null);
      const message = useMessage();
      return {
        formRef,
        size: ref("medium"),
        model: ref({
          employeeName: null,
          employeeType: null,
          selectValue: null,
          multipleSelectValue: null,
          datetimeValue: null,
          nestedValue: {
            path1: null,
            path2: null
          },
          switchValue: false,
          checkboxGroupValue: null,
          radioGroupValue: null,
          radioButtonGroupValue: null,
          workingYear: null,
          timePickerValue: null,
          sliderValue: 0,
          transferValue: null
        }),
        generalOptions: ["普车","数控","钳工", "焊工", "铣工","质检","后勤"].map(
          (v) => ({
            label: v,
            value: v
          })
        ),
        generalSkills: ["车削","数控","精工", "焊接", "车铣","刨磨","质检"].map(
          (v) => ({
            label: v,
            value: v
          })
        ),
        rules: {
          inputValue: {
            required: true,
            trigger: ["blur", "input"],
            message: "请输入 inputValue"
          },
          textareaValue: {
            required: true,
            trigger: ["blur", "input"],
            message: "请输入 textareaValue"
          },
          selectValue: {
            required: true,
            trigger: ["blur", "change"],
            message: "请选择 selectValue"
          },
          multipleSelectValue: {
            type: "array",
            required: true,
            trigger: ["blur", "change"],
            message: "请选择 multipleSelectValue"
          },
          datetimeValue: {
            type: "number",
            required: true,
            trigger: ["blur", "change"],
            message: "请输入 datetimeValue"
          },
          nestedValue: {
            path1: {
              required: true,
              trigger: ["blur", "input"],
              message: "请输入 nestedValue.path1"
            },
            path2: {
              required: true,
              trigger: ["blur", "change"],
              message: "请输入 nestedValue.path2"
            }
          },
          checkboxGroupValue: {
            type: "array",
            required: true,
            trigger: "change",
            message: "请选择 checkboxGroupValue"
          },
          radioGroupValue: {
            required: true,
            trigger: "change",
            message: "请选择 radioGroupValue"
          },
          radioButtonGroupValue: {
            required: true,
            trigger: "change",
            message: "请选择 radioButtonGroupValue"
          },
          inputNumberValue: {
            type: "number",
            required: true,
            trigger: ["blur", "change"],
            message: "请输入 inputNumberValue"
          },
          timePickerValue: {
            type: "number",
            required: true,
            trigger: ["blur", "change"],
            message: "请输入 timePickerValue"
          },
          sliderValue: {
            validator(rule, value) {
              return value > 50;
            },
            trigger: ["blur", "change"],
            message: "sliderValue 需要大于 50"
          },
          transferValue: {
            type: "array",
            required: true,
            trigger: "change",
            message: "请输入 transferValue"
          }
        },
        handleValidateButtonClick(e) {
          e.preventDefault();
          formRef.value?.validate((errors) => {
            if (!errors) {
              message.success("验证成功");
            } else {
              console.log(errors);
              message.error("验证失败");
            }
          });
        }
      };
    }
  });
  </script>