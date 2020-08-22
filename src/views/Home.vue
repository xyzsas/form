<template>
  <div class="form">
    <h1>{{ formTitle }}</h1>
    <v-form ref="form" style="width: 80%; max-width: 400px">
     <template v-for="(i, indexI) in formData">
      <v-card-title v-if="i.field === 'title'" :key="indexI">{{ i.name }}</v-card-title>
      <v-text-field
        v-if="i.field === 'input'"
        :key="indexI"
        v-model="inputData[i.name]"
        :label="i.name"
        :rules="i.rules"
        :type="i.type"
      ></v-text-field>
      <v-radio-group
        v-model="inputData[i.name]"
        v-if="i.field === 'radio'"
        :key="indexI"
        :name="i.name"
        :rules="i.rules"
        :label="i.name"
        mutiple
      >
        <v-radio
          v-for="(j, indexJ) in i.item"
          :key="indexJ"
          :label="j"
          :value="j"
        ></v-radio>
      </v-radio-group>
      <v-select
        v-if="i.field === 'select'"
        :key="indexI"
        v-model="inputData[i.name]"
        :rules="i.rules"
        :items="i.items"
        :label="i.name"
        multiple
        required
      ></v-select>
     </template>
    </v-form>
    <v-btn outlined @click="submit">确认提交</v-btn>
    <br>
  </div>
</template>

<script>
import formData from '../data/stuReg'
import swal from 'sweetalert'

export default {
  name: 'Home',
  data: () => ({
    formData,
    formTitle: '新生报到注册',
    inputData: {}
  }),
  methods: {
    submit () {
      if (!this.$refs.form.validate()) return
      swal('提交成功！', '感谢您的参与！')
    }
  }
}
</script>

<style scoped>
  div.form {
    color: #333;
    background: #F2F2F2;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
