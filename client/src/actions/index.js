import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM,
    } from './types'
import streams from '../api/streams'
import history from '../history'
export const signIn=(userId)=>{
    return{
         type:SIGN_IN,
         payload:userId
    }
}

export const signOut=()=>{
    return{
         type:SIGN_OUT,
         
    }
}

export const createStream=(formValues)=>{
    return async(dispatch,getState)=>{
        const {userId}=getState().auth;
;        //creating a post request using axios
   const response=await streams.post('/streams',{...formValues,userId});
    console.log(response)
     dispatch({
         type:CREATE_STREAM,
         payload:response.data
     })
     //programmatic navigation to get user back to root route
       history.push('/')
    };

}

export const fetchStreams=()=>{
    return async(dispatch)=>{
        //creating a post request using axios
   const response=await streams.get('/streams');
    console.log(response)
     dispatch({
         type:FETCH_STREAMS,
         payload:response.data
     })
    };

}

export const fetchStream=(id)=>{
    return async(dispatch)=>{
        //creating a post request using axios
   const response=await streams.get(`/streams/${id}`);
    console.log(response)
     dispatch({
         type:FETCH_STREAM,
         payload:response.data
     })
    };

}

export const deleteStream=(id)=>{
    return async(dispatch)=>{
        //creating a post request using axios
   await streams.delete(`/streams/${id}`);
   
     dispatch({
         type:FETCH_STREAM,
         payload:id
     })
        history.push('/');
       document.location.reload();
    };

}

export const editStream=(id,formValues)=>{
    return async(dispatch)=>{
        //creating a post request using axios
        //formValues=updated values


        // put request will update all the properties of the object
       //const response=await streams.put(`/streams/${id}`,formValues);

       //patch request will just update the required properties
   const response=await streams.patch(`/streams/${id}`,formValues);

   
    console.log(response)
     dispatch({
         type:EDIT_STREAM,
         payload:response.data
     })
        history.push('/')
    };


}

