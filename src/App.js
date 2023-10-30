
import './App.css';
import Login from './components/login.jsx'
import SingIn from './components/singin'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* <Route path="/inicio" Component={Inicio} /> */}

        {/* <Route path="/registrador" Component={Registrador} /> */}
        {/* <Route path="/option-list" Component={ListaOpciones} /> */}

        <Route path="/sing-in" Component={Login} />
        <Route path="/sing-up" Component={SingIn} />
        {/* <Route path="/calcu-int-comp" Component={InteresCompuesto} />
        <Route path="/regla3" Component={ReglaTres} /> */}
        <Route path="*" Component={Login} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
