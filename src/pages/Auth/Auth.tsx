import React, { FC } from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'

import './auth.scss'

interface Values {
  email: string
  password: string
}

const Auth: FC = () => {
  return (
    <div className="container auth">
      <h1>Signup</h1>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className='auth__form'>
          <label className='auth__form-label' htmlFor="email">Email</label>
          <Field
            id="email"
            className='auth__form-field'
            name="email"
            type="email"
          />

          <label className='auth__form-label' htmlFor="password">Password</label>
          <Field
            id="password"
            className='auth__form-field'
            name="password"
            type="password"
          />

          <button
            className='auth__form-button btn-green-outlined'
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Auth;