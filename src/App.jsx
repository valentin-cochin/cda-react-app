import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import RadioButton from './components/RadioButton';

const validationSchema = yup.object().shape({
})


class App extends React.Component {
  state = {
    initialValues: {
      gender: 'Mr',
      firstName: '',
      lastname: '',
      birthDay: ''
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
              name="radioGroup"
              id="male"
              label="Mr"
            />
            <Field
              component={RadioButton}
              name="radioGroup"
              id="female"
              label="Ms"
            />
            <Field
              component={RadioButton}
              name="radioGroup"
              id="alien"
              label="Malien 🛸"
            />
          </Form>
        </Formik>
      </div>
    )
  }
}

export default App;