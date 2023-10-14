import {React, createContext} from 'react';
import {Route, HashRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import 'react-tooltip/dist/react-tooltip.css'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './navigation';
import Home from './home';
import Account from './create_account';
import Deposit from './deposit';
import Withdraw from './withdraw';
import Data from './all_data';

const UserContext = createContext(null);
const AccountContext = createContext(null);

const App = () => {
  return (
    
    <HashRouter>
      <NavBar/>
        <UserContext.Provider value={{users:[{name:'', email:'', password:'', balance:0}]}}>
          <AccountContext.Provider value={{account:''}}>
            <div className='container'>
                <Route path="/" exact component={Home}/>
                <Route path="/account/" component={Account}/>
                <Route path="/deposit/" component={Deposit}/>
                <Route path="/withdraw/" component={Withdraw}/>
                <Route path="/data/" component={Data}/>
            </div>
          </AccountContext.Provider>
        </UserContext.Provider>
    </HashRouter>
  );
}

export {UserContext, AccountContext}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
