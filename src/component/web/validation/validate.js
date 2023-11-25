import * as yup from 'yup';

export const registerSchema = yup.object({

    userName: yup.string().required("username is required").min(3,"must be at least 3 char").max(20,"must be at least 20 char"),
    email: yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"must be at least 3 char").max(20,"must be at least 20 char")
    
})