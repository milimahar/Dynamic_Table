
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataModel from './DataModel';
import Post from './Post';
import Comments from './Comments';
import Todos from './Todos';
import Albums from './Albums';
import { PendingTodos } from './PendingTodos';
import { CompletedTodos } from './CompletedTodos';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataModel/>}/>
        <Route path="/posts" element={< Post/>} />
        <Route path="/comments" element={< Comments/>} />
        <Route path="/todos" element={< Todos/>} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/pendingtodos" element={<PendingTodos />} />
        <Route path="/completedtodos" element={<CompletedTodos />} />
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
