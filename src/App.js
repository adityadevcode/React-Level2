import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Clients from './Components/Clients';
import Main from './Components/Main';
import Form from './Components/Form';

export default function App() {
  return (
    <React.Fragment>
      <h3> App Component</h3>
      <NavBar />
      <Home />
      <Clients />
      <Main />
      <Form />
      </React.Fragment>
  )
}
