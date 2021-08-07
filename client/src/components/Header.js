import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAutn'
const Header=()=>{
     return(
         <div className="ui secondary pointing menu" style={{marginTop:"24px"}}>
            <Link to="/" className="item" style={{ fontWeight: "bold" ,fontSize:"24px"}}>
                Streamy
            </Link>
            <div className="right menu">
                 <Link to="/" className="item" style={{ fontWeight: "bold", fontSize: "24px" }}>
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
         </div>
     )
};
export default Header;