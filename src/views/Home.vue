<template>
  <div class="home">
    <v-card class="form">
      <h1>学生事务系统</h1>
      <h3>表单</h3>
      <v-text-field ref="input" style="width: 250px;" label="表单事务id" outlined rounded v-model="input" hint="请输入表单事务编号" @keyup.enter="next"></v-text-field>
      <v-btn :disabled="!input" fab color="primary" @click="next">
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    input: ''
  }),
  methods: {
    next () {
      if (!this.input) return
      this.$router.push(`/${this.input}/main`)
    }
  }
}
</script>

<style scoped>
  div.home {
    color: #333;
    background: #F2F2F2;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  h3 {
    position: relative;
    width: 100%;
    color: #555;
    margin: 10px 0 20px;
  }
  .form {
    height: 310px;
    padding: 30px 100px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease;
  }
  @media (max-width: 500px) {
    .form {
      width: 100%;
      padding: 30px 10px;
    }
  }
</style>
