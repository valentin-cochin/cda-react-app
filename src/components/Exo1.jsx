import {Form, Formik } from 'formik';
import React, { Component } from 'react';
import * as yup from 'yup'
import '../App.css';
import Adress from './Adress';
import Contact from './Contact';
import Personne from './Personne';

const validationSchema = yup.object().shape({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    road: yup.string().required('Required'),
    number: yup.string().required('Required'),
    city: yup.string().required('Required'),
    zipCode: yup.string().required('Required').matches(/\d{5}/g, '5 digits'),
    phone: yup.string().required('Required').matches(/\d{10}/g, '10 digits'),
    email: yup.string().email('unknow format').required('Required'),
    gender: yup.string().required('Required'),
    birthday: yup.date().required('Required').max(new Date(), 'date future')
})

class Exo1 extends Component {
    state = {
        initialValues: {
            firstName: '',
            lastName: '',
            road: '',
            number: '',
            city: '',
            zipCode: '',
            phone: '',
            email: '',
            gender: '',
            birthday: ''
        }
    }

    submit = (values) => {
        console.log(values)
    }

    render() {

        const { initialValues } = this.state
        return (
            <>
                <h1>
                    Informations
                </h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={this.submit}
                    validationSchema={validationSchema}
                >
                    {(isSubmiting) => (
                        <Form>
                            < Personne />
                            < Adress />
                            < Contact />
                            <button type="submit" disabled={isSubmiting}> Submit</button>
                        </Form>
                    )}
                </Formik>
            </>
        );
    }
}

export default Exo1;