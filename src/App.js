
import './App.css';
import Login from './components/login.jsx'
import OptionList from './components/optionlist.jsx';
import SingIn from './components/singin'
import NuevoReclamo from './components/newreclamo.jsx';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from 'react-router-dom'
import ReactDOM from 'react-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sing-in" Component={Login} />
        <Route path="/sing-up" Component={SingIn} />
        <Route path="/option-list" Component={OptionList} />
        <Route path="/new-reclamo" Component={NuevoReclamo} />
        
        <Route path="*" Component={Login} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
