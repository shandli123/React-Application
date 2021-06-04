import React from 'react'
import { Field, formValues, reduxForm } from 'redux-form'

class StreamForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = (formProps) => {
        //  console.log(formProps )
        //   console.log(formProps.meta)
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`

        // return <input onChange={formProps.input.onChange}
        //     value={formProps.input.value} />;

        //takes the input property{all that object onchange,value etc.} of formProps and add them to input tag as props

        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off" />
                {this.renderError(formProps.meta)}
            </div>
        )
    }
    onSubmit = (formValues) => {
        // event.preventDefault();
        // done automatically by reduxForm
        // console.log(formValues)
        this.props.onSubmit(formValues)


    }
    render() {
        //  console.log(this.props)

        return (


            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                
                <Field name="Title" component={this.renderInput} label="Enter title" />
                <Field name="Description" component={this.renderInput} label="Enter description" />
                <button className="ui button blue primary">submit</button>
            </form>
        )
    }
}
const validate = (formValues) => {
    const errors = {};
    if (!formValues.Title) {
        errors.Title = "please enter a title";
    }
    if (!formValues.Description) {
        errors.Description = "please enter a description";
    }
    return errors;
};

// 1st way to wire up connect funstion with the redux form wiring

// export default connect()( reduxForm({
//     form: 'streamCreate',validate:validate
// })(StreamCreate));


// 2nd way
export default reduxForm({
    form: 'streamForm', validate: validate
})(StreamForm)

// export default formWrapped;