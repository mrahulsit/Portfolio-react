import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import LocationProvider from './Components/LocationProvider';
import RoutesWithAnimation from './Components/RouteswithAnimation';


function App() {
  return (
    <BrowserRouter>
    <LocationProvider>
      <RoutesWithAnimation/>
    </LocationProvider>
    </BrowserRouter>
  );
}

export default App;
