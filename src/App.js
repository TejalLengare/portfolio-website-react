
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/navbar';


function App() {
  
  return (
    <div className="App">
    {/* particles js */}
    
    {/* navbar js */}
    <Navbar/>
    {/* main page js */}
    <div className='app-main-page-content'>
      <Routes>
      <Route index path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/skills' element={<Skills/>}/>
    </Routes>
    </div>
    </div>
  );
}

export default App;
