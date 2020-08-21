export default [
  {
    name: '学生个人信息',
    field: 'title'
  },
  {
    name: '姓名',
    field: 'input',
    type: 'text',
    placeholder: '姓名',
    rules: {
      required: true,
      message: '请正确填写姓名',
      validator: (val) => { return val.length <= 6 }
    }
  },
  {
    name: '性别',
    field: 'radio',
    item: ['男', '女'],
    rules: {
      required: true,
      message: '请选择性别'
    }
  },
  {
    name: '毕业学校',
    field: 'input',
    type: 'text',
    placeholder: '毕业学校',
    rules: {
      required: true,
      message: '请填写毕业学校'
    }
  },
  {
    name: '中考分',
    field: 'input',
    type: 'digit',
    placeholder: '中考分',
    rules: {
      required: true,
      message: '请填写正确的中考分',
      validator: (val) => { return val >= 0 && val <= 780 }
    }
  },
  {
    name: '中考准考证号',
    field: 'input',
    type: 'digit',
    placeholder: '中考准考证号',
    rules: {
      required: true,
      message: '请填写正确的中考准考证号',
    }
  },
  {
    name: '民族',
    field: 'input',
    type: 'text',
    placeholder: '民族',
    rules: {
      required: true,
      message: '请填写民族'
    }
  },
  {
    name: '现住址',
    field: 'input',
    type: 'text',
    placeholder: '现住址',
    rules: {
      required: true,
      message: '请填写现住址'
    }
  },
  {
    name: '学生家长信息',
    field: 'title',
  },
  {
    name: '父亲姓名',
    field: 'input',
    type: 'text',
    placeholder: '父亲姓名',
    rules: {
      required: true,
      message: '请填写父亲姓名',
      validator: (val) => { return val.length <= 6 }
    }
  },
  {
    name: '父亲年龄',
    field: 'input',
    type: 'digit',
    placeholder: '父亲年龄',
    rules: {
      required: true,
      message: '请填写父亲年龄',
      validator: (val) => { return val >= 0 && val <= 100 }
    }
  },
  {
    name: '父亲工作单位',
    field: 'input',
    type: 'text',
    placeholder: '父亲工作单位',
    rules: {
      required: true,
      message: '请填写父亲工作单位'
    }
  },
  {
    name: '父亲联系电话',
    field: 'input',
    type: 'text',
    placeholder: '父亲联系电话',
    rules: {
      required: true,
      message: '请填写正确电话号码',
      pattern: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
    }
  },
  {
    name: '母亲姓名',
    field: 'input',
    type: 'text',
    placeholder: '母亲姓名',
    rules: {
      required: true,
      message: '请填写母亲姓名',
      validator: (val) => { return val.length <= 6 }
    }
  },
  {
    name: '母亲年龄',
    field: 'input',
    type: 'digit',
    placeholder: '母亲年龄',
    rules: {
      required: true,
      message: '请填写母亲年龄',
      validator: (val) => { return val >= 0 && val <= 100 }
    }
  },
  {
    name: '母亲工作单位',
    field: 'input',
    type: 'text',
    placeholder: '母亲工作单位',
    rules: {
      required: true,
      message: '请填写母亲工作单位'
    }
  },
  {
    name: '母亲联系电话',
    field: 'input',
    type: 'text',
    placeholder: '母亲联系电话',
    rules: {
      required: true,
      message: '请填写正确电话号码',
      pattern: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
    }
  }
]
