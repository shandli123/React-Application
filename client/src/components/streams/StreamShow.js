import React from 'react'
import {connect} from 'react-redux'
import {fetchStream} from '../../actions'
import flv from 'flv.js'

class StreamShow extends React.Component {
    constructor(props){
        super(props)
        this.videoRef=React.createRef()
    }
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.mystreamid)
            this.buildPlayer();
    }
    componentDidUpdate(){
        this.buildPlayer();
    }
    componentWillUnmount(){
        this.player.destroy();
    }
    buildPlayer(){
        //if the player is not build before(rendering again and again is wastage) and stream is not null only then do the foloowing else return 
        if(this.player||!this.props.stream)
        return;
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.match.params.mystreamid}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load();
    }
    render(){
        if(!this.props.stream){
            return<div>Loading...</div>
        }
    return( <div>
        <video ref={this.videoRef} style={{width:"100%"}} controls={true}/>
        <h1>{this.props.stream.Title}</h1>
        <h5>{this.props.stream.Description}</h5>
    </div>)
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {stream:state.streams[ownProps.match.params.mystreamid]}
}
export default connect(mapStateToProps,{fetchStream})(StreamShow)