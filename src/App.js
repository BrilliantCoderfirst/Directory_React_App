import './App.css';
import Button from './components/Button';
import Header from './Pages/Header';
import AddPerson from './Pages/AddPerson';
import RetrieveInfo from './Pages/RetrieveInfo';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
        <div className="twoB">
          <Link to='/'><Button text='Add New Person' className="twoColorBtn" /></Link>
          <Link to='retrieveinfo'><Button text='Retrieve Information' className="twoColorBtn" /></Link>
        </div>
      <Routes>
        <Route path='/Directory_React_App/' element={<AddPerson />} />
        <Route path='/retrieveinfo' element={<RetrieveInfo />} />
      </Routes>
    </>
  );
}

export default App;
