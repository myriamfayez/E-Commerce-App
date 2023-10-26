import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { UserContextProvider } from './Components/Context/UserContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

let routers = createHashRouter([

{path:'/', element:<Layout/>,children:[
  {index:true, element:<ProtectedRoute><Home/></ProtectedRoute>},

  {path:'Register', element:<Register/>},
  {path:'Login', element:<Login/>}

]}


])


function App() {
  return (
    <UserContextProvider>

<div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header> */}
   

   <RouterProvider router={routers}></RouterProvider>
    </div>
    </UserContextProvider>
  );
}

export default App;
