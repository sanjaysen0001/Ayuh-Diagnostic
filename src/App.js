import React, { useEffect } from 'react';
import Router from "./Router"
import "./components/@vuexy/rippleButton/RippleButton"

import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"

const App = props => {
  useEffect(() => {
    const handleWindowClose = () => {
      // Perform actions to handle session expiration
      // For example, you can clear local storage, reset state, or perform a logout action
      console.log("Window is closing. Session is expiring...");
    };

    window.addEventListener('beforeunload', handleWindowClose);

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
    };
  }, []);
  return <Router />
}

export default App
