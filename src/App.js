import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideo from './RecommendedVideo';
import { Routes, Route } from "react-router-dom";
import SearchVideo from './SearchVideo';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__page">
        <Sidebar />
        <Routes>
          <Route path="/" element={<RecommendedVideo/>} />
          <Route path="search/:searchTerm" element={<SearchVideo/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
