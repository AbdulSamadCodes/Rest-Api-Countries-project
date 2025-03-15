import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '/src/Components/RootLayout.jsx';

function App() {;
  const router = createBrowserRouter([
    { 
      path : '/',
      element : <RootLayout/>,
      children : 
      [ 
        
      ]
    }
  ]);

  return <RouterProvider router={router}/>
}

export default App