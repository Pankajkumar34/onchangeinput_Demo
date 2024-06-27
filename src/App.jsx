import React from "react"
import OnChangeInput from 'onchangeinput';

const validationRules = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: {
      patternMsg:"Invalid email format"
    }
  },
  fname: {
    pattern: /^[a-zA-Z]+$/,
    errorMessage: {
      patternMsg:"Only letters are allowed"
    },
    
  },
  lname: {
    pattern: /^[a-zA-Z]+$/,
    errorMessage: {
      patternMsg:"Only letters are allowed"
    },
    
  },
  phoneNumber:{
    pattern:/^[0-9]/,
    errorMessage: {
      patternMsg:"Only numbers are allowed"
    },
  },
  password: {
    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 
    minLength: 4,
    maxLength: 10,
    errorMessage: {
      minLengthMsg: "Password must be at least 4 characters long",
      maxLengthMsg: "Password must not exceed 10 characters"
    }
  },
  confirmPassword: {
    errorMessage: {
      mismatch: "Passwords do not match"
    }
  },
};

const getEmptyFields = (values) => {
  const emptyFields = [];
  const keyValues = ["fname", "email","lname","password","phoneNumber","confirmPassword"];
  for (const field of keyValues) {
    if (!values[field]) {
      emptyFields.push(field);
    }
  }
  return emptyFields;
};



function App() {
  // Initialize the custom hook to manage form state and validation //

  const { values, errors, handleChange, resetForm, setErrors } = OnChangeInput(
    {
      fname: "",
      email: "",
      lname:"",
      phoneNumber:"",
      password:"",
      confirmPassword:""
    },
    validationRules
  );

  // Function to handle form submission
  const submitData = (e) => {
    e.preventDefault();
    const emptyFields = getEmptyFields(values);
    if (emptyFields.length > 0) {
      // If there are empty fields, set errors for each empty field
      emptyFields.forEach(field => {
        setErrors((prev) => ({ ...prev, [field]: `${field} is required` }));
      });
    } else {
      console.log("All values filled:", values);
      // Add further logic for data submission or API calls here
    }
  };
 

  return (
 <div className="container ">
  <div className="flex justify-center items-center mt-5">
  <form onSubmit={submitData}  className="w-[50%] mx-auto max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input value={values.fname} name="fname" onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Jane"/>
     {errors.fname &&  <p className="text-red-500 text-xs italic">{errors.fname}.</p>}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input  value={values.lname} name="lname" onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Doe"/>
      {errors.lname &&  <p className="text-red-500 text-xs italic">{errors.lname}.</p>}
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Email
      </label>
      <input  value={values.email} name="email" onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Email.."/>
      {errors.email &&  <p className="text-red-500 text-xs italic">{errors.email}.</p>}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Phone Number
      </label>
      <input  value={values.phoneNumber} name="phoneNumber" onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Phone Number"/>
      {errors.phoneNumber &&  <p className="text-red-500 text-xs italic">{errors.phoneNumber}.</p>}
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input value={values.password} name="password" onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="password" placeholder="******************"/>
      {errors.password &&  <p className="text-red-500 text-xs italic">{errors.password}.</p>}
    </div>
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Confirm Password
      </label>
      <input  value={values.confirmPassword} name="confirmPassword" onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="password" placeholder="******************"/>
      {errors.confirmPassword &&  <p className="text-red-500 text-xs italic">{errors.confirmPassword}.</p>}
    </div>
  </div>
  <input type="submit" className= " text-center  cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full" value="Submit"/>


</form>
  </div>
  

 </div>

  );
}
export default App;