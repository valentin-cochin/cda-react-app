import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import RadioButton from './components/RadioButton';

const validationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastname: yup.string().required(),
  birthDay: yup.date(),
  email: yup.string().email().required(),
})


class App extends React.Component {
  state = {
    initialValues: {
      gender: '',
      firstName: '',
      lastname: '',
      birthDay: '',
      streetNumber: '',
      road: '',
      city: '',
      zipCode: '',
      phoneNumber: '',
      email: ''
    }
  }

  submit = (values) => console.log(values);

  render() {
    const { initialValues } = this.state
    return (
      <div className="container">
        <h1>Inscription</h1>
        <Formik initialValues={initialValues} onSubmit={this.submit}>
          <Form>
            <Field
              component={RadioButton}
              name="gender"
              id="male"
              label="Mr"
            />
            <Field
              component={RadioButton}
              name="gender"
              id="female"
              label="Ms"
            />
            <Field
              component={RadioButton}
              name="gender"
              id="alien"
              label="Malien 🛸"
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    )
  }
}

export default App;