import React from 'react';
import {Formik} from "formik";
import * as Yup from 'yup';

import './App.css';

function App() {

  const initialValue = {
    name: '',
    secondName: '',
    age: '',
    password: '',
    confirmPassword: '',
    email: '',
    confirmEmail: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required'),
    secondName: Yup.string()
      .required('Required'),
    age: Yup.number()
      .min(18, 'Must be 18 or more')
      .typeError('Must being number')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Must be 8 letters or more')
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Invalid password')
      .required('Required'),
    email: Yup.string()
      .email('Enter your email')
      .required('Required'),
    confirmEmail: Yup.string()
      .email('Enter your email')
      .oneOf([Yup.ref('email')], 'Invalid email')
      .required('Required')
  });

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    resetForm();
  };
  return (
    <div >
      <Formik
        initialValues={initialValue}
        validateOnBlur
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        { ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
          <div className="form">
            <p>
              <label htmlFor="name">First Name</label>
              <br/>
              <input
                className="input"
                type="text"
                autoComplete="off"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </p>
            {
              touched.name && errors.name && <p className="error">{errors.name}</p>
            }
            <p>
              <label htmlFor="secondName">Surname</label>
              <br/>
              <input
                className="input"
                type="text"
                autoComplete="off"
                name="secondName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.secondName}
              />
            </p>
            {
              touched.secondName && errors.secondName && <p className="error">{errors.secondName}</p>
            }

            <p>
              <label htmlFor="age">Age</label>
              <br/>
              <input
                className="input"
                type="text"
                autoComplete="off"
                name="age"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
              />
            </p>
            {
              touched.age && errors.age && <p className="error">{errors.age}</p>
            }

            <p>
              <label htmlFor="password">Password</label>
              <br/>
              <input
                className="input"
                type="password"
                autoComplete="off"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            {
              touched.password && errors.password && <p className="error">{errors.password}</p>
            }

            <p>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <br/>
              <input
                className="input"
                type="password"
                autoComplete="off"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
            </p>
            {
              touched.confirmPassword && errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>
            }

            <p>
              <label htmlFor="email">Email</label>
              <br/>
              <input
                className="input"
                type="email"
                autoComplete="off"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </p>
            {
              touched.email && errors.email && <p className="error">{errors.email}</p>
            }

            <p>
              <label htmlFor="confirmEmail">Confirm email</label>
              <br/>
              <input
                className="input"
                type="email"
                autoComplete="off"
                name="confirmEmail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmEmail}
              />
            </p>
            {
              touched.confirmEmail && errors.confirmEmail && <p className="error">{errors.confirmEmail}</p>
            }


            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type="submit"
            >
              Submit
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default App;
