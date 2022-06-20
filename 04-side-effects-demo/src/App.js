import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/AuthContext';

function App() {

  const ctx = useContext(AuthContext);

  //logic moved to AuthContext.js
  /*
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  //to avoid infinite loop
  //executed after every component re-evaluation
  useEffect(() => {
    const storedUserLoggedInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    //will use local storage to store login cred

    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
*/

  //all childern of App.js compnent have access to AuthContext.Provider
  //Authcontext.provider is used as a wrapping component
  return (
    //<React.Fragment>
    //   <AuthContext.Provider value={{
    //     isLoggedIn: isLoggedIn,
    //     onLogout : logoutHandler   
    // }}>
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login  />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
    //</AuthContext.Provider>
    //</React.Fragment>
  );
}

export default App;