import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';
import PatientList from './pages/PatientList';
function App() {
  return (
    <div className='App'>
      <Router>
        <PatientList>
        <Routes>
          <Route>
          </Route>
        </Routes>
        </PatientList>
      </Router>
    </div>
  );
}

export default App;
