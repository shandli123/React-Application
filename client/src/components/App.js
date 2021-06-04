import React from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import history from '../history'
import Header from './Header'

const App=()=>{
    return (
    <div className="ui container">
      
        <Router history={history}>
             
        <div>
           <Header />
           {/* //switch only shoows the first path that gets matched unlinke react router which shows all the path matching to given path */}
         <Switch>
            <Route path="/" exact component={StreamList}/>
            <Route path="/streams/new" exact component={StreamCreate}/>
            <Route path="/streams/edit/:mystreamid" exact component={StreamEdit}/>
            <Route path="/streams/delete/:mystreamid" exact component={StreamDelete}/>
            <Route path="/streams/:mystreamid" exact component={StreamShow}/>
           </Switch>
        </div>
        </Router>
    </div>
    )
}
export default App;