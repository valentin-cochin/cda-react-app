import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import * as yup from 'yup'


const validationSchema = yup.object().shape({
    firstName: yup.string().required('Required').min(3, 'Min 3 chars').max(10, 'Max 10 chars'),
    lastName: yup.string().required().min(3).max(10)
})

class FormikTest extends Component {
    state = {
        initialValues: {
            firstName: '',
            lastName: ''
        }
    }


    submit = (values) => {
        console.log(values)
    }


    render() {

        const { initialValues } = this.state

        return (
            <>
                <Formik
                    initialValues={initialValues}
                    onSubmit={this.submit}
                    validationSchema={validationSchema}
                >

                    {({isSubmitting, resetForm}) => (
                        <Form>
                            <Field type='text' name='firstName' placeholder='firstName'/>
                            <ErrorMessage name='firstName' component='small'/>
                            <br></br>
                            <Field type='text' name='lastName' placeholder='lastName'/>
                            <ErrorMessage name='lastName' component='small'/>
                            <hr></hr>
                            <button type='submit' disabled={isSubmitting} >Submit</button>
                            <button type="reset" onClick={resetForm}>Reset</button>
                            
                        </Form>
                    )}
                </Formik>
            </>
        );
    }
}

export default FormikTest;