import React from 'react'
import ReactDom from 'react-dom'

//we would create a portal,portal makes modal a direct child of <body> (not exactly but(a child of another div inside root))instead of child component of any other component inside div#root
const Modal=props=>{
    return ReactDom.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e)=>e.stopPropagation()} className="ui standard modal visible active">
             <div className="header">
                 {props.title}
             </div>
             <div className="content">
                 {props.warning}
             </div>
             <div className="actions">
                {props.action}
             </div>
            </div>
        </div>,document.querySelector('#modal')
        //1st arguement is jsx and 2nd arguement is html component
    );

};
export default Modal;