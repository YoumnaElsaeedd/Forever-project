import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "This is too short")
      .max(10, "Too long")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("https://pm.alexondev.net/api/login", {
          email: values.email,
          password: values.password,
        });
        console.log("Login successful:", response.data);
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Sign Up" && (
        <input
          type="text"
          name="username"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="UserName"
          required
        />
      )}
      <input
        type="email"
        name="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <span className="text-red-600">{formik.errors.email}</span>
      <input
        type="password"
        name="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      <span className="text-red-600">{formik.errors.password}</span>

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p>Forget Your Password?</p>
        {currentState === "Login" ? (
          <p onClick={() => setCurrentState("Sign Up")} className="cursor-pointer">
            Create account
          </p>
        ) : (
          <p onClick={() => setCurrentState("Login")} className="cursor-pointer">
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4" type="submit">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;





















































// import React from "react";
// import Title from "../components/Title";
// import { useFormik } from "formik";
// import axios from "axios";
// import * as Yup from "yup";

// const Login2 = () => {
//   const schema = Yup.object().shape({
//     email: Yup.string().email("Invalid email").required("Required"),
//     password: Yup.string()
//       .min(8, "this is is too short")
//       .max(10, "too long")
//       .required("Required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: schema,
//     onSubmit: (v) => {
//       fetch("https://pm.alexondev.net/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: "ahmed@yahoo.com",
//           password: "12345678",
//         }),
//       });
//     },
//   });

//   console.log("🚀 ~ Login2 ~ formik:", formik.values);
//   console.log("🚀 ~ Login2 ~ formik:", formik);
//   return (
//     <div>
//       <form
//         className="flex flex-col justify-center items-center"
//         onSubmit={formik.handleSubmit}
//       >
//         <Title text2={"Login"} />
//         <div className=" flex flex-col gap-5 w-full items-center">
//           <input
//             type="text"
//             name="email"
//             placeholder="Email"
//             className="border-2 border-slate-900 w-full sm:w-1/3 h-8 "
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//           />
//           <span className="text-red-600">{formik.errors.email}</span>
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="border-2 border-slate-900 w-full sm:w-1/3 h-8 "
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.password}
//           />
//           <span className="text-red-600">{formik.errors.password}</span>

//           <div>
//             <span>Forgot your password?</span>
//             <span>Create accouont</span>
//           </div>
//           <button className="bg-black text-white p-5 " type="submit">
//             Sign in
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login2;
