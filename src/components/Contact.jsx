import { ErrorMessage, Field } from 'formik';
import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <h5>Contact</h5>
                <Field type='phone' name='phone' placeholder='phone' />
                <ErrorMessage name='phone' component='small' />
                <Field type='email' name='email' place='mail' />
                <ErrorMessage name='email' component='small' />
            </div>
        );
    }
}

export default Contact;