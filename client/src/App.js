import './App.css';
import {TodoWrapper} from './components/TodoWrapper.js'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";



const router = createBrowserRouter([

  {
    path:"/",
    element:  <TodoWrapper/>
  }

])

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
