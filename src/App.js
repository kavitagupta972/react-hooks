import logo from './logo.svg';
import './App.css';
import react from 'react';
import UseReducer from './components/usereducer/UseReducer';
import UseState from './components/usestate/UseState';
import UseEffect from './components/useeffect/UseEffect';
import UseRef from './components/useref/UseRef';

function App() {
    return ( 
        <div className = "App" >
            {/* <UseReducer/> */}
            {/* <UseState/> */}
            {/* <UseEffect/> */}
            <UseRef/>
            </div>
    );
}

export default App;