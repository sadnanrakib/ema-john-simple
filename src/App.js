
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Inventory from './Component/inventory/Inventory';
import Order from './Component/orders/Order';
import Shop from './Component/Shop/Shop';
import Main from './layouts/Main';
import{productAndCartLoader}from './loades/productAndCartLoader';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
       {
        path:'/',
        loader:()=> fetch('products.json'),
        element:<Shop></Shop>
       },
       {
        path:'/orders',
        loader:productAndCartLoader,
        element:<Order></Order>
       },
       {
        path:'/inventory',
        element:<Inventory></Inventory>
       },
       {
        path:'about',
        element:<About></About>
      }

      ]
    },
   
  ])
  return (
    <div className="App">
      <RouterProvider router={router }></RouterProvider>
    </div>
  );
}

export default App;
