import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import * as yup from 'yup' 
import Form from './components/form'
import Users from './components/users'
import React, { useState, useEffect } from 'react'
import schema from './validation/schema'

//initial values
const initialFormValues = {
  name:"",
  email:"",
  password:"",
  ToS:false,
}

const initialFormErrors = {
  name:"",
  email:"",
  password:"",
}
const initialEmployee = []
const initialDisabled = true;
//initial values end 

export default function App() {
  const [users,setUsers] = useState(initialEmployee);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  const getEmployee = () => {
    axios
    .get("https://reqres.in/api/users")
    .then((res)=>{
      setUsers(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const postNewEmployee = (newEmployee) => {
    axios
    .get("https://reqres.in/api/users",newEmployee)
    .then((res)=>{
      setUsers([res.data,...users]);
      setFormValues(initialFormValues);
    })    
    .catch((err)=>{
      console.log(err);
    });
  }

  const inputChange = (name,value) =>{
    yup
    .reach(schema,name)
    .validate(value)
    .then(()=>{
      setFormErrors({
      ...formErrors,
      [name]:'',
    });
  })
  .catch((err)=>{
    setFormErrors({
      ...formErrors,
      [name]:err.errors[0],
    });
  });

  setFormValues({
    ...formValues,
    [name]:value,
  })
 }
   
 const formSubmit = () => { 
  const newEmployee = {
    name: formValues.name,
    email: formValues.email,
    password: formValues.password,
    ToS:formValues.ToS,
    }
   postNewEmployee(newEmployee);
  }

  useEffect(()=>{
    getEmployee();
  },[]);

  useEffect(() =>{
    schema.isValid(formValues).then((valid) =>{
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="container">
      <h1>Allocate Employee Onboarding</h1>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
       />

       <Users info={users}/>

    </div>
  );
}


