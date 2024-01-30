export const validationRules = (phoneValid? : boolean) => ({
  email: [
    { required: true, message: 'Please input your email address', trigger: 'blur' },
    { type: 'email', message: 'Please input a valid email address', trigger: ['blur', 'change'] },
  ],
  password: [
    { required: true, message: 'Please input your password', trigger: 'blur' },
  ],
  phone: [
    { required: true, message: 'Please input your phone', trigger: 'blur' },
    { validator: async () => {
      return Promise[ phoneValid === true ? 'resolve' : 'reject']('Please input a valid phone number')
    } },
  ],
});