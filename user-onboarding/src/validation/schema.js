import * as yup from 'yup'

export default yup.object().shape({
    name: yup
      .string()
      .required("username is required")
      .min(5, "username must be 3 chars long"),
    email: yup.string().email("must be an email").required("email is required"),
    password: yup
      .string()
      .required()
      .min(8,"Enter a secure password"),
    ToS: yup.boolean(),
  });
  