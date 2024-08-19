import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from './components/RootLayout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Shop from './components/pages/Shop';

const  data = [
  {
    "path":"/about",
    "element":<About/>,
  },
  {
    "path":"/shop",
    "element":<Shop/>,
  },
  {
    "path":"/contact",
    "element":<Contact/>,
  },
]

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
    >
      
      <Route>
        <Route index element={<Home/>} />
        {data.map((pages,index) =>(
          <Route key={index} path={pages.path} element={pages.element} />
        ))}
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
