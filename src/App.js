import React,{useState, useContext} from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import reactstrap from 'reactstrap'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Header from './layout/Header'

//Context
import {UserContext} from './context/UserContext'

//Fire Base
import firebase from 'firebase/app'
import 'firebase/auth'

//pages
import Home from './Page/Home'
import SignIn from './Page/SignIn'
import SignUp from './Page/SignUp'
import NotFound from './Page/NotFound'
import Footer from './layout/Footer'

function App() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='*' component={NotFound} />
      </Switch>
      <Footer/>
    </UserContext.Provider>
  </BrowserRouter>

  );
}

export default App;
