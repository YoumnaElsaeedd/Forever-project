import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import AdminPanel from "./AdminPanel";

const Login2 = () => {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password is too short")
      .max(10, "Password is too long")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
       
        if (values.email === "admin@example.com" && values.password === "passWo123") {
           
          const fakeToken = "fake-token-123456";
          localStorage.setItem('token', fakeToken);

          navigate('/AdminPanel');
        } else {
          alert('Login failed');
        }

      } catch (error) {
        console.error('Error logging in:', error);
        alert('Login failed');
      }
    }
  });

  return (
    <div className="sm:flex justify-center mt-8">
      <div className="bg-white shadow-md px-8 py-6 max-w-lg rounded-md p-4 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold flex items-center"> Admin Panel </h1>
        <form onSubmit={formik.handleSubmit}>
          <p className="text-gray-600 mt-5"> Email Address </p>
          <input 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            value={formik.values.email} 
            type="text"
            name="email" 
            placeholder="Enter your email" 
            className="border p-2 w-full rounded-md bg-slate-50" 
          />
          <span className="text-red-600">{formik.errors.email}</span>
          <p className="text-gray-600 mt-5"> Password </p>
          <input 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            value={formik.values.password} 
            type="password"
            name="password" 
            placeholder="Enter your password" 
            className="border p-2 w-full rounded-md bg-slate-50" 
          />
          <span className="text-red-600">{formik.errors.password}</span>
          <div className="sm:flex justify-center items-center">
            <button 
              className="bg-black text-white p-5 mt-5 rounded-md w-full" 
              type="submit"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login2;




















































// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const Login2 = () => {
//   const schema = Yup.object().shape({
//       email: Yup.string().email("Invalid email").required("Required"),
//       password: Yup.string()
//         .min(8, "this is is too short")
//         .max(10, "too long")
//         .required("Required"),
//     });

// const formik =useFormik({
//   initialValues:{
//     email:'',
//     password:''
//   },
//   validationSchema:schema,
//   onSubmit:(values)=>{
//    console.log(formik.values)
//   }
// })
//   return (
//     <div className="sm:flex justify-center mt-8">
//     <div className="bg-white shadow-md px-8 py-6 max-w-lg rounded-md p-4 flex flex-col justify-center items-center">
//       <h1 className="text-2xl font-bold flex items-center "> Admin Panel </h1>
//       <form>
//         <p  className="text-gray-600 mt-5"> Email Address </p>
//         <input onChange={formik.handleChange}    onBlur={formik.handleBlur} value={formik.values.email} type="text"
//          name="email" placeholder="Enter your email" className="border p-2 w-full rounded-md bg-slate-50"/>
//         <span className="text-red-600">{formik.errors.email}</span>
//         <p  className="text-gray-600 mt-5"> Passward </p>
//         <input  onChange={formik.handleChange}   onBlur={formik.handleBlur} value={formik.values.password} type="password" 
//         name="password" placeholder="Enter your passward" className="border p-2 w-full rounded-md bg-slate-50"/>
//         <span className="text-red-600">{formik.errors.password}</span>
//         <div className="sm:flex justify-center items-center">
//           <button onSubmit={formik.handleSubmit} className="bg-black text-white p-5 mt-5 rounded-md  w-full " type="submit">
//           LOGIN
//       </button>
//       </div>
//       </form>


//     </div>
// </div>


//   );
// };

// export default Login2;
