
import './App.css';
import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header, Footer, Home, Applications, AboutMe } from "./Portofolio/index";
import { YourCashflow, TodoList, SMART } from './Portofolio/WebApps';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
 
  const [rute] = useState([
    {
      path: '/',
      label: 'Home',
      element: <Home />,
    },
    {
      path: '/applications/',
      label: 'Applications',
      element: <Applications />, 
    },
    {
      path: '/about',
      label: 'AboutMe',
      element: <AboutMe />,
    },
  ]);


  return (
     <Router>
     <Provider store={store}>
      <Header rute={rute} />
      <Routes>
      {rute.map( (rutes, index) => (
       <Route key={index} path={rutes.path} label={rutes.label} element={rutes.element}>
       {rutes.label === 'Applications'?(<>
      <Route path='yourCashflow' element={<YourCashflow />} />
      <Route path='todoList' element={<TodoList />} />
      <Route path='smart' element={<SMART />} />        
       </>) : null}
       </Route>
      ))}

      </Routes>
    <Footer />
    </Provider>
    </Router>
  );
}

export default App;
