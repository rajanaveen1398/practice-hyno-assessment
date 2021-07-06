import './App.css';
import Routes from './router';
import history from './router/history';
import { Router } from 'react-router-dom';
import { ContextProvider } from './AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ContextProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </ContextProvider>
  );
}

export default App;
