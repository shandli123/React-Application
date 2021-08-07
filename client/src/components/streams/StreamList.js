
import React from 'react'
import {connect} from 'react-redux'
import {fetchStreams} from '../../actions'
import {Link} from 'react-router-dom'

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    }
   renderAdmin(stream){
   if(stream.userId===this.props.currentUserId){
       return (
         <div className="ui two buttons">
             <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                 Edit
             </Link>
               <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                 Delete
             </Link>
         </div>
       );
   }
   }



    renderList(){ 
        return this.props.streams.map(stream=>{
            return(
                <div class="card" style={{margin:"30px"}}>
                    <div class="content">
                        <img class="right floated mini ui image" src="https://cdn.pixabay.com/photo/2018/05/19/00/53/online-3412473_960_720.jpg" />
                        <Link className="header" to={`/streams/${stream.id}`}>
                       {stream.Title}</Link>
                        
                        <div class="description">
                            {stream.Description}
                        </div>
                    </div>
                    <div class="extra content">
                       {this.renderAdmin(stream)}
                    </div>
                </div>

            
            
            // return(
            //     <div className="item" key={stream.id}>
            //         {this.renderAdmin(stream)}
            //         <i className="large middle aligned icon camera"/>
            //         <div className="content">
            //             <Link  className="header"to={`/streams/${stream.id}`}>
            //             {stream.Title}</Link>
                   
            //         <div className="description">
            //             {stream.Description}
            //         </div>
            //         </div>
                    
            //     </div>
            )
        })
    }
   renderCreate(){
     if(this.props.isSignedIn){
     return( 
         <div style={{textAlign:'center',margin:"30px"}}>
             <Link to="/streams/new" className="ui button green ">Create Stream</Link>
         </div>
        )

     }
   }


    render(){
        // console.log(this.props.streams)
    return (
        <div>
            <h2>Streams</h2>
            <div className="ui cards">
                {this.renderList()}
            </div>
            {this.renderCreate()}
        </div>
    )
    }  
};
const mapStateToProps=(state)=>{
    // Object.values converts object to array
    return {
        streams:Object.values(state.streams),
        currentUserId:state.auth.userId,
        isSignedIn:state.auth.isSignedIn
    
    }
}
// export default StreamList
export default connect(mapStateToProps,{fetchStreams}) (StreamList)