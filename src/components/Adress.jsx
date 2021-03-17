import { ErrorMessage, Field } from 'formik';
import React, { Component } from 'react';

class Adress extends Component {
    render() {
        return (
            <div>
                <h5>Adress</h5>

                <Field type='text' name='number' placeholder='number' />
                <ErrorMessage name='number' component='small' />
                <br></br>
                <Field type='text' name='road' placeholder='road' />
                <ErrorMessage name='road' component='small' />
                <br></br>
                <Field type='text' name='city' placeholder='city' />
                <ErrorMessage name='city' component='small' />
                <br></br>
                <Field type='text' name='zipCode' placeholder='zipCode' />
                <ErrorMessage name='zipCode' component='small' />
            </div>
        );
    }
}

export default Adress;