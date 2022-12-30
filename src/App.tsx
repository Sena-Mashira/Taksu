import "./App.css"
// import "./TodoList.css"
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './Home';
import Form from "./Form";
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import ListTodo from "./ListTodo";

function App() {

  useEffect(() => {
    let nama = prompt("What is your name sir ?", "Sir")
    if (nama != null) {
      alert(`Welcome ${nama}`)
    } else {
      alert("Welcome, Sir")
    }
  }, [])

  return (
    <div>
      <div className="navbar">
        <Navigation />
      </div>
      <Routes>
        <Route
          path='/Intern'
          element={<Home />}
        />
        <Route
          path='/Fyve'
          element={<Form />}
        />
        <Route
          path='/Todo'
          element={<ListTodo />}
        />
      </Routes>
    </div>
  );
}

export default App;
