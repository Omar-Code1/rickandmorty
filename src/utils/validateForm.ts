import * as yup from 'yup'

export const LoginValidate = yup.object().shape({
    Password: yup.string().trim().required('El Password es Requerido'),
    Username: yup.string().trim().required('El Username es Requerido'),
})