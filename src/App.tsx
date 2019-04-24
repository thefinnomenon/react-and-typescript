import React from 'react';
import PetStoreFunctional from './components/PetStoreFunctional';
import PetStoreClass from './components/PetStoreClass';

const App = () => (
  <React.Fragment>
    <h1>Class Component</h1>
    <h2>Without quantity prop</h2>
    <PetStoreClass animal="cats" />
    <h2>With quantity prop</h2>
    <PetStoreClass animal="cats" quantity={10} />
    <h1>Functional Component</h1>
    <h2>Without quantity prop</h2>
    <PetStoreFunctional animal="dogs" />
    <h2>With quantity prop</h2>
    <PetStoreFunctional animal="dogs" quantity={5} />
  </React.Fragment>
);

export default App;
