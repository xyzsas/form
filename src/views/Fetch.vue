<template>
  <div class="fetch">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '正在获取表单数据',
      id: this.$route.params.aid
    }
  },
  async mounted () {
    this.$store.state.form = {
      main: [
        {
          title: '测试问卷 - 首页',
          queue: [
            {
              c: [[1, 'is', '1']],
              p: ['t1 is 1']
            },
            {
              c: [[1, 'in', '1'], [2, 'in', '2']],
              p: ['1 in t1', '2 in t2']
            },
            {
              c: [[4, 'is', 'A']],
              p: ['t4 is A']
            },
            {
              c: [[5, 'in', 'A'], [5, 'in', 'B'], [5, '!in', 'C']],
              p: ['A, B in t5']
            }
          ]
        },
        { // 1
          field: 'input',
          type: 'text',
          title: '单行文本',
          remark: '提示',
          rules: {
            required: true
          }
        },
        { // 2
          field: 'textarea',
          title: '多行文本',
          remark: '吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼',
          rules: {
            required: true,
            maxLength: 50
          }
        },
        { // 3
          field: 'select',
          title: '选择器',
          remark: '提示233',
          items: ['项目1', '项目2', '项目3'],
          rules: {
            required: true
          },
          cond: [
            [[1, 'is', '1'], [2, 'in', '2']],
            [[4, 'is', 'A']]
          ]
        },
        { // 4
          field: 'radio',
          title: '单选框组',
          remark: 'hhhhhhhhhhhhhhhhh',
          items: ['项目1', '项目2', '项目3', '项目4'],
          values: ['A', 'B', 'C', 'D'],
          rules: {
            required: true
          }
        },
        { // 5
          field: 'checkbox',
          title: '多选',
          remark: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
          items: ['项目1', '项目2', '项目3', '项目4'],
          values: ['A', 'B', 'C', 'D'],
          rules: {
            required: true,
            minSelect: 2,
            maxSelect: 3
          }
        }
      ],
      awa: [
        {
          title: 'awa'
        },
        {
          field: 'input',
          type: 'text',
          title: '单行文本',
          remark: '提示',
          rules: {
            required: true
          }
        }
      ]
    }
    this.$router.push('/form/main')
  }
}
</script>

<style scoped>
div.fetch {
  color: #555;
  width: 100%;
  min-height: 100vh;
  padding: 30px 3%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
