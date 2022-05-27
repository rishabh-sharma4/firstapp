import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import ComponentE from './components/ComponentE';

function App() {
  return (
    <div className="App">
      <ComponentA name="Arun Sharma"/>
      <ComponentB/>
      <ComponentC/>
      <ComponentE age= {25} year= {2021} address= {{hno:929, pincode:180001}}/>
      <ComponentE age= {24} year= {2020} address= {{hno:929, pincode:180001}}/>
    
    </div>
  );
}

export default App;
