import React from 'react'
import Modal from '../Modal'
import { Link } from 'react-router-dom'
import history from '../../history'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(
            this.props.match.params.mystreamid);
    }

    renderActions() {
        const id = this.props.match.params.mystreamid;
        return (
            // 1st method


            // const actions=(
            //     <div>
            //         <button className="ui button negative">Delete</button>
            //         <button className="ui button ">Cancel</button>
            //     </div>
            // )


            // 2nd method


            //react.fragment is a tag used to bined sibling elements without snyother html tag it is like a invisible tag  <React.Fragment>=<>
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button ">Cancel</Link>
            </React.Fragment>
        )

    }
    renderContent = () => {
        if (!this.props.stream) {
            return "Are you sure you want to delete this stream?"
        }
        return `Are you sure you want to delete stream with title:${this.props.stream.Title}`
    }
    render() {
        return (
            //modal uses react.fragement in it as we have put that in
            <Modal title="Delete Your Stream" warning={this.renderContent()} action={this.renderActions()} onDismiss={() => history.push('/')} />
        )

    }
};
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.mystreamid] }
}
export default connect(mapStateToProps, {
    fetchStream: fetchStream,
    deleteStream: deleteStream
})(StreamDelete)