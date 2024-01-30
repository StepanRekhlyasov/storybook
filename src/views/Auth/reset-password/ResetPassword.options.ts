export const validationRules = (passwordValue : string) => {
  return {
    password: [
      { required: true, message: 'Please input your password', trigger: 'blur' },
      { min: 6, message: 'Password must be at least 6 characters long', trigger: 'blur' },
    ],
    password_confirmation: [
      { required: false, trigger: 'submit'},
      { validator: async (_ : any, value : string) => {
        return Promise[passwordValue === value ? 'resolve' : 'reject']('Password confirmation does not match')
      } },
    ],
  }
};