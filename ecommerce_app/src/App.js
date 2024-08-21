import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home/Home";
import Login from './components/loginPage/Login';
import About from './components/about/About'
import { Menu } from './components/menu/Menu';
import Page from './components/Page/Page';
import BookeATable from './components/commonUtils/BookeATable'
import Contact from './components/contact/Contact';
import ArticlePage from './components/Page/ArticlePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/page' element={<Page />} />
        <Route path='/article' element = {<ArticlePage />}/>
        <Route path='/BookeATable' element={<BookeATable />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
