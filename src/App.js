import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import Resume from './components/Resume';
import MyWork from './components/MyWork';

function App() {
  return (
    <div className="app-container container-fluid">
      <div className="row flex-nowrap">

        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/mywork" element={<MyWork />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
