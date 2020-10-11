<template>
  <div class="admin">
    <v-tabs v-model="tab">
      <v-tab key="overview">概览</v-tab>
      <v-tab key="list">表单列表</v-tab>
      <v-tab key="new">新建表单</v-tab>
      <v-tab key="record">表单记录</v-tab>
    </v-tabs>
      <v-tabs-items v-model="tab">
      <v-tab-item key="overview">
        <overview></overview>
      </v-tab-item>
      <v-tab-item key="list">
       <formList></formList>
      </v-tab-item>
      <v-tab-item key="new">
        <newForm></newForm>
      </v-tab-item>
      <v-tab-item key="record">
        <record :id="rid"></record>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Overview from '@/components/Overview.vue'
import FormList from '@/components/FormList.vue'
import NewForm from '@/components/NewForm.vue'
import Record from '@/components/Record.vue'

export default {
  name: 'Admin',
  data: () => ({
    tab: 0,
    rid: '',
    record: ''
  }),
  mounted () {
    if (window.sessionStorage.role !== 'ADMIN') window.location.href = '/index.html'
  },
  components: {
    Overview, FormList, NewForm, Record
  }
}
</script>

<style scoped>
  div.admin {
    color: #333;
    width: 100%;
    height: 100vh;
  }
  h3 {
    position: relative;
    width: 100%;
    color: #555;
    margin: 10px 0 20px;
  }
</style>
