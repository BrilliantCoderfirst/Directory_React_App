import './App.css';
import Button from './components/Button';
import Header from './Pages/Header';
import AddPerson from './Pages/AddPerson';
import RetrieveInfo from './Pages/RetrieveInfo';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();


  return (
    <>
      <Header />
        <div className="twoB">
          <Link to='/'><Button text='Add New Person' className="twoColorBtn" /></Link>
          <Link to='retrieveinfo'><Button text='Retrieve Information' className="twoColorBtn" /></Link>
        </div>
    { location.pathname === '/Directory_React_App/' ? (<AddPerson />) : ("") }
      <Routes>
        <Route path='/' element={<AddPerson />} />
        <Route path='/retrieveinfo' element={<RetrieveInfo />} />
      </Routes>
    </>
  );
}

export default App;
