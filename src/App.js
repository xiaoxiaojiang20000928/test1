import NormalLoginFormregister from './pages/register.js';
import NormalLoginFormlogin from './pages/login.js';
import React from 'react';
import { HashRouter as Router,Route} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                <Route exact path="/" component={NormalLoginFormlogin}></Route>
                <Route path="/register" component={NormalLoginFormregister}></Route>
                </div>
            </Router>
        )
    }
}

export default App;