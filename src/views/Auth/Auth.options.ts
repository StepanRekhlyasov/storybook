export const validationRules = {
  email: [
    { required: true, message: 'Please input your email address', trigger: 'blur' },
    { type: 'email', message: 'Please input a valid email address', trigger: ['blur', 'change'] },
  ],
  password: [
    { required: true, message: 'Please input your password', trigger: 'blur' },
    // { min: 6, message: 'Password must be at least 6 characters long', trigger: 'blur' },
  ],
};