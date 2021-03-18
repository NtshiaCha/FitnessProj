import React from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutingComponent from './components/routing/routin.component';
import NavibarComponent from './components/routing/navibar.component';
import { Provider } from 'react-redux';
import { store } from './Store';

const App: React.FC = () => {
  return (
   <React.Fragment>
     <Provider store={store}>
      <div id= "app">
        <BrowserRouter>
        <NavibarComponent/>
        <RoutingComponent/>
        </BrowserRouter>
      </div>
     </Provider>
   </React.Fragment>
  )
}
//git
export default App;
