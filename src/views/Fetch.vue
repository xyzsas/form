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
          queue: {
            4: {
              A: 'awa'
            }
          }
        },
        {
          field: 'input',
          type: 'text',
          title: '单行文本',
          remark: '提示',
          rules: {
            required: true
          }
        },
        {
          field: 'textarea',
          title: '多行文本',
          remark: '吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼',
          rules: {
            required: true,
            maxLength: 50
          }
        },
        {
          field: 'select',
          title: '选择器',
          remark: '提示233',
          items: ['项目1', '项目2', '项目3'],
          rules: {
            required: true
          }
        },
        {
          field: 'radio',
          title: '单选框组',
          remark: 'hhhhhhhhhhhhhhhhh',
          items: ['项目1', '项目2', '项目3', '项目4'],
          values: ['A', 'B', 'C', 'D'],
          rules: {
            required: true
          }
        },
        {
          field: 'checkbox',
          title: '多选框组',
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
