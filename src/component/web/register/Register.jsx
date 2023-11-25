import React from "react";
import Input from "../../pages/Input";
import { useFormik } from "formik";
import { registerSchema } from "../validation/validate";
import axios from "axios";
import { toast } from 'react-toastify';

export default function Register() {

  const initialValues = {
    userName: "",
    email: "",
    password: "",
    image: "",
  }

  const handleFieldChange = (event)=>{
    formik.setFieldValue('image', event.target.files[0]);
  }


  const onSubmit = async values=>{
    
    const formData = new FormData();
    formData.append("userName", values.userName);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("image", values.image);

    const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`, formData);

    if(data.message=="success"){
      formik.resetForm();
      toast.success('account created successfully, please confirm your email', {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    console.log(data);

  }
  

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: registerSchema,
  });


  const inputs = [
    {
      id: "username",
      type: "text",
      name: "userName",
      title: "user name",
      value: formik.values.userName,
    },
    {
      id: "email",
      type: "email",
      name: "email",
      title: "user email",
      value: formik.values.email,
    },
    {
      id: "password",
      type: "password",
      name: "password",
      title: "user password",
      value: formik.values.password,
    },
    {
      id: "image",
      type: "file",
      name: "image",
      title: "user image",
      onChange: handleFieldChange,
    }
  ];

  const renderInput = inputs.map((ele, index) => (
    <Input
      type={ele.type}
      id={ele.id}
      name={ele.name}
      title={ele.title}
      value={ele.value}
      key={index}
      errors={formik.errors}
      onChange={ele.onChange || formik.handleChange}
      onBlur={formik.handleBlur}
      touched={formik.touched} 
    />
  ));

  return (
    <>
      <div className="container">
        <h2>Create account</h2>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          {renderInput}
          <button type="submit" disabled={!formik.isValid}>Register</button>
        </form>
      </div>
    </>
  );
}
