import react from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Hslogin from './Hslogin'
import {Route, BrowserRouter as Router , Switch, Link} from 'react-router-dom';

function Routers()
{
    return(
        <Router>
            <switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/homestaysignin' component={Hslogin} />
            </switch>
        </Router>
    )
}
export default Routers;