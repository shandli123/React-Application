import React from 'react'
// import { Field, formValues, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {createStream} from '../../actions'
import StreamForm from './StreamForm'




class StreamCreate extends React.Component {
  

    
    onSubmitCreate=(formValues)=>{
        // event.preventDefault();
        // done automatically by reduxForm
        // console.log(formValues)
     this.props.createStream(formValues)


    }
    render() {
        //  console.log(this.props)

        return (
            <div>
            <h2>CREATE A STREAM</h2>
            <StreamForm onSubmit={this.onSubmitCreate}/>
            </div>
           
        )
    }
}



export default connect(null,{createStream})(StreamCreate)