import React from 'react'
import {signIn,signOut} from '../actions/index'
import {connect} from 'react-redux'
class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '657538054847-nlmese7ni3ig06p5frn8jifeug3a6q96.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                //instatntiating auth object
                   this.auth=window.gapi.auth2.getAuthInstance(); 
                   this.onAuthChange(this.auth.isSignedIn.get());
                   //event listener 
                   this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }
    //it is a callback function therefore arrow function
    onAuthChange=(isSignedIn)=>{
        //function gets called anytime user changes authentication.
       if(isSignedIn){
           this.props.signIn((this.auth.currentUser.get().getId()));
       }
       else{
           this.props.signOut();
       }
    }
    onSignInClick=()=>{
        this.auth.signIn();
    }
    onSignOutClick=()=>{
      this.auth.signOut(); 
    }
    renderAuthButton(){
        if(this.props.isSignedIn===null)
        return null
        else if(this.props.isSignedIn)
        return(
            <button onClick={this.onSignOutClick} className='ui red google button' style={{ marginTop: "20px" }}>
                 <i className='google icon'/>
                Sign Out
            </button>
        )
        else
            return (
                <button onClick={this.onSignInClick} className='ui green google button' style={{ marginTop: "20px" }}>
                    <i className='google icon' />
                Sign In with google
                </button>
            )
    }
 render(){
     return <div>{this.renderAuthButton()}</div>
 }
  

}
const mapStateToProps=(state)=>{
    return{isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth); 