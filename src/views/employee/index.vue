<template>
    <n-data-table
    remote
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :bordered="false"
  />
</template>

<script lang="ts">
import { h, defineComponent, onMounted, ref } from 'vue'
import { NButton, useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { EmployeeList } from './datas';
import { getList } from '@/api/employee'

const createColumns = ({
  play
}: {
  play: (row: EmployeeList) => void
}): DataTableColumns<EmployeeList> => {
  return [
  {
    title: '职员ID',
    key: 'employeeId',
    width: '5%',
    align: 'center',
  },
  {
    title: '职员工种',
    key: 'employeeType',
    align: 'center',
    width: '15%',
  },
  {
    title: '职员名称',
    key: 'employeeName',
    align: 'center',
    width: '15%',
  },
  {
    title: '职员年龄',
    key: 'age',
    align: 'center',
    width: '10%',
  },
  {
    title: '职员性别',
    key: 'gender',
    align: 'center',
    width: '15%',
  },
  {
    title: '职员身份证',
    key: 'idCardNo',
    align: 'center',
    width: '10%',
  },
  {
    title: '工作年限',
    key: 'workingYear',
    align: 'center',
    width: '10%',
  },
  {
    title: '联系电话',
    key: 'phone',
    align: 'center',
    width: '10%',
  },
  {
    title: '操作',
    key: 'actions',
    render (row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row)
          },
          { default: () => 'Play' }
        )
    }
  }
  ]
}


export default defineComponent({
  setup () {
    const dataRef = ref([])
    const message = useMessage()

    onMounted(() => {
      getList(
      ).then((data) => {
        dataRef.value = data
      })
    })

    return {
      data:  dataRef,
      columns: createColumns({
        play (row: EmployeeList) {
          message.info(`Play ${row.employeeId}`)
        }
      }),
      pagination: false as const
    }
  }
})
</script>