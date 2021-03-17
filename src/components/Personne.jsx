import { ErrorMessage, Field } from 'formik';
import React, { Component } from 'react';

class Personne extends Component {
    render() {
        return (
            <div id='a'>
                <div id='b'>
                    <div role="group" aria-labelledby="my-radio-group">

                        <label>
                            <Field type="radio" name="gender" value="man" />
                                                Mr
                                         </label>
                        <label>
                            <Field type="radio" name="gender" value="woman" />
                                            Ms
                                        </label>
                        <label>
                            <Field type="radio" name="gender" value="unknow" />
                                            N/A
                                        </label>
                        <ErrorMessage name='gender' component='small' />

                    </div>
                </div>
                <div id='c'>
                    <Field type='text' name='firstName' placeholder='firstName' />
                    <ErrorMessage name='firstName' component='small' />
                    <br></br>
                    <Field type='text' name='lastName' placeholder='lastName' />
                    <ErrorMessage name='lastName' component='small' />

                    <h5>Birthday</h5>

                    <Field type='date' name='birthday' />
                    <ErrorMessage name='birthday' component='small' />
                </div>
            </div>
        );
    }
}

export default Personne;