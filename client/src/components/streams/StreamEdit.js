import React from 'react'
import {connect} from 'react-redux'
import {fetchStream,editStream} from '../../actions'
import StreamForm from './StreamForm'
import _ from 'lodash'



class StreamEdit extends React.Component {
    //props is coming from react-router-dom
    // console.log(props)
    componentDidMount(){
         this.props.fetchStream(this.props.match.params.mystreamid)
    }
    onSubmitEdit=(formValues)=>{
    //    console.log(formValues)
        this.props.editStream(this.props.match.params.mystreamid,formValues)
    }
    render(){
        if(!this.props.stream){
            return<div>Loading...</div>
        }
    return (
        <div>
            <h2>EDIT YOUR STREAM</h2>
            {/* initialValues is a keyword for redux-form will take that many values as the keys in the object */}
            <StreamForm initialValues={_.pick(this.props.stream, 'Title','Description')} onSubmit={this.onSubmitEdit}/>
        </div>
    )
    }
}

const mapStateToProps=(state,ownProps)=>{
    return{stream:state.streams[ownProps.match.params.mystreamid]};
}
export default connect(mapStateToProps,{
    fetchStream:fetchStream,
    editStream:editStream
})( StreamEdit)        