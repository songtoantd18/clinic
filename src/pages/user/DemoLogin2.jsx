import { signInWithPopup, signOut } from "@firebase/auth";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { auth } from "./Firebase";

import FormDemo from "./FormDemo";

const DemoLogin2 = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [database, setDatabase] = useState([]);

  const [user, setUser] = useState(null);
  const loginSocial = async (provider) => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    setIsLogin(true);
    console.log(result);
  };

  const logout = async () => {
    const result = await signOut(auth);
    setUser(null);
    setIsLogin(false);
    console.log(result);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: async (values, { resetForm }) => {
      console.log("values:", values);
      window.alert("Form submitted");
      resetForm();
      try {
        ///////////////day code len api
        const res = await axios.post(
          "https://62fbae6be4bcaf53518af2ed.mockapi.io/api/users",
          {
            name: values.name,
            username: values.email,
            password: values.password,
          }
        );

        const newUser = [...database, res.data];
        setDatabase(newUser);
      } catch (error) {}
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required(" Required")
        .min(4, "must be 4 character or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "please enter a validation"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          "Regex for password must contain at least eight characters,one number , one special characters"
        ),

      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "password must match"),
    }),
  });
  return (
    <div>
      <form>
        <FormDemo
          id="email"
          name="email"
          label="Email"
          type="text"
          onChange={formik.handleChange}
          placeholder="enter your name"
          error={
            formik.errors.email && (
              <p className="error"> {formik.errors.email}</p>
            )
          }
        />
        <FormDemo
          id="password"
          name="password"
          label="Password"
          type="password"
          error={
            formik.errors.password && (
              <p className="error"> {formik.errors.password}</p>
            )
          }
          onChange={formik.handleChange}
        />
      </form>
    </div>
  );
};

export default DemoLogin2;
